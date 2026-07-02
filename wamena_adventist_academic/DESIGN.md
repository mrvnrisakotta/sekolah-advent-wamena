---
name: Wamena Adventist Academic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444650'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#6c5e00'
  on-secondary: '#ffffff'
  secondary-container: '#fee010'
  on-secondary-container: '#716300'
  tertiary: '#031427'
  on-tertiary: '#ffffff'
  tertiary-container: '#19293d'
  on-tertiary-container: '#8090a8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#ffe337'
  secondary-fixed-dim: '#e2c600'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#514700'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style
The design system is built on a foundation of academic excellence, spiritual integrity, and contemporary accessibility. The brand personality is "The Guiding Beacon"—authoritative yet approachable, traditional in values but modern in execution. 

The visual style follows a **Corporate / Modern** approach with a strong **Card-based** structure. This provides a clear information hierarchy essential for educational contexts. The aesthetic is "Neat & Structured," utilizing generous white space to reduce cognitive load for parents, students, and educators. It avoids unnecessary ornamentation in favor of crisp alignments and intentional color usage that evokes a sense of stability and professional care.

## Colors
The palette is rooted in Navy Blue (Primary), representing trust, intelligence, and the school's heritage. Yellow (Secondary) is used sparingly as an "Illumination" accent for calls-to-action and critical highlights, symbolizing hope and enlightenment.

- **Primary (Navy):** Used for headers, primary buttons, and navigational anchors.
- **Secondary (Yellow):** Reserved for high-impact accents and active states.
- **Tertiary (Gray):** Employed for secondary text and subtle UI borders to maintain a professional tone.
- **Surface/Neutral:** A clean, slightly cool white/gray base to ensure the academic content remains the primary focus.

## Typography
This design system utilizes **Hanken Grotesk** for all typographic roles. This choice offers a sharp, contemporary geometric feel that remains highly legible in long-form academic text. 

The type scale is designed with high contrast between headlines and body text to facilitate quick scanning of school news and curriculum details. Headlines use a heavier weight (600-700) to project authority, while body text remains at a comfortable 400 weight with generous line height (1.5x) to ensure readability for users of all ages. All Indonesian text should adhere to standard formal grammar (EYD) to maintain the professional academic tone.

## Layout & Spacing
The layout employs a **Fluid Grid** system within a 1280px maximum container width. It uses an 8px base scaling unit to ensure consistency across all components.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with wide margins to create a focused, "editorial" feel.
- **Tablet:** 8-column grid with 20px gutters. Margins reduce to 32px.
- **Mobile:** 4-column grid with 16px gutters. Padding is tightened to maximize screen real estate for information density.

Vertical spacing should be generous between sections (80px - 120px) to prevent the UI from feeling "cluttered" or "stressful," which is critical for an educational environment.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**. This design system avoids heavy, dark shadows in favor of light, diffused elevation to maintain a clean, professional aesthetic.

1.  **Level 0 (Base):** Neutral background color (#F8FAFC).
2.  **Level 1 (Cards):** White surfaces with a very subtle 1px border (#E2E8F0) and a soft, low-opacity shadow (Y: 2px, Blur: 8px, Opacity: 4%).
3.  **Level 2 (Interactive/Hover):** Increased shadow depth (Y: 4px, Blur: 12px, Opacity: 8%) to provide tactile feedback without looking "game-like."
4.  **Level 3 (Modals/Popovers):** Focused depth with a backdrop blur (8px) to keep the user’s attention on the primary task.

## Shapes
The shape language is **Rounded**, striking a balance between the rigidity of traditional institutions and the friendliness of a modern school. 

- **Standard Components:** Buttons and input fields use a 0.5rem (8px) corner radius.
- **Large Components:** Information cards and image containers use a 1rem (16px) radius to soften the overall visual weight.
- **Iconography:** Use "Rounded" or "Soft" icon sets to match the UI radius. Avoid sharp, jagged edges.

## Components
Consistent application of the following component styles is required:

- **Buttons:**
  - *Primary:* Navy background, white text. Bold, professional.
  - *Secondary:* Yellow background, Navy text. High contrast for "Daftar Sekarang" (Register Now).
  - *Ghost:* Navy outline, transparent background. Used for less critical actions.
- **Cards:** The core of the system. Cards must have a white background, 16px corner radius, and subtle border. Header sections within cards may use a light gray tint to separate metadata from content.
- **Input Fields:** 8px radius, 1px border (#CBD5E1). On focus, the border transitions to Navy Blue with a subtle blue outer glow. Labels are always positioned above the field for clarity.
- **Chips/Badges:** Used for category labels (e.g., "Akademik," "Ekstrakurikuler"). These use low-saturation versions of the primary color with 100px (pill) roundedness.
- **Lists:** Clean, horizontal dividers (1px, #E2E8F0) with generous vertical padding (16px) between items. Use Navy for icons within list items to maintain brand cohesion.
- **Progress Indicators:** Essential for student portals or application forms. Use a thin Navy bar with a Yellow "active" fill.