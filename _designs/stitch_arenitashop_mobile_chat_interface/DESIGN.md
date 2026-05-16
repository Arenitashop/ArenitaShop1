---
name: Warm Marketplace Chat
colors:
  surface: '#fcf8fb'
  surface-dim: '#dcd9dc'
  surface-bright: '#fcf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#57423b'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#8b7169'
  outline-variant: '#dec0b6'
  surface-tint: '#a43c12'
  primary: '#a43c12'
  on-primary: '#ffffff'
  primary-container: '#ff7f50'
  on-primary-container: '#6c2000'
  inverse-primary: '#ffb59c'
  secondary: '#5d5e63'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe4'
  on-secondary-container: '#616267'
  tertiary: '#006e28'
  on-tertiary: '#ffffff'
  tertiary-container: '#23bc50'
  on-tertiary-container: '#004416'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#380c00'
  on-primary-fixed-variant: '#822800'
  secondary-fixed: '#e2e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1c1f'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#72fe88'
  tertiary-fixed-dim: '#53e16f'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#00531c'
  background: '#fcf8fb'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 20px
  gutter: 12px
  bubble-padding: 12px 16px
  stack-sm: 4px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system centers on a "Human-Centric Marketplace" philosophy. It balances the high-energy vibrancy of commerce with the intimate, soft nature of interpersonal communication. The aesthetic is rooted in **Minimalism** with a **Modern-Organic** influence, utilizing generous whitespace to reduce cognitive load during negotiations and browsing. 

The emotional response is one of safety and approachability. By combining high-saturation primary accents with a clinical white backdrop, the interface feels both professional and inviting. The design prioritizes mobile ergonomics, ensuring that every interaction feels tactile and responsive.

## Colors

The palette is anchored by **Coral Orange**, used strategically for primary actions and "Sent" message states to denote ownership and urgency. The background remains a pure **White** to ensure the product photography in the marketplace remains the focal point.

**Light Gray** is reserved for "Received" message bubbles and secondary containers, providing a neutral anchor that doesn't compete with the primary brand color. **Tertiary Green** is introduced specifically for price tags and "Available" status indicators to reinforce positive transactional signals.

## Typography

This design system utilizes **Plus Jakarta Sans** for its friendly, rounded terminals and exceptional legibility on mobile screens. The typographic hierarchy is designed to favor clarity in short-form text (chat messages) while providing enough weight for bold price displays.

- Use **h1** and **h2** for product titles and screen headers.
- **Body-md** is the standard for chat bubbles to ensure high readability.
- **Label-md** should be used for interactive elements and category tags.
- **Caption** text is reserved for timestamps and "read" receipts.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for handheld devices. A base unit of 8px dictates the rhythm of the UI.

- **Margins:** A consistent 20px horizontal margin is applied to the main viewport.
- **Chat Rhythm:** Messages from the same user are grouped with 4px spacing, while shifts in speakers use 16px spacing.
- **Safe Areas:** Interactive elements, specifically the input bar, must respect the bottom safe area of modern mobile devices, adding a 12px buffer above the system indicator.

## Elevation & Depth

To maintain the "Clean and Warm" aesthetic, this design system avoids heavy shadows. Instead, it uses **Ambient Shadows** and **Tonal Layering**.

- **Level 0 (Floor):** The main white background.
- **Level 1 (Subtle):** Product cards use a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) to appear slightly lifted.
- **Level 2 (Floating):** The interactive input bar and floating action buttons use a more defined shadow (0px 8px 24px rgba(255,127,80,0.15)) to signal their persistent availability.
- **Glassmorphism:** Navigation bars use a 20px backdrop blur with a 90% white tint to allow content to peek through while scrolling.

## Shapes

The shape language is defined by extreme roundedness to evoke warmth and friendliness. 

- **Chat Bubbles:** Use a `2xl` (1.5rem) radius. For "Sent" messages, the bottom-right corner is sharpened to 4px to indicate direction. For "Received" messages, the bottom-left is sharpened.
- **Product Cards:** Use a `rounded-lg` (1rem) radius for both the container and the image.
- **Input Bars:** Use a `pill` (2rem) shape to create a soft, inviting area for text entry.

## Components

### Chat Bubbles
- **Sent:** Coral Orange background, White text. Aligned right.
- **Received:** Light Gray (#F2F2F7) background, Neutral Dark (#1C1C1E) text. Aligned left.
- **Status:** Tiny "read" icons or timestamps appear just outside the bubble tail.

### Product Cards (Chat-Integrated)
- **Structure:** A vertical stack featuring a 1:1 aspect ratio image, followed by the product title in `body-lg` and the price in `primary-color`.
- **Interaction:** The entire card is a tap target that opens the product detail view. Include a small "Send to Chat" button as a floating icon over the image.

### Interactive Input Bar
- **Container:** A fixed-bottom white bar with a subtle top border or shadow.
- **Input Field:** A pill-shaped gray container with an "Add" (+) button on the far left and a "Send" arrow icon on the far right.
- **States:** The "Send" icon remains gray until text is entered, at which point it transitions to Coral Orange.

### Chips & Tags
- Used for quick-reply suggestions (e.g., "Is this available?", "What's the lowest price?").
- **Style:** White background with a 1px Light Gray border and `rounded-xl` corners.