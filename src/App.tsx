import * as React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { pageAtom, pagesList } from "./states/pageAtom";
import Header from "./sections/Header/Header";
import Body from "./sections/Body/Body";
import Footer from "./sections/Footer/Footer";
import { capitalizeString, getSubdomain, switchPage } from "./helpers";
import { Analytics } from "@vercel/analytics/react";

type customRoute = {
  path: string;
  route: string;
  redirect: string;
};

type props = {
  route: string;
  routes: customRoute[];
};
const App = ({ route, routes }: props) => {
  const [page, setPage] = useRecoilState(pageAtom);

  React.useEffect(() => {
    // Hide the init loading screen
    const loadingpage = document.querySelector("#loadingpage") as any;
    if (loadingpage && loadingpage.style) {
      loadingpage.style = "display: none";
    }

    // Check and set the routes dynamically (by /route and route....com)
    const subdomain = getSubdomain();
    let matchedRoute = false;
    for (let i = 0; i < routes.length; i++) {
      // Internal/path
      const presetRoute = routes[i];
      // ? NOTE: skip the empty route for internal only
      if (route && presetRoute.route) {
        if (route === presetRoute.route) {
          matchedRoute = true;
          setPage(capitalizeString(presetRoute.route));
          break;
        }
      }
    }
    if (!matchedRoute) {
      for (let i = 0; i < routes.length; i++) {
        // External/Subdomain
        const presetRoute = routes[i];
        if (subdomain === presetRoute.route) {
          matchedRoute = true;
          switchPage(capitalizeString(presetRoute.route), setPage, true);
          break;
        }
      }
    }

    // Fallback to Home
    if (!matchedRoute) {
      console.log("App: Hit fallback route");
      setPage(pagesList[0].pageName);
    }
  }, []);

  return (
    <>
      <Analytics />
      <main className="bg-zdaBG-light dark:bg-zdaBG-dark text-gray-700 dark:text-gray-200 flex min-h-screen flex-col items-center p-0 motion-safe:transition motion-safe:duration-500 ease-out">
        {page !== "Logo" && page !== "Examples" && <Header />}
        <Body />
        {page !== "Logo" && page !== "Examples" && <Footer />}
      </main>
    </>
  );
};

export default App;
