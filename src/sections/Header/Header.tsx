import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeAtom } from "../../states/themeAtom";
import ThemeMenu from "../../components/ThemeMenu";
import {
  zda_dark_circ_logo,
  zda_light_circ_logo,
  zda_circ_hover_logo,
  zerodayanubis_dark,
  zerodayanubis_light,
} from "../../SvgSources";
import { switchPage } from "../../helpers";
import { pageAtom } from "../../states/pageAtom";
import HamburgerMenu from "../../components/HamburgerMenu";
import { hamburgerIcon } from "../../icons";
import PageLinks from "../../components/PageLinks";
import { altLongTextLogo, altZDALogoCirc } from "../../AltText";
import { useDebouncedCallback } from "use-debounce";

const Header = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useRecoilValue(themeAtom);
  const defaultHeaderHeight = 80; // 80px = 5rem; will scale with screen size
  const [headerHeight, setHeaderHeight] = React.useState(defaultHeaderHeight);
  const headerId = "app-header";
  const debounceDelay = 125;

  const determineHeaderClass = () => {
    if (scrolled) {
      if (theme === "dark") {
        return "scrolled-header-dark rounded-md ";
      } else {
        return "scrolled-header rounded-md ";
      }
    } else {
      if (theme === "dark") {
        return "top-header-dark rounded-none ";
      } else {
        return "top-header rounded-none ";
      }
    }
  };

  const resizeHandler = () => {
    const headerElem = document.querySelector("#" + headerId) as any;
    if (headerElem && headerElem.clientHeight) {
      setHeaderHeight(headerElem.clientHeight);
    }
  };
  const debouncedResize = useDebouncedCallback(resizeHandler, debounceDelay);

  React.useEffect(() => {
    if (!window.onresize) {
      // Add debounced handler to check header height
      window.onresize = () => {
        debouncedResize();
      };
    }

    // ? NOTE: intentionally not debounced because it introduced bad visual bug
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > headerHeight);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header
        className={
          determineHeaderClass() +
          "sticky w-full z-40 top-0 left-0 py-3 xs:py-5 flex items-center bg-gradient-to-t backdrop-blur-2xl text-gray-700 dark:text-gray-200 text-base font-outfit border-b border-transparent dark:border-transparent rounded-md"
        }
        id={headerId}
      >
        <div className="header-container flex justify-between xs:justify-normal w-full items-center p-0 mx-auto xs:m-0">
          {/* LEFT - Nav Btn */}
          <div className="header-left ml-4">
            {/* Nav Btn */}
            <button
              className="p-2 mr-4 rounded-full bg-transparent hover:bg-zdaNightshade-600/10 active:bg-zdaNightshade-600/25 dark:hover:bg-zdaNightshade-650/15 dark:active:bg-zdaNightshade-600/30 text-neutral-900 dark:text-gray-200 hover:text-zdaNightshade-600 dark:hover:text-zdaNightshade-650 transition-colors duration-300 ease-out"
              onClick={() => setOpen(true)}
              aria-label="Navigation Menu"
              aria-description="Opens the Navigation Menu"
              title="Navigation Menu"
            >
              {hamburgerIcon}
            </button>
          </div>
          {/* MID - Logo Btn/Title/Links */}
          <div className="header-mid flex items-center content-center justify-center md:justify-start">
            <div className="header-logo-box mr-1 sm:mr-2 lg:mr-1 motion-safe:transition ease-in motion-safe:duration-100 active:opacity-75">
              {/* Logo Btn */}
              <img
                src={
                  theme === "dark" ? zda_dark_circ_logo : zda_light_circ_logo
                }
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo cursor-pointer pointer-events-auto select-none motion-safe:transition ease-in motion-safe:duration-[400ms] 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
              <img
                src={zda_circ_hover_logo}
                alt={altZDALogoCirc}
                title="Click to see ZDA logo page"
                className="header-logo-hover cursor-pointer pointer-events-auto select-none motion-safe:transition ease-in motion-safe:duration-[400ms] 3xl:w-[36px] 3xl:h-[36px] 4xl:w-[44px] 4xl:h-[44px] 4k:w-[60px] 4k:h-[60px]"
                width={36}
                height={36}
                onClick={() => switchPage("Logo", setPage)}
                onTouchEnd={() => switchPage("Logo", setPage)}
              />
            </div>
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="hidden lg:block ml-4 mr-2 max-h-9 select-none"
              alt={altLongTextLogo}
            />
            <PageLinks location={"headerLg"} />
          </div>
          {/* MID RIGHT - Title/Nav Links - (only xs thru md) */}
          <div className="header-midright hidden xs:flex md:hidden absolute left-1/2 right-1/2 justify-center">
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="hidden xs:block sm:hidden lg:block w-full min-w-40 min-h-7 cursor-default select-none"
              alt={altLongTextLogo}
            />
            <PageLinks location={"headerSm"} />
          </div>
          {/* RIGHT - Theme Menu */}
          <div className="header-right flex xs:absolute xs:right-0 mr-4 focus-visible:outline-none">
            <div className="cursor-pointer focus-visible:outline-none mx-2 lg:flex lg:static lg:w-auto">
              <ThemeMenu />
            </div>
          </div>
        </div>
      </header>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
