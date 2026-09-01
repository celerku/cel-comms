// PIXEL ART DATA
// IMPORTANT: upload ONLY prepared/watermarked web copies to assets/art-web/.
// Keep clean originals on your own computer — never in this public GitHub repo.
//
// Fields:
// title: exact art name; copied as [[title]] when copyable is true
// commissioner: optional; leave "" to hide it
// dimensions: text shown to visitors, e.g. "52 × 52 px"
// nativeWidth/nativeHeight: original artwork dimensions in pixels; used for the true 1:1 preview
// category: static-custom, food-series, spinning, wiggly, simple-animated, custom-animated, sprites, pixel-headshots
// file: filename of the prepared web copy in assets/art-web/
// copyable: true/false — whether clicking the card copies [[title]]
// premade: true/false — whether it also appears on Premades
const ARTWORKS = [
  { title:"Cat", commissioner:"", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"static-custom", file:"", copyable:true, premade:false },
  { title:"Example food", commissioner:"ExampleUser", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"food-series", file:"", copyable:false, premade:false },
  { title:"Example spinner", commissioner:"", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"spinning", file:"", copyable:true, premade:false },
  { title:"Example wiggle", commissioner:"", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"wiggly", file:"", copyable:true, premade:false },
  { title:"Example simple animation", commissioner:"", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"simple-animated", file:"", copyable:true, premade:false },
  { title:"Example custom animation", commissioner:"", dimensions:"52 × 52 px", nativeWidth:52, nativeHeight:52, category:"custom-animated", file:"", copyable:true, premade:false },
  { title:"Example sprite", commissioner:"", dimensions:"34 × 34 px", nativeWidth:34, nativeHeight:34, category:"sprites", file:"", copyable:true, premade:false },
  { title:"Example headshot", commissioner:"", dimensions:"64 × 64 px", nativeWidth:64, nativeHeight:64, category:"pixel-headshots", file:"", copyable:true, premade:false }
];
