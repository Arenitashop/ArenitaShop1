---
name: Coastal Commerce
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
  tertiary: '#5f5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a6a4a0'
  on-tertiary-container: '#3b3a37'
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
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Plus Jakarta Sans
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
  base: 8px
  container-padding: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is warm, optimistic, and deeply rooted in a coastal, sun-drenched aesthetic. This design system aims to evoke the feeling of a high-end beachside boutique—accessible yet curated, energetic yet relaxed. The target audience seeks a friendly, human-centric shopping experience that feels more like a community discovery than a cold transaction.

The design style is **Modern Tactile**. It leverages a clean, structured layout but softens the digital "sharpness" with organic colors and significant corner radii. By combining high-contrast CTAs with a soft, matte background, the UI achieves a sense of physical presence, as if elements are laid out on a smooth, sandy surface.

## Colors

The palette is driven by the contrast between land and sea. The **Warm Sand (#F5F2ED)** serves as the global canvas, providing a softer, more premium alternative to pure white that reduces eye strain and establishes the brand's warmth.

**Vibrant Coral Orange (#FF7F50)** is reserved strictly for primary actions and "Success" moments in the purchase funnel, ensuring high conversion through visibility. **Deep Ocean Blue (#0077BE)** provides professional weight, used for navigation, links, and secondary accents to ground the design. The semantic indicators (Red, Yellow, Green) are slightly desaturated to harmonize with the organic base colors while remaining clear for functional feedback.

## Typography

This design system utilizes **Plus Jakarta Sans** across all levels to maintain a friendly, contemporary, and cohesive voice. The typography is characterized by its wide apertures and soft curves, which echo the rounded UI elements. 

Headlines are set with tight tracking and heavy weights to create a "bold and friendly" impact. Body copy prioritizes readability with generous line heights. Labels use a mix of bold weights and slight letter spacing to ensure clear information hierarchy in dense marketplace listings.

## Layout & Spacing

This design system uses a **Fluid Grid** model optimized for mobile-first consumption. The layout relies on a 4-column grid for mobile devices with a standard 20px outer margin to provide breathing room against the screen edges.

The spacing rhythm is built on an **8px base unit**. Component internals use 16px (stack-md) for standard padding, while larger section breaks use 32px (stack-lg). To maintain the friendly, approachable feel, whitespace is applied liberally to prevent the marketplace from feeling cluttered.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Ambient Shadows**. Instead of harsh black shadows, this design system uses soft, diffused shadows tinted with a hint of the Deep Ocean Blue or a warm Umber to stay consistent with the "Sand" background.

1.  **Level 0 (Base):** The #F5F2ED background.
2.  **Level 1 (Cards/Sheet):** White surfaces (#FFFFFF) with a very soft, 4% opacity shadow, used for product cards and navigation bars.
3.  **Level 2 (Interactive):** Elements that are being dragged or tapped increase their shadow spread and move slightly upward (Y-axis offset) to simulate physical lift.
4.  **Level 3 (Modals):** Overlays use a semi-transparent Deep Ocean Blue backdrop blur (12px) to keep the user focused on the foreground task.

## Shapes

The shape language is the defining characteristic of this design system. All interactive components—including buttons, input fields, and product containers—utilize a **16px (rounded-2xl)** corner radius. 

This extreme roundedness reinforces the "friendly" brand attribute and makes the UI feel safe and touch-optimized. Smaller secondary elements, like badges or tags, may use a full-pill radius to distinguish them from primary structural blocks.

## Components

### Buttons
Primary buttons are solid Coral Orange (#FF7F50) with white text, featuring 16px corners and a height of 56px for easy thumb-tapping. Secondary buttons use an Ocean Blue outline with a 2px stroke.

### Input Fields
Inputs feature a white background with a subtle sand-colored border. On focus, the border transitions to Ocean Blue. All inputs must adhere to the 16px corner radius.

### Product Cards
Cards are white with a very soft shadow. They feature a vertical stack: a 16px rounded image at the top, followed by the product name in H3 Bold, and the price in Coral Orange.

### Chips & Indicators
Use the pill shape for category chips. Quality or stock indicators (Weak/Medium/Strong) should appear as small circular dots or rounded labels next to the product availability text.

### Navigation Bar
The bottom navigation bar is white with a blurred "glass" effect. Active states are indicated by an Ocean Blue icon and a small Coral Orange dot underneath.