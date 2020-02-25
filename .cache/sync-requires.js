const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/daniel/Documents/powersites-get/.cache/dev-404-page.js"))),
  "component---src-pages-contato-js": hot(preferDefault(require("/Users/daniel/Documents/powersites-get/src/pages/contato.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/daniel/Documents/powersites-get/src/pages/index.js"))),
  "component---src-pages-sobre-js": hot(preferDefault(require("/Users/daniel/Documents/powersites-get/src/pages/sobre.js")))
}

