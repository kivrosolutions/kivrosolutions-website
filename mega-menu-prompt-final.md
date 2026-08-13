I have an existing `Header.jsx` in my Next.js (App Router) project. It currently has a working mega-menu ONLY for "Services", built with plain `useState`/`useRef` hover logic, pulling data from `servicesMegaMenu` in `@/lib/constants`. I want you to upgrade this into a full Rocket-Farm-Studios-style mega menu system across MULTIPLE nav items, using `@radix-ui/react-navigation-menu` (already installed) for the menu/trigger/accessibility logic and `framer-motion` (already installed) for the open/close animation. Do not change my branding, colors, dark-mode classes, or icon component pattern — extend them.

## Attached reference

4 screenshots of the target site's navbar dropdowns (different nav items open: AI Solutions, Stages, Services, About). Study all 4 — each panel has a DIFFERENT width/height based on its own content, none are a fixed uniform size.

## What to change in my code

1. **Replace the manual `useState`/`onMouseEnter`/`onMouseLeave`/`useRef` mega-menu logic** with Radix's `NavigationMenu.Root`, `NavigationMenu.Item`, `NavigationMenu.Trigger`, and `NavigationMenu.Content`. Wrap `NavigationMenu.Content`'s children in a `motion.div` (framer-motion) that animates `opacity` 0→1 and `y` -8→0 on enter, reverse on exit, ~200ms, using `AnimatePresence`.

2. **Give mega-menu capability to "About" and "Services"** (not just Services). Keep "Home", "Portfolio", "Blog" as plain links like they are now.

3. **Extend `@/lib/constants`**: currently `servicesMegaMenu` is a flat array of `{ title, items: [{title, description, icon, href}] }` (single style, no CTA card). Change the data shape so each mega-menu item now supports MULTIPLE LEFT COLUMNS + ONE RIGHT CTA CARD, like this:

```js
export const megaMenus = {
  services: {
    columns: [
      {
        title: "DESIGN & BUILD",
        items: [
          {
            title: "UX / UI Design",
            description: "Intuitive interfaces that delight users.",
            icon: "pencil",
            href: "/services/ux-ui",
            badgeColor: "orange",
          },
          {
            title: "Mobile App Development",
            description: "High-performance apps built for scale.",
            icon: "phone",
            href: "/services/mobile",
            badgeColor: "orange",
          },
          // ...more
        ],
      },
      {
        title: "INTELLIGENCE",
        items: [
          {
            title: "AI-Native Development",
            description: "Smarter, faster, more responsive AI.",
            icon: "code",
            href: "/services/ai-native",
            badgeColor: "green",
          },
          // ...more
        ],
      },
    ],
    cta: {
      label: "EBOOK",
      heading: "Navigating App Development",
      subtext: "Key factors that shape your timeline — and the 5 mistakes to avoid.",
      buttonText: "Download free",
      href: "/resources/app-dev-ebook",
    },
  },
  about: {
    columns: [/* same shape, 2-3 columns */],
    cta: {/* same shape */},
  },
};
```

Migrate my existing `servicesMegaMenu` items into this new `megaMenus.services.columns` shape (preserve all current items/icons/hrefs, just restructure into columns + add a plausible `cta` block and `badgeColor` per item). Add a similar `megaMenus.about` entry with sensible content for an "About" page (Philosophy, Cadence, Team Model / Quality Framework, Client Journey / About Us, Contact — infer from context of a dev agency).

4. **Panel visual spec** (build a shared `<MegaMenuPanel columns={} cta={} />` component, used by both Services and About triggers):
   - White rounded-2xl panel (dark mode: `dark:bg-zinc-900`), shadow-xl, positioned via Radix's own positioning (no manual `absolute left-1/2 -translate-x-1/2` math needed — let `NavigationMenu.Viewport` handle it)
   - Left side: 2-3 columns in a CSS grid, each column = uppercase gray label (non-clickable) + vertical list of items
   - Each item = my existing `MegaMenuIcon` inside a colored rounded-square badge (map `badgeColor` → `bg-orange-100 text-orange-600` / `bg-green-100 text-green-600` / `bg-blue-100 text-blue-600`, with dark-mode variants) + bold title + gray description, entire block wrapped in `Link`
   - Right side: separate dark card, `bg-gradient-to-br from-zinc-800 to-black` rounded-2xl, containing the CTA content (small orange uppercase label, bold white 2-line heading, gray subtext, orange-600 rounded-full pill button with arrow, using my existing `Let's talk →`-style button classes)
   - Panel width/columns count should flex based on how many `columns` are passed in — don't hardcode a fixed `w-[700px]` for every menu

5. **Background overlay**: when any mega-menu is open, render a fixed full-screen `bg-black/40 backdrop-blur-sm` overlay behind the header (z-index below header, above page content) that fades in/out with framer-motion, and clicking it closes the menu.

6. **Mobile**: keep my existing mobile accordion `mobileOpen` panel as-is, but flatten each mega-menu's `columns[].items` into a simple stacked link list under each nav label (no CTA card on mobile).

7. Keep all my existing Tailwind classes, dark-mode pairs, orange-600 brand color, and the `MegaMenuIcon` function exactly as they are — just add any new icon keys I referenced above (`pencil`, `phone`, `code`, `cloud`, etc. — most already exist in my `MegaMenuIcon`, reuse them).

## Deliverable

Give me the full updated `Header.jsx`, the new/updated `@/lib/constants.js` (or split into `lib/megaMenuData.js` if cleaner — your call), and a new `MegaMenuPanel.jsx` component file. Keep everything in JS/JSX (not TypeScript) to match my current file extensions.
