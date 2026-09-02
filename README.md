# cel-comms

Personal art portfolio and commission site by **@celerku**. Artwork © @celerku unless otherwise credited. Please do not repost, redistribute or reuse artwork without permission.

# Editable Site Images

These are the decorative/site images that can be replaced without changing the website code.

IMPORTANT:
- Keep the filename exactly the same.
- Capitalisation matters.
- Upload the replacement into the exact folder listed.
- Replace the existing file rather than adding it somewhere else.
- Gallery artwork is handled separately through the Bulk Art Manager.

---

## Main Site Assets

### Site icon

Filename:
`site-icon.png`

Location:
`assets/images/site-icon.png`

Used for:
The small icon beside `cel_` in the top-left header on the main site pages.

Recommended:
Small square/near-square image, preferably PNG with transparency.

---

### Homepage hero decoration

Filename:
`hero-decor.png`

Location:
`assets/images/hero-decor.png`

Used for:
The large floating decorative artwork beside:

`art made pixel by pixel.`

Notes:
- Does NOT need to be square.
- The site scales it to fit the available space.
- Keeps its natural aspect ratio.
- Has the floating/bobbing animation.

---

### Main cover/background

Filename:
`cover.jpg`

Location:
`assets/images/cover.jpg`

Used for:
Large darkened cover/header backgrounds.

Notes:
The site automatically places a dark overlay over it so white text remains readable.

---

## Fake Window Buttons

These are decorative only.

Location:
`assets/images/`

Filenames:

`window-minimise.png`

`window-maximise.png`

`window-close.png`

Used for:
The little fake desktop-window controls.

The old `GALLERY.WIN`, `INFO.TXT`, `STATUS.EXE`, etc. text labels are no longer used.

---

# Main Page Decorations

Location:

`assets/images/page-decor/`

These are the larger images shown beside the main page headings.

---

### Pixel Art directory

Filename:
`pixel-art.png`

Location:
`assets/images/page-decor/pixel-art.png`

---

### Premades

Filename:
`premades.png`

Location:
`assets/images/page-decor/premades.png`

---

### Information

Filename:
`information.png`

Location:
`assets/images/page-decor/information.png`

---

### Other directory

Filename:
`other.png`

Location:
`assets/images/page-decor/other.png`

Notes:
This can be a larger/non-square image. The website scales it to fit the available heading space.

---

## Other Subpages

The individual pages under Other do NOT need decorative heading images.

These pages intentionally have no separate page decoration:

- Commissioned Avatar Artists
- OC Fanart
- My OCs
- Random Art
- Digital Commissions

The main `Other` directory may still use:

`assets/images/page-decor/other.png`

---

# Shared Small Heart Decoration

The homepage and Information page share ONE image instead of requiring duplicate files.

Filename:

`decor-heart.png`

Location:

`assets/images/section-decor/decor-heart.png`

This ONE file is reused for:

- Homepage Explore section
- Homepage Commission Status section
- Information → Prices
- Information → Terms & Conditions
- Information → FAQ

Notes:
- This image does NOT float/bounce.
- Replace only `decor-heart.png`; there is no need to create five copies.

---

# Pixel Art Subpage Decorations

Location:

`assets/images/section-decor/`

These are GIF files and may be animated.

### Static Custom
`pixel-static-custom.gif`

### Food Series
`pixel-food-series.gif`

### Spinning
`pixel-spinning.gif`

### Wiggly
`pixel-wiggly.gif`

### Simple Animated
`pixel-simple-animated.gif`

### Custom Animated
`pixel-custom-animated.gif`

### Sprites
`pixel-sprites.gif`

### Pixel Headshots
`pixel-pixel-headshots.gif`

Full paths:

`assets/images/section-decor/pixel-static-custom.gif`

`assets/images/section-decor/pixel-food-series.gif`

`assets/images/section-decor/pixel-spinning.gif`

`assets/images/section-decor/pixel-wiggly.gif`

`assets/images/section-decor/pixel-simple-animated.gif`

`assets/images/section-decor/pixel-custom-animated.gif`

`assets/images/section-decor/pixel-sprites.gif`

`assets/images/section-decor/pixel-pixel-headshots.gif`

Notes:
The browser plays animated GIFs automatically.

---

# Artwork vs Decorative Assets

Decorative images listed above are replaced manually through GitHub.

Actual gallery artwork should NOT be manually wired into the HTML.

Gallery artwork will be managed using:

`BULK-ART-MANAGER.html`

The manager generates:

`assets/art-web/...`

`assets/js/art-data.js`

`assets/js/other-data.js`
