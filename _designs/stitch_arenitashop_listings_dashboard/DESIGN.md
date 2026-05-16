---
name: Warm Coastal Marketplace
colors:
  surface: '#fff8f6'
  surface-dim: '#ebd6cf'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e3'
  surface-container-high: '#fae4dd'
  surface-container-highest: '#f4ded7'
  on-surface: '#241915'
  on-surface-variant: '#57423b'
  inverse-surface: '#3a2e29'
  inverse-on-surface: '#ffede8'
  outline: '#8b7169'
  outline-variant: '#dec0b6'
  surface-tint: '#a43c12'
  primary: '#a43c12'
  on-primary: '#ffffff'
  primary-container: '#ff7f50'
  on-primary-container: '#6c2000'
  inverse-primary: '#ffb59c'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#006970'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5c0'
  on-tertiary-container: '#004145'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#380c00'
  on-primary-fixed-variant: '#822800'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#7af4ff'
  tertiary-fixed-dim: '#4dd9e4'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fff8f6'
  on-background: '#241915'
  surface-variant: '#f4ded7'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  margin-side: 16px
  gutter: 12px
  stack-padding: 16px
  card-inner-padding: 12px
---

## Brand & Style

The design system is built for a mobile-first social commerce experience that feels organic, approachable, and sun-drenched. It avoids the clinical coldness of traditional e-commerce by utilizing a "Warm Minimalism" aesthetic. The interface evokes the feeling of a boutique shop on a summer afternoon—inviting and tactile.

The target audience consists of mobile-savvy individuals who value personality and ease of use. The emotional response is one of comfort and reliability, achieved through soft geometry and a palette that mimics natural elements like sand and coral. By combining high-end typography with generous padding, the design system ensures that every product listing feels curated and premium rather than cluttered.

## Colors

The color strategy for the design system relies on a high-contrast relationship between the warm, non-white background and crisp white card elements. 

- **Primary (Coral Orange):** Used exclusively for high-priority actions, active states, and brand highlights. It provides a vibrant energy that stands out against the neutral base.
- **Secondary (White):** Reserved for card containers and elevated surfaces to create clear "islands" of information over the sand background.
- **Background (Warm Sand):** Applied to the base layer of the application to reduce eye strain and provide a distinct personality compared to generic white-label competitors.
- **Status Tints:** Success Green is used for "Active" or "Sold" badges; Muted Gray indicates "Inactive" or archived items; Yellow is reserved for "Draft" states.

## Typography

The design system utilizes **Plus Jakarta Sans** for its friendly, rounded terminals and exceptional readability on mobile displays. 

Headlines use a tighter letter-spacing and heavier weights to create a sense of authority and structure. Body text maintains a generous line height to ensure descriptions and reviews remain legible during long scrolling sessions. A specialized "Price Display" style is used to ensure the most critical data point in a marketplace—the cost—is always the most prominent element in any listing.

## Layout & Spacing

This design system employs a **Fluid Grid** model optimized for narrow viewports. A standard 16px margin is maintained on the horizontal axis of the device to prevent content from touching the screen edges.

Vertical rhythm is governed by a 4px baseline grid. Elements within the "clean vertical lists" specified for this system should feature a 12px gap between list items to maintain clear separation without breaking the flow. Large containers, such as product cards, use 16px of internal padding to ensure content feels airy and uncompressed.

## Elevation & Depth

To achieve a soft, modern feel, the design system utilizes **Ambient Shadows** rather than harsh outlines. Shadows are tinted with a hint of the primary brand color or a warm neutral to avoid a "dirty" look on the sand background.

Elevation levels are minimal:
- **Level 0 (Base):** The Warm Sand background.
- **Level 1 (Cards):** White surfaces with a very soft, diffused shadow (Y: 4px, Blur: 12px, Opacity: 5%). This level is used for the vertical list items and product tiles.
- **Level 2 (Interaction):** Floating buttons or active states use a slightly deeper shadow (Y: 8px, Blur: 16px, Opacity: 8%) to indicate they are "hovering" closer to the user.

## Shapes

The shape language is defined by **Rounded-XL** corners, specifically targeting a 1.5rem (24px) radius for major components. This exaggerated roundness reinforces the friendly, approachable brand personality.

All primary containers, including cards, modal sheets, and image carousels, must adhere to the 24px radius. Smaller elements like buttons and input fields should use a 12px to 16px radius to maintain a harmonious relationship with the larger containers without appearing too "bubbly."

## Components

- **Buttons:** Primary buttons are solid Coral Orange with white text. They feature a 16px corner radius and a subtle drop shadow to make them appear pressable.
- **Cards:** The core of the marketplace. Cards must be pure White with Rounded-XL corners. Text within cards should be left-aligned for clean scanning in vertical lists.
- **Chips/Badges:** Used for status (Success Green, Muted Gray). These are small, pill-shaped elements with semi-transparent backgrounds of their respective status color and high-contrast text.
- **Vertical Lists:** List items should be individual white cards with a 12px vertical margin between them, creating a "stacked" appearance rather than a continuous flat list.
- **Input Fields:** Soft beige backgrounds (#EBE4D3) with 12px rounded corners and no borders; they transition to a 2px Coral Orange bottom border when active.
- **Price Tags:** Always displayed in the "Price Display" typographic style, positioned prominently in the bottom-left or top-right of product images.