import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import { clickLink, loadImgHandler, scrollToSection } from "../helpers";
import MiniSpinner from "../components/MiniSpinner";
import ZDAButton from "../components/ZDAButton";
import CardBreak from "../components/CardBreak";
import SectionBreak from "../components/SectionBreak";
import {
  photosCommissionsAbstractifyThumbnail,
  photosCommissionsCoalesceComparisonThumbnail,
  photosCommissionsCoalesceThumbnail,
  photosCommissionsVectorizeThumbnail,
} from "../thumbnailInfo";
import {
  a_dark,
  a_light,
  c_dark,
  c_light,
  v_dark,
  v_light,
} from "../SvgSources";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import {
  photosCommissionsAbstractify,
  photosCommissionsCoalesce,
  photosCommissionsCoalesceComparison,
  photosCommissionsVectorize,
} from "../lightboxInfo";
import PagePromos from "../components/PagePromos";
import { commsOpenAtom } from "../states/commsAtom";
import { downArrowBigIcon, rightArrowBigIcon } from "../icons";
import { commFormLink, commInfoLink } from "../links";

const letterLogoSources = [
  {
    src: a_light,
    letter: "a",
    theme: "",
  },
  {
    src: a_dark,
    letter: "a",
    theme: "dark",
  },
  {
    src: c_light,
    letter: "c",
    theme: "",
  },
  {
    src: c_dark,
    letter: "c",
    theme: "dark",
  },
  {
    src: v_light,
    letter: "v",
    theme: "",
  },
  {
    src: v_dark,
    letter: "v",
    theme: "dark",
  },
];

const CommissionsPage = () => {
  const theme = useRecoilValue(themeAtom);
  const commsOpen = useRecoilValue(commsOpenAtom);
  const [idx_abstractify, setIdx_abstractify] = React.useState(-1);
  const [idx_vectorize, setIdx_vectorize] = React.useState(-1);
  const [idx_coalesce, setIdx_coalesce] = React.useState(-1);
  const [idx_compare, setIdx_compare] = React.useState(-1);
  const [hover_abstractify, setHover_abstractify] = React.useState(false);
  const [hover_vectorize, setHover_vectorize] = React.useState(false);
  const [hover_coalesce, setHover_coalesce] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;
  const [formVisible, setFormVisible] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  const [formScroll, setFormScroll] = React.useState(false);
  const formSection = "comm-form-section";
  const compareMap = ["solitudeType", "peaceType"];
  const [currentCompare, setCompare] = React.useState(compareMap[0]);

  const commFormClickHandler = () => {
    setFormScroll(true);
    setFormVisible(true);
  };

  const getLogoSrc = (letter: string) => {
    // Normalize "light"/"system" to "" for theme filter
    const normalizedTheme = theme !== "dark" ? "" : theme;
    // Filter on sources by letter, theme, and colorScheme
    const resultObj = letterLogoSources.filter(
      (logoSrc) =>
        logoSrc.letter === letter && logoSrc.theme === normalizedTheme
    );
    if (resultObj && resultObj.length) {
      return resultObj[0].src;
    } else {
      return letterLogoSources[0].src;
    }
  };

  React.useEffect(() => {
    setFormLoading(formVisible);
  }, [formVisible]);

  React.useEffect(() => {
    if (formScroll && formVisible) {
      scrollToSection(formSection);
      setFormScroll(false); // reset
    }
  }, [formScroll, formVisible]);

  React.useEffect(() => {
    // Randomize Coalesce comparison type shown
    setCompare(compareMap[Math.floor(Math.random() * compareMap.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="commissions-page-container w-full flex flex-col justify-center items-center">
      <div className="commissions-page-cards-container w-full md:w-[calc(100%-32px)] h-full mb-[48px] py-4 sm:py-8 xl:py-12 flex flex-col justify-center items-center gap-0 sm:gap-4 xl:gap-8 rounded-2xl bg-zdaBG-lighterCard/75 dark:bg-zdaBG-darkerCard/30 border border-gray-200/20 dark:border-neutral-900/20">
        <div className="commissions-page-common-description-container flex flex-col flex-wrap gap-4 m-2 sm:mb-0 px-8 select-none">
          <span className="commissions-page-common-title italic">
            For all commissions:
          </span>
          <div className="commissions-page-common-items flex flex-col justify-center items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300/95">
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;They will focus on colors/contrast/textures
              with effects and layers used to achieve best
              result&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;They will be delivered digitally
              (PNG/SVG)&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;No initial sketches will be
              provided&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-item">
              &mdash;&nbsp;&nbsp;When applicable, some WIPs{" "}
              <br className="block sm:hidden" />
              can be provided at the end&nbsp;&nbsp;&mdash;
            </span>
            <span className="commissions-page-common-subitem italic font-semibold">
              &nbsp;&nbsp;NOTE: for art created in Procreate,
              <br className="block sm:hidden" /> a timelapse video can be
              provided&nbsp;&nbsp;
            </span>
            <span className="commissions-page-common-item italic">
              &mdash;&nbsp;&nbsp;Any commission requests can be
              refused&nbsp;&nbsp;&mdash;
            </span>
          </div>
        </div>
        <div className="commissions-page-comm-info mx-1 my-3 sm:my-0 sm:mt-3 inline-block text-gray-600 dark:text-gray-300 tracking-wide select-none">
          For full commission information, click{" "}
          <p
            className="home-page-text-link inline-block italic font-semibold text-zdaNightshade-650 dark:text-zdaNightshade-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaNightshade-650 dark:hover:border-zdaNightshade-600 motion-safe:transition-colors motion-safe:duration-300 ease-out cursor-pointer"
            onClick={() => clickLink(commInfoLink)}
          >
            here
          </p>
          .
        </div>
        {/* Abstractify */}
        <div
          className="commissions-page-card-container flex flex-col w-[calc(100%-1.75rem)] xs:w-[25rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] 3xl:w-[55rem] h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaNightshade-950/35 to-zdaNightshade-50 dark:to-zdaNightshade-950/40 drop-shadow-card-sm-light-nightshade sm:drop-shadow-card-light-nightshade dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark"
          onMouseEnter={() => setHover_abstractify(true)}
          onMouseLeave={() => setHover_abstractify(false)}
        >
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                src={photosCommissionsAbstractifyThumbnail[0].blurSrc}
                alt={photosCommissionsAbstractifyThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img01b z-20 col-start-1 row-start-1 w-full h-64 sm:h-80 lg:h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none select-none cursor-pointer"
                loading="lazy"
              />
              <img
                onClick={() => setIdx_abstractify(0)}
                onLoad={() => loadImgHandler("comm-img01")}
                src={photosCommissionsAbstractifyThumbnail[0].src}
                alt={photosCommissionsAbstractifyThumbnail[0].alt}
                title="Click for more examples"
                className="hidden comm-img01 z-10 col-start-1 row-start-1 w-full h-64 sm:h-80 lg:h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={getLogoSrc("a")}
                alt="Abstractify Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaNightshade-900/80 hover:border-zdaNightshade-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title block w-min text-center mx-auto text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Abstractify
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Procreate
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Transform idea into digital abstract painting
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 2-3 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak isColorful={hover_abstractify} />
          <div
            className={
              "commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row items-center select-none" +
              (!commsOpen ? " justify-center" : " justify-between")
            }
          >
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              {commsOpen && (
                <div className="hidden md:flex">
                  <CardBreak isVertical />
                </div>
              )}
            </span>
            {commsOpen && (
              <>
                <div className="block md:hidden">
                  <ZDAButton
                    clickCallback={() => clickLink(commFormLink)}
                    textContent="Commission Form"
                    variant="mobile"
                  />
                </div>
                <div className="hidden md:block">
                  <ZDAButton
                    clickCallback={() => commFormClickHandler()}
                    textContent="Commission Form"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_abstractify}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsAbstractify}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_abstractify >= 0}
          close={() => setIdx_abstractify(-1)}
        />
        {/* Vectorize */}
        <div
          className="commissions-page-card-container flex flex-col w-[calc(100%-1.75rem)] xs:w-[25rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] 3xl:w-[55rem] h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaNightshade-950/35 to-zdaNightshade-50 dark:to-zdaNightshade-950/40 drop-shadow-card-sm-light-nightshade sm:drop-shadow-card-light-nightshade dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark"
          onMouseEnter={() => setHover_vectorize(true)}
          onMouseLeave={() => setHover_vectorize(false)}
        >
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                onClick={() => setIdx_vectorize(0)}
                src={photosCommissionsVectorizeThumbnail[0].src}
                alt={photosCommissionsVectorizeThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img02 z-10 col-start-1 row-start-1 w-full h-64 sm:h-80 lg:h-96 aspect-[14/9] object-cover object-bottom rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
                style={{ ...{ zoom: "1.05" } }}
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={getLogoSrc("v")}
                alt="Vectorize Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaNightshade-900/80 hover:border-zdaNightshade-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title block w-min text-center mx-auto text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Vectorize
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Inkscape
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Translate idea into vector art/logo/design
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 2-3 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak isColorful={hover_vectorize} />
          <div
            className={
              "commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row items-center select-none" +
              (!commsOpen ? " justify-center" : " justify-between")
            }
          >
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;30&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              {commsOpen && (
                <div className="hidden md:flex">
                  <CardBreak isVertical />
                </div>
              )}
            </span>
            {commsOpen && (
              <>
                <div className="block md:hidden">
                  <ZDAButton
                    clickCallback={() => clickLink(commFormLink)}
                    textContent="Commission Form"
                    variant="mobile"
                  />
                </div>
                <div className="hidden md:block">
                  <ZDAButton
                    clickCallback={() => commFormClickHandler()}
                    textContent="Commission Form"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_vectorize}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsVectorize}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_vectorize >= 0}
          close={() => setIdx_vectorize(-1)}
        />
        {/* Coalesce */}
        <div
          className="commissions-page-card-container flex flex-col w-[calc(100%-1.75rem)] xs:w-[25rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] 3xl:w-[55rem] h-full mx-4 my-4 p-4 gap-4 rounded-xl bg-gradient-to-t sm:bg-gradient-to-tl from-zdaBG-lightCard dark:from-zdaNightshade-950/35 to-zdaNightshade-50 dark:to-zdaNightshade-950/40 drop-shadow-card-sm-light-nightshade sm:drop-shadow-card-light-nightshade dark:drop-shadow-card-sm-dark dark:sm:drop-shadow-card-dark"
          onMouseEnter={() => setHover_coalesce(true)}
          onMouseLeave={() => setHover_coalesce(false)}
        >
          <div className="commissions-page-card-img-and-btn-container rounded-t-xl rounded-b-none self-stretch relative flex flex-col -mt-4 -mx-4 pb-4">
            <div className="commissions-page-card-img-container grid">
              <img
                src={photosCommissionsCoalesceThumbnail[0].blurSrc}
                alt={photosCommissionsCoalesceThumbnail[0].alt}
                title="Click for more examples"
                className="comm-img03b z-20 col-start-1 row-start-1 w-full h-64 sm:h-80 lg:h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none select-none cursor-pointer"
                loading="lazy"
              />
              <img
                onClick={() => setIdx_coalesce(0)}
                onLoad={() => loadImgHandler("comm-img03")}
                src={photosCommissionsCoalesceThumbnail[0].src}
                alt={photosCommissionsCoalesceThumbnail[0].alt}
                title="Click for more examples"
                className="hidden comm-img03 z-10 col-start-1 row-start-1 w-full h-64 sm:h-80 lg:h-96 aspect-[14/9] object-cover object-center rounded-t-xl rounded-b-none brightness-[.96] motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] select-none cursor-pointer"
              />
            </div>
            <div className="commissions-page-card-logo-container grid absolute z-10 right-[calc(50%-1.5rem)] bottom-4 translate-y-1/2">
              <img
                src={getLogoSrc("c")}
                alt="Coalesce Logo"
                className="commissions-page-card-logo z-30 col-start-1 row-start-1 h-12 w-12 my-1 object-cover object-center rounded-full border border-transparent select-none"
              />
              <div className="commissions-page-card-logo-overlay z-40 col-start-1 row-start-1 h-12 w-12 my-1 rounded-full bg-transparent border-2 border-zdaNightshade-900/80 hover:border-zdaNightshade-700 dark:border-gray-300 dark:hover:border-gray-600 motion-safe:transition-all motion-safe:duration-150 ease-out select-none" />
            </div>
          </div>
          <div className="commissions-page-card-middle-container justify-center items-center">
            <span className="commissions-page-card-title block w-min text-center mx-auto text-xl font-urbanist font-normal tracking-wider drop-shadow-card-logo-light dark:drop-shadow-card-logo-dark hover:drop-shadow-none dark:hover:drop-shadow-none motion-safe:transition-all motion-safe:duration-100 ease-out select-none">
              Coalesce
            </span>
            <div className="commissions-page-card-description-container my-2 flex flex-col md:inline-flex md:flex-row text-base md:text-sm lg:text-base items-center select-none">
              <div className="commissions-page-card-description">
                Made in Procreate/Inkscape/PSP
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Fusion of abstract painting and vector art
              </div>
              <div className="commissions-page-card-description hidden md:block md:mx-1 lg:mx-2">
                |
              </div>
              <div className="commissions-page-card-description">
                Ready in 3-5 days
              </div>
            </div>
            <div className="commissions-page-card-clickformore text-sm italic mt-2 sm:mt-0 text-gray-600 dark:text-gray-300/95 tracking-tight select-none">
              (Click image for more examples)
            </div>
          </div>
          <CardBreak isColorful={hover_coalesce} />
          <div
            className={
              "commissions-page-card-bottom-content w-full flex flex-col sm:inline-flex sm:flex-row items-center select-none" +
              (!commsOpen ? " justify-center" : " justify-between")
            }
          >
            <span className="commissions-page-card-price m-0 sm:m-4 p-1 inline-flex justify-center items-center">
              $<div className="tracking-wide">&nbsp;45&nbsp;&nbsp;</div>
              <div className="text-gray-600 dark:text-gray-300/95 tracking-tight">
                (PayPal/Kofi)
              </div>
              {commsOpen && (
                <div className="hidden md:flex">
                  <CardBreak isVertical />
                </div>
              )}
            </span>
            {commsOpen && (
              <>
                <div className="block md:hidden">
                  <ZDAButton
                    clickCallback={() => clickLink(commFormLink)}
                    textContent="Commission Form"
                    variant="mobile"
                  />
                </div>
                <div className="hidden md:block">
                  <ZDAButton
                    clickCallback={() => commFormClickHandler()}
                    textContent="Commission Form"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_coalesce}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsCoalesce}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_coalesce >= 0}
          close={() => setIdx_coalesce(-1)}
        />
        {/* Coalesce Comparison */}
        <div className="commissions-comparison-container w-full flex flex-col justify-center items-center">
          <div className="commissions-comparison-card-container flex flex-col w-[calc(100%-1.75rem)] xs:w-[25rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] 3xl:w-[55rem] h-full justify-center items-center mx-4 my-4 p-8 gap-4 rounded-xl border border-gray-200 dark:border-gray-600/10 bg-zdaBG-lightNightshadeCard dark:bg-zdaBG-darkNightshadeCard/20">
            <div className="commissions-comparison-card-text-container justify-center items-center ">
              <span className="commissions-page-card-title block text-center mx-auto text-xl font-urbanist font-normal text-gray-600 dark:text-gray-300 tracking-wider select-none">
                Coalesce Comparison
              </span>
            </div>
            {currentCompare === compareMap[0] && (
              <div className="commissions-comparison-content-container flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">
                <div className="commissions-comparison-content flex flex-col justify-center items-center gap-1">
                  <span className="commissions-comparison-content-text-top text-gray-500 dark:text-gray-400 tracking-tight select-none">
                    Before:
                  </span>
                  <img
                    onClick={() => setIdx_compare(0)}
                    src={photosCommissionsCoalesceComparisonThumbnail[0].src}
                    alt={photosCommissionsCoalesceComparisonThumbnail[0].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[0].title
                    }
                    className="commissions-compare-img01 z-10 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
                  />
                  <span className="commissions-comparison-content-text-btm text-gray-500 dark:text-gray-400 tracking-tight italic select-none">
                    (Inkscape only)
                  </span>
                </div>
                <div className="block sm:hidden">{downArrowBigIcon}</div>
                <div className="hidden sm:block">{rightArrowBigIcon}</div>
                <div className="commissions-comparison-content flex flex-col justify-center items-center gap-1">
                  <span className="commissions-comparison-content-text-top text-gray-500 dark:text-gray-400 tracking-tight select-none">
                    After:
                  </span>
                  <img
                    src={
                      photosCommissionsCoalesceComparisonThumbnail[1].blurSrc
                    }
                    alt={photosCommissionsCoalesceComparisonThumbnail[1].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[1].title
                    }
                    className="commissions-compare-img02b z-20 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md select-none"
                    loading="lazy"
                  />
                  <img
                    onClick={() => setIdx_compare(1)}
                    onLoad={() => loadImgHandler("commissions-compare-img02")}
                    src={photosCommissionsCoalesceComparisonThumbnail[1].src}
                    alt={photosCommissionsCoalesceComparisonThumbnail[1].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[1].title
                    }
                    className="hidden commissions-compare-img02 z-10 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
                  />
                  <span className="commissions-comparison-content-text-btm text-gray-500 dark:text-gray-400 tracking-tight italic select-none">
                    (Inkscape and Procreate)
                  </span>
                </div>
              </div>
            )}
            {currentCompare === compareMap[1] && (
              <div className="commissions-comparison-content-container flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">
                <div className="commissions-comparison-content flex flex-col justify-center items-center gap-1">
                  <span className="commissions-comparison-content-text-top text-gray-500 dark:text-gray-400 tracking-tight select-none">
                    Before:
                  </span>
                  <img
                    onClick={() => setIdx_compare(2)}
                    src={photosCommissionsCoalesceComparisonThumbnail[2].src}
                    alt={photosCommissionsCoalesceComparisonThumbnail[2].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[2].title
                    }
                    className="commissions-compare-img03 z-10 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
                  />
                  <span className="commissions-comparison-content-text-btm text-gray-500 dark:text-gray-400 tracking-tight italic select-none">
                    (Inkscape only)
                  </span>
                </div>
                <div className="block sm:hidden">{downArrowBigIcon}</div>
                <div className="hidden sm:block">{rightArrowBigIcon}</div>
                <div className="commissions-comparison-content flex flex-col justify-center items-center gap-1">
                  <span className="commissions-comparison-content-text-top text-gray-500 dark:text-gray-400 tracking-tight select-none">
                    After:
                  </span>
                  <img
                    src={
                      photosCommissionsCoalesceComparisonThumbnail[3].blurSrc
                    }
                    alt={photosCommissionsCoalesceComparisonThumbnail[3].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[3].title
                    }
                    className="commissions-compare-img04b z-20 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md select-none"
                    loading="lazy"
                  />
                  <img
                    onClick={() => setIdx_compare(3)}
                    onLoad={() => loadImgHandler("commissions-compare-img04")}
                    src={photosCommissionsCoalesceComparisonThumbnail[3].src}
                    alt={photosCommissionsCoalesceComparisonThumbnail[3].alt}
                    title={
                      photosCommissionsCoalesceComparisonThumbnail[3].title
                    }
                    className="hidden commissions-compare-img04 z-10 h-full w-64 md:w-48 lg:w-60 xl:w-56 2xl:w-72 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
                  />
                  <span className="commissions-comparison-content-text-btm text-gray-500 dark:text-gray-400 tracking-tight italic select-none">
                    (Inkscape and Procreate)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <Lightbox
          plugins={[Captions]}
          captions={{
            ref: captionsRef,
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          on={{
            click: () => {
              (captionsRef.current?.visible
                ? captionsRef.current?.hide
                : captionsRef.current?.show)?.();
            },
          }}
          index={idx_compare}
          render={{
            iconCaptionsVisible: () => <MdClosedCaption size={28} />,
            iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
            iconClose: () => <IoMdCloseCircle size={28} />,
          }}
          slides={photosCommissionsCoalesceComparison}
          styles={{
            container: {
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0,0,0,0.8)",
            },
            captionsTitle: {
              fontSize: "16px",
              fontWeight: "300",
            },
            captionsTitleContainer: {
              height: "46px",
              position: "absolute",
              bottom: "0",
              left: "0",
              top: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          open={idx_compare >= 0}
          close={() => setIdx_compare(-1)}
        />
      </div>
      {commsOpen && (
        <div className="commissions-page-form-container w-full flex flex-col justify-center items-center">
          {/* 1px Form Section to Scroll To */}
          <div
            className="commissions-page-form-section h-px w-px mt-px"
            id={formSection}
          />
          <span className="commissions-page-btm-comm-text italic text-slate-600 dark:text-gray-300 tracking-tight select-none">
            If you are interested, <br className="block sm:hidden" /> you can
            commission me directly here:
          </span>
          {/* Desktop/Tablet Only - Show/Hide Form directly in page */}
          <ZDAButton
            clickCallback={() => setFormVisible(!formVisible)}
            textContent={
              formVisible ? "Hide Commissions Form" : "Show Commissions Form"
            }
          />
          {/* Mobile Only - Open form in new tab */}
          <ZDAButton
            clickCallback={() => clickLink(commFormLink)}
            textContent="Commissions Form"
            variant="mobile"
          />
          {formLoading && (
            <span className="inline-flex justify-center items-center gap-2">
              <MiniSpinner theme={theme} />
              Loading form...
            </span>
          )}
          {/* Embedded Commissions Form */}
          {formVisible && (
            <object
              data={commFormLink}
              type="text/html"
              style={{
                width: "100%",
                height: "600px",
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
              onLoad={() => setFormLoading(false)}
            >
              Commissions Form
            </object>
          )}
          <SectionBreak />
        </div>
      )}
      <PagePromos />
      <div className="commissions-page-outro max-w-[90%] mt-12 sm:mt-10 italic select-none">
        Thank you for checking out my art!
      </div>
    </div>
  );
};

export default CommissionsPage;
