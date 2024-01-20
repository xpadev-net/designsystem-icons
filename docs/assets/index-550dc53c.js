import { R as React } from "./index-c86cbf19.js";
const MDXContext = React.createContext({});
function withMDXComponents(Component) {
  return boundMDXComponent;
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components);
    return React.createElement(Component, { ...props, allComponents });
  }
}
function useMDXComponents(components) {
  const contextComponents = React.useContext(MDXContext);
  return React.useMemo(() => {
    if (typeof components === "function") {
      return components(contextComponents);
    }
    return { ...contextComponents, ...components };
  }, [contextComponents, components]);
}
const emptyObject = {};
function MDXProvider({ components, children, disableParentContext }) {
  let allComponents;
  if (disableParentContext) {
    allComponents = typeof components === "function" ? components({}) : components || emptyObject;
  } else {
    allComponents = useMDXComponents(components);
  }
  return React.createElement(
    MDXContext.Provider,
    { value: allComponents },
    children
  );
}
export {
  MDXContext as M,
  MDXProvider as a,
  useMDXComponents as u,
  withMDXComponents as w
};
