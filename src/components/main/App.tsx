import * as React from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
import ThemeSetting from "../common/ThemeSetting";
import Layout from "../layouts/Layout";
import "./../../assets/styles/style.scss";

const App: React.FC = () => {
  const [layout, setLayout] = React.useState("default");

  const changeTheme = () => {
    document.documentElement.style.setProperty("--bg-color", "#2f3237");
  };

  const changeLayout = (updatedLayout) => {
    setLayout(updatedLayout);
  };

  return (
    <ThemeContext.Provider value={{ layout: layout, setLayout: changeLayout }}>
      <div className="container mt-70">
        <Layout />
        <ThemeSetting />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
