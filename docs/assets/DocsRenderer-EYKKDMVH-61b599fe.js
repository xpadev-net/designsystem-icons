import { _ as __vitePreload } from "./iframe-f7a46885.js";
import { R as React, r as reactExports } from "./index-c86cbf19.js";
import { r as renderElement, u as unmountElement } from "./react-18-b7c22e76.js";
import { C as CodeOrSourceMdx, A as AnchorMdx, H as HeadersMdx, D as Docs } from "./index-b06adb9a.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-49c94eb7.js";
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
        __vitePreload(() => import("./index-da6fcd5c.js"), true ? ["./index-da6fcd5c.js","./index-550dc53c.js","./index-c86cbf19.js","./_commonjsHelpers-ca272635.js"] : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(Docs, { context, docsParameter }))), element)).then(resolve);
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
