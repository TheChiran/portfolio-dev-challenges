import * as React from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
import DefaultLayout from "../layouts/DefaultLayout";
import ExtendedLayout from "../layouts/ExtendedLayout";
import "./../../assets/styles/style.scss";

const Layout: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  if (theme.layout === "default") {
    return <DefaultLayout />;
  }

  if (theme.layout === "extended") {
    return <ExtendedLayout />;
  }

  return null;
};

export default Layout;
