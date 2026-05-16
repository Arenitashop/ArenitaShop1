---
name: Coastal Minimalist
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#57423b'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
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
  tertiary: '#615e53'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8a497'
  on-tertiary-container: '#3c3a30'
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
  tertiary-fixed: '#e7e2d4'
  tertiary-fixed-dim: '#cbc6b8'
  on-tertiary-fixed: '#1d1c13'
  on-tertiary-fixed-variant: '#49473c'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

This design system evokes the serene, sun-drenched atmosphere of a premium seaside boutique. The brand personality is effortless, warm, and inviting, targeting a sophisticated audience that values tactile quality and editorial clarity. 

The aesthetic is a blend of **Soft Minimalism** and **Tactile Modernism**. It prioritizes heavy whitespace to let product imagery breathe, utilizing a warm, non-white canvas to reduce eye strain and create an organic feel. While the layout is strictly functional and mobile-first, the use of vibrant accents ensures a sense of energy and playfulness.

## Colors

The palette is anchored by the "Warm Sand" foundation, providing a naturalistic alternative to standard greys.

*   **Primary (Coral):** Used exclusively for high-intent actions, heart icons (likes), and primary buttons. It represents warmth and vitality.
*   **Secondary (Ocean Blue):** Reserved for alerts, informational callouts, and secondary navigational cues, providing a refreshing contrast to the coral.
*   **Tertiary (Sand):** The global background color. It should be applied to the `<body>` and non-card surfaces.
*   **Neutral (Charcoal):** Used for typography and iconography to ensure high legibility against sand and white backgrounds.
*   **Surface (White):** Specifically for cards and elevated containers to create a "layered paper" effect on the sand background.

## Typography

This design system utilizes a dual-font strategy to balance character with readability.

**Epilogue** is used for headlines. Its geometric and slightly eccentric character provides the "Bold Typography" requested, creating a modern editorial feel. Use tight letter spacing for display sizes to increase impact.

**Be Vietnam Pro** handles all functional text. It is contemporary and warm, mirroring the friendly brand persona. It maintains exceptional legibility at small sizes, crucial for mobile-first commerce interfaces.

## Layout & Spacing

The system follows a **Mobile-First Fluid Grid**. On mobile devices, use a 2-column or single-stack layout with 20px side margins to ensure content doesn't feel cramped. 

The spacing rhythm is based on an 8px scale, though 4px increments are allowed for tight component internals. Vertical rhythm should be generous—err on the side of more whitespace between sections to reinforce the "Minimalist" aesthetic. Cards should have a consistent padding of 16px or 24px depending on content density.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than heavy shadows. 

1.  **Level 0 (Floor):** The Warm Sand (#F5F0E1) background.
2.  **Level 1 (Card):** Pure White (#FFFFFF) surfaces. These use a very soft, diffused ambient shadow (Color: #2D2926 at 4% opacity, Y: 4px, Blur: 12px) to separate them from the sand.
3.  **Level 2 (Interaction):** When a card or button is pressed, it should use a slightly deeper shadow or a 1px border in the primary color to indicate focus.

Avoid heavy black shadows; the goal is to feel like paper or smooth stone under natural sunlight.

## Shapes

The design system utilizes **Rounded** geometry to maintain an approachable and soft feel. 

*   **Buttons & Inputs:** Use the standard `rounded-lg` (1rem) for a friendly, modern appearance.
*   **Cards:** Use `rounded-xl` (1.5rem) to emphasize the "object-like" quality of the product containers.
*   **Images:** Product photography should always feature rounded corners to match the UI containers.
*   **Iconography:** Use icons with rounded caps and joins; avoid sharp 90-degree angles.

## Components

*   **Primary Buttons:** Solid Coral (#FF7F50) with white text. Use a bold weight for the label. On tap, scale down slightly (98%) for tactile feedback.
*   **Secondary Buttons:** Ghost style with a Coral border and text, or Ocean Blue for utility actions.
*   **Hearts (Wishlist):** Outlined Charcoal icons that fill with Solid Coral and trigger a subtle "pop" animation when toggled.
*   **Cards:** White background, 24px padding, and 1.5rem corner radius. Ensure images inside cards sit flush to the top or have a consistent inner margin.
*   **Alerts/Banners:** Use Ocean Blue (#0077BE) backgrounds with white text. These should be full-bleed at the top of the mobile viewport or anchored to the bottom.
*   **Input Fields:** White background with a 1px border in a darkened sand tone. Focus state transitions the border to Coral.
*   **Chips/Filters:** Pill-shaped with a light sand background that turns Coral when selected.