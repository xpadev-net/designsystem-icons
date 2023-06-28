import { s as scope } from "./index-9e612267.js";
var ADDON_ID = "storybook/highlight", HIGHLIGHT_STYLE_ID = "storybookHighlight", HIGHLIGHT = `${ADDON_ID}/add`, RESET_HIGHLIGHT = `${ADDON_ID}/reset`;
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { STORY_CHANGED } = __STORYBOOK_MODULE_CORE_EVENTS__;
var { document } = scope, highlightStyle = (color = "#FF4785", style = "dashed") => `
  outline: 2px ${style} ${color};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`, highlightObject = (color) => ({ outline: `2px dashed ${color}`, outlineOffset: 2, boxShadow: "0 0 0 6px rgba(255,255,255,0.6)" }), channel = addons.getChannel(), highlight = (infos) => {
  let id = HIGHLIGHT_STYLE_ID;
  resetHighlight();
  let elements = Array.from(new Set(infos.elements)), sheet = document.createElement("style");
  sheet.setAttribute("id", id), sheet.innerHTML = elements.map((target) => `${target}{
          ${highlightStyle(infos.color, infos.style)}
         }`).join(" "), document.head.appendChild(sheet);
}, resetHighlight = () => {
  let id = HIGHLIGHT_STYLE_ID, sheetToBeRemoved = document.getElementById(id);
  sheetToBeRemoved && sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved);
};
channel.on(STORY_CHANGED, resetHighlight);
channel.on(RESET_HIGHLIGHT, resetHighlight);
channel.on(HIGHLIGHT, highlight);
export {
  highlightObject,
  highlightStyle
};
