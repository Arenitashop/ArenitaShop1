---
name: ArenitaShop Design Identity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#42474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#72787f'
  outline-variant: '#c2c7cf'
  surface-tint: '#31628a'
  primary: '#00385a'
  on-primary: '#ffffff'
  primary-container: '#1a4f76'
  on-primary-container: '#92c0ed'
  inverse-primary: '#9dcbf9'
  secondary: '#a43c12'
  on-secondary: '#ffffff'
  secondary-container: '#fe7e4f'
  on-secondary-container: '#6b1f00'
  tertiary: '#273644'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e4d5c'
  on-tertiary-container: '#adbecf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#9dcbf9'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#134a71'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#380c00'
  on-secondary-fixed-variant: '#822800'
  tertiary-fixed: '#d4e4f6'
  tertiary-fixed-dim: '#b8c8da'
  on-tertiary-fixed: '#0d1d2a'
  on-tertiary-fixed-variant: '#394857'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
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
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
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
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 12px
---

## Brand & Style

The brand personality of this design system is built on the intersection of professional reliability and approachable warmth. It targets marketplace users who value transparency and ease of communication during a transaction. The UI is designed to evoke a sense of calm and trust, transforming the high-stakes environment of a marketplace into a friendly, conversational experience.

The chosen style is **Modern Minimalism with a Warm Aesthetic**. It prioritizes heavy whitespace and a restricted color palette to ensure the product imagery remains the focus. Unlike traditional corporate messaging tools, this design system incorporates softer edges and vibrant accent colors to feel more "human" and less "utilitarian," bridging the gap between a social app and a commercial platform.

## Colors

The palette is anchored by **Ocean Blue**, a deep and calming primary shade used for active states, primary buttons, and navigation anchors to instill a sense of security. **Coral** serves as the high-energy accent, reserved specifically for unread notification badges, price highlights, and critical calls to action that require immediate attention.

The background is kept as **Pure White** to maintain a "clean room" feel that allows product photos to pop. Secondary text and non-interactive icons utilize a muted Slate Gray to ensure the hierarchy remains clear and the interface doesn't feel cluttered or visually noisy.

## Typography

This design system utilizes **Plus Jakarta Sans** for its friendly, rounded terminals and exceptional readability. The typography strategy relies on high contrast between bold, heavy headers and lightweight, muted secondary text. 

Headlines are set with tighter letter spacing and bold weights to command attention, while body copy maintains generous line heights to ensure long chat threads are easy to scan. Secondary information—such as timestamps, "seen" receipts, and item descriptions—is rendered in a smaller size and a muted color to reduce cognitive load.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model inspired by modern messaging apps. On desktop, the interface utilizes a fixed-width sidebar for the chat list (360px) and a fluid main area for the conversation. 

The spacing rhythm is built on an **8px grid**. Message bubbles are separated by 4px when sent by the same user and 12px when the sender changes. Generous margins of 20px are maintained at the edges of the chat window to prevent the UI from feeling cramped. Subtle 1px dividers in a very light gray are used to separate individual chat threads in the list view, ensuring the pure white background remains organized.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. The main chat background is pure white, while the sidebar for the chat list uses a very subtle off-white tint to create a sense of recession.

Message bubbles do not use heavy shadows; instead, they rely on color fills (Ocean Blue for outgoing, Light Gray for incoming) to stand out. Floating Action Buttons (FABs) and product preview cards within the chat utilize extra-diffused, low-opacity shadows (Blur: 15px, Opacity: 5%) to appear slightly lifted above the conversation plane without creating harsh visual breaks.

## Shapes

The shape language is defined by a **Rounded** aesthetic. Standard UI elements like input fields and chat bubbles use a base radius of 0.5rem (8px). 

Consistent with the requirements, product thumbnails and larger card containers utilize a `rounded-lg` value of 1rem (16px) to emphasize the "warm marketplace" feel. Buttons are either fully pill-shaped or use the standard 8px radius to maintain a modern, friendly appearance. The use of soft corners helps de-escalate the visual tension often found in high-volume messaging apps.

## Components

### Buttons & Inputs
Primary buttons are solid **Ocean Blue** with white text. The message input bar is a "pill" shape with a subtle light-gray border, containing a plus icon for attachments on the left and a send icon on the right.

### Chat Bubbles
Incoming bubbles are light gray with dark text, while outgoing bubbles are **Ocean Blue** with white text. Both utilize the 8px roundedness, with a smaller radius on the corner pointing toward the sender's avatar.

### Unread Badges
Badges are small, circular, and filled with **Coral**. They feature white, bold, center-aligned text. These should be placed on the right side of the chat list item.

### Product Cards (In-Chat)
When a product is shared, it appears as a white card with a `rounded-lg` (16px) thumbnail on the left, the title in bold, and the price highlighted in **Coral**. The card is encased in a subtle 1px border to differentiate it from standard message text.

### Dividers
Use 1px horizontal lines with a hex value of `#F0F2F5` for separating chat list items. These should be inset to align with the text, not the edge of the screen.