import { createContext } from "react";

/**
 * @title {layout values}
 * @values [
 *  1. default
 *  2. extended
 * ]
 */
const defaultContextValues = {
  layout: "default",
  setLayout: (updatedLayout) => {},
  theme: "default",
  changeTheme: () => {},
};

export const ThemeContext = createContext(defaultContextValues);
