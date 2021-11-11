
/**
 * @roxi/routify 2.18.3
 * File generated Thu Nov 11 2021 15:20:13 GMT-0300 (Chile Summer Time)
 */

export const __version = "2.18.3"
export const __timestamp = "2021-11-11T18:20:13.318Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "about",
      "filepath": "/about",
      "name": "about",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/about",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/about/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/about/index.svelte",
          "importPath": "../src/pages/about/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/about/index",
          "id": "_about_index",
          "component": () => import('../src/pages/about/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "contact",
      "filepath": "/contact",
      "name": "contact",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/contact",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/contact/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/contact/index.svelte",
          "importPath": "../src/pages/contact/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/contact/index",
          "id": "_contact_index",
          "component": () => import('../src/pages/contact/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/contact"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "navbarComponent.svelte",
      "filepath": "/navbarComponent.svelte",
      "name": "navbarComponent",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/navbarComponent.svelte",
      "importPath": "../src/pages/navbarComponent.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/navbarComponent",
      "id": "_navbarComponent",
      "component": () => import('../src/pages/navbarComponent.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "products",
      "filepath": "/products",
      "name": "products",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/products",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/products/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/products/index.svelte",
          "importPath": "../src/pages/products/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/products/index",
          "id": "_products_index",
          "component": () => import('../src/pages/products/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/products"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

