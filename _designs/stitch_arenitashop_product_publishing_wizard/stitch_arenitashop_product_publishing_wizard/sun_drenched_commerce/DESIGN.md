---
name: Sun-Drenched Commerce
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
  secondary: '#5f5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2dd'
  on-secondary-container: '#656461'
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
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c2'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#7af4ff'
  tertiary-fixed-dim: '#4dd9e4'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fff8f6'
  on-background: '#241915'
  surface-variant: '#f4ded7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
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
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  xl: 32px
  container-margin: 20px
  gutter: 12px
---

## Brand & Style

The brand personality is approachable, radiant, and dependable. It seeks to evoke the feeling of a calm afternoon—warm, tactile, and effortless. This design system focuses on a "Warm Minimalist" aesthetic, stripping away unnecessary visual noise to highlight products while using soft geometry and organic tones to maintain a human connection.

The target audience values clarity and a frictionless shopping experience. The UI prioritizes a step-by-step narrative, ensuring that users never feel overwhelmed during the discovery or checkout phases. The overall emotional response should be one of comfort and reliability.

## Colors

The palette is anchored by a warm, earth-toned foundation. 

- **Coral Orange** is the primary driver for action, used exclusively for interactive elements, progress indicators, and key brand moments. 
- **Sand** serves as the structural backdrop, providing a softer alternative to clinical whites and reducing eye strain. 
- **Clean White** is reserved for surfaces that require elevation, such as product cards and modals, creating a clear visual distinction from the background. 
- **Deep Charcoal** provides high-contrast legibility for all typographic elements, ensuring accessibility standards are met across all mobile viewing conditions.

## Typography

This design system utilizes **Plus Jakarta Sans** for its modern, friendly, and slightly rounded apertures which complement the overall organic feel of the brand. 

- **Headlines:** Use Bold weights with tight letter spacing for a punchy, editorial feel in product headers.
- **Body:** Standard weights are optimized for readability with generous line heights to accommodate mobile scanning.
- **Labels:** Semi-bold weights are used for buttons and navigation items to ensure they are easily distinguishable from static content.

## Layout & Spacing

This design system employs a **fluid mobile grid** based on a 4-column structure. 

- **Margins:** A standard 20px side margin ensures content does not feel cramped against the edges of the device.
- **Rhythm:** Spacing follows a 4px baseline grid. Use 16px (md) for standard element spacing and 24px (lg) to separate distinct sections or groups of cards.
- **Visual Breathability:** Prioritize whitespace between product categories to reduce cognitive load, allowing the "Sand" background to act as a natural separator.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Surface Layering**. 

- **Level 0 (Background):** The Sand (#F5F2ED) base.
- **Level 1 (Cards/Surfaces):** Clean White (#FFFFFF) containers with a very soft, diffused shadow (Blur: 15px, Y: 4px, Opacity: 4% Charcoal).
- **Level 2 (Active/Overlays):** Modals and sticky navigation bars use a slightly more pronounced shadow (Blur: 25px, Y: 8px, Opacity: 8% Charcoal) to indicate they are closer to the user.

Avoid harsh borders. Depth should feel like physical paper resting on a flat surface.

## Shapes

The shape language is defined by significant corner rounding to reinforce the "inviting" brand pillar.

- **Cards:** Use `rounded-2xl` (1.5rem / 24px) to create a soft, containerized look for product images and descriptions.
- **Interactive Elements:** Buttons and Input Fields use `rounded-lg` (1rem / 16px) for a modern, touch-friendly appearance.
- **Progress & Indicators:** Progress bars, badges, and toggle tracks must use "Full" rounding (Pill-shaped) to distinguish them from structural components.

## Components

- **Buttons:** Primary buttons are Solid Coral Orange with White text. Secondary buttons should be Ghost style with a Coral Orange outline. All buttons must have a minimum height of 48px for mobile accessibility.
- **Cards:** Product cards use the Clean White surface with `rounded-2xl` corners. Content should have 16px internal padding.
- **Input Fields:** Use a subtle 1px border (#E0DDD8) on the Sand background, turning Coral Orange on focus. Labels should sit above the field in `label-md`.
- **Progress Bars:** For step-by-step navigation, use a thick (8px) pill-shaped track. The filled portion is Coral Orange, the empty portion is a darker tint of Sand.
- **Chips/Filter Tags:** Pill-shaped with a light Sand background and Charcoal text. When active, they switch to Coral Orange with White text.
- **Step Indicators:** Small circles for inactive steps, and an elongated pill for the active step, emphasizing the "step-by-step" clarity of the design system.