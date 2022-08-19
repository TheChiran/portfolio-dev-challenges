import * as React from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
import ThemeSetting from "../common/ThemeSetting";
import Layout from "../layouts/Layout";
import "./../../assets/styles/style.scss";

const App: React.FC = () => {
  const [layout, setLayout] = React.useState("default");
  const [theme, setTheme] = React.useState("default");

  const changeTheme = () => {
    const body: HTMLElement = document.querySelector("body")!;

    if (theme === "default") {
      body.classList.add("dark-theme");
      setTheme("dark");
    }
    if (theme === "dark") {
      body.classList.remove("dark-theme");
      setTheme("default");
    }
  };

  const changeLayout = (updatedLayout) => {
    setLayout(updatedLayout);
  };

  return (
    <ThemeContext.Provider
      value={{ layout: layout, setLayout: changeLayout, theme, changeTheme }}
    >
      <div className="container mt-70">
        <Layout />
        <ThemeSetting />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
