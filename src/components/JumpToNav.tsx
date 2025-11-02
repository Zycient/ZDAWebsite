import * as React from "react";
import { scrollToSection } from "../helpers";

type jumpToInfo = {
  id: string;
  text: string;
};
type props = {
  leftSection: jumpToInfo;
  middleSections: jumpToInfo[];
  rightSection: jumpToInfo;
};

const JumpToNav = ({ leftSection, middleSections, rightSection }: props) => {
  return (
    <>
      <div className="jump-to-nav hidden sm:inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-zdaNightshade-700/85 border-t-2 border-b-2 border-l-2 border-gray-300/90 active:border-zdaNightshade-800 hover:border-zdaNightshade-900/25 rounded-s-lg hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
          onClick={() => scrollToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-zdaNightshade-700/85 border-t-2 border-b-2 border-gray-300/90 active:border-zdaNightshade-800 hover:border-zdaNightshade-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
            onClick={() => scrollToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-zdaNightshade-700/90 border-t-2 border-b-2 border-r-2 border-gray-300/90 active:border-zdaNightshade-800 rounded-e-lg hover:border-zdaNightshade-900/25 hover:text-white dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
          onClick={() => scrollToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
      <div className="jump-to-nav-mobile flex flex-col sm:hidden rounded-md shadow-sm">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-red-50 border-t border-l border-r border-gray-300/90 active:border-zdaNightshade-800 hover:border-zdaNightshade-900/25 rounded-t-lg hover:text-zdaNightshade-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
          onClick={() => scrollToSection(leftSection.id)}
        >
          {leftSection.text}
        </button>
        {middleSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-red-50 border-l border-r border-gray-300/90 active:border-zdaNightshade-800 hover:border-zdaNightshade-900/25 hover:text-zdaNightshade-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
            onClick={() => scrollToSection(section.id)}
          >
            {section.text}
          </button>
        ))}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 active:text-zdaNightshade-100 bg-white active:bg-zdaNightshade-800/90 hover:bg-red-50 border-b border-l border-r border-gray-300/90 active:border-zdaNightshade-800 rounded-b-lg hover:border-zdaNightshade-900/25 hover:text-zdaNightshade-600/80 dark:bg-neutral-900/45 dark:active:bg-zdaNightshade-700/30 dark:hover:bg-zdaNightshade-700/50 dark:border-slate-500/35 dark:hover:border-zdaNightshade-700/70 dark:text-white dark:hover:text-white hover:drop-shadow-sm dark:hover:drop-shadow-sm motion-safe:transition-all motion-safe:duration-200 ease-out select-none"
          onClick={() => scrollToSection(rightSection.id)}
        >
          {rightSection.text}
        </button>
      </div>
    </>
  );
};

export default JumpToNav;
