---
name: Coastal Marketplace Aesthetic
colors:
  surface: '#fff8f3'
  surface-dim: '#e1d9cf'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2e8'
  surface-container: '#f6ece3'
  surface-container-high: '#f0e7dd'
  surface-container-highest: '#eae1d7'
  on-surface: '#1f1b15'
  on-surface-variant: '#57423c'
  inverse-surface: '#343029'
  inverse-on-surface: '#f8efe5'
  outline: '#8a726a'
  outline-variant: '#dec0b8'
  surface-tint: '#a33e1b'
  primary: '#a33e1b'
  on-primary: '#ffffff'
  primary-container: '#e8714a'
  on-primary-container: '#571500'
  inverse-primary: '#ffb59e'
  secondary: '#326286'
  on-secondary: '#ffffff'
  secondary-container: '#a5d4fd'
  on-secondary-container: '#2b5c80'
  tertiary: '#7d562d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b98b5d'
  on-tertiary-container: '#442601'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#822704'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#9dcbf4'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#154b6d'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fff8f3'
  on-background: '#1f1b15'
  surface-variant: '#eae1d7'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  lg: 40px
  xl: 64px
  gutter: 16px
  margin: 24px
---

## Brand & Style

The brand personality of this design system is sun-drenched, approachable, and vibrant. It moves away from the sterile "tech-blue" corporate standard, favoring a tactile warmth that evokes a high-end seaside boutique. The target audience is community-driven shoppers and independent sellers who value a human touch in their digital transactions.

The design style is a blend of **Minimalism** and **Tactile Modernism**. It uses heavy white (sand) space to let product imagery breathe, while utilizing soft, organic depth to make elements feel touchable and friendly. The interface should feel like a physical space—airy, warm, and inviting.

## Colors

The palette is rooted in a "Warm Sand" background, providing a softer, more natural canvas than pure white. "Coral Orange" serves as the high-energy primary CTA color, designed to stand out and drive conversion with a friendly, sunset-inspired glow. "Deep Ocean Blue" provides the necessary weight and contrast for navigation and secondary accents, ensuring the UI feels grounded.

For neutral tones, use warm-tinted greys and earthy browns instead of cold blacks to maintain the beach-inspired atmosphere. Text should primarily use the neutral deep brown to ensure legibility while remaining soft on the eyes.

## Typography

This design system utilizes **Epilogue** for headlines and branding to provide a distinctive, editorial character that feels both geometric and expressive. Its bold weights are used to anchor the page and create a clear visual hierarchy.

For body text and functional interface elements, **Plus Jakarta Sans** is employed. Its soft, rounded terminals complement the "rounded-2xl" shape language and maintain the friendly, optimistic tone. Letter spacing is kept tight for headlines to emphasize their "logo-like" quality, while body text is given generous line height to ensure readability against the warm background.

## Layout & Spacing

The layout follows a **fluid grid** model designed for mobile-first marketplace browsing. A standard 8pt rhythm governs the spacing, ensuring consistency across all screens. 

Generous margins of 24px are used on the outer edges of the viewport to create an "airy" feel, preventing the content from feeling cramped. Elements within cards and lists should utilize 16px gutters to maintain a clean separation of information. White space is treated as a design element itself, mimicking the openness of a shoreline.

## Elevation & Depth

Visual hierarchy in this design system is achieved through **ambient shadows** and subtle tonal layering. Shadows are never pure black; they are tinted with a hint of the Secondary "Deep Ocean Blue" or a warm clay tone at very low opacities (5-10%). This creates a "soft glow" effect rather than a harsh drop shadow.

Surface containers that need to stand out—such as product cards or navigation bars—should use a slightly brighter version of the background or a pure white to appear as if they are floating just above the sand.

## Shapes

The shape language is defined by a high degree of roundness to reinforce the friendly, non-corporate vibe. Following the "rounded-2xl" requirement, primary buttons and major containers use a 1.5rem (24px) corner radius. 

Secondary elements like input fields and tags follow this logic with slightly reduced scales, but always avoiding sharp corners. This "pebble-like" geometry makes the marketplace feel safe, modern, and easy to navigate.

## Components

### Buttons
Primary buttons use the Coral Orange background with white text and a `rounded-2xl` profile. They should have a subtle, soft shadow to appear elevated. Secondary buttons use the Deep Ocean Blue as an outline or a subtle ghost style.

### Cards
Product cards should have a white background, `rounded-xl` corners, and a soft ambient shadow. Images within cards should have a slightly smaller corner radius (12px) to create a nested, organic look.

### Input Fields
Fields should be styled with a subtle border in a warm-neutral tone. When focused, the border should transition to Deep Ocean Blue with a soft Coral Orange outer glow to indicate activity without being jarring.

### Chips & Tags
Used for categories like "Handmade" or "Vintage," these should be fully pill-shaped (rounded-full) and use low-saturation versions of the accent colors to keep the UI from becoming too busy.

### Bottom Navigation
A fixed bottom bar with a soft backdrop blur (glassmorphism) over the Warm Sand background, using Deep Ocean Blue for active icons to ensure high visibility.