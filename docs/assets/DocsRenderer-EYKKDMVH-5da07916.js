import { _ as __vitePreload } from "./iframe-26377af4.js";
import { R as React, r as reactExports } from "./index-5c06e906.js";
import { r as renderElement, u as unmountElement } from "./react-18-e763f259.js";
import { C as CodeOrSourceMdx, A as AnchorMdx, H as HeadersMdx, D as Docs } from "./index-dbe3199d.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-7a7fcd32.js";
import "./index-ee6951c2.js";
import "./index-9e612267.js";
import "./index-70649251.js";
import "./index-eeefe080.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : children;
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components };
      return new Promise((resolve, reject) => {
        __vitePreload(() => import("./index-7471868f.js"), true ? ["./index-7471868f.js","./index-a35ba299.js","./index-5c06e906.js","./_commonjsHelpers-7a7fcd32.js"] : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(Docs, { context, docsParameter }))), element)).then(resolve);
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer,
  defaultComponents
};
