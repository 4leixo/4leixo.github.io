
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
    'index.csr.html': {size: 6480, hash: 'ffc24f600998d88764eec7f8964a13c0d82a3891647f357a930f2e890abf5345', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: 'ac943806d1a2702274a86f1e38e92e6e94484bf54cfb1428a8f89d564da09f1b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34323, hash: '0216c20da672d4efab2a283b4b104b772463fd9c9127b1eb0a72a01a9543dd0a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QKXNZ443.css': {size: 11904, hash: 'rAed5OjJmUY', text: () => import('./assets-chunks/styles-QKXNZ443_css.mjs').then(m => m.default)}
  },
};
