import { atom } from "recoil";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import CommissionsPage from "../pages/CommissionsPage";
import AboutPage from "../pages/AboutPage";
import WritingsPage from "../pages/WritingsPage";
import LogoPage from "../pages/LogoPage";
import ExamplesPage from "../pages/ExamplesPage";

export const pagesList = [
  {
    pageName: "Home",
    pageElement: <HomePage />,
    isNav: true,
    isInBody: true,
  },
  {
    pageName: "Portfolio",
    pageElement: <PortfolioPage />,
    isNav: true,
    isInBody: true,
  },
  {
    pageName: "Commissions",
    pageElement: <CommissionsPage />,
    isNav: true,
    isInBody: true,
  },
  {
    pageName: "About",
    pageElement: <AboutPage />,
    isNav: true,
    isInBody: true,
  },
  {
    pageName: "Writings",
    pageElement: <WritingsPage />,
    isNav: false,
    isInBody: true,
  },
  {
    pageName: "Logo",
    pageElement: <LogoPage />,
    isNav: false,
    isInBody: false,
  },
  {
    pageName: "Examples",
    pageElement: <ExamplesPage />,
    isNav: false,
    isInBody: false,
  },
];

export const pageAtom = atom({
  key: "PageState",
  default: pagesList[0].pageName,
});
