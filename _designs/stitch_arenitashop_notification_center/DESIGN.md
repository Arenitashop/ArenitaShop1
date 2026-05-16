---
name: Coastal Market
colors:
  surface: '#f8f9ff'
  surface-dim: '#d4dae7'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e7eefb'
  surface-container-high: '#e2e8f5'
  surface-container-highest: '#dce3f0'
  on-surface: '#151c25'
  on-surface-variant: '#57423b'
  inverse-surface: '#2a313b'
  inverse-on-surface: '#eaf1fe'
  outline: '#8b7169'
  outline-variant: '#dec0b6'
  surface-tint: '#a43c12'
  primary: '#a43c12'
  on-primary: '#ffffff'
  primary-container: '#ff7f50'
  on-primary-container: '#6c2000'
  inverse-primary: '#ffb59c'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#d09c00'
  on-tertiary-container: '#4c3700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#380c00'
  on-primary-fixed-variant: '#822800'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f8f9ff'
  on-background: '#151c25'
  surface-variant: '#dce3f0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-base:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 16px
  gutter: 12px
---

## Brand & Style

The design system is anchored in a "Warm Contemporary" aesthetic, designed to evoke the tactile comfort of a boutique coastal marketplace while maintaining the efficiency of a high-scale digital platform. It balances the approachability of social commerce with the structural rigor of a professional marketplace.

The brand personality is welcoming, optimistic, and transparent. The target audience consists of mobile-first consumers who value curation and ease of use. The visual style utilizes high-quality whitespace and a sophisticated "Sand" foundation to create a premium feel that differentiates it from the typical stark-white corporate competition. By combining soft geometric shapes with a vibrant coral primary tone, the design system ensures that every interaction feels human and energized.

## Colors

The palette is built upon a natural, warm foundation to reduce eye strain and provide a distinctive backdrop for product photography. 

- **Primary (Coral Orange):** Used for critical calls to action, active navigation states, and brand-driven highlights. It signifies energy and warmth.
- **Background (Sand):** A warm, off-white neutral that serves as the base layer for all screens, providing more character than pure white.
- **Accents:** 
    - **Message Blue:** Dedicated to communication, chat interfaces, and informational status updates.
    - **Review Yellow:** Reserved exclusively for ratings, social proof, and high-value rewards.
    - **System Gray:** Used for secondary text, borders, and inactive states to maintain a clear hierarchy.
- **Unread/Alert States:** A subtle, glow-enhanced version of Coral Orange is used for notification pips and unread message indicators to draw immediate but soft attention.

## Typography

The design system utilizes **Plus Jakarta Sans** for its exceptional legibility on mobile screens and its friendly, modern character. 

The typographic hierarchy relies on significant weight contrast rather than excessive size changes. Large headlines use a tighter letter-spacing and heavier weights to feel "anchored," while body copy uses a generous line height (1.6) to ensure readability against the Sand background. Label styles utilize uppercase tracking for metadata and secondary categorization, ensuring they are distinct from primary body text.

## Layout & Spacing

This design system employs a **Fluid Grid** model optimized for mobile-first consumption. The layout is structured on an 8pt spatial system, ensuring mathematical harmony between all elements.

- **Mobile Layout:** A 4-column grid with 16px side margins and 12px gutters.
- **Desktop Layout:** A 12-column centered grid with a maximum width of 1280px.
- **Rhythm:** Spacing between related items (like a product title and price) should use `xs` (8px), while spacing between sections (like "New Arrivals" and "Trending") should use `xl` (32px) to maintain a clear visual breathing room.

## Elevation & Depth

To maintain the "Soft" aesthetic, the design system avoids heavy, dark shadows. Instead, it uses **Tonal Layers** and **Ambient Shadows** to create a sense of physical stacking.

1. **Flat Surface:** The base Sand (#F5F2ED) background.
2. **Raised (Level 1):** Pure white surfaces (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.04)). Used for cards and primary buttons.
3. **Floating (Level 2):** Used for navigation bars and sticky elements. These use a slightly more pronounced shadow (0px 8px 30px rgba(0, 0, 0, 0.08)) to indicate they sit above the scrollable content.
4. **Interactive Focus:** Elements being pressed or active may use a subtle Coral Orange inner-glow or a "pressed" state where the shadow depth decreases, mimicking physical interaction.

## Shapes

The shape language is organic and approachable, utilizing "Rounded" (Level 2) configurations to reinforce the friendly brand personality.

- **Standard Elements:** Buttons, input fields, and search bars use a 0.5rem (8px) corner radius.
- **Containers:** Product cards and bottom sheets use a 1rem (16px) radius to create a soft "frame" for content.
- **Interactive Pill:** Small badges, chips, and unread indicators use a fully rounded "Pill" shape (999px) to differentiate them from functional containers.

## Components

- **Buttons:** Primary buttons are solid Coral Orange with white text. Secondary buttons use a transparent background with a 1px System Gray border. All buttons have a height of 48px for mobile accessibility.
- **Cards:** Product cards must have a white background, 16px corner radius, and a 4px "Soft" ambient shadow. Information is bottom-aligned with the price highlighted in Coral.
- **Input Fields:** Fields use a 1px border in System Gray, switching to Coral Orange on focus. Labels sit outside the field in a `label-caps` style.
- **Chips:** Used for categories and filters. Active chips are filled with Coral Orange; inactive chips use a light tint of the Sand background.
- **Unread States:** Indicated by a 8px Coral Orange dot placed at the top-right of icons or list items.
- **Marketplace Specifics:**
    - **Price Tags:** Bold weights in the primary Coral color.
    - **Review Bars:** Yellow stars paired with System Gray text for counts.
    - **Merchant Badges:** A subtle blue-tinted chip to denote "Verified" status.