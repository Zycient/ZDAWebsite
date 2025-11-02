import * as React from "react";
import PageLinks from "./PageLinks";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeSlotsAtom,
  commsOpenAtom,
  commStatusAtom,
  maxSlotsAtom,
  slotsReadyAtom,
  waitlistSlotsAtom,
} from "../states/commsAtom";
import { themeAtom } from "../states/themeAtom";
import MiniSpinner from "./MiniSpinner";
import { zerodayanubis_dark, zerodayanubis_light } from "../SvgSources";
import { altLongTextLogo } from "../AltText";

const InfoBanner = () => {
  const theme = useRecoilValue(themeAtom);
  const [activeSlots, setActiveSlots] = useRecoilState(activeSlotsAtom);
  const [waitSlots, setWaitSlots] = useRecoilState(waitlistSlotsAtom);
  const maxSlots = useRecoilValue(maxSlotsAtom);
  const [commStatus, setCommStatus] = useRecoilState(commStatusAtom);
  const [, setCommsOpen] = useRecoilState(commsOpenAtom);
  const [, setSlotsReady] = useRecoilState(slotsReadyAtom);
  const [activeSlotsReady, setActiveSlotsReady] = React.useState(false);
  const [waitSlotsReady, setWaitSlotsReady] = React.useState(false);
  const [statusReady, setStatusReady] = React.useState(false);
  const slotsFallback = 0;
  const slotsInit = -1;
  const statusInit = "";
  const statusOpen = "OPEN";
  const statusClosed = "CLOSED";
  const spinnerTimeout = 1250; // ? NOTE: expected fetch times: 38ms (unthrottled), 260ms (slower Wifi), 600ms (Fast 3G)

  React.useEffect(() => {
    // Query Vercel KV Store to get Commissions Slots Info
    const fetchData = async () => {
      const result = await fetch(
        `${
          import.meta.env.VITE_KV_REST_API_URL
        }/mget/slots:active/slots:waitlist`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KV_REST_API_TOKEN}`,
          },
        }
      )
        .then((response) => response.json())
        .catch((err) => console.log(err));

      // Check for Result/Error
      if (result && !result.error && result.result) {
        // Check for empty results
        if (result.result.length === 0) {
          console.log("Warning while fetching KV: No results");
        } else {
          // Parse Current Active and Waitlist Slots
          let commSlotsResult = activeSlots;
          let waitSlotsResult = waitSlots;
          if (result.result[0] && result.result[0].length > 0) {
            commSlotsResult = parseInt(result.result[0]);
          }
          if (result.result[1] && result.result[1].length > 0) {
            waitSlotsResult = parseInt(result.result[1]);
          }

          // Update Commission Slots
          if (!isNaN(commSlotsResult)) {
            setActiveSlots(commSlotsResult);
          }
          if (!isNaN(waitSlotsResult)) {
            setWaitSlots(waitSlotsResult);
          }

          // Determine Commission Status
          if (commSlotsResult < 1) {
            setCommStatus(statusClosed);
          } else {
            setCommStatus(statusOpen);
          }

          // Log result
          console.log("Commission Slots updated from KV result:");
          console.log(result.result);
        }
      } else if (result && result.error) {
        // ERROR
        console.log("Error while fetching KV: " + result.error);
        setSlotsReady(true);
      } else if (!result) {
        // FETCH ERROR
        console.log(
          "Unexpected Error while fetching KV: Failed to Fetch Due to Incorrect URL"
        );
        setSlotsReady(true);
      } else {
        // UNEXPECTED ERROR
        console.log("Unexpected Error while fetching KV: " + result);
        setSlotsReady(true);
      }
    };

    // Call Vercel KV API within hook
    fetchData();
  }, []);

  React.useEffect(() => {
    // Set ready only when not the init value
    if (activeSlots > slotsInit) {
      setActiveSlotsReady(true);
    } else {
      // Initiate timeout for spinner
      setTimeout(() => {
        setActiveSlotsReady(true);
      }, spinnerTimeout);
    }
  }, [activeSlots]);

  React.useEffect(() => {
    // Ensure fallback after timeout
    if (activeSlotsReady) {
      if (activeSlots === slotsInit) {
        setActiveSlots(slotsFallback);
      }
    }
  }, [activeSlotsReady]);

  React.useEffect(() => {
    // Set ready only when not the init value
    if (waitSlots > slotsInit) {
      setWaitSlotsReady(true);
    } else {
      // Initiate timeout for spinner
      setTimeout(() => {
        setWaitSlotsReady(true);
      }, spinnerTimeout);
    }
  }, [waitSlots]);

  React.useEffect(() => {
    // Ensure fallback after timeout
    if (waitSlotsReady) {
      if (waitSlots === slotsInit) {
        setWaitSlots(slotsFallback);
      }
    }
  }, [waitSlotsReady]);

  React.useEffect(() => {
    // Set ready only when not the init value
    if (commStatus !== statusInit) {
      setStatusReady(true);
      // Update boolean state
      if (commStatus === statusClosed) {
        setCommsOpen(false);
      } else {
        setCommsOpen(true);
      }
    } else {
      // Initiate timeout for spinner
      setTimeout(() => {
        setStatusReady(true);
      }, spinnerTimeout);
    }
  }, [commStatus]);

  React.useEffect(() => {
    // Ensure fallback after timeout
    if (statusReady) {
      if (commStatus === statusInit) {
        setCommStatus(statusClosed);
      }
    }
  }, [statusReady]);

  return (
    <div className="info-banner-container w-full py-2 lg:py-0 flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-zdaNightshade-600/[0.07] dark:from-zdaNightshade-600/[0.045] to-transparent">
      <div className="info-zda-container">
        <img
          src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
          className="info-zda block xs:hidden sm:block lg:hidden mx-2 my-1 max-w-40 max-h-8 cursor-default select-none"
          alt={altLongTextLogo}
        />
      </div>
      <div className="comm-info-container w-11/12 lg:mt-4">
        {/* COMM STATUS */}
        <div className="comm-status-container m-2">
          <span className="font-medium tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            <div className="inline-flex items-center">
              COMMISSIONS{" "}
              {statusReady ? (
                commStatus
              ) : (
                <MiniSpinner theme={theme} variant="info-banner-lg" />
              )}
            </div>
          </span>
        </div>
        {/* ACTIVE COMM SLOTS */}
        <div className="comm-slots-container m-2">
          <span className="font-light italic tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            <div className="inline-flex items-center">
              {"("}
              {activeSlotsReady ? (
                activeSlots
              ) : (
                <MiniSpinner theme={theme} variant="info-banner-sm" />
              )}
              {`/${maxSlots} SLOTS)`}
            </div>
          </span>
        </div>
        {/* WAITLIST COMM SLOTS */}
        <div className="comm-waitlist-container m-2">
          <span className="font-light italic tracking-wide text-sm text-slate-900 dark:text-slate-200 pointer-events-none select-none">
            <div className="inline-flex items-center">
              {"("}
              {waitSlotsReady ? (
                waitSlots
              ) : (
                <MiniSpinner theme={theme} variant="info-banner-sm" />
              )}
              {`/${maxSlots} WAITLIST)`}
            </div>
          </span>
        </div>
      </div>
      <div className="sm-links-container">
        <PageLinks location={"bodyTop"} />
      </div>
    </div>
  );
};

export default InfoBanner;
