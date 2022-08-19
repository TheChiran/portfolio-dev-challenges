import * as React from "react";
import settingsIcon from "../../assets/images/icons/settings.svg";
import { ThemeContext } from "../../hooks/ThemeContext";
import { Toggle } from "rsuite";

const ThemeSetting: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const settingRef = React.useRef(null);

  React.useEffect(() => {
    const settingIcon: HTMLElement = settingRef.current!;
    const settingSection: HTMLElement =
      document.querySelector(".theme-settings")!;

    const updateSettingPosition = () => {
      if (settingSection.classList.contains("open-theme-settings")) {
        settingSection.classList.remove("open-theme-settings");
      } else {
        settingSection.classList.add("open-theme-settings");
      }
    };

    settingIcon?.addEventListener("click", updateSettingPosition);

    return () => {
      settingIcon?.removeEventListener("click", updateSettingPosition);
    };
  }, []);

  return (
    <div className="theme-settings">
      <img src={settingsIcon} alt="Settings Icon" ref={settingRef} />
      <div className="theme-settings__setting">
        <h2 className="title">Settings</h2>
        <div className="theme-settings__setting__layouts">
          <div className="layout">
            <label htmlFor="Default">Default</label>
            <input
              type="radio"
              name="layout"
              value={"default"}
              checked={theme.layout === "default" && true}
              onChange={(e) => {
                theme.setLayout(e.target.value);
              }}
            />
          </div>
          <div className="layout">
            <label htmlFor="Extended">Extended</label>
            <input
              type="radio"
              name="layout"
              value={"extended"}
              checked={theme.layout === "extended" && true}
              onChange={(e) => {
                theme.setLayout(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="theme-settings__setting__themes">
          <div className="theme">
            <label htmlFor="Theme">Theme: {theme.theme}</label>
            <Toggle
              checked={theme.theme === "dark" && true}
              onClick={theme.changeTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
