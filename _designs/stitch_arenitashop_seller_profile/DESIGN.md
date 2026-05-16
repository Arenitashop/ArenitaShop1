---
name: Coastal Marketplace
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
  secondary: '#00629e'
  on-secondary: '#ffffff'
  secondary-container: '#61b4fe'
  on-secondary-container: '#004470'
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
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#9acbff'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#004a79'
  tertiary-fixed: '#7af4ff'
  tertiary-fixed-dim: '#4dd9e4'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fff8f6'
  on-background: '#241915'
  surface-variant: '#f4ded7'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  stat-pill:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built to evoke the warmth and serenity of a coastal marketplace. The brand personality is approachable, sun-drenched, and inherently reliable. It targets a community-driven demographic that values quality, transparency, and a stress-free shopping experience.

The visual style is a blend of **Minimalism** and **Tactile** design. It prioritizes heavy whitespace and a restricted, high-energy palette to keep the interface clean, while using subtle physical metaphors—like soft shadows and layered surfaces—to create a sense of tangibility. The emotional response should be one of "effortless trust," where the interface feels like a helpful, quiet companion to the commerce experience.

## Colors

The palette is anchored by a sophisticated "Sand" neutral, providing a warmer, more organic alternative to standard grays. 

- **Primary (Coral Orange):** Reserved exclusively for high-priority actions and calls to action. It is the heat of the brand, intended to draw the eye immediately.
- **Secondary (Ocean Blue):** Used for data visualization, secondary accents, and "trust" indicators like verified badges. It utilizes a subtle linear gradient to add depth and movement.
- **Surface Strategy:** White is used for active "interactive" containers (cards, inputs) to pop against the Sand background, creating a clear hierarchy of information layers.

## Typography

The design system utilizes **Manrope** for its exceptional balance of modern geometry and humanistic warmth. It is a clean sans-serif that inspires professional trust while remaining soft enough for a marketplace.

Headlines use tighter letter-spacing and heavier weights to anchor the page. Body text maintains a generous line height to ensure readability during long browsing sessions. Labels and small metadata utilize a semi-bold weight to remain legible against colored backgrounds or within compact badges.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and tablet views, centering content within a 1200px max-width container to maintain focus. 

- **Grid:** A 12-column system with 24px gutters.
- **Rhythm:** All margins and paddings are multiples of an 8px base unit. 
- **Containers:** Content is grouped into white "floating" modules with 32px internal padding, creating a consistent rhythm of breathability across the marketplace.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering rather than heavy borders.

- **Level 0 (Background):** The Sand (#F5F2ED) base layer.
- **Level 1 (Cards/Surface):** Pure White containers with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)).
- **Level 2 (Hover/Active):** An increased shadow spread (0px 8px 30px rgba(0, 0, 0, 0.08)) to indicate interactivity.
- **Overlays:** Modals and dropdowns use a slightly more aggressive shadow with a hint of the secondary color in the tint (0px 12px 40px rgba(0, 119, 190, 0.1)).

## Shapes

The shape language is consistently "Rounded" to reinforce the friendly brand personality. 

- **Standard Elements:** Buttons, cards, and input fields use a 0.5rem (8px) corner radius.
- **Large Elements:** Featured banners and hero cards use a 1rem (16px) radius.
- **Specialized Elements:** Stats badges and search bars utilize a full pill-shape (circular ends) to contrast against the more structured rectangular cards.

## Components

### Buttons
Primary buttons are full-width in mobile contexts and generous in desktop views. They use the Coral Orange background with white text, 8px rounded corners, and no border. 

### Stats Badges
Information such as "Price Trends" or "Seller Rating" is housed in white pill-shaped badges. These badges sit slightly elevated above the Ocean Blue gradient areas or directly on product images, utilizing the `stat-pill` typography.

### Cards
Product cards feature a pure white background, a Level 1 shadow, and 16px internal padding. Images within cards should have a top-only 16px radius to sit flush with the card container.

### Input Fields
Inputs are white with a 1px border in Sand (#DED9D1). On focus, the border transitions to Ocean Blue with a subtle glow effect.

### Chips & Tags
Tags for categories use a light version of the Ocean Blue (10% opacity) with dark blue text to provide semantic meaning without competing with the primary CTA.