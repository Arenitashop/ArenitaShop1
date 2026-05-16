---
name: Coastal Serenity
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
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-margin: 16px
  gutter: 16px
---

## Brand & Style
The design system is anchored in the concept of "Coastal Serenity." It aims to evoke the warmth of a sun-drenched beach and the refreshing clarity of the shoreline. The target audience is the modern, lifestyle-conscious shopper looking for a curated, stress-free marketplace experience.

The visual style is a blend of **Minimalism** and **Tactile** design. It prioritizes heavy whitespace (simulating open beach landscapes) and soft, physical-inspired depth. The aesthetic is friendly and approachable, utilizing soft geometry and a warm palette to reduce cognitive load and create an inviting digital environment. Every interaction should feel light and breezy, ensuring a seamless mobile-first experience.

## Colors
The color palette of this design system is derived from natural coastal elements. 
- **Sand Background (#F5EFE6):** A warm, neutral base that reduces eye strain and provides a softer alternative to pure white, grounding the interface in a naturalistic feel.
- **Coral Primary (#FF7F50):** Used for primary actions, highlights, and critical brand moments. It provides high energy and clear visibility against the sand background.
- **Ocean Blue Secondary (#0077BE):** Employed for informational elements, links, and secondary buttons, offering a cooling contrast to the coral.
- **Deep Sea Neutral (#2D2926):** A warm, dark charcoal used for typography to ensure high legibility while maintaining the organic tone of the system.

## Typography
This design system utilizes **Plus Jakarta Sans** for all levels of communication. This typeface was chosen for its modern, geometric clarity and its friendly, open apertures which complement the approachable brand voice.

Headlines use a tighter letter-spacing and heavier weights to create a sense of structure and hierarchy. Body text is optimized for readability with a generous line-height (1.6) to maintain the "breezy" feel. Labels and small metadata utilize a slightly increased letter-spacing to ensure clarity on smaller mobile screens.

## Layout & Spacing
The layout follows a **fluid grid** model optimized for mobile-first consumption. The system is built on an 8px rhythmic scale, ensuring consistent vertical and horizontal alignment.

For mobile devices, a standard 16px side margin is maintained. For larger tablet and desktop screens, the content transitions to a 12-column fixed-width container (max-width 1200px) to prevent line lengths from becoming unreadable. Spacing between cards in the product grid should utilize the 16px gutter to maintain a tight but breathable arrangement.

## Elevation & Depth
Elevation in this design system is conveyed through **ambient shadows** and **tonal layering**. Shadows are extremely soft and diffused, using a slight warm tint (matching the Deep Sea neutral at low opacity) rather than pure black. This mimics the way objects sit on sand under natural sunlight.

- **Level 0 (Flat):** Used for the main background.
- **Level 1 (Raised):** Used for product cards and search bars. Features a large blur radius (16px to 24px) with very low opacity (5-8%) to create a soft "lift."
- **Level 2 (Floating):** Reserved for sticky navigation bars and floating action buttons. These use a slightly more defined shadow to signify immediate interactability and priority.

## Shapes
The shape language is dominated by high-radius curves and **pill-shaped** containers. By choosing a high roundedness level, the UI feels organic and safe, eliminating the harshness associated with sharp corners. 

Buttons, tags, and input fields should utilize fully rounded "pill" ends. Product cards and larger containers should use a generous 2rem (32px) corner radius to maintain consistency with the overall soft-form philosophy of the design system.

## Components

### Primary Buttons
Buttons are fully pill-shaped and utilize the Coral Orange (#FF7F50) background with white text. They should have a subtle hover state that slightly deepens the orange, maintaining a tactile, "pressable" feel.

### Product Cards
Cards are the primary vehicle for commerce. They feature a white surface background (#FFFFFF) against the sand page background to create a clear "object" hierarchy. Cards must have a 32px corner radius and a soft Level 1 shadow. Information is stacked vertically: Image, Title, Price, and a small Coral "Add" button.

### Search Bar
The search bar is a prominent, high-visibility component. It should be fully pill-shaped, spanning the width of the container (minus margins), with a white background and a secondary Ocean Blue icon. It serves as the primary navigation anchor.

### Chips & Tags
Used for categories and filtering. These are small, pill-shaped elements. Active states use Ocean Blue with white text, while inactive states use a semi-transparent tint of the sand color with Deep Sea text.

### Inputs & Selects
Form fields follow the pill shape of the search bar. Borders are subtle (1px solid Sand-darker) and transition to Ocean Blue on focus to provide clear interactive feedback.