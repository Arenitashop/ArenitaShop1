---
name: Warm Shoreline
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#57423b'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#8b7169'
  outline-variant: '#dec0b6'
  surface-tint: '#a43c12'
  primary: '#a43c12'
  on-primary: '#ffffff'
  primary-container: '#ff7f50'
  on-primary-container: '#6c2000'
  inverse-primary: '#ffb59c'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d8'
  on-secondary-container: '#67645c'
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
  secondary-fixed: '#e7e2d8'
  secondary-fixed-dim: '#cac6bd'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#7af4ff'
  tertiary-fixed-dim: '#4dd9e4'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
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
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
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
  gutter: 16px
  margin: 20px
---

## Brand & Style

The design system is anchored in a philosophy of "Warm Minimalism." It avoids the clinical coldness of traditional tech interfaces by utilizing a palette inspired by natural coastal elements. The target audience seeks a premium shopping experience that feels approachable, high-end, and stress-free.

The visual style follows a **Modern Corporate** aesthetic with a tactile twist. By combining expansive whitespace with high-quality typography and soft organic hues, this design system evokes a sense of professional reliability mixed with a welcoming, sun-drenched atmosphere. Every interaction is designed to feel calm and intentional.

## Colors

The color palette is designed to maximize legibility while maintaining a soft, organic contrast. 

- **Primary & Accents:** Coral Orange (#FF7F50) serves as the high-energy signal for call-to-actions, active navigation states, and progress indicators.
- **Background:** Sand (#F5F0E6) provides a warm, non-white foundation that reduces eye strain and distinguishes the app from generic competitors.
- **Surfaces:** Cards and sheets utilize pure White (#FFFFFF) to "pop" against the sand background, creating a clear physical hierarchy.
- **Text:** Deep Charcoal (#333333) is used for all primary communication to ensure AA/AAA accessibility standards.
- **Semantic:** Muted Red (#B24C4C) is reserved for destructive actions and error states, chosen specifically to fit the warm tone of the system without appearing jarring.

## Typography

This design system utilizes **Plus Jakarta Sans** for its contemporary, geometric character and friendly curves. The typeface strikes a perfect balance between professional utility and modern warmth.

The type scale is optimized for mobile commerce. Headlines use a tighter letter-spacing and heavier weights to create a strong visual anchor. Body text is set with generous line heights to ensure long-form descriptions remain breathable and easy to scan on small displays. Label styles utilize a semi-bold weight to remain distinct even at smaller sizes.

## Layout & Spacing

The layout philosophy relies on a **Fluid Grid** with dynamic vertical spacing. A 4-column grid system is used for mobile portrait views, with a standard outer margin of 20px to prevent content from feeling cramped against the screen edges.

Spacing follows a strict 4pt / 8pt rhythmic scale. 16px (md) is the standard padding for internal card elements, while 24px (lg) is used to separate distinct content sections. This consistent rhythm ensures a professional, predictable flow as the user scrolls.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Ambient Shadows**. Because the background is a saturated Sand hue, shadows must be treated with care to avoid looking "muddy."

- **Level 0 (Background):** Sand (#F5F0E6), flat.
- **Level 1 (Cards/Sheets):** White (#FFFFFF) with an extra-diffused, low-opacity shadow. Shadows should incorporate a tiny hint of the background color (e.g., #2D2A26 at 8% opacity) to feel naturally integrated into the environment.
- **Interactive States:** Primary buttons utilize a subtle Coral-tinted glow when active, rather than a heavy black shadow, to maintain the "warm" brand promise.
- **Dividers:** Subtle lines (#EAE3D5) are used sparingly to separate list items within cards, maintaining a flat but organized look.

## Shapes

The shape language is defined by significant corner rounding to evoke a friendly, modern, and high-end feel. 

- **Primary Containers:** Following the "Rounded-2xl" requirement, main product cards and modal sheets use a 1.5rem (24px) radius.
- **Interactive Elements:** Buttons and input fields use a 1rem (16px) radius to maintain harmony with the larger containers while appearing more "clickable."
- **Small Elements:** Chips, badges, and checkboxes use a smaller 0.5rem (8px) radius to ensure they remain legible and structurally sound at small scales.

## Components

### Buttons
- **Primary:** Coral Orange background with White text. Bold weight. 16px padding on sides.
- **Secondary:** Transparent background with Coral Orange border and text.
- **Tertiary:** Pure text-link style using Deep Charcoal with an icon suffix.

### Cards
- **Product Cards:** White background, 24px rounded corners. Use 16px internal padding. Subtle ambient shadow to separate from the Sand background.
- **Information Cards:** Same styling, but may use a 1px border (#EAE3D5) instead of a shadow for secondary content.

### Inputs
- **Field Style:** White background with a subtle border (#EAE3D5). On focus, the border transitions to Coral Orange.
- **Labels:** Positioned above the field in Label-MD (Deep Charcoal).
- **Icons:** Use 20px icons in a muted version of the text color to provide visual cues without cluttering the interface.

### Chips & Badges
- **Active State:** Coral Orange background with White text.
- **Inactive State:** Sand (#F5F0E6) background with Deep Charcoal text.

### Dividers
- 1px thick lines using #EAE3D5. Always use with at least 8px of vertical clearance to maintain the clean aesthetic.