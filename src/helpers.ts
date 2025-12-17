import { pagesList } from "./states/pageAtom";

/**
 * Click to do mailto to email
 */
export const clickEmail = () => {
  location.href = "mailto:anubis@zerodayanubis.com";
};

/**
 * Click to open link in new tab (or same window)
 * @param linkLocation URI
 * @param newTab open in new tab, default true
 */
export const clickLink = (linkLocation: string, newTab: boolean = true) => {
  window.open(linkLocation, newTab ? "_blank" : "");
};

/**
 * Switch Page by:
 * - Resetting scroll position to top
 * - Replacing the URL without refreshing
 * - Setting the global state to new page
 * @param target URL path (Portfolio, Commissions, etc)
 * @param setPage React.useState setter passed in from component
 * @param hardUrl If true, clear subdomain and go direct to root/target
 * @param scrollFirst If true, do scroll logic first and switch on delay
 */
export const switchPage = (
  target: string,
  setPage: (page: string) => void,
  hardUrl: boolean = false,
  scrollFirst: boolean = false
) => {
  if (scrollFirst) {
    /* Reset scroll position to top;
  if unsuccessful, use smooth scroll after short delay */
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    scrollToTop();

    // Do page switch on delay
    const switchDelay = 350; // ? needs extra delay for this case
    setTimeout(() => {
      // Set URL to target without refresh
      if (target === pagesList[0].pageName) {
        window.history.replaceState({}, "", "/");
      } else {
        if (hardUrl) {
          window.location.replace(
            "https://zerodayanubis.com/" + target.toLocaleLowerCase()
          );
        } else {
          window.history.replaceState({}, "", "/" + target.toLocaleLowerCase());
        }
      }
      setPage(target);
    }, switchDelay);
  } else {
    /* Reset scroll position to top;
  if unsuccessful, use smooth scroll after short delay */
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const scrollDelay = 220;
    setTimeout(() => {
      scrollToTop();
    }, scrollDelay);

    // Set URL to target without refresh
    if (target === pagesList[0].pageName) {
      window.history.replaceState({}, "", "/");
    } else {
      if (hardUrl) {
        window.location.replace(
          "https://zerodayanubis.com/" + target.toLocaleLowerCase()
        );
      } else {
        window.history.replaceState({}, "", "/" + target.toLocaleLowerCase());
      }
    }
    setPage(target);
  }
};

/**
 * Perform a hard redirect to a link's path, bypassing the website.
 * @param path external link's path
 */
export const redirectToLink = (path: string) => {
  window.location.replace(path);
};

/**
 * Gets the subdomain from the current hostname.
 * @returns subdomain (or just domain if none) as string
 */
export const getSubdomain = () => {
  return window.location.hostname.split(".", 1)[0];
};

/**
 * On image load, show the base img and hide the blur img.
 * @param imgId unique className id of img
 */
export const loadImgHandler = (imgId: string) => {
  const baseImg = document.querySelector("img." + imgId) as any;
  if (baseImg) {
    baseImg.classList.remove("hidden");
  }
  const blurImg = document.querySelector("img." + imgId + "b") as any;
  if (blurImg) {
    blurImg.classList.add("hidden");
  }
};

/**
 * Using HTML id, scroll to a section 'smoothly'.
 * @param idOfSection HTML id of element (no # needed)
 */
export const scrollToSection = (idOfSection: string) => {
  document.getElementById(idOfSection)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Scroll to top of page 'smoothly'.
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Return string/word capitalized.
 * @param str a word to capitalize
 * @returns capitalized word (string)
 */
export const capitalizeString = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};
