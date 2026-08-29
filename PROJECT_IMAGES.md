# Project images

How to add, replace, or extend visuals for projects on this portfolio.

The site reads image paths from `src/data/portfolioData.ts`. Each `Project` can set:

| Field | Type | Purpose |
| --- | --- | --- |
| `imageUrl` | `string` | Hero / listing still (used on Home, Projects, related cards) |
| `imageAlt` | `string` | Accessible description of that still |
| `gallery` | `{ src: string; alt: string }[]` | Extra stills on the case-study page |
| `detail.screenshots` | `string[]` | Optional extra paths (legacy); prefer `gallery` |

`src/components/ProjectMedia.tsx` is the only component that should render a project hero. If `imageUrl` is missing, it shows a short text fallback — **not** a repeated placeholder graphic.

## Where files live

```
public/
└── images/
    └── projects/
        ├── somo/
        │   └── hero.svg
        ├── saveior/
        │   └── hero.svg
        ├── sql-data-warehouse/
        │   └── hero.svg
        └── ai-portfolio-agent/
            └── hero.svg
```

Vite serves `public/` at the site root, so a file at `public/images/projects/somo/hero.png` is referenced as `/images/projects/somo/hero.png`.

Use the project **`id`** from `portfolioData.ts` as the folder name (`somo`, `saveior`, `sql-data-warehouse`, `ai-portfolio-agent`).

## Naming

| File | Use |
| --- | --- |
| `hero.png` (or `.avif` / `.svg` / `.jpg`) | Listing + case-study hero |
| `screenshot-01.png` | Extra case-study still |
| `screenshot-02.png` | Further stills, numbered |
| `mobile.png` | Optional phone crop |

Keep names lowercase, hyphenated, no spaces.

## Formats

Supported: **png**, **AVIF**, **SVG**, **JPEG**, **PNG**.

Prefer png (or AVIF) for photographs and UI screenshots. SVG is fine for diagrams (the current heroes are diagrams). Avoid huge uncompressed PNG/JPEG.

## Dimensions

| Kind | Aspect | Typical size |
| --- | --- | --- |
| Hero | **16:9** | 1920×1080 (or 1280×540 minimum) |
| Screenshot | native UI ratio is OK | longest edge ≤ 1920px |
| Mobile | 9:16 or 9:19 | longest edge ≤ 1280px |

Do not force every project into the same crop. A wide dashboard still and a tall phone still can both live in `gallery`.

## Associate an image with a project

In `src/data/portfolioData.ts`, on the project object:

```ts
{
  id: "somo",
  title: "SoMo — Social Media Platform",
  imageUrl: "/images/projects/somo/hero.png",
  imageAlt: "SoMo feed with live likes and a silent-follow path that skips the timeline",
  gallery: [
    { src: "/images/projects/somo/hero.png", alt: "SoMo architecture overview" },
    { src: "/images/projects/somo/screenshot-01.png", alt: "SoMo post composer and comment thread" }
  ],
  // ...
}
```

## Multiple images for one project

1. Drop files in `public/images/projects/<id>/`.
2. Keep `imageUrl` as the listing hero.
3. List every still (including the hero if you want it on the case study) in `gallery`.

The case-study page renders `gallery` in a horizontal strip. Layouts are not identical cards — first item can be wider in CSS if you add a class later; paths stay the same.

## Screenshots vs hero

- **Hero:** one frame that reads at thumbnail size on Home / Projects (diagram or a real UI crop).
- **Screenshots:** actual product UI, architecture drawings, or schema stills. Prefer real UI over stock.

Do not use generic stock photos to fill empty slots. If you have no screenshot, omit it — the case study still has architecture notes.

## Replace an existing image

1. Replace the file in `public/images/projects/<id>/` **or** add a new file and change `imageUrl` / `gallery[].src`.
2. Update `imageAlt` if the picture changed.
3. Hard-refresh; Vite copies `public/` as-is.

## Project without an image

Leave `imageUrl` unset (or `""`). `ProjectMedia` will not invent a stock photo. Add a still when you have a real screenshot or a diagram that belongs to the project.

## Example: new screenshot for Saveior

1. Export `public/images/projects/saveior/screenshot-01.png` (receipt upload screen, 16:9 or native).
2. Update data:

```ts
imageUrl: "/images/projects/saveior/hero.png",
imageAlt: "Saveior dashboard after a receipt was parsed",
gallery: [
  { src: "/images/projects/saveior/hero.png", alt: "Saveior pipeline overview" },
  { src: "/images/projects/saveior/screenshot-01.png", alt: "Saveior receipt upload screen with extracted merchant and total" }
]
```

## Optimization

- Compress png (quality ~75–85 for photos; diagrams can stay SVG).
- `ProjectMedia` already sets `loading="lazy"` except when `eager` is passed (Home first still).
- `width` / `height` are set so the browser can reserve layout (960×540 for current heroes).
- Do not commit 8MB originals.

## Accessibility

Every still needs **specific** `alt` text: what is on screen, not “project image” or the filename.

- Good: `Saveior receipt upload with Gemini-extracted merchant name and total.`
- Bad: `Screenshot 1`, `hero`, `AI finance app`.

Decorative-only crops should not be used as the only hero; the listing still must describe the project.

## Current mapping

| `id` | Hero path |
| --- | --- |
| `somo` | `/images/projects/somo/hero.png` |
| `saveior` | `/images/projects/saveior/hero.png` |
| `sql-data-warehouse` | `/images/projects/sql-data-warehouse/hero.png` |
| `ai-portfolio-agent` | `/images/projects/ai-portfolio-agent/hero.png` |

Replace any of these images with screenshots using the same path or a new filename plus a data update.
