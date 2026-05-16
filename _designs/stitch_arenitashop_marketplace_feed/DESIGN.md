---
name: Coastal Commerce
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
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
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
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin: 20px
---

## Brand & Style

The visual identity of this design system is built upon the feeling of a sun-drenched, seaside marketplace. It targets a C2C audience that values community, ease of use, and a personal touch. The style blends **Modern Minimalism** with **Tactile Warmth**, using soft edges and an organic color palette to lower the barrier for entry for both buyers and sellers. 

The emotional goal is to evoke "sunny reliability"—a space that feels as relaxed as a beach but as functional as a high-end boutique. Every interaction should feel soft and intentional, avoiding the cold, clinical nature of traditional e-commerce platforms.

## Colors

The palette is anchored by the "Sand" background, which provides a warmer, more eye-friendly canvas than pure white. 

- **Primary (Coral Orange):** Used for main calls to action, purchase buttons, and brand highlights. It represents energy and friendliness.
- **Secondary (Ocean Blue):** Reserved for trust indicators, informational links, and secondary actions like "Save for Later" or "Message Seller."
- **Neutrals:** Warm grays (Charcoal and Pebble) are used for text and iconography to maintain a soft contrast against the sand background. 
- **Surface:** Pure white is used sparingly for product cards and containers to create a "lifted" effect from the sand-colored floor.

## Typography

**Plus Jakarta Sans** is the sole typeface for this design system. Its geometric yet friendly letterforms provide excellent legibility for item descriptions while maintaining a modern, approachable character.

Headlines use heavier weights (Bold/ExtraBold) with slight negative letter spacing to create a punchy, confident look. Body text remains generous in line height to ensure ease of reading on mobile devices during the browsing experience. Captions and labels utilize Medium and SemiBold weights to ensure they don't get lost against the textured background.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with a 12-column structure for desktop and a 2-column or 4-column structure for mobile. 

A 4px baseline rhythm ensures consistent vertical alignment. Margins are kept wide (minimum 20px on mobile) to maintain a sense of "air" and whitespace, preventing the marketplace from feeling cluttered. Elements like product grids should use a 16px gutter to allow the soft shadows of the product cards room to breathe without overlapping.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

The "Sand" background acts as the lowest plane. "Surface White" containers (cards, modals) sit on top of this plane, utilizing soft, diffused shadows with a slight warm tint (#4A4540 at 8% opacity) rather than pure black. This creates a natural, "laid-on-top" look. 

Interactive elements like primary buttons feature a slight "squish" or inner-glow on press, emphasizing the tactile nature of the UI. Avoid harsh borders; instead, use subtle 1px strokes in a slightly darker sand tone (#EAE3D2) to define boundaries where shadows aren't appropriate.

## Shapes

The shape language is defined by the **2xl rounded corner (1.5rem / 24px)**. This high radius is applied to all major containers, including product cards, search bars, and imagery. 

Smaller components like chips and buttons follow this lead but may scale down to a full pill-shape for buttons to maximize the "friendly" aesthetic. The goal is to eliminate sharp points entirely, reinforcing the soft, coastal narrative of the brand.

## Components

- **Buttons:** Primary buttons are Coral Orange with white text, featuring a 24px corner radius. Secondary buttons use a transparent background with an Ocean Blue border and text.
- **Product Cards:** These are the hero components. They must have a White background, 24px corner radius, and a soft ambient shadow. Images within cards should also be rounded.
- **Inputs:** Search bars and text fields use a subtle off-white fill and 24px corners. On focus, the border transitions to Ocean Blue.
- **Chips & Tags:** Used for categories (e.g., "Vintage," "Handmade"). These are pill-shaped with a light sand background and warm charcoal text.
- **Lists:** Seller lists and navigation items should have generous 16px vertical padding, separated by soft sand-colored dividers.
- **Marketplace Specifics:**
    - **Seller Badge:** A small circular avatar with a Coral Orange "verified" checkmark.
    - **Price Tags:** Bold H3 Coral Orange text to ensure visibility against product images.
    - **Floating Action Button (FAB):** A Coral Orange button for "List an Item," positioned at the bottom right, using a 3xl (32px) radius.