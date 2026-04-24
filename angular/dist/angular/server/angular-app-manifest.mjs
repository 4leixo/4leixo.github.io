
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://4leixo.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6480, hash: 'ab3baa65a4217ccc31d89eaa11457af107feccf1120ea623ea94df2b8a14b50c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '6e31847d0851c47b72e502654ee941769ab8e35d13ee300098255f277fc2abe7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34323, hash: 'f0d28400c20b227dca336f756796c3661d1e9512f435fa1d346587fc0ea0491c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKXNZ443.css': {size: 11904, hash: 'rAed5OjJmUY', text: () => import('./assets-chunks/styles-QKXNZ443_css.mjs').then(m => m.default)}
  },
};
