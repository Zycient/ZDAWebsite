import * as React from "react";

type props = {
  clickCallback: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  textContent: string;
  tight?: boolean;
  variant?: string;
};

const ZDAButton = ({
  clickCallback,
  leftIcon,
  rightIcon,
  textContent,
  tight,
  variant = "default",
}: props) => {
  const variantsList = [
    {
      name: "default",
      className:
        "hidden md:inline-flex justify-center items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-zdaNightshade-650 hover:bg-zdaNightshade-700/90 active:bg-zdaNightshade-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "mobile",
      className:
        "inline-flex justify-center items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-zdaNightshade-650 hover:bg-zdaNightshade-700/90 active:bg-zdaNightshade-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit text-lg drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "neutral",
      className:
        "hidden md:inline-flex justify-center items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-zdaBtn-darkCard dark:hover:bg-zdaBtn-darkHover dark:active:bg-zdaBtn-dark text-white/95 hover:text-white dark:text-gray-300 dark:hover:text-gray-100 dark:active:text-white font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark-neutral hover:drop-shadow-sm dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "mobile-neutral",
      className:
        "inline-flex justify-center items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-zdaBtn-darkCard dark:hover:bg-zdaBtn-darkHover dark:active:bg-zdaBtn-dark text-white/95 hover:text-white dark:text-gray-300 dark:hover:text-gray-100 dark:active:text-white font-outfit text-lg drop-shadow-btn-light dark:drop-shadow-btn-dark-neutral hover:drop-shadow-sm dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "grid",
      className:
        "hidden md:grid grid-cols-2 content-center justify-center items-center justify-items-center group w-[14.5rem] h-[2.25rem] m-4 p-1 rounded-2xl bg-zdaNightshade-650 hover:bg-zdaNightshade-700/90 active:bg-zdaNightshade-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "mobile-grid",
      className:
        "grid grid-cols-2 content-center justify-center items-center justify-items-center md:hidden w-64 h-10 m-4 rounded-2xl bg-zdaNightshade-650 hover:bg-zdaNightshade-700/90 active:bg-zdaNightshade-800 dark:bg-white/90 dark:hover:bg-neutral-300/80 dark:active:bg-neutral-500 text-white/95 hover:text-white dark:text-gray-950 dark:hover:text-black font-outfit drop-shadow-btn-light dark:drop-shadow-btn-dark hover:drop-shadow-sm dark:hover:drop-shadow-btn-dark-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none",
    },
    {
      name: "hamburger-section",
      className:
        "w-full md:w-56 xl:w-64 2xl:w-72 p-2 my-1 text-base font-medium bg-gray-600 hover:bg-gray-700 active:bg-gray-800 dark:bg-zdaBtn-darkerCard dark:hover:bg-zdaBtn-darkHover dark:active:bg-zdaBtn-dark text-zdaBG-lighterCard dark:text-zdaBG-lighterCard dark:hover:text-white border-2 border-solid border-transparent rounded-md motion-safe:transition-all motion-safe:duration-300 ease-out select-none",
    },
    {
      name: "hamburger-outlined",
      className:
        "w-full inline-flex relative justify-center items-center p-2 xl:py-3 my-1 xl:my-[0.1rem] text-base font-medium bg-transparent hover:bg-gray-600 active:bg-gray-700 dark:hover:bg-gray-300 dark:active:bg-gray-400 text-gray-800 hover:text-zdaBG-lighterCard dark:text-zdaBG-lighterCard  dark:hover:text-gray-900 border-2 border-solid border-gray-500 hover:border-gray-600 active:border-gray-700 dark:border-gray-500 dark:hover:border-gray-300 dark:active:border-gray-400 rounded-md motion-safe:transition-colors motion-safe:duration-200 ease-out select-none",
    },
  ];
  const [activeClassName, setActiveClassName] = React.useState(
    variantsList[2].className
  ); // use neutral while loading for subtler transition
  // ? NOTE: the will-change-transform fixes the icon jitter issue when centering
  const leftIconSpanClassName =
    "inline-flex justify-center items-center mr-2 transition-transform group-hover:-translate-x-1 will-change-transform motion-reduce:transform-none";
  const rightIconSpanClassName =
    "inline-flex justify-center items-center ml-2 transition-transform group-hover:translate-x-1 will-change-transform motion-reduce:transform-none";
  const hamburgerPartialClass = "hamburger";
  const leftIconHamburgerSpanClassName =
    "flex mx-2 items-center absolute left-0";
  const rightIconHamburgerSpanClassName =
    "flex mx-2 items-center absolute right-0";

  React.useEffect(() => {
    const defaultClassName = variantsList[0].className;
    /* Update active className by variant,
    when variant or colorScheme changes */
    if (variant) {
      setActiveClassName(
        variantsList.filter((item) => item.name === variant)[0].className
      );
    } else {
      setActiveClassName(defaultClassName);
    }

    console.log("Color Scheme changed for ZDAButton");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <>
      <button
        className={activeClassName}
        onClick={clickCallback}
        style={tight ? { ...{ margin: 4 } } : undefined}
      >
        {leftIcon && (
          <span
            className={
              variant && variant.includes(hamburgerPartialClass)
                ? leftIconHamburgerSpanClassName
                : leftIconSpanClassName
            }
          >
            {leftIcon}&nbsp;
          </span>
        )}
        {textContent}
        {rightIcon && (
          <span
            className={
              variant && variant.includes(hamburgerPartialClass)
                ? rightIconHamburgerSpanClassName
                : rightIconSpanClassName
            }
          >
            &nbsp;{rightIcon}
          </span>
        )}
      </button>
    </>
  );
};

export default ZDAButton;
