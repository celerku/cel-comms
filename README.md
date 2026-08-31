# Cel art site — dark indie pixel v2

## Uploading pixel art
1. Put the image/GIF in `assets/art/`.
2. Open `assets/js/art-data.js`.
3. Add an entry like:

```js
{
  title: "Cat",
  commissioner: "ExampleUser", // optional: use "" to hide
  dimensions: "52 × 52 px",    // type this manually
  category: "static-custom",
  file: "cat.png",
  copyable: true,               // card click copies [[Cat]]
  premade: false
}
```

`title` is copied with the exact same spelling and capitalisation, wrapped in double square brackets. Set `copyable: false` to turn this off for a specific piece.

Clicking the card copies the name. Clicking its `VIEW` button opens the enlarged preview + true 1:1 version.

## Other galleries
Put non-pixel files under `assets/art/other/` (create it if needed), then edit `assets/js/other-data.js`.

Page values:
- `commissioned-artists`
- `oc-fanart`
- `my-ocs`
- `random-art`
- `digital-commissions`

Example:
```js
{ page:"my-ocs", title:"Cel", file:"other/cel.png", artist:"@celerku", note:"optional note" }
```

These galleries use a loose masonry-style layout instead of identical square cards.

## Cover image
Add your cover art as:
`assets/images/cover.jpg`

The site automatically adds a dark overlay so white headings remain readable.

## GitHub Pages update
Upload/replace these files in your `cel-comms` repository and commit. GitHub Pages will redeploy automatically.
