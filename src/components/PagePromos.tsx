import * as React from "react";
import ZDAButton from "./ZDAButton";
import { clickLink } from "../helpers";
import {
  bskyLink,
  caraLink,
  igLink,
  kofiLink,
  mastoLink,
  payPalLink,
  printShopLink,
  threadsLink,
} from "../links";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import kofi_gif from "/kofi_sparkle_mug-80px.gif";
import kofi_gif_dark from "/kofi_speech_bubble-80px.gif";

const PagePromos = () => {
  const theme = useRecoilValue(themeAtom);
  const kofiGifInfo = {
    src: theme === "dark" ? kofi_gif_dark : kofi_gif,
    alt: "Animation of Kofi coffee mug with sparkles; click here to get to Downloads",
    title: "Click here for HD Downloads!",
  };
  return (
    <>
      <div className="promos-container flex flex-col justify-center items-center gap-6 my-6 sm:my-8 select-none">
        {/* Print Shop Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-zdaBG-lightNightshadeCard/90 dark:bg-zdaBG-darkNightshadeCard/25 border border-zdaNightshade-800/5 dark:border-zdaNightshade-700/5">
          <span className="promo-title text-lg font-medium tracking-wide">
            Print Shop
          </span>
          <span className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Get art prints, posters, stickers, cards and more:
          </span>
          <ZDAButton
            clickCallback={() => clickLink(printShopLink)}
            textContent="Print Shop"
            tight
            variant="mobile-neutral"
          />
          <ZDAButton
            clickCallback={() => clickLink(printShopLink)}
            textContent="Print Shop"
            tight
            variant="neutral"
          />
        </div>
        {/* Downloads Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-zdaBG-lightNightshadeCard/90 dark:bg-zdaBG-darkNightshadeCard/25 border border-zdaNightshade-800/5 dark:border-zdaNightshade-700/5">
          <span className="promo-title text-lg font-medium tracking-wide">
            Downloads
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Download high-quality versions of my art for free:
          </p>
          <ZDAButton
            clickCallback={() => clickLink(kofiLink)}
            textContent="Ko-fi"
            tight
            variant="mobile-neutral"
          />
          <ZDAButton
            clickCallback={() => clickLink(kofiLink)}
            textContent="Ko-fi"
            tight
            variant="neutral"
          />
          {/* Kofi gif */}
          <img
            src={kofiGifInfo.src}
            alt={kofiGifInfo.alt}
            title={kofiGifInfo.title}
            onClick={() => clickLink(kofiLink)}
            className="kofi-gif-img z-20 h-full w-20 blur-none dark:blur-[0.3px] object-cover object-center rounded-md drop-shadow-logo-kofi dark:drop-shadow-logo-kofi-dark dark:hover:drop-shadow-logo-kofi motion-safe:transition-all motion-safe:duration-300 select-none cursor-pointer"
          />
        </div>
        {/* Payment Methods Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-zdaBG-lightNightshadeCard/90 dark:bg-zdaBG-darkNightshadeCard/25 border border-zdaNightshade-800/5 dark:border-zdaNightshade-700/5">
          <span className="promo-title text-lg font-medium tracking-wide">
            Support
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            If you want to directly support me or pay for commissions:
          </p>
          <div className="promo-button-container flex flex-col justify-center items-center gap-1">
            <ZDAButton
              clickCallback={() => clickLink(payPalLink)}
              textContent="PayPal"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(payPalLink)}
              textContent="PayPal"
              tight
              variant="neutral"
            />
          </div>
        </div>
        {/* Socmeds Promo */}
        <div className="promo flex flex-col justify-center items-center w-auto xxs:w-80 xs:w-[21rem] md:w-[22rem] xl:w-[23rem] 4k:w-96 h-full mx-4 p-8 gap-4 rounded-lg bg-zdaBG-lightNightshadeCard/90 dark:bg-zdaBG-darkNightshadeCard/25 border border-zdaNightshade-800/5 dark:border-zdaNightshade-700/5">
          <span className="promo-title text-lg font-medium tracking-wide">
            Social Media
          </span>
          <p className="promo-description tracking-tight text-gray-600 dark:text-gray-300/95 text-balance">
            Visit my social media for the latest updates and art:
          </p>
          <div className="promo-button-container flex flex-col justify-center items-center gap-1">
            <ZDAButton
              clickCallback={() => clickLink(bskyLink)}
              textContent="Bluesky"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(bskyLink)}
              textContent="Bluesky"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(igLink)}
              textContent="Instagram"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(igLink)}
              textContent="Instagram"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(threadsLink)}
              textContent="Threads"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(threadsLink)}
              textContent="Threads"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(caraLink)}
              textContent="Cara"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(caraLink)}
              textContent="Cara"
              tight
              variant="neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(mastoLink)}
              textContent="Mastodon"
              tight
              variant="mobile-neutral"
            />
            <ZDAButton
              clickCallback={() => clickLink(mastoLink)}
              textContent="Mastodon"
              tight
              variant="neutral"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PagePromos;
