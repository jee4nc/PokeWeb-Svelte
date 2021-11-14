
/**
 * @roxi/routify 2.18.3
 * File generated Sun Nov 14 2021 19:11:28 GMT-0300 (Chile Summer Time)
 */

export const __version = "2.18.3"
export const __timestamp = "2021-11-14T22:11:28.482Z"

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
      "isFile": false,
      "isDir": true,
      "file": "list",
      "filepath": "/list",
      "name": "list",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/list",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/list/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/list/index.svelte",
          "importPath": "../src/pages/list/index.svelte",
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
          "path": "/list/index",
          "id": "_list_index",
          "component": () => import('../src/pages/list/index.svelte').then(m => m.default)
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
      "path": "/list"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "search",
      "filepath": "/search",
      "name": "search",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/search",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/search/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/jee4nc/MegaTime/practice-mega/practiceSvelte/svelte-frontend/src/pages/search/index.svelte",
          "importPath": "../src/pages/search/index.svelte",
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
          "path": "/search/index",
          "id": "_search_index",
          "component": () => import('../src/pages/search/index.svelte').then(m => m.default)
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
      "path": "/search"
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

