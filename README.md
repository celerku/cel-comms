# Cel art site — GitHub Pages version

This is a static HTML/CSS/JS site designed for GitHub Pages.

## Colour + style
- Main accent: `#8C98BD`
- White / very pale blue backgrounds
- Darkened art cover image behind page titles
- Animated rain on the home page
- Responsive mobile navigation

## Add your cover image
Put your preferred banner/cover artwork in:

`assets/images/cover.jpg`

Use a reasonably wide image (for example 1600 × 700 px or larger). The CSS automatically darkens the image so the white title stays readable.

## Add artwork
1. Put your PNG/GIF/WebP inside `assets/art/`.
2. Open `assets/js/art-data.js`.
3. Add an object such as:

```js
{
  title: "Blue Witch",
  category: "static-custom",
  file: "blue-witch.png",
  meta: "52 × 52 · Static Custom",
  premade: false
}
```

Available categories:
- `static-custom`
- `food-series`
- `spinning`
- `wiggly`
- `simple-animated`
- `custom-animated`
- `sprites`
- `pixel-headshots`

Set `premade: true` if the artwork should also appear on the Premades page.

### Artwork display
Gallery thumbnails include a low-opacity `@celerku` overlay. Clicking an artwork opens:
- a large pixel-perfect upscaled preview with watermark
- an exact 1:1 native-size preview

The watermark is an HTML/CSS overlay. It does **not** permanently alter your source art file.

## Update prices
Edit the table inside `information.html`. Replace every `Add price` cell with your real price. You can add rows for extras, animation, rush fees, commercial use, etc.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload everything in this folder to the repository root.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.

GitHub will give you your Pages URL once deployment is complete.

## Artwork protection note
The site blocks right-clicking and dragging on gallery images and shows a polite “please don’t download/repost” notice. This is only a deterrent: any image displayed in a browser can still be copied by a determined visitor. The visible @celerku watermark and publishing only web-sized previews provide stronger practical protection.
