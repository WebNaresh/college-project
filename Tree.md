├── .dockerignore
├── .env
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .next
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── cache
│   │   ├── swc
│   │   │   └── plugins
│   │   │       └── v7_windows_x86_64_0.104.30
│   │   └── webpack
│   │       ├── client-development
│   │       │   ├── 0.pack.gz
│   │       │   ├── 1.pack.gz
│   │       │   ├── 10.pack.gz
│   │       │   ├── 11.pack.gz
│   │       │   ├── 12.pack.gz
│   │       │   ├── 2.pack.gz
│   │       │   ├── 3.pack.gz
│   │       │   ├── 4.pack.gz
│   │       │   ├── 5.pack.gz
│   │       │   ├── 6.pack.gz
│   │       │   ├── 7.pack.gz
│   │       │   ├── 8.pack.gz
│   │       │   ├── 9.pack.gz
│   │       │   ├── index.pack.gz
│   │       │   └── index.pack.gz.old
│   │       ├── client-development-fallback
│   │       │   ├── 0.pack.gz
│   │       │   └── index.pack.gz
│   │       └── server-development
│   │           ├── 0.pack.gz
│   │           ├── 1.pack.gz
│   │           ├── 10.pack.gz
│   │           ├── 2.pack.gz
│   │           ├── 3.pack.gz
│   │           ├── 4.pack.gz
│   │           ├── 5.pack.gz
│   │           ├── 6.pack.gz
│   │           ├── 7.pack.gz
│   │           ├── 8.pack.gz
│   │           ├── 9.pack.gz
│   │           ├── index.pack.gz
│   │           └── index.pack.gz.old
│   ├── fallback-build-manifest.json
│   ├── package.json
│   ├── react-loadable-manifest.json
│   ├── server
│   │   ├── app
│   │   │   ├── academic-evaluation
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── api
│   │   │   │   ├── auth
│   │   │   │   │   └── [...nextauth]
│   │   │   │   │       └── route.js
│   │   │   │   ├── form
│   │   │   │   │   └── teaching-learning
│   │   │   │   │       └── route.js
│   │   │   │   ├── signup
│   │   │   │   │   └── route.js
│   │   │   │   └── users
│   │   │   │       └── route.js
│   │   │   ├── hod
│   │   │   │   ├── get-report
│   │   │   │   │   ├── page.js
│   │   │   │   │   └── page_client-reference-manifest.js
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── login
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── not-found.js
│   │   │   ├── not-found_client-reference-manifest.js
│   │   │   ├── page.js
│   │   │   ├── page_client-reference-manifest.js
│   │   │   ├── signup
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── teacher
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   ├── waiting
│   │   │   │   ├── page.js
│   │   │   │   └── page_client-reference-manifest.js
│   │   │   └── _not-found_client-reference-manifest.js
│   │   ├── app-paths-manifest.json
│   │   ├── middleware-build-manifest.js
│   │   ├── middleware-manifest.json
│   │   ├── middleware-react-loadable-manifest.js
│   │   ├── next-font-manifest.js
│   │   ├── next-font-manifest.json
│   │   ├── pages
│   │   │   ├── _app.js
│   │   │   ├── _document.js
│   │   │   └── _error.js
│   │   ├── pages-manifest.json
│   │   ├── server-reference-manifest.js
│   │   ├── server-reference-manifest.json
│   │   ├── vendor-chunks
│   │   │   ├── @auth.js
│   │   │   ├── @babel.js
│   │   │   ├── @floating-ui.js
│   │   │   ├── @hookform.js
│   │   │   ├── @panva.js
│   │   │   ├── @radix-ui.js
│   │   │   ├── @swc.js
│   │   │   ├── @tanstack.js
│   │   │   ├── aria-hidden.js
│   │   │   ├── asynckit.js
│   │   │   ├── axios.js
│   │   │   ├── class-variance-authority.js
│   │   │   ├── clsx.js
│   │   │   ├── combined-stream.js
│   │   │   ├── cookie.js
│   │   │   ├── date-fns.js
│   │   │   ├── debug.js
│   │   │   ├── delayed-stream.js
│   │   │   ├── follow-redirects.js
│   │   │   ├── form-data.js
│   │   │   ├── get-nonce.js
│   │   │   ├── goober.js
│   │   │   ├── has-flag.js
│   │   │   ├── jose.js
│   │   │   ├── lru-cache.js
│   │   │   ├── lucide-react.js
│   │   │   ├── mime-db.js
│   │   │   ├── mime-types.js
│   │   │   ├── ms.js
│   │   │   ├── next-auth.js
│   │   │   ├── next-themes.js
│   │   │   ├── next.js
│   │   │   ├── oauth.js
│   │   │   ├── oidc-token-hash.js
│   │   │   ├── openid-client.js
│   │   │   ├── proxy-from-env.js
│   │   │   ├── react-day-picker.js
│   │   │   ├── react-hook-form.js
│   │   │   ├── react-hot-toast.js
│   │   │   ├── react-remove-scroll-bar.js
│   │   │   ├── react-remove-scroll.js
│   │   │   ├── react-style-singleton.js
│   │   │   ├── supports-color.js
│   │   │   ├── tailwind-merge.js
│   │   │   ├── tslib.js
│   │   │   ├── use-callback-ref.js
│   │   │   ├── use-sidecar.js
│   │   │   ├── uuid.js
│   │   │   ├── yallist.js
│   │   │   └── zod.js
│   │   ├── webpack-runtime.js
│   │   └── _error.js
│   ├── static
│   │   ├── chunks
│   │   │   ├── app
│   │   │   │   ├── academic-evaluation
│   │   │   │   │   └── page.js
│   │   │   │   ├── global-error.js
│   │   │   │   ├── hod
│   │   │   │   │   ├── get-report
│   │   │   │   │   │   └── page.js
│   │   │   │   │   └── page.js
│   │   │   │   ├── layout.js
│   │   │   │   ├── login
│   │   │   │   │   └── page.js
│   │   │   │   ├── not-found.js
│   │   │   │   ├── page.js
│   │   │   │   ├── signup
│   │   │   │   │   └── page.js
│   │   │   │   ├── teacher
│   │   │   │   │   └── page.js
│   │   │   │   └── waiting
│   │   │   │       └── page.js
│   │   │   ├── app-pages-internals.js
│   │   │   ├── fallback
│   │   │   │   ├── amp.js
│   │   │   │   ├── main.js
│   │   │   │   ├── pages
│   │   │   │   │   ├── _app.js
│   │   │   │   │   └── _error.js
│   │   │   │   ├── react-refresh.js
│   │   │   │   └── webpack.js
│   │   │   ├── main-app.js
│   │   │   ├── main.js
│   │   │   ├── pages
│   │   │   │   ├── _app.js
│   │   │   │   └── _error.js
│   │   │   ├── polyfills.js
│   │   │   ├── react-refresh.js
│   │   │   ├── webpack.js
│   │   │   ├── _app-pages-browser_node_modules_tanstack_query-devtools_build_Devtools_A6DP7BKI_js.js
│   │   │   └── _error.js
│   │   ├── css
│   │   │   └── app
│   │   │       ├── layout.css
│   │   │       └── signup
│   │   │           └── page.css
│   │   ├── development
│   │   │   ├── _buildManifest.js
│   │   │   └── _ssgManifest.js
│   │   ├── media
│   │   │   ├── 26a46d62cd723877-s.woff2
│   │   │   ├── 55c55f0601d81cf3-s.woff2
│   │   │   ├── 581909926a08bbc8-s.woff2
│   │   │   ├── 6d93bde91c0c2823-s.woff2
│   │   │   ├── 97e0cb1ae144a2a9-s.woff2
│   │   │   ├── a34f9d1faa5f3315-s.p.woff2
│   │   │   └── df0a9ae256c0569c-s.woff2
│   │   └── webpack
│   │       ├── 08a354468d2e9398.webpack.hot-update.json
│   │       ├── 0dea1a15805d0d51.webpack.hot-update.json
│   │       ├── 1ed75458aa9326bf.webpack.hot-update.json
│   │       ├── 29299432a36ef33b.webpack.hot-update.json
│   │       ├── 2dba74083777a20e.webpack.hot-update.json
│   │       ├── 2dfe59357f490ec8.webpack.hot-update.json
│   │       ├── 41131d15475a9953.webpack.hot-update.json
│   │       ├── 42ff27887e48c42f.webpack.hot-update.json
│   │       ├── 4c8cd2071f7287c0.webpack.hot-update.json
│   │       ├── 4d4723cb7970a3c6.webpack.hot-update.json
│   │       ├── 4ef4f793231815e0.webpack.hot-update.json
│   │       ├── 51af4f861ae82107.webpack.hot-update.json
│   │       ├── 5a1344923c92a588.webpack.hot-update.json
│   │       ├── 5c61d6cdfb73f997.webpack.hot-update.json
│   │       ├── 61e152679aa13360.webpack.hot-update.json
│   │       ├── 633457081244afec._.hot-update.json
│   │       ├── 66c71cd12756eb78.webpack.hot-update.json
│   │       ├── 6a9f87839f88985a.webpack.hot-update.json
│   │       ├── 70a20c1cc4505a1c.webpack.hot-update.json
│   │       ├── 712a9672a6ebcc60.webpack.hot-update.json
│   │       ├── 7f7ca4cee4d5a212.webpack.hot-update.json
│   │       ├── 865815a9cb76da72.webpack.hot-update.json
│   │       ├── 8919dca96ae0bf12.webpack.hot-update.json
│   │       ├── 89206bcd722c5b6b.webpack.hot-update.json
│   │       ├── 92cd48e1fca3cccd.webpack.hot-update.json
│   │       ├── 9871587d03a13b03.webpack.hot-update.json
│   │       ├── a5d31c0f00b951c5.webpack.hot-update.json
│   │       ├── a89ba3671404e290.webpack.hot-update.json
│   │       ├── app
│   │       │   ├── academic-evaluation
│   │       │   │   └── page.66c71cd12756eb78.hot-update.js
│   │       │   ├── hod
│   │       │   │   ├── page.4ef4f793231815e0.hot-update.js
│   │       │   │   ├── page.7f7ca4cee4d5a212.hot-update.js
│   │       │   │   └── page.f00dec0536f5ffc6.hot-update.js
│   │       │   ├── layout.08a354468d2e9398.hot-update.js
│   │       │   ├── layout.0dea1a15805d0d51.hot-update.js
│   │       │   ├── layout.1ed75458aa9326bf.hot-update.js
│   │       │   ├── layout.29299432a36ef33b.hot-update.js
│   │       │   ├── layout.2dfe59357f490ec8.hot-update.js
│   │       │   ├── layout.42ff27887e48c42f.hot-update.js
│   │       │   ├── layout.4c8cd2071f7287c0.hot-update.js
│   │       │   ├── layout.4ef4f793231815e0.hot-update.js
│   │       │   ├── layout.51af4f861ae82107.hot-update.js
│   │       │   ├── layout.5a1344923c92a588.hot-update.js
│   │       │   ├── layout.61e152679aa13360.hot-update.js
│   │       │   ├── layout.66c71cd12756eb78.hot-update.js
│   │       │   ├── layout.6a9f87839f88985a.hot-update.js
│   │       │   ├── layout.70a20c1cc4505a1c.hot-update.js
│   │       │   ├── layout.712a9672a6ebcc60.hot-update.js
│   │       │   ├── layout.7f7ca4cee4d5a212.hot-update.js
│   │       │   ├── layout.8919dca96ae0bf12.hot-update.js
│   │       │   ├── layout.89206bcd722c5b6b.hot-update.js
│   │       │   ├── layout.92cd48e1fca3cccd.hot-update.js
│   │       │   ├── layout.9871587d03a13b03.hot-update.js
│   │       │   ├── layout.a5d31c0f00b951c5.hot-update.js
│   │       │   ├── layout.a89ba3671404e290.hot-update.js
│   │       │   ├── layout.b290ba215c298aea.hot-update.js
│   │       │   ├── layout.b7671443e577d1c0.hot-update.js
│   │       │   ├── layout.c31db12007177b29.hot-update.js
│   │       │   ├── layout.c98f3e5ea5eaf174.hot-update.js
│   │       │   ├── layout.e72a24df101b4433.hot-update.js
│   │       │   ├── layout.f00dec0536f5ffc6.hot-update.js
│   │       │   ├── layout.f5234b3c6560836d.hot-update.js
│   │       │   ├── login
│   │       │   │   ├── page.0dea1a15805d0d51.hot-update.js
│   │       │   │   ├── page.70a20c1cc4505a1c.hot-update.js
│   │       │   │   └── page.b7671443e577d1c0.hot-update.js
│   │       │   ├── signup
│   │       │   │   ├── page.08a354468d2e9398.hot-update.js
│   │       │   │   ├── page.2dfe59357f490ec8.hot-update.js
│   │       │   │   ├── page.5a1344923c92a588.hot-update.js
│   │       │   │   ├── page.6a9f87839f88985a.hot-update.js
│   │       │   │   ├── page.9871587d03a13b03.hot-update.js
│   │       │   │   ├── page.a5d31c0f00b951c5.hot-update.js
│   │       │   │   ├── page.a89ba3671404e290.hot-update.js
│   │       │   │   ├── page.b290ba215c298aea.hot-update.js
│   │       │   │   └── page.c31db12007177b29.hot-update.js
│   │       │   └── teacher
│   │       │       └── page.7f7ca4cee4d5a212.hot-update.js
│   │       ├── b290ba215c298aea.webpack.hot-update.json
│   │       ├── b7671443e577d1c0.webpack.hot-update.json
│   │       ├── c31db12007177b29.webpack.hot-update.json
│   │       ├── c98f3e5ea5eaf174.webpack.hot-update.json
│   │       ├── cea5020599b14f42.webpack.hot-update.json
│   │       ├── e72a24df101b4433.webpack.hot-update.json
│   │       ├── f00dec0536f5ffc6.webpack.hot-update.json
│   │       ├── f3201e035f18fa95.webpack.hot-update.json
│   │       ├── f5234b3c6560836d.webpack.hot-update.json
│   │       ├── webpack.08a354468d2e9398.hot-update.js
│   │       ├── webpack.0dea1a15805d0d51.hot-update.js
│   │       ├── webpack.1ed75458aa9326bf.hot-update.js
│   │       ├── webpack.29299432a36ef33b.hot-update.js
│   │       ├── webpack.2dba74083777a20e.hot-update.js
│   │       ├── webpack.2dfe59357f490ec8.hot-update.js
│   │       ├── webpack.41131d15475a9953.hot-update.js
│   │       ├── webpack.42ff27887e48c42f.hot-update.js
│   │       ├── webpack.4c8cd2071f7287c0.hot-update.js
│   │       ├── webpack.4d4723cb7970a3c6.hot-update.js
│   │       ├── webpack.4ef4f793231815e0.hot-update.js
│   │       ├── webpack.51af4f861ae82107.hot-update.js
│   │       ├── webpack.5a1344923c92a588.hot-update.js
│   │       ├── webpack.5c61d6cdfb73f997.hot-update.js
│   │       ├── webpack.61e152679aa13360.hot-update.js
│   │       ├── webpack.66c71cd12756eb78.hot-update.js
│   │       ├── webpack.6a9f87839f88985a.hot-update.js
│   │       ├── webpack.70a20c1cc4505a1c.hot-update.js
│   │       ├── webpack.712a9672a6ebcc60.hot-update.js
│   │       ├── webpack.7f7ca4cee4d5a212.hot-update.js
│   │       ├── webpack.865815a9cb76da72.hot-update.js
│   │       ├── webpack.8919dca96ae0bf12.hot-update.js
│   │       ├── webpack.89206bcd722c5b6b.hot-update.js
│   │       ├── webpack.92cd48e1fca3cccd.hot-update.js
│   │       ├── webpack.9871587d03a13b03.hot-update.js
│   │       ├── webpack.a5d31c0f00b951c5.hot-update.js
│   │       ├── webpack.a89ba3671404e290.hot-update.js
│   │       ├── webpack.b290ba215c298aea.hot-update.js
│   │       ├── webpack.b7671443e577d1c0.hot-update.js
│   │       ├── webpack.c31db12007177b29.hot-update.js
│   │       ├── webpack.c98f3e5ea5eaf174.hot-update.js
│   │       ├── webpack.cea5020599b14f42.hot-update.js
│   │       ├── webpack.e72a24df101b4433.hot-update.js
│   │       ├── webpack.f00dec0536f5ffc6.hot-update.js
│   │       ├── webpack.f3201e035f18fa95.hot-update.js
│   │       └── webpack.f5234b3c6560836d.hot-update.js
│   ├── trace
│   └── types
│       ├── app
│       │   ├── academic-evaluation
│       │   │   └── page.ts
│       │   ├── api
│       │   │   ├── auth
│       │   │   │   └── [...nextauth]
│       │   │   │       └── route.ts
│       │   │   ├── form
│       │   │   │   └── teaching-learning
│       │   │   │       └── route.ts
│       │   │   ├── signup
│       │   │   │   └── route.ts
│       │   │   └── users
│       │   │       └── route.ts
│       │   ├── hod
│       │   │   ├── get-report
│       │   │   │   └── page.ts
│       │   │   └── page.ts
│       │   ├── layout.ts
│       │   ├── login
│       │   │   └── page.ts
│       │   ├── page.ts
│       │   ├── signup
│       │   │   └── page.ts
│       │   ├── teacher
│       │   │   └── page.ts
│       │   └── waiting
│       │       └── page.ts
│       └── package.json
├── app
│   ├── (essential)
│   │   └── globals.css
│   ├── academic-assets
│   │   ├── components
│   │   │   ├── form.tsx
│   │   │   └── steps
│   │   │       ├── components
│   │   │       │   ├── column.tsx
│   │   │       │   └── data-table.tsx
│   │   │       ├── step1
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step1.tsx
│   │   │       ├── step2
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step2.tsx
│   │   │       ├── step3
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step3.tsx
│   │   │       └── step4
│   │   │           ├── components
│   │   │           │   ├── column.tsx
│   │   │           │   ├── mini-form.tsx
│   │   │           │   └── table.tsx
│   │   │           └── step4.tsx
│   │   └── page.tsx
│   ├── academic-duties
│   │   ├── components
│   │   │   ├── form.tsx
│   │   │   └── steps
│   │   │       ├── components
│   │   │       │   ├── column.tsx
│   │   │       │   └── data-table.tsx
│   │   │       ├── step1
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step2.tsx
│   │   │       ├── step2
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step2.tsx
│   │   │       ├── step3
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step3.tsx
│   │   │       ├── step4
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step4.tsx
│   │   │       └── step5
│   │   │           ├── components
│   │   │           │   ├── column.tsx
│   │   │           │   ├── mini-form.tsx
│   │   │           │   └── table.tsx
│   │   │           └── step5.tsx
│   │   └── page.tsx
│   ├── academic-evaluation
│   │   ├── components
│   │   │   ├── form.tsx
│   │   │   ├── steps
│   │   │   │   ├── components
│   │   │   │   │   ├── column.tsx
│   │   │   │   │   └── data-table.tsx
│   │   │   │   ├── step1
│   │   │   │   │   ├── components
│   │   │   │   │   │   └── mini-form.tsx
│   │   │   │   │   └── step1.tsx
│   │   │   │   ├── step2
│   │   │   │   │   ├── components
│   │   │   │   │   │   └── mini-form.tsx
│   │   │   │   │   └── step2.tsx
│   │   │   │   ├── step3
│   │   │   │   │   ├── components
│   │   │   │   │   │   └── mini-form.tsx
│   │   │   │   │   └── step3.tsx
│   │   │   │   ├── step4
│   │   │   │   │   ├── components
│   │   │   │   │   │   └── mini-form.tsx
│   │   │   │   │   └── step4.tsx
│   │   │   │   ├── step5
│   │   │   │   │   ├── components
│   │   │   │   │   │   └── mini-form.tsx
│   │   │   │   │   └── step5.tsx
│   │   │   │   └── step6
│   │   │   │       ├── components
│   │   │   │       │   ├── column.tsx
│   │   │   │       │   ├── mini-form.tsx
│   │   │   │       │   └── table.tsx
│   │   │   │       └── step6.tsx
│   │   │   └── year.tsx
│   │   └── page.tsx
│   ├── academic-intutivenes
│   │   ├── components
│   │   │   ├── form.tsx
│   │   │   └── steps
│   │   │       ├── components
│   │   │       │   ├── column.tsx
│   │   │       │   └── data-table.tsx
│   │   │       ├── step1
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step1.tsx
│   │   │       ├── step2
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step2.tsx
│   │   │       └── step3
│   │   │           ├── components
│   │   │           │   ├── column.tsx
│   │   │           │   ├── mini-form.tsx
│   │   │           │   └── table.tsx
│   │   │           └── step3.tsx
│   │   └── page.tsx
│   ├── academic-intutivenes-assets
│   │   ├── components
│   │   │   ├── form.tsx
│   │   │   └── steps
│   │   │       ├── components
│   │   │       │   ├── column.tsx
│   │   │       │   └── data-table.tsx
│   │   │       ├── step1
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step1.tsx
│   │   │       ├── step2
│   │   │       │   ├── components
│   │   │       │   │   ├── column.tsx
│   │   │       │   │   ├── mini-form.tsx
│   │   │       │   │   └── table.tsx
│   │   │       │   └── step2.tsx
│   │   │       └── step3
│   │   │           ├── components
│   │   │           │   ├── column.tsx
│   │   │           │   ├── mini-form.tsx
│   │   │           │   └── table.tsx
│   │   │           └── step3.tsx
│   │   └── page.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── form
│   │   │   ├── achievements
│   │   │   │   ├── route.ts
│   │   │   │   └── [achievementsId]
│   │   │   │       └── route.ts
│   │   │   ├── books
│   │   │   │   ├── route.ts
│   │   │   │   └── [bookId]
│   │   │   │       └── route.ts
│   │   │   ├── cActivity
│   │   │   │   ├── route.tsx
│   │   │   │   └── [cActivityId]
│   │   │   │       └── route.ts
│   │   │   ├── conferences
│   │   │   │   ├── route.ts
│   │   │   │   └── [conferenceId]
│   │   │   │       └── route.ts
│   │   │   ├── copyRight
│   │   │   │   ├── route.ts
│   │   │   │   └── [copyrightId]
│   │   │   │       └── route.ts
│   │   │   ├── duties
│   │   │   │   ├── route.ts
│   │   │   │   └── [dutiesId]
│   │   │   │       └── route.ts
│   │   │   ├── efforts-extra-curriculum
│   │   │   │   ├── route.ts
│   │   │   │   └── [effortId]
│   │   │   │       └── route.ts
│   │   │   ├── evaluation
│   │   │   │   ├── route.ts
│   │   │   │   └── [tradeMarkId]
│   │   │   │       └── route.ts
│   │   │   ├── feedback
│   │   │   │   └── route.ts
│   │   │   ├── irg
│   │   │   │   ├── route.ts
│   │   │   │   └── [irgId]
│   │   │   │       └── route.ts
│   │   │   ├── journals
│   │   │   │   ├── route.ts
│   │   │   │   └── [journalId]
│   │   │   │       └── route.ts
│   │   │   ├── kepAttended
│   │   │   │   ├── route.ts
│   │   │   │   └── [kepId]
│   │   │   │       └── route.ts
│   │   │   ├── kepOrganized
│   │   │   │   ├── route.ts
│   │   │   │   └── [kepId]
│   │   │   │       └── route.ts
│   │   │   ├── patents
│   │   │   │   ├── route.ts
│   │   │   │   └── [patentId]
│   │   │   │       └── route.ts
│   │   │   ├── publication
│   │   │   │   ├── route.ts
│   │   │   │   └── [pubilcationId]
│   │   │   │       └── route.ts
│   │   │   ├── reasearch
│   │   │   │   ├── route.ts
│   │   │   │   └── [reasearchId]
│   │   │   │       └── route.ts
│   │   │   ├── responsibilityDepartment
│   │   │   │   ├── route.ts
│   │   │   │   └── [responsibilityDepartmentId]
│   │   │   │       └── route.ts
│   │   │   ├── responsibilityInsitute
│   │   │   │   ├── route.ts
│   │   │   │   └── [responsibilityInsituteId]
│   │   │   │       └── route.ts
│   │   │   ├── route.ts
│   │   │   ├── teaching-learning
│   │   │   │   ├── route.ts
│   │   │   │   └── [formId]
│   │   │   │       └── route.ts
│   │   │   └── tradeMark
│   │   │       ├── route.ts
│   │   │       └── [tradeMarkId]
│   │   │           └── route.ts
│   │   ├── signup
│   │   │   └── route.ts
│   │   ├── teacher
│   │   │   └── page.tsx
│   │   └── users
│   │       ├── route.tsx
│   │       └── [id]
│   │           └── route.tsx
│   ├── confirmation
│   │   ├── components
│   │   │   ├── academic
│   │   │   │   ├── academic-appraisel.tsx
│   │   │   │   └── components
│   │   │   │       ├── term-I-current..tsx
│   │   │   │       ├── term-II-current.tsx
│   │   │   │       └── term-II-previous.tsx
│   │   │   ├── achievement
│   │   │   │   ├── achievement.tsx
│   │   │   │   └── components
│   │   │   │       ├── column.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── books
│   │   │   │   ├── books.tsx
│   │   │   │   └── components
│   │   │   │       └── column.tsx
│   │   │   ├── cActivities
│   │   │   │   ├── cActivities.tsx
│   │   │   │   └── components
│   │   │   │       └── column.tsx
│   │   │   ├── download-button.tsx
│   │   │   ├── duties
│   │   │   │   ├── components
│   │   │   │   │   └── row-span.tsx
│   │   │   │   └── duties.tsx
│   │   │   ├── efforts
│   │   │   │   └── efforts.tsx
│   │   │   ├── evaluation-form
│   │   │   │   ├── components
│   │   │   │   │   ├── evaluation-footer.tsx
│   │   │   │   │   ├── evaluation-row.tsx
│   │   │   │   │   ├── evaluation-table.tsx
│   │   │   │   │   └── interface.d.ts
│   │   │   │   ├── evaluation-form.tsx
│   │   │   │   └── html2pdf.d.ts
│   │   │   ├── feedback
│   │   │   │   ├── components
│   │   │   │   │   ├── bottom.tsx
│   │   │   │   │   ├── header.tsx
│   │   │   │   │   └── row.tsx
│   │   │   │   └── feedback-info.tsx
│   │   │   ├── header
│   │   │   │   └── header.tsx
│   │   │   ├── header-text.tsx
│   │   │   ├── irg
│   │   │   │   ├── components
│   │   │   │   │   └── column.tsx
│   │   │   │   └── irg.tsx
│   │   │   ├── kms-attended
│   │   │   │   ├── components
│   │   │   │   │   └── column.tsx
│   │   │   │   └── kms-attended.tsx
│   │   │   ├── kms-organized
│   │   │   │   ├── components
│   │   │   │   │   └── column.tsx
│   │   │   │   └── kms-organized.tsx
│   │   │   ├── patents
│   │   │   │   ├── components
│   │   │   │   │   ├── copyRightColumn.tsx
│   │   │   │   │   ├── patentColumn.tsx
│   │   │   │   │   └── trademarkColumn.tsx
│   │   │   │   └── patents.tsx
│   │   │   ├── personal
│   │   │   │   ├── components
│   │   │   │   │   └── text-field.tsx
│   │   │   │   └── personal-info.tsx
│   │   │   ├── publication
│   │   │   │   ├── components
│   │   │   │   │   └── column.tsx
│   │   │   │   └── publication.tsx
│   │   │   ├── reasearch
│   │   │   │   ├── components
│   │   │   │   │   ├── column.tsx
│   │   │   │   │   └── table.tsx
│   │   │   │   └── reasearch.tsx
│   │   │   ├── responsibility
│   │   │   │   ├── components
│   │   │   │   │   ├── department-responsibility.tsx
│   │   │   │   │   └── institute-responsibility.tsx
│   │   │   │   └── responsibilty.tsx
│   │   │   └── table.tsx
│   │   ├── form.tsx
│   │   └── page.tsx
│   ├── global-error.tsx
│   ├── hod
│   │   ├── get-report
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── loader.tsx
│   ├── login
│   │   ├── components
│   │   │   └── login-form.tsx
│   │   ├── loader.tsx
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── signup
│   │   ├── components
│   │   │   └── signup-form.tsx
│   │   ├── loader.tsx
│   │   └── page.tsx
│   ├── teacher
│   │   └── page.tsx
│   └── waiting
│       ├── loader.tsx
│       └── page.tsx
├── components
│   ├── Loader
│   │   └── loader.tsx
│   ├── Navbar
│   │   ├── navbar.tsx
│   │   ├── Notification.tsx
│   │   └── SingleNotify.tsx
│   ├── step-form
│   │   ├── bottom.tsx
│   │   ├── form-wrapper.tsx
│   │   └── header.tsx
│   ├── toggle-button.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── popover.tsx
│       ├── select.tsx
│       ├── sheet.tsx
│       └── table.tsx
├── components.json
├── custom-hooks
│   └── useStepForm.tsx
├── demo.bat
├── docker-compose.yml
├── Dockerfile
├── hook
│   └── useProfileMutation.ts
├── lib
│   ├── auth.ts
│   ├── functions.ts
│   ├── next-auth.d.ts
│   ├── prisma.ts
│   ├── utils.ts
│   └── zObject.ts
├── next-env.d.ts
├── next.config.js
├── obt one mobile networking.pdf
├── package-lock.json
├── package.json
├── postcss.config.js
├── prisma
│   └── schema.prisma
├── README.md
├── start_nextjs.bat
├── tailwind.config.js
├── tailwind.config.ts
├── tsconfig.json
├── workspace-settings.code-workspace
├── wrappers
│   ├── auth-provider.tsx
│   ├── loading-wrapper.tsx
│   ├── query-client-wrapper.tsx
│   └── theme-provider.tsx
└── yarn.lock
