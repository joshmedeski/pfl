var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// ../../node_modules/.pnpm/@remix-run+dev@1.2.3_react-dom@17.0.2+react@17.0.2/node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "../../node_modules/.pnpm/@remix-run+dev@1.2.3_react-dom@17.0.2+react@17.0.2/node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// ../../node_modules/.pnpm/remix@1.2.3/node_modules/remix/index.js
var require_remix = __commonJS({
  "../../node_modules/.pnpm/remix@1.2.3/node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
init_react();
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_classnames2 = __toESM(require("classnames"));
var import_remix4 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SWRFOH4P.css";

// app/components/RootHeader.tsx
init_react();
var import_solid = require("@heroicons/react/solid");
var import_classnames = __toESM(require("classnames"));
var import_remix3 = __toESM(require_remix());

// app/components/Logo.tsx
init_react();
var import_react = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var Logo = () => {
  return /* @__PURE__ */ import_react.default.createElement("h1", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, {
    to: "/",
    className: "font-bold flex items-center"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 mr-2",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
  })), /* @__PURE__ */ import_react.default.createElement("span", null, "Personal Film Library")));
};
var Logo_default = Logo;

// app/components/RootHeader.tsx
var RootHeader = () => {
  const nav = [
    { href: "/people", text: "People" },
    { href: "/movies", text: "Movies" },
    { href: "/tv", text: "TV Shows" },
    { href: "/popular", text: "Popular" },
    { href: "/search", text: "Search" }
  ];
  return /* @__PURE__ */ React.createElement("header", {
    className: (0, import_classnames.default)([
      "z-50 fixed bg-white dark:bg-gray-900 w-full",
      "border-b border-gray-300 dark:border-gray-700"
    ])
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between items-center p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-4"
  }, /* @__PURE__ */ React.createElement(Logo_default, null), /* @__PURE__ */ React.createElement("nav", {
    className: "hidden md:block border-l border-gray-300 dark:border-gray-700 ml-2 pl-2"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex"
  }, nav.map(({ text, href }) => /* @__PURE__ */ React.createElement("li", {
    key: `${text} header nav`
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: href,
    className: (0, import_classnames.default)(["px-3 py-2"])
  }, text)))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement(import_solid.SearchIcon, {
    className: "w-6 h-6 text-gray-500"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4"
  }, "Login"))));
};
var RootHeader_default = RootHeader;

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => {
  return { title: "Personal Film Library" };
};
var RootLayout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: (0, import_classnames2.default)([
      "bg-white-100 text-black",
      "dark:bg-gray-900 dark:text-white"
    ])
  }, /* @__PURE__ */ React.createElement(RootHeader_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "pt-[53px]"
  }, children, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), false));
};
function App() {
  return /* @__PURE__ */ React.createElement(RootLayout, null);
}
function CatchBoundary() {
  const caught = (0, import_remix4.useCatch)();
  return /* @__PURE__ */ React.createElement(RootLayout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/tv/$tvId-expired/season/$seasonNumber.tsx
var seasonNumber_exports = {};
__export(seasonNumber_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_moviestmdb = __toESM(require("moviestmdb"));
var import_remix6 = __toESM(require_remix());

// app/components/Grid.tsx
init_react();
var import_classnames4 = __toESM(require("classnames"));
var import_react2 = __toESM(require("react"));

// app/components/Card.tsx
init_react();
var import_classnames3 = __toESM(require("classnames"));
var import_remix5 = __toESM(require_remix());
var Card = ({ img, title, meta: meta2, to, forcedWidth }) => {
  return /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: to || "/",
    className: (0, import_classnames3.default)([
      { [String(forcedWidth)]: !!forcedWidth },
      "snap-start shrink-0",
      "bg-white dark:bg-black",
      "shadow-lg shadow-gray-300/20 hover:shadow-gray-300/40",
      "dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40",
      "transition",
      "dark:border-gray-700",
      { "rounded-b-xl": !!img },
      { "rounded-xl": !img },
      { "row-span-4 col-span-1": !!img },
      { "row-span-1 col-span-1": !img }
    ])
  }, !!img && /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames3.default)([""])
  }, /* @__PURE__ */ React.createElement("img", {
    src: `https://image.tmdb.org/t/p/w400/` + img.src,
    className: (0, import_classnames3.default)(["w-full h-auto", ""]),
    alt: title
  })), /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames3.default)([
      "p-3",
      { "grid place-content-center h-full text-center": !img }
    ])
  }, /* @__PURE__ */ React.createElement("p", {
    className: (0, import_classnames3.default)([
      "font-bold overflow-hidden mb-2",
      "text-lg whitespace-nowrap text-ellipsis",
      "leading-none"
    ])
  }, title), !!meta2 && /* @__PURE__ */ React.createElement("p", {
    className: "font-lg text-neutral-500 leading-none"
  }, meta2)));
};
var Card_default = Card;

// app/components/Grid.tsx
var Row = ({ items, title }) => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mb-4"
  }, !!title && /* @__PURE__ */ import_react2.default.createElement("h2", {
    className: "font-bold text-3xl mb-2"
  }, title), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: (0, import_classnames4.default)([
      "relative w-full flex gap-2 snap-x snap-mandatory overflow-x-auto pb-4",
      "place-content-stretch",
      "place-items-stretch"
    ])
  }, items.map((item) => /* @__PURE__ */ import_react2.default.createElement(Card_default, __spreadProps(__spreadValues({}, item), {
    forcedWidth: "w-[200px]"
  })))));
};
var Grid = ({ title, items }) => {
  const itemsWithSrc = items.filter((item) => !!(item == null ? void 0 : item.img));
  const itemsWithoutSrc = items.filter((item) => !(item == null ? void 0 : item.img));
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mb-4"
  }, !!title && /* @__PURE__ */ import_react2.default.createElement("h2", {
    className: "font-bold text-3xl mb-2"
  }, title), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: (0, import_classnames4.default)([
      "grid gap-4",
      "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
    ])
  }, itemsWithSrc.map((item) => /* @__PURE__ */ import_react2.default.createElement(Card_default, __spreadValues({}, item))), itemsWithoutSrc.map((item) => /* @__PURE__ */ import_react2.default.createElement(Card_default, __spreadValues({}, item)))));
};
var Grid_default = Grid;

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/tv/$tvId-expired/season/$seasonNumber.tsx
var loader = async ({
  params
}) => {
  const tmdb = new import_moviestmdb.default(process.env.TMDB_API);
  const details = await tmdb.getTvSeason(Number(params.tvId), Number(params.seasonNumber));
  console.log("details: ", details);
  return { details };
};
function Index() {
  var _a;
  const { details } = (0, import_remix6.useLoaderData)();
  console.log("details: ", details);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid_default, {
    title: `${details == null ? void 0 : details.name} Episodes`,
    items: ((_a = details.episodes) == null ? void 0 : _a.map((episode) => ({
      src: episode == null ? void 0 : episode.still_path,
      title: episode.name,
      meta: `Episode ${episode.episode_number} (${String(new Date(episode.air_date).getFullYear())})`,
      to: `episode/${episode.episode_number}`
    }))) || []
  }));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/tv/$tvId.season.$seasonNumber.tsx
var tvId_season_seasonNumber_exports = {};
__export(tvId_season_seasonNumber_exports, {
  default: () => Index2,
  loader: () => loader2
});
init_react();
var import_classnames5 = __toESM(require("classnames"));
var import_remix7 = __toESM(require_remix());
var import_tmdb = require("tmdb");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var loader2 = async ({
  params
}) => {
  (0, import_tiny_invariant.default)(params.tvId, "expected params.tvId");
  const tmdb = new import_tmdb.Tmdb({ apiKey: process.env.TMDB_API_KEY });
  const details = await tmdb.tvShow.season.getDetails(params.tvId, Number(params.seasonNumber));
  return { details };
};
function Index2() {
  var _a;
  const { details } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row-span-2 col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://image.tmdb.org/t/p/w400/" + details.poster_path,
    className: (0, import_classnames5.default)([
      "w-full h-auto",
      "border border-gray-700"
    ]),
    alt: details.name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 border-t border-gray-700"
  }, /* @__PURE__ */ React.createElement("p", {
    className: (0, import_classnames5.default)([
      "font-bold overflow-hidden mb-2",
      "whitespace-nowrap text-ellipsis",
      "text-center"
    ])
  }, details.name))), (_a = details.episodes) == null ? void 0 : _a.map((episode) => /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: episode.episode_number,
    className: (0, import_classnames5.default)([
      "bg-white dark:bg-black",
      "shadow-lg shadow-gray-300/20 hover:shadow-gray-300/40",
      "dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40",
      "transition",
      "border border-1 border-gray-200",
      "dark:border-gray-700",
      "rounded-b-xl"
    ])
  }, /* @__PURE__ */ React.createElement("img", {
    src: `https://image.tmdb.org/t/p/w500` + (episode == null ? void 0 : episode.still_path),
    alt: `Episode ${episode.episode_number} still`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-2 border-t border-gray-700"
  }, /* @__PURE__ */ React.createElement("p", {
    className: (0, import_classnames5.default)([
      "font-bold overflow-hidden mb-2",
      "whitespace-nowrap text-ellipsis"
    ])
  }, episode.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-500 leading-none"
  }, `Episode ${episode.episode_number} (${String(new Date(episode.air_date).getFullYear())})`)))))));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/search/index.tsx
var search_exports = {};
__export(search_exports, {
  action: () => action,
  default: () => MoviePage,
  loader: () => loader3
});
init_react();
var import_server_runtime = require("@remix-run/server-runtime");
var import_remix9 = __toESM(require_remix());
var import_classnames7 = __toESM(require("classnames"));
var import_react3 = require("react");
var import_react4 = require("@headlessui/react");
var import_outline = require("@heroicons/react/outline");
var import_use_debounce = require("use-debounce");

// app/remix-extended.ts
init_react();
var import_remix8 = __toESM(require_remix());
function useInferredRouteData() {
  return (0, import_remix8.useLoaderData)();
}

// app/utils/db.ts
init_react();
var import_tmdb2 = require("tmdb");
var Db = class extends import_tmdb2.Tmdb {
  constructor() {
    super({ apiKey: process.env.TMDB_API_KEY });
  }
};

// app/ui/Img.tsx
init_react();
var import_classnames6 = __toESM(require("classnames"));
var import_react_inner_image_zoom = __toESM(require("react-inner-image-zoom"));
var Img = ({ src, alt, size }) => {
  return /* @__PURE__ */ React.createElement("img", {
    alt,
    src: `https://image.tmdb.org/t/p/${size}` + src,
    className: (0, import_classnames6.default)(["max-w-full h-auto"])
  });
};
var PosterImg = ({ alt, src, size = "w185", innerZoom = false }) => {
  if (innerZoom) {
    return /* @__PURE__ */ React.createElement(import_react_inner_image_zoom.default, {
      src: `https://image.tmdb.org/t/p/${size}` + src,
      zoomSrc: `https://image.tmdb.org/t/p/original` + src,
      hideHint: true
    });
  } else {
    return /* @__PURE__ */ React.createElement(Img, {
      alt,
      src,
      size
    });
  }
};

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/search/index.tsx
function isMovieSearchResult(result) {
  return !!(result == null ? void 0 : result.title);
}
var loader3 = async ({ request }) => {
  let query = new URL(request.url).searchParams.get("query");
  if (!query)
    return { results: [], query: "" };
  const db = new Db();
  const { results } = await db.search.searchMovies(query);
  return { results, query };
};
var action = async ({ request }) => {
  console.log("action");
  const formData = await request.formData();
  console.log("formData: ", formData);
  const query = formData.get("query");
  return (0, import_server_runtime.redirect)(`?query=${query}`);
};
function MoviePage() {
  const submit = (0, import_remix9.useSubmit)();
  const { results, query } = useInferredRouteData();
  const [selectedResult, setSelectedResult] = (0, import_react3.useState)(results[0] ?? void 0);
  const debouncedSearch = (0, import_use_debounce.useDebouncedCallback)((target) => {
    submit(target);
  }, 500);
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-4 max-w-screen-md mx-auto mt-20"
  }, /* @__PURE__ */ React.createElement(import_react4.Combobox, {
    as: "div",
    className: (0, import_classnames7.default)([
      "transform",
      "divide-y divide-gray-100",
      "overflow-hidden rounded-xl shadow-2xl",
      "bg-white dark:bg-black",
      "ring-1 ring-black ring-opacity-5 transition-all"
    ]),
    value: selectedResult,
    onChange: (selectedResult2) => {
      if (isMovieSearchResult(selectedResult2)) {
        window.location.href = `/movies/${selectedResult2.id}`;
      }
    }
  }, ({ activeOption }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement(import_outline.SearchIcon, {
    className: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-600",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "get",
    onChange: (event) => debouncedSearch(event.currentTarget)
  }, /* @__PURE__ */ React.createElement(import_react4.Combobox.Input, {
    autoFocus: true,
    type: "text",
    name: "query",
    onChange: () => {
    },
    placeholder: "Search...",
    defaultValue: query,
    className: (0, import_classnames7.default)([
      "h-12 w-full border-0 bg-transparent pl-11 pr-4",
      "text-gray-800 dark:text-gray-200",
      "placeholder-gray-400 dark:text-gray-600",
      "focus:ring-0 sm:text-em",
      "focus:ring-primary-500"
    ])
  }))), !!results.length && /* @__PURE__ */ React.createElement(import_react4.Combobox.Options, {
    as: "div",
    static: true,
    hold: true,
    className: "flex divide-x divide-gray-100 dark:divide-gray-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames7.default)("min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-mx-2 text-sm text-gray-700 dark:text-gray-300"
  }, results.map((result) => /* @__PURE__ */ React.createElement(import_react4.Combobox.Option, {
    as: "div",
    key: result.id,
    value: result,
    className: ({ active }) => (0, import_classnames7.default)("flex cursor-default select-none items-center rounded-md p-2", active && "bg-primary-100 dark:bg-primary-900", active && "text-primary-900 dark:text-primary-100")
  }, ({ active }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-8 flex-none rounded-full"
  }, /* @__PURE__ */ React.createElement(PosterImg, {
    src: result.poster_path,
    alt: result.title,
    size: "w92"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3 flex-auto truncate"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl"
  }, result.title), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-500"
  }, !!result.release_date ? /* @__PURE__ */ React.createElement(React.Fragment, null, new Date(result.release_date).getFullYear()) : /* @__PURE__ */ React.createElement(React.Fragment, null, "TBD"))), active && /* @__PURE__ */ React.createElement(import_outline.ChevronRightIcon, {
    className: "ml-3 h-5 w-5 flex-none text-primary-900 dark:text-primary-100",
    "aria-hidden": "true"
  })))))), isMovieSearchResult(activeOption) && /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-none p-6 text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement(PosterImg, {
    src: activeOption.poster_path,
    alt: activeOption.title,
    size: "w342"
  })), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-3 font-semibold text-gray-900 dark:text-gray-100"
  }, activeOption.title), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm leading-6 text-gray-500"
  }, new Date(activeOption.release_date).getFullYear())))), !results.length && /* @__PURE__ */ React.createElement("div", {
    className: "py-14 px-6 text-center text-sm sm:px-14"
  }, /* @__PURE__ */ React.createElement(import_outline.LibraryIcon, {
    className: "mx-auto h-20 w-20 text-gray-600 dark:text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300"
  }, !query ? "Search Personal Film Library" : `No results found for "${query}"`), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-gray-500"
  }, !query ? "Enter your search term to search." : `We couldn\u2019t find anything with that term. Please try again.`)))));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/movies/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => MoviePage2,
  links: () => links2,
  loader: () => loader4
});
init_react();
var import_classnames8 = __toESM(require("classnames"));
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// ../../node_modules/.pnpm/react-inner-image-zoom@3.0.0_react@17.0.2/node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css
var styles_default = "/build/_assets/styles-UAJJ3TDA.css";

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/movies/$id.tsx
var import_remix10 = __toESM(require_remix());
var links2 = () => [{ rel: "stylesheet", href: styles_default }];
var loader4 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.id, "expected params.movieId");
  const db = new Db();
  const id = Number(params.id);
  const details = db.movie.getDetails(id);
  const recommendations = db.movie.getRecommendations(id);
  return await Promise.all([details, recommendations]);
};
function MoviePage2() {
  const menuItems = [
    { to: "", name: "Details" },
    { to: "cast", name: "Cast and Crew" },
    { to: "images", name: "Images" }
  ];
  const [details, recommendations] = useInferredRouteData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid lg:grid-cols-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:border-r border-gray-700 relative mt-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement(PosterImg, {
    src: details.poster_path,
    alt: details.title,
    size: "w500",
    innerZoom: true
  }))), /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames8.default)(["md:col-span-3"])
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 border-b border-gray-700 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-extrabold"
  }, details.title), details.tagline && /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-xl italic"
  }, details.tagline)), /* @__PURE__ */ React.createElement("div", {
    className: "flex border-b border-gray-700"
  }, menuItems.map(({ to, name }) => /* @__PURE__ */ React.createElement(import_remix10.NavLink, {
    key: to,
    to,
    className: ({ isActive }) => (0, import_classnames8.default)(["px-4 py-2 block", { underline: !isActive }])
  }, name))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement(import_remix10.Outlet, null)))), /* @__PURE__ */ React.createElement("hr", {
    className: "border-gray-700"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 pt-4"
  }, /* @__PURE__ */ React.createElement(Row, {
    title: "Recommendations",
    items: recommendations.results.map((movie) => ({
      img: {
        src: movie.poster_path,
        size: "w300"
      },
      title: movie.title,
      meta: String(new Date(movie.release_date).getFullYear()),
      to: `/movies/${movie.id}`
    }))
  })));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/movies/$id/images.tsx
var images_exports = {};
__export(images_exports, {
  default: () => MovieImagesPage,
  links: () => links3,
  loader: () => loader5
});
init_react();
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var links3 = () => [{ rel: "stylesheet", href: styles_default }];
var loader5 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.id, "expected params.id");
  const db = new Db();
  const id = Number(params.id);
  const images = await db.movie.getImages(id);
  return { images };
};
function MovieImagesPage() {
  const { images } = useInferredRouteData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, images.backdrops.map(({ file_path }) => {
    const src = `https://image.tmdb.org/t/p/original/${file_path}`;
    return /* @__PURE__ */ React.createElement("a", {
      href: src,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /* @__PURE__ */ React.createElement("img", {
      src,
      alt: file_path
    }));
  }));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/movies/$id/cast.tsx
var cast_exports = {};
__export(cast_exports, {
  default: () => MoviePage3,
  links: () => links4,
  loader: () => loader6
});
init_react();
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// app/components/Crew.tsx
init_react();
var import_react5 = __toESM(require("react"));
var import_jobs = require("tmdb/dist/configuration/jobs");
var Department = ({
  department,
  crew
}) => {
  return /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    title: department,
    items: crew.map((crewMember) => {
      const img = crewMember.profile_path ? {
        src: crewMember.profile_path,
        size: "w300"
      } : void 0;
      return {
        img,
        src: crewMember.profile_path,
        title: crewMember.name,
        meta: crewMember.job,
        to: `/people/${crewMember.id}`
      };
    })
  });
};
var Crew = ({ crew }) => {
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, import_jobs.jobsByDepartment.map(({ department, jobs }) => {
    const crewMembers = crew.filter((crewMember) => jobs.includes(crewMember.job));
    if (!crewMembers.length)
      return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null);
    return /* @__PURE__ */ import_react5.default.createElement(Department, {
      department,
      crew: crewMembers
    });
  }));
};
var Crew_default = Crew;

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/movies/$id/cast.tsx
var links4 = () => [{ rel: "stylesheet", href: styles_default }];
var loader6 = async ({ params }) => {
  (0, import_tiny_invariant4.default)(params.id, "expected params.id");
  const db = new Db();
  const id = Number(params.id);
  const credits = await db.movie.getCredits(id);
  return { credits };
};
function MoviePage3() {
  const { credits } = useInferredRouteData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Cast",
    items: credits.cast.map((cast) => {
      const img = cast.profile_path ? {
        src: cast.profile_path,
        size: "w300"
      } : void 0;
      return {
        img,
        title: cast.name,
        meta: cast.character,
        to: `/people/${cast.id}`
      };
    })
  }), /* @__PURE__ */ React.createElement(Crew_default, {
    crew: credits.crew
  }));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/tv/$tvId.tsx
var tvId_exports = {};
__export(tvId_exports, {
  default: () => Index3,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_tmdb3 = require("tmdb");
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_classnames9 = __toESM(require("classnames"));
var loader7 = async ({
  params
}) => {
  (0, import_tiny_invariant5.default)(params.tvId, "expected params.tvId");
  const tmdb = new import_tmdb3.Tmdb({ apiKey: process.env.TMDB_API_KEY });
  const details = await tmdb.tvShow.getDetails(params.tvId);
  return { details };
};
function Index3() {
  var _a, _b, _c, _d;
  const { details } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://image.tmdb.org/t/p/w400/" + details.poster_path,
    className: (0, import_classnames9.default)(["w-full h-auto", "border border-gray-700"]),
    alt: details.name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-6 text-5xl font-extrabold"
  }, details.name), /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Seasons",
    items: ((_a = details.seasons) == null ? void 0 : _a.map((season) => ({
      src: season.poster_path,
      title: season.name,
      meta: String(new Date(season.air_date).getFullYear()),
      to: `season/${season.season_number}`
    }))) || []
  }), /* @__PURE__ */ React.createElement(import_remix11.Outlet, null), /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Cast",
    items: ((_b = details.credits) == null ? void 0 : _b.cast.map((cast) => ({
      src: cast.profile_path,
      title: cast.name,
      meta: cast.character,
      to: `/people/${cast.id}`
    }))) || []
  }), /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Crew",
    items: ((_c = details.credits) == null ? void 0 : _c.crew.map((cast) => ({
      src: cast.profile_path,
      title: cast.name,
      meta: cast.job,
      to: `/people/${cast.id}`
    }))) || []
  })))), /* @__PURE__ */ React.createElement("hr", {
    className: "border-gray-700"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 pt-4"
  }, /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Recommendations",
    items: ((_d = details.recommendations) == null ? void 0 : _d.results.map((tv) => ({
      src: tv.poster_path,
      title: tv.name,
      meta: String(new Date().getFullYear()),
      to: `/tv/${tv.id}`
    }))) || []
  })));
}

// route:/Users/joshmedeski/repos/pfl/apps/web-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader8
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_tmdb4 = require("tmdb");
var loader8 = async () => {
  const tmdb = new import_tmdb4.Tmdb({ apiKey: process.env.TMDB_API_KEY });
  const popularMovies = await tmdb.movies.getPopular();
  const popularTv = await tmdb.tvShows.getPopular();
  return {
    popularMovies,
    popularTv
  };
};
var Homepage = () => {
  const { popularMovies, popularTv } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Popular Movies",
    items: popularMovies.results.map((result) => ({
      img: {
        src: result.poster_path,
        size: "w300"
      },
      title: result.title,
      meta: String(new Date(result.release_date).getFullYear()),
      to: `/movies/${result.id}`
    }))
  }), /* @__PURE__ */ React.createElement(Grid_default, {
    title: "Popular TV",
    items: popularTv.results.map((result) => ({
      img: {
        src: result.poster_path,
        size: "w300"
      },
      title: result.name,
      meta: String(new Date(result.first_air_date).getFullYear()),
      to: `/tv/${result.id}`
    }))
  })));
};
var routes_default = Homepage;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "2dbeac21", "entry": { "module": "/build/entry.client-QT36VLGT.js", "imports": ["/build/_shared/chunk-FEAZNBFA.js", "/build/_shared/chunk-MFCUV3DV.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7EBPLTJN.js", "imports": ["/build/_shared/chunk-TPIJQYWO.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-3DEUJ3JZ.js", "imports": ["/build/_shared/chunk-L5ZEE4F2.js", "/build/_shared/chunk-LKYX4PIW.js", "/build/_shared/chunk-R2B7BV2D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/movies/$id": { "id": "routes/movies/$id", "parentId": "root", "path": "movies/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/movies/$id-FR3FCNWD.js", "imports": ["/build/_shared/chunk-BUO2NDGO.js", "/build/_shared/chunk-R2B7BV2D.js", "/build/_shared/chunk-CHHKC5SQ.js", "/build/_shared/chunk-VKZZR5NG.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/movies/$id/cast": { "id": "routes/movies/$id/cast", "parentId": "routes/movies/$id", "path": "cast", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/movies/$id/cast-KBCK6NO7.js", "imports": ["/build/_shared/chunk-LKYX4PIW.js", "/build/_shared/chunk-TPIJQYWO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/movies/$id/images": { "id": "routes/movies/$id/images", "parentId": "routes/movies/$id", "path": "images", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/movies/$id/images-6MY6YQZI.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/search/index": { "id": "routes/search/index", "parentId": "root", "path": "search", "index": true, "caseSensitive": void 0, "module": "/build/routes/search/index-RRBO5DNP.js", "imports": ["/build/_shared/chunk-BUO2NDGO.js", "/build/_shared/chunk-VKZZR5NG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$tvId": { "id": "routes/tv/$tvId", "parentId": "root", "path": "tv/:tvId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tv/$tvId-RXKYZ6B4.js", "imports": ["/build/_shared/chunk-L5ZEE4F2.js", "/build/_shared/chunk-LKYX4PIW.js", "/build/_shared/chunk-R2B7BV2D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$tvId-expired/season/$seasonNumber": { "id": "routes/tv/$tvId-expired/season/$seasonNumber", "parentId": "root", "path": "tv/:tvId-expired/season/:seasonNumber", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tv/$tvId-expired/season/$seasonNumber-WPBZNYCF.js", "imports": ["/build/_shared/chunk-R2B7BV2D.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tv/$tvId.season.$seasonNumber": { "id": "routes/tv/$tvId.season.$seasonNumber", "parentId": "root", "path": "tv/:tvId/season/:seasonNumber", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/tv/$tvId.season.$seasonNumber-KFGIGGPP.js", "imports": ["/build/_shared/chunk-L5ZEE4F2.js", "/build/_shared/chunk-LKYX4PIW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2DBEAC21.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tv/$tvId-expired/season/$seasonNumber": {
    id: "routes/tv/$tvId-expired/season/$seasonNumber",
    parentId: "root",
    path: "tv/:tvId-expired/season/:seasonNumber",
    index: void 0,
    caseSensitive: void 0,
    module: seasonNumber_exports
  },
  "routes/tv/$tvId.season.$seasonNumber": {
    id: "routes/tv/$tvId.season.$seasonNumber",
    parentId: "root",
    path: "tv/:tvId/season/:seasonNumber",
    index: void 0,
    caseSensitive: void 0,
    module: tvId_season_seasonNumber_exports
  },
  "routes/search/index": {
    id: "routes/search/index",
    parentId: "root",
    path: "search",
    index: true,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/movies/$id": {
    id: "routes/movies/$id",
    parentId: "root",
    path: "movies/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/movies/$id/images": {
    id: "routes/movies/$id/images",
    parentId: "routes/movies/$id",
    path: "images",
    index: void 0,
    caseSensitive: void 0,
    module: images_exports
  },
  "routes/movies/$id/cast": {
    id: "routes/movies/$id/cast",
    parentId: "routes/movies/$id",
    path: "cast",
    index: void 0,
    caseSensitive: void 0,
    module: cast_exports
  },
  "routes/tv/$tvId": {
    id: "routes/tv/$tvId",
    parentId: "root",
    path: "tv/:tvId",
    index: void 0,
    caseSensitive: void 0,
    module: tvId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
