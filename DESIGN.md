# Design Brief: StudyPro

## Purpose & Context
Dark productivity website for students and learners. Refined, high-contrast interface with smooth interactions for focus and clarity.

## Tone & Differentiation
Clean minimalism with geometric precision. Sky blue accent for action hierarchy. Smooth transitions on every interactive element. Grid-based layout with intentional card elevation.

## Color Palette (OKLCH)

| Token               | Dark Mode            | Purpose                   |
| ------------------- | -------------------- | ------------------------- |
| Background          | `0.065 0 0` (navy)   | Main surface, deep black  |
| Card                | `0.10 0 0` (darker)  | Elevated content          |
| Accent              | `0.70 0.18 262` (sky)| Primary actions, focus    |
| Muted               | `0.15 0 0` (slate)   | Secondary surfaces        |
| Foreground          | `0.95 0 0` (white)   | Text, high contrast       |
| Border              | `0.20 0 0` (dim)     | Subtle dividers           |

## Typography

| Tier    | Font                     | Use Case                     |
| ------- | ------------------------ | ---------------------------- |
| Display | Bricolage Grotesque 700+ | Hero title, section headers  |
| Body    | DM Sans 400-700          | Paragraph text, UI labels    |
| Mono    | Geist Mono 400-500       | Code, technical references  |

## Elevation & Depth

| Zone       | Background           | Treatment                                    |
| ---------- | -------------------- | -------------------------------------------- |
| Header     | `0.065 0 0` + border | Sticky, dark black, nav underline on accent |
| Hero       | Gradient (bg→muted)  | Centered content, large typography           |
| Cards      | `0.10 0 0`           | `shadow-card`, lift on hover with `shadow-hover` |
| Sections   | Alternating `0.065` & `0.10` | Visual rhythm, contrast  |
| Footer     | `0.065 0 0` + border | Dark black, subtle divider above            |

## Structural Zones

- **Header**: Sticky, dark background, nav links with accent hover, high z-index
- **Hero**: Full viewport height, gradient background, centered title + subtitle + CTA button
- **Features Cards**: 3-column grid (responsive), card elevation with smooth hover lift
- **To-Do List**: Maximum width container, input + button, task list with delete actions
- **Contact**: Simple text section with email
- **Footer**: Dark background, centered text, top border

## Spacing & Rhythm

- Section padding: 60px (vertical), 30px (horizontal)
- Card gap: 20px
- Component spacing: Consistent 10-20px for internal padding
- Border radius: 8px (cards), 5px (buttons, inputs)

## Component Patterns

- **Buttons**: Accent color, no border, rounded, bold weight, smooth transition on hover
- **Input Fields**: Subtle borders, no border radius override for accessibility
- **Cards**: Dark background, internal padding 20px, rounded corners, shadow-card default, shadow-hover on interaction
- **Navigation Links**: Hover state activates accent color, no underline

## Motion & Interaction

- **Base transition**: `transition-smooth` (0.3s cubic-bezier(0.4, 0, 0.2, 1))
- **Card hover**: `translateY(-5px)` + shadow upgrade from `shadow-card` to `shadow-hover`
- **Navigation hover**: Text color to accent, smooth transition
- **Button hover**: Slight scale up, enhanced shadow, all transitions smooth

## Responsive Design

- Mobile-first Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Hero: Full height on mobile, centered content
- Cards: Single column on mobile, 2-column on tablet, 3-column on desktop
- Padding adjusts: 30px desktop → 20px tablet → 15px mobile

## Constraints

- No decorative gradients on text or background fills
- Accent blue reserved for interactive elements only
- Shadows are dark, not glow/neon effects
- No animation that exceeds 0.3s or interrupts focus flow

## Signature Detail

Smooth, instantaneous hover feedback on all interactive elements (cards lift, buttons scale, nav links transition to accent). This creates a sense of responsiveness and precision—characteristics of premium productivity software.
