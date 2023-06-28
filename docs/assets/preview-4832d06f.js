import { s as scope } from "./index-9e612267.js";
import "./index-70649251.js";
var PARAM_KEY = "links";
const { makeDecorator, addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { STORY_CHANGED, SELECT_STORY } = __STORYBOOK_MODULE_CORE_EVENTS__;
var { document, HTMLElement } = scope;
var navigate = (params) => addons.getChannel().emit(SELECT_STORY, params), linksListener = (e) => {
  let { target } = e;
  if (!(target instanceof HTMLElement))
    return;
  let element = target, { sbKind: kind, sbStory: story } = element.dataset;
  (kind || story) && (e.preventDefault(), navigate({ kind, story }));
}, hasListener = false, on = () => {
  hasListener || (hasListener = true, document.addEventListener("click", linksListener));
}, off = () => {
  hasListener && (hasListener = false, document.removeEventListener("click", linksListener));
}, withLinks = makeDecorator({ name: "withLinks", parameterName: PARAM_KEY, wrapper: (getStory, context) => (on(), addons.getChannel().once(STORY_CHANGED, off), getStory(context)) });
var decorators = [withLinks];
export {
  decorators
};
