import { useMDXComponents as getThemeComponnets } from "nextra-theme-docs";

const themeComponents = getThemeComponnets();

export function useMDXComponents(components?: typeof themeComponents) {
  return {
    ...themeComponents,
    ...components,
  };
}
