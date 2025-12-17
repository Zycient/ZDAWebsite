import * as React from "react";
import { themes, themeAtom } from "../states/themeAtom";
import { useRecoilState } from "recoil";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  darkIcon,
  darkMenuIcon,
  lightIcon,
  lightMenuIcon,
  sysMenuIcon,
} from "../icons";
import { capitalizeString } from "../helpers";

const defaultTheme = themes[themes.length - 1]; // "system"

const ThemeMenu = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const [isAutoMode, setAutoMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [sysOption, setOption] = React.useState("system"); // used for Auto Mode and active highlight for themes
  const systemMatch = window.matchMedia("(prefers-color-scheme: dark)");
  const themeIcons = [darkMenuIcon, lightMenuIcon, sysMenuIcon];

  const changeTheme = (newTheme: string) => {
    if (newTheme === "dark") {
      // Set prefs
      localStorage.setItem("theme", "dark");
      // Set body style
      document.documentElement.classList.add("dark");
      console.log("Theme set to dark from menu");
      // Set vars
      setTheme("dark");
      setOption("dark");
    } else if (newTheme === "light") {
      // Set prefs
      localStorage.setItem("theme", "light");
      // Set body style
      document.documentElement.classList.remove("dark");
      console.log("Theme set to light from menu");
      // Set vars
      setTheme("light");
      setOption("light");
    } else {
      // Set prefs
      localStorage.setItem("theme", defaultTheme);
      // Set body style and vars
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      console.log("Theme set to system from menu");
      setOption(defaultTheme);
    }
    setOpen(false);
  };

  const detectTheme = () => {
    // Get theme preference from user
    const storedTheme = localStorage.getItem("theme") || defaultTheme;
    // Set theme and sysOption from detected Theme
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setOption(storedTheme);
      setTheme(storedTheme);
    } else {
      // Set system theme for next time
      localStorage.setItem("theme", defaultTheme);
      // Use matchMedia to get system theme
      if (systemMatch.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
      setOption(defaultTheme);
    }
  };

  const autoModeHandler = (evt: MediaQueryListEvent) => {
    // Read Auto Mode on/off setting from global Window obj
    let windowObj = window as any;
    const autoModeSetting = windowObj.autoModeSetting;
    if (autoModeSetting) {
      // NOTE: Assume match on "dark", since "light" is default for 'prefers-color-scheme'
      if (evt.matches) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    }
  };

  React.useEffect(() => {
    // Detect preferred Theme from user or system
    detectTheme();
  }, []);

  React.useEffect(() => {
    // Check for system option
    if (sysOption === "system") {
      // Turn on Auto Mode
      setAutoMode(true);
    } else {
      // Turn off Auto Mode
      setAutoMode(false);
    }
  }, [sysOption]);

  React.useEffect(() => {
    if (isAutoMode) {
      // Set global window setting for event handler
      let windowObj = window as any;
      windowObj.autoModeSetting = true;
      // Setup event handler for theme switch
      systemMatch.removeEventListener("change", autoModeHandler, true);
      systemMatch.addEventListener("change", autoModeHandler, true);
    } else {
      // Set global window setting for event handler
      let windowObj = window as any;
      windowObj.autoModeSetting = false;
      // Attempt to clear event handler
      return () => {
        systemMatch.removeEventListener("change", autoModeHandler, true);
      };
    }
  }, [isAutoMode]);

  return (
    <>
      <div className="inline-flex items-center focus-visible:outline-none webkit-appearance-none appearance-none">
        <DropdownMenu.Root open={open} modal={false}>
          {/* Button Section */}
          <DropdownMenu.Trigger asChild>
            <button
              className="rounded-full w-7 h-7 inline-flex items-center justify-center text-zdaNightshade-600 dark:text-zdaNightshade-50/60 bg-zdaBG-lightCard dark:bg-zdaBG-darkCard shadow-[0_1px_8px] shadow-stone-400 hover:shadow-stone-400/25 dark:shadow-zdaNightshade-50/15 dark:hover:shadow-zdaNightshade-50/5 outline outline-1 outline-zdaNightshade-500/25 dark:outline-zdaNightshade-50/10 hover:bg-zdaNightshade-500/25 dark:hover:bg-zdaNightshade-100/20 active:bg-zdaNightshade-400/50 dark:active:bg-zdaNightshade-50/25 motion-safe:transition ease-out motion-safe:duration-300 webkit-appearance-none appearance-none"
              aria-label="Theme Menu"
              title="Theme Menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              {theme === "dark" ? darkIcon : lightIcon}
            </button>
          </DropdownMenu.Trigger>
          {/* Menu Section */}
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="z-50 min-w-40 bg-zdaBG-lighterCard dark:bg-zdaBG-darkerCard rounded-lg p-2 shadow-theme-menu-dropdown-light dark:shadow-theme-menu-dropdown-dark-nightshade will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
              align="start"
              onInteractOutside={() => setOpen(false)}
            >
              {/* Theme Items */}
              {themes.map((themeItem, idx) => (
                <DropdownMenu.Item
                  key={idx}
                  className="group flex items-center relative h-6 my-2 md:my-0 px-6 py-4 4xl:text-lg text-zdaNightshade-600/90 dark:text-zdaNightshade-50/75 rounded-md 3xl:rounded-lg select-none outline-none data-[highlighted]:bg-zdaNightshade-650/85 data-[highlighted]:text-neutral-50 dark:data-[highlighted]:bg-zdaNightshade-50/75 dark:data-[highlighted]:text-zinc-950 motion-safe:transition-colors ease-out motion-safe:duration-200"
                  onClick={() => changeTheme(themeItem)}
                >
                  <span className="mr-2 4xl:mr-3 4k:mr-4">
                    {themeIcons[idx]}
                  </span>
                  {sysOption === themeItem ? (
                    <div className="font-semibold">
                      {capitalizeString(themeItem)}
                    </div>
                  ) : (
                    <div>{capitalizeString(themeItem)}</div>
                  )}
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Arrow className="fill-zdaBG-lighterCard dark:fill-zdaNightshade-1000" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
};

export default ThemeMenu;
