import { createContext } from "react";

const defaultContextValues = {
    layout: 'layout1'
};
  
export const LayoutContext = createContext(defaultContextValues);