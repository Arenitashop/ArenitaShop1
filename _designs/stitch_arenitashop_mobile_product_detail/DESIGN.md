---
name: ArenitaShop Brand Identity
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
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
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
  label-lg:
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
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  container-max: 1280px
---

## Brand & Style
The design system is anchored in a "Sun-Drenched Minimalist" aesthetic. It targets a community-driven audience looking for a marketplace that feels like a boutique coastal shop rather than a sterile corporate platform. The UI evokes warmth, reliability, and approachability.

We utilize a **Modern-Tactile** style. This approach blends high-end whitespace and clean layouts with physical metaphors—specifically soft "card lift" shadows and generous corner radii—to make the interface feel touchable and organic. Every interaction should feel like a soft breeze: light, refreshing, and effortless.

## Colors
The palette is inspired by a Mediterranean shoreline. The foundation is built on **Sand (#F5F2ED)** for large background surfaces to reduce eye strain and provide a "paper-like" warmth, while pure **White (#FFFFFF)** is reserved for elevated cards and interactive components to create depth.

**Coral Orange (#FF7F50)** serves as the primary energetic driver, used exclusively for high-priority Call to Actions (CTAs) and success states. **Ocean Blue (#0077BE)** provides a calming contrast, identifying seller-related information, verified badges, and secondary navigation elements. The **Dark Gray (#333333)** text ensures high legibility while remaining softer than pure black.

## Typography
This design system utilizes **Plus Jakarta Sans** for its friendly, optimistic, and modern character. The typeface's slightly rounded terminals complement the UI's physical shape language. 

Hierarchy is established through weight and size rather than color shifts. Large displays use tighter letter spacing and heavy weights to command attention, while body text maintains a generous line height (1.6) to ensure the marketplace feels airy and readable during long browsing sessions. Labels use a semi-bold weight to remain distinct even at smaller scales.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. We use an 8px base unit to maintain a rhythmic vertical flow.

Margins are generous (minimum 24px on mobile, up to 64px on large desktops) to prevent the "cluttered marketplace" feel common in competitors. Elements within cards use tight spacing (sm/md), while the containers themselves are separated by large gaps (lg/xl) to reinforce the "floating" card aesthetic.

## Elevation & Depth
Elevation in this design system is achieved through **Ambient Shadows** and tonal layering. We avoid harsh, dark shadows in favor of a "Warm Glow" effect.

Shadows should use a tint of the brand's secondary color or a warm neutral (e.g., `rgba(51, 51, 51, 0.08)`).
- **Level 0 (Floor):** Sand background (#F5F2ED).
- **Level 1 (Default Card):** White background with a 4px blur, 2px Y-offset shadow. This creates the "Card Lift" effect.
- **Level 2 (Hover/Active):** White background with a 12px blur, 6px Y-offset shadow. This signifies interactivity and pulls the item toward the user.
- **Level 3 (Modals):** High-diffusion 24px blur shadows to isolate the focus.

## Shapes
The shape language is consistently **Rounded**. By using a 0.5rem (8px) base radius, we remove the "sharpness" of the digital grid, making the UI feel safer and more human.

- **Standard Elements (Buttons, Inputs):** 8px (0.5rem)
- **Large Containers (Cards, Product Images):** 16px (1rem)
- **Specialty Elements (Badges, Seller Avatars):** Full Pill/Circle

## Components
Consistent implementation of these components ensures the marketplace feels unified:

- **Buttons:** Primary buttons use the Coral Orange with white text. They feature a subtle transition where the shadow deepens on hover, rather than the color changing drastically.
- **Cards:** Product cards are white, featuring the Level 1 shadow. Images within cards should have a top-only radius of 16px to sit flush with the card container.
- **Input Fields:** Use a subtle Sand border (#E5E2DD) that transitions to Ocean Blue on focus. Labels sit outside the field in a bold `label-lg` style.
- **Chips & Badges:** Used for categories and seller ratings. Seller-specific badges use Ocean Blue with white text, while product categories use a semi-transparent version of the sand color to stay secondary.
- **Seller Profile Headers:** These utilize the Ocean Blue as a header background or accent line to immediately distinguish "who" you are buying from versus "what" you are buying.
- **Lists:** Clean, borderless rows separated by soft Sand horizontal rules.