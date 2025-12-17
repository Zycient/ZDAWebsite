import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageAtom, pagesList } from "../states/pageAtom";
import { clickLink, switchPage } from "../helpers";
import { themeAtom } from "../states/themeAtom";
import {
  bskyIcon,
  closeIcon,
  extLinkIcon,
  igIcon,
  kofiIcon,
  caraIcon,
  payPalIcon,
  printShopIcon,
  threadsIcon,
  mastoIcon,
} from "../icons";
import { zerodayanubis_dark, zerodayanubis_light } from "../SvgSources";
import { altLongTextLogo } from "../AltText";
import ZDAButton from "./ZDAButton";
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
import kofi_gif from "/kofi_rainbow_mug-200px.gif";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const HamburgerMenu = ({ open, setOpen }: props) => {
  const theme = useRecoilValue(themeAtom);
  const [, setPage] = useRecoilState(pageAtom);
  const kofiGifInfo = {
    src: kofi_gif,
    alt: "Animation of Kofi coffee mug with sparkles; click here to get to Downloads",
    title: "Click here for HD Downloads!",
  };

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [open]);

  return (
    <>
      <Drawer
        size="md"
        variant="plain"
        disableScrollLock={true}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet className="rounded-md p-4 flex flex-col gap-3 h-full overflow-y-auto overflow-x-hidden items-center bg-zdaBG-lighterCard/90 dark:bg-zdaBG-darkCard/95 text-gray-700 dark:text-gray-200">
          <div className="inline-flex items-center py-3 mx-auto">
            <div className="text-lg font-semibold pointer-events-none select-none flex flex-row absolute left-0 ml-4">
              <span>⌞&nbsp;</span>
              <h3 className="font-outfit">The ZDA Website</h3>
              <span>&nbsp;⌝</span>
            </div>
            <button
              className="modal-close-btn p-2 mr-4 w-min rounded-full bg-gray-200/75 dark:bg-neutral-800/45 hover:bg-gray-300 active:bg-gray-400 dark:hover:bg-neutral-800 dark:active:bg-neutral-700 text-gray-600 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400 motion-safe:transition-colors motion-safe:duration-200 ease-out flex absolute right-0"
              onClick={() => setOpen(false)}
              onTouchEnd={() => setOpen(false)}
              aria-description="Closes the Navigation Menu"
              aria-label="Close Navigation Menu"
              title="Close"
            >
              {closeIcon}
            </button>
          </div>
          <Divider className="mt-auto" sx={{ marginBottom: -2 }} />
          <div className="drawer-content flex flex-col flex-[9999_1_0%] z-[1] gap-x-3 gap-y-4 w-full px-3 py-2 m-2 overflow-auto font-outfit">
            <p className=" text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Sections
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center xl:justify-left gap-[1px] xl:gap-[2px]">
              {pagesList.map((currentPage, idx) => (
                <React.Fragment key={idx}>
                  {currentPage.isNav && (
                    <ZDAButton
                      clickCallback={() => {
                        switchPage(pagesList[idx].pageName, setPage);
                        setOpen(false);
                      }}
                      textContent={pagesList[idx].pageName}
                      variant="hamburger-section"
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Social Media
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]">
              <ZDAButton
                clickCallback={() => {
                  clickLink(bskyLink);
                  setOpen(false);
                }}
                leftIcon={bskyIcon}
                rightIcon={extLinkIcon}
                textContent="Bluesky"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(igLink);
                  setOpen(false);
                }}
                leftIcon={igIcon}
                rightIcon={extLinkIcon}
                textContent="Instagram"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(threadsLink);
                  setOpen(false);
                }}
                leftIcon={threadsIcon}
                rightIcon={extLinkIcon}
                textContent="Threads"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(caraLink);
                  setOpen(false);
                }}
                leftIcon={caraIcon}
                rightIcon={extLinkIcon}
                textContent="Cara"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(mastoLink);
                  setOpen(false);
                }}
                leftIcon={mastoIcon}
                rightIcon={extLinkIcon}
                textContent="Mastodon"
                variant="hamburger-outlined"
              />
            </Box>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200 pointer-events-none select-none mt-2">
              Prints + Support
            </p>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]">
              <ZDAButton
                clickCallback={() => {
                  clickLink(printShopLink);
                  setOpen(false);
                }}
                leftIcon={printShopIcon}
                rightIcon={extLinkIcon}
                textContent="Print Shop"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(kofiLink);
                  setOpen(false);
                }}
                leftIcon={kofiIcon}
                rightIcon={extLinkIcon}
                textContent="Ko-fi (HD Downloads)"
                variant="hamburger-outlined"
              />
              <ZDAButton
                clickCallback={() => {
                  clickLink(payPalLink);
                  setOpen(false);
                }}
                leftIcon={payPalIcon}
                rightIcon={extLinkIcon}
                textContent="PayPal"
                variant="hamburger-outlined"
              />
            </Box>
            <Box className="flex flex-col flex-wrap content-center items-center justify-center gap-[6px]">
              {/* Kofi gif */}
              <img
                src={kofiGifInfo.src}
                alt={kofiGifInfo.alt}
                title={kofiGifInfo.title}
                onClick={() => clickLink(kofiLink)}
                className="kofi-gif-img z-20 h-full w-20 object-cover object-center rounded-md select-none cursor-pointer subpixel-antialiased"
              />
            </Box>
          </div>
          <Divider className="mt-auto" />
          <Stack direction="row" justifyContent="center" useFlexGap spacing={1}>
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="mx-4 my-2 max-h-[2.35rem] pointer-events-none select-none"
              alt={altLongTextLogo}
            />
          </Stack>
        </Sheet>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
