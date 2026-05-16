-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,

  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Trigger to automatically create a profile for every new user
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create a table for products
create table products (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  seller_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  description text,
  price numeric not null,
  images text[],
  category text,
  condition text,
  status text default 'active'
);

-- RLS for products
alter table products enable row level security;

create policy "Products are viewable by everyone." on products
  for select using (true);

create policy "Authenticated users can create products." on products
  for insert with check (auth.role() = 'authenticated');

create policy "Sellers can update their own products." on products
  for update using (auth.uid() = seller_id);

create policy "Sellers can delete their own products." on products
  for delete using (auth.uid() = seller_id);

-- Create a table for messages
create table messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  receiver_id uuid references public.profiles(id) on delete cascade not null,
  product_id uuid references public.products(id) on delete set null,
  content text not null,
  read boolean default false
);

-- RLS for messages
alter table messages enable row level security;

create policy "Users can view their own messages." on messages
  for select using (auth.uid() = sender_id or auth.uid() = receiver_id);

create policy "Users can send messages." on messages
  for insert with check (auth.uid() = sender_id);
