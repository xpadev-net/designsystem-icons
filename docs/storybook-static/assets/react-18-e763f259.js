import { R as React, r as reactExports } from "./index-5c06e906.js";
import { r as reactDomExports } from "./index-ee6951c2.js";
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
var nodes = /* @__PURE__ */ new Map(), WithCallback = ({ callback, children }) => {
  let once = reactExports.useRef();
  return reactExports.useLayoutEffect(() => {
    once.current !== callback && (once.current = callback, callback());
  }, [callback]), children;
}, renderElement = async (node, el) => {
  let root = await getReactRoot(el);
  return new Promise((resolve) => {
    root.render(React.createElement(WithCallback, { callback: () => resolve(null) }, node));
  });
}, unmountElement = (el, shouldUseNewRootApi) => {
  let root = nodes.get(el);
  root && (root.unmount(), nodes.delete(el));
}, getReactRoot = async (el) => {
  let root = nodes.get(el);
  return root || (root = client.createRoot(el), nodes.set(el, root)), root;
};
export {
  renderElement as r,
  unmountElement as u
};
