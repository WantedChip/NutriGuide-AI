# Design System Specification: The Living Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Clinical Atelier"**

This design system rejects the sterile, boxy aesthetic of traditional "medical" software in favor of a high-end, editorial experience. It balances the precision of health-tech with the breathability of a premium wellness magazine. 

We move beyond the "template" look by embracing **Intentional Asymmetry** and **Tonal Depth**. The goal is to make the user feel like they are interacting with a living document—one that is authoritative yet approachable. By utilizing generous whitespace, layered surfaces, and a sophisticated typography scale, we transform data into a narrative of health.

---

## 2. Colors & Surface Philosophy

### The "No-Line" Rule
**Borders are a failure of hierarchy.** To maintain a premium, seamless feel, this system explicitly prohibits 1px solid borders for sectioning. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Placing a `surface-container-low` section against a `surface` background.
2.  **Tonal Transitions:** Using depth to imply containment.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, semi-translucent paper.
- **Base Layer:** `surface` (#FAF8FF) - The canvas.
- **Sectioning:** `surface-container-low` (#F2F3FF) - Used for grouping content areas.
- **Interactive Elements:** `surface-container-lowest` (#FFFFFF) - Reserved for cards or inputs that need to "pop" from the background.

### The "Glass & Gradient" Rule
To escape the "flat" look, use **Glassmorphism** for floating elements (e.g., sticky headers, navigation rails). Use a combination of `surface` at 80% opacity with a `backdrop-blur-xl` effect.
*   **Signature Textures:** For primary CTAs, do not use a flat hex. Apply a subtle linear gradient: `primary` (#006C49) to `primary_container` (#10B981) at a 135-degree angle. This adds "soul" and a tactile, liquid quality to health indicators.

---

## 3. Typography: Editorial Authority
We use **Inter** not as a utility font, but as a brand voice. The hierarchy is extreme to create clear entry points for information.

*   **Display (Lg/Md/Sm):** Set with a tighter letter-spacing (-0.02em). These are your "Editorial Statements." Use them for high-level health scores or welcome headers.
*   **Headline & Title:** Use `headline-lg` (2rem) for major section starts. This establishes "The Curator" voice—authoritative and calm.
*   **Body (Lg/Md):** Optimized for readability. Never use pure black; use `on_surface_variant` (#3C4A42) for long-form text to reduce eye strain and increase the "premium" feel.
*   **Labels (Md/Sm):** All-caps with +0.05em letter-spacing. Use these for metadata or categories to create a rhythmic contrast against sentence-case headlines.

---

## 4. Elevation & Depth: Tonal Layering

### The Layering Principle
Forget traditional drop shadows. Depth is achieved by "stacking" tokens.
*   **Example:** A card (`surface_container_lowest`) sitting on a section (`surface_container_low`) creates a natural, soft lift.

### Ambient Shadows
If an element must float (e.g., a modal or a floating action button), use **Ambient Shadows**:
*   **Shadow Color:** Use a 6% opacity version of `on_surface` (#131B2E). 
*   **Blur:** High diffusion (32px to 64px) with 0 offset. It should look like a glow of darkness, not a hard cast shadow.

### The "Ghost Border" Fallback
If accessibility requirements demand a container edge (e.g., in high-contrast scenarios), use a **Ghost Border**:
*   **Token:** `outline_variant` (#BBCABF) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The Tactile Pulse
*   **Primary:** Gradient of `primary` to `primary_container`. 48px height. `rounded-lg` (1rem). No border.
*   **Secondary:** `secondary_container` background with `on_secondary_container` text.
*   **Tertiary:** Ghost style. No background. Use `label-md` styling (all-caps, tracked out) for the text to differentiate from body links.

### Cards & Data Visualization
*   **Constraint:** **Forbid dividers.** To separate a list of nutrients, use vertical white space (`spacing-6`) or alternate background tiers between `surface_container_low` and `surface_container_lowest`.
*   **Health Indicators:** Use `primary` for positive trends and `tertiary` (#855300) for warnings. Avoid "Error Red" for general health alerts; use it only for critical system failures.

### Input Fields
*   **Style:** Minimalist underline or soft-tinted box (`surface_container_high`). 
*   **State:** On focus, the background shifts to `surface_container_lowest` with a subtle `primary` glow.

### Signature Component: The "Nutri-Glass" Widget
A translucent container (`surface` @ 70% + blur) used for overlaying data on top of imagery or complex charts. It represents the "Guide" in NutriGuide AI—a clear lens over complex data.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., 80px left, 40px right) on desktop layouts to create an editorial feel.
*   **Do** lean into the "Tonal Nesting" for dashboards.
*   **Do** use `primary_fixed_dim` for subtle background accents behind icons.

### Don’t:
*   **Don’t** use 1px solid borders to separate content.
*   **Don’t** use pure black (#000000) for text. It breaks the sophisticated tonal palette.
*   **Don’t** use standard "Material Design" shadows. Always use the Ambient Shadow spec.
*   **Don’t** crowd the interface. If a screen feels full, increase the spacing tokens. In this system, **Space = Trust.**

---

## 7. Technical Implementation (Tailwind Integration)
Ensure all roundedness follows the `lg` (1rem) or `xl` (1.5rem) tokens to maintain the "Soft Minimalist" feel. Use the `surface` tokens as your background utility classes to ensure dark mode (`Deep Slate Gray`) transitions are seamless via CSS variables.