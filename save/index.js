"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var html = require("marko/dist/runtime/html");
var _initComponents = require("marko/dist/core-tags/components/init-components-tag.js");
var _marko_tag = require("marko/dist/runtime/helpers/render-tag");
var _awaitReorderer = require("marko/dist/core-tags/core/await/reorderer-renderer.js");
var _preferredScriptLocation = require("marko/dist/core-tags/components/preferred-script-location-tag.js");
var _marko_renderer = require("marko/dist/runtime/components/renderer");
var _flush_here_and_after__ = require("marko/dist/core-tags/core/__flush_here_and_after__.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : {"default": e};
}
var _initComponents__default = /* @__PURE__ */ _interopDefaultLegacy(_initComponents);
var _marko_tag__default = /* @__PURE__ */ _interopDefaultLegacy(_marko_tag);
var _awaitReorderer__default = /* @__PURE__ */ _interopDefaultLegacy(_awaitReorderer);
var _preferredScriptLocation__default = /* @__PURE__ */ _interopDefaultLegacy(_preferredScriptLocation);
var _marko_renderer__default = /* @__PURE__ */ _interopDefaultLegacy(_marko_renderer);
var _flush_here_and_after____default = /* @__PURE__ */ _interopDefaultLegacy(_flush_here_and_after__);
const _marko_componentType$2 = "c8dhb3Rj", _marko_template$2 = html.t(_marko_componentType$2);
const _marko_component$2 = {};
_marko_template$2._ = _marko_renderer__default["default"](function(input, out, _component, component, state) {
  out.w("<!DOCTYPE html><html><head>");
  out.global.___viteRenderAssets(out, "head-prepend");
  out.w("<title>Marko + Vite</title>");
  out.global.___viteRenderAssets(out, "head");
  out.w("</head><body>");
  out.global.___viteRenderAssets(out, "body-prepend");
  out.w("<h1>Hello World!</h1><div><a href=/goodbye>Goodbye!</a></div><div><a href=/counters>Count!</a></div>");
  out.global.___viteRenderAssets(out, "body");
  _marko_tag__default["default"](_initComponents__default["default"], {}, out, _component, "9");
  _marko_tag__default["default"](_awaitReorderer__default["default"], {}, out, _component, "10");
  _marko_tag__default["default"](_preferredScriptLocation__default["default"], {}, out, _component, "11");
  out.w("</body></html>");
}, {
  t: _marko_componentType$2,
  i: true
}, _marko_component$2);
const _marko_componentType$1 = "AVKLm3Ey", _marko_template$1 = html.t(_marko_componentType$1);
function renderAssets(out, slot) {
  const entries = this.___viteEntries;
  if (entries) {
    const slotWrittenEntriesKey = `___viteWrittenEntries-${slot}`;
    const lastWrittenEntry = this[slotWrittenEntriesKey] || 0;
    const writtenEntries = this[slotWrittenEntriesKey] = entries.length;
    let html2 = "";
    for (let i = lastWrittenEntry; i < writtenEntries; i++) {
      const manifest = __MARKO_MANIFEST__[entries[i]];
      const slotHtml = manifest && manifest[slot] && manifest[slot].join(this.___viteInjectAttrs);
      if (slotHtml) {
        html2 += slotHtml;
      }
    }
    out.write(html2);
  }
}
const _marko_component$1 = {};
_marko_template$1._ = _marko_renderer__default["default"](function(input, out, _component, component, state) {
  const $global = out.global;
  if (!$global.___viteRenderAssets) {
    $global.___viteInjectAttrs = $global.cspNonce ? ` nonce="${$global.cspNonce.replace(/"/g, "&#39;")}"` : "";
    $global.___viteRenderAssets = renderAssets;
  }
  _marko_tag__default["default"](_flush_here_and_after____default["default"], {
    "renderBody": (out2) => {
      $global.___viteRenderAssets(out2, input.slot);
    }
  }, out, _component, "0");
}, {
  t: _marko_componentType$1,
  i: true
}, _marko_component$1);
const _marko_componentType = "2J/y4ooc", _marko_template = html.t(_marko_componentType);
const _marko_component = {};
_marko_template._ = _marko_renderer__default["default"](function(input, out, _component, component, state) {
  const $global = out.global;
  ($global.___viteEntries || ($global.___viteEntries = [])).push("pages_mpuH");
  _marko_tag__default["default"](_marko_template$1, {
    "slot": "head-prepend"
  }, out, _component, "0");
  _marko_tag__default["default"](_marko_template$1, {
    "slot": "head"
  }, out, _component, "1");
  _marko_tag__default["default"](_marko_template$1, {
    "slot": "body-prepend"
  }, out, _component, "2");
  _marko_tag__default["default"](_marko_template$2, input, out, _component, "3");
  _marko_tag__default["default"](_initComponents__default["default"], {}, out, _component, "4");
  _marko_tag__default["default"](_awaitReorderer__default["default"], {}, out, _component, "5");
  _marko_tag__default["default"](_marko_template$1, {
    "slot": "body"
  }, out, _component, "6");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
var indexPage = (req, res) => {
  res.marko(_marko_template, {});
};
exports.default = indexPage;
