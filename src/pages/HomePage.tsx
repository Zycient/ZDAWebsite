import * as React from "react";
import { loadImgHandler, switchPage } from "../helpers";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/pageAtom";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { photosHome, photosHomeBtmSm, photosHomeBtmLg } from "../lightboxInfo";
import { IoMdCloseCircle } from "react-icons/io";
import SectionBreak from "../components/SectionBreak";
import {
  photosHomeBtmLgThumbnail,
  photosHomeBtmSmThumbnail,
  photosHomeThumbnail,
} from "../thumbnailInfo";
import PagePromos from "../components/PagePromos";

const HomePage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  const [idx_home, setIdx_home] = React.useState(-1);
  const [idx_homeBtmSm, setIdx_homeBtmSm] = React.useState(-1);
  const [idx_homeBtmLg, setIdx_homeBtmLg] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;

  return (
    <div className="home-page-container w-full flex flex-col justify-center items-center text-slate-700 dark:text-slate-200 select-none">
      {/* Uses `contents` to eliminate excess padding for smaller screens */}
      <div className="home-page-intro max-w-[90%] contents">
        <div className="home-page-zda-intro-container block xs:inline-flex">
          Welcome to the <br className="block xs:hidden" />
          {/* //? NOTE: uses negative margins to shift corner marks */}
          <div className="home-page-zda-intro-mid-container inline-block xs:inline-flex">
            <div className="left-corner-mark inline mt-1 -mb-1">
              &nbsp; ⌞ &nbsp;
            </div>
            ZeroDayAnubis
            <div className="right-corner-mark inline -mt-1 mb-1"> &nbsp;⌝</div>
          </div>
          &nbsp; website!
        </div>
        <p className="home-page-subintro italic text-sm my-4">
          I create abstract oddities, such as
          <br />
          digital paintings, album arts, posters,
          <br />
          logos, graphic design, and more.
        </p>
      </div>
      <div className="home-page-promo max-w-[90%] text-sm xs:text-base">
        You can visit my &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaNightshade-650 dark:text-zdaNightshade-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaNightshade-650 dark:hover:border-zdaNightshade-600 motion-safe:transition-colors motion-safe:duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Portfolio", setPage)}
        >
          Portfolio
        </p>
        &nbsp; to <br className="block sm:hidden" /> see highlights of my
        abstract works ...
        <br />
        <br />
        ... or you can view my current <br className="block sm:hidden" /> &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaNightshade-650 dark:text-zdaNightshade-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaNightshade-650 dark:hover:border-zdaNightshade-600 motion-safe:transition-colors motion-safe:duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("Commissions", setPage)}
        >
          Commissions
        </p>
        &nbsp; types to see if you
        <br /> are interested in having custom
        <br className="block sm:hidden" /> art/logos/designs made for you.
        <br />
        <br /> You can also learn more about me{" "}
        <br className="block sm:hidden" /> and my brief
        <br className="hidden sm:block md:hidden" /> art journey &nbsp;
        <p
          className="home-page-text-link inline-block italic font-semibold text-zdaNightshade-650 dark:text-zdaNightshade-600 hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-400 dark:active:text-slate-400 border-b border-solid border-transparent hover:border-zdaNightshade-650 dark:hover:border-zdaNightshade-600 motion-safe:transition-colors motion-safe:duration-300 ease-out cursor-pointer"
          onClick={() => switchPage("About", setPage)}
        >
          here
        </p>
        &nbsp; too!
      </div>
      <div className="home-page-showcase1 w-full sm:w-11/12 flex flex-col md:flex-row justify-center items-center mx-4 my-6 border border-solid md:border-none rounded-md border-slate-300/50 dark:border-slate-700/20 shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)] md:shadow-none dark:md:shadow-none">
        <div className="home-page-showcase-img-container flex flex-col md:flex-row flex-wrap md:grid md:grid-cols-2 2xl:flex justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src={photosHomeThumbnail[0].blurSrc}
            alt={photosHomeThumbnail[0].alt}
            title={photosHomeThumbnail[0].title}
            className="home-img01b z-20 h-full w-64 2xl:w-72 my-4 aspect-[200/283] object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_home(0)}
            onLoad={() => loadImgHandler("home-img01")}
            src={photosHomeThumbnail[0].src}
            alt={photosHomeThumbnail[0].alt}
            title={photosHomeThumbnail[0].title}
            className="hidden home-img01 z-10 hover:z-50 h-full w-64 2xl:w-72 my-4 aspect-[200/283] object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosHomeThumbnail[1].blurSrc}
            alt={photosHomeThumbnail[1].alt}
            title={photosHomeThumbnail[1].title}
            className="home-img02b z-20 h-full w-64 2xl:w-72 my-4 aspect-[200/283] object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_home(1)}
            onLoad={() => loadImgHandler("home-img02")}
            src={photosHomeThumbnail[1].src}
            alt={photosHomeThumbnail[1].alt}
            title={photosHomeThumbnail[1].title}
            className="hidden home-img02 z-10 hover:z-50 h-full w-64 2xl:w-72 my-4 aspect-[200/283] object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosHomeThumbnail[2].blurSrc}
            alt={photosHomeThumbnail[2].alt}
            title={photosHomeThumbnail[2].title}
            className="home-img03b z-20 h-full w-64 2xl:w-72 my-4 aspect-[200/283] object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_home(2)}
            onLoad={() => loadImgHandler("home-img03")}
            src={photosHomeThumbnail[2].src}
            alt={photosHomeThumbnail[2].alt}
            title={photosHomeThumbnail[2].title}
            className="hidden home-img03 z-10 hover:z-50 h-full w-64 2xl:w-72 aspect-[200/283] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            onClick={() => setIdx_home(3)}
            src={photosHomeThumbnail[3].src}
            alt={photosHomeThumbnail[3].alt}
            title={photosHomeThumbnail[3].title}
            className="home-img04 z-10 hover:z-50 h-full w-64 2xl:w-72 aspect-[200/283] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
            index={idx_home}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosHome}
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
            open={idx_home >= 0}
            close={() => setIdx_home(-1)}
          />
        </div>
      </div>
      <SectionBreak />
      <div className="home-page-showcase2 w-full sm:w-11/12 flex flex-col md:flex-row justify-center items-center mx-4 my-6 border border-solid md:border-none rounded-md border-slate-300/50 dark:border-slate-700/20 shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)] md:shadow-none dark:md:shadow-none">
        <div className="home-page-showcase2-img-container-sm flex 2xl:hidden flex-col justify-center items-center gap-0 md:gap-2 px-4 xs:px-6 sm:px-12 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            src={photosHomeBtmSmThumbnail[0].blurSrc}
            alt={photosHomeBtmSmThumbnail[0].alt}
            title={photosHomeBtmSmThumbnail[0].title}
            className="home-img05b z-20 h-full w-[calc(100%-2rem)] sm:w-[30rem] my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_homeBtmSm(0)}
            onLoad={() => loadImgHandler("home-img05")}
            src={photosHomeBtmSmThumbnail[0].src}
            alt={photosHomeBtmSmThumbnail[0].alt}
            title={photosHomeBtmSmThumbnail[0].title}
            className="hidden home-img05 z-10 h-full w-[calc(100%-2rem)] sm:w-[30rem] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
            index={idx_homeBtmSm}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosHomeBtmSm}
            styles={{
              container: {
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(0,0,0,0.8)",
              },
              captionsTitle: {
                fontSize: "15px",
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
            open={idx_homeBtmSm >= 0}
            close={() => setIdx_homeBtmSm(-1)}
          />
        </div>
        <div className="home-page-showcase2-img-container hidden 2xl:flex flex-row justify-center items-center gap-0 md:gap-2 px-0 xs:px-8 py-4 md:py-8 2xl:py-4 my-1 sm:my-0 border-none md:border-solid border rounded-md border-slate-300/50 dark:border-slate-700/20 drop-shadow-md shadow-none md:shadow-[8px_4px_12px_4px_rgba(51,65,85,0.10)] dark:md:shadow-[0_0_12px_4px_rgba(203,213,225,0.025)]">
          <img
            onClick={() => setIdx_homeBtmLg(0)}
            src={photosHomeBtmLgThumbnail[0].src}
            alt={photosHomeBtmLgThumbnail[0].alt}
            title={photosHomeBtmLgThumbnail[0].title}
            className="home-img06 z-10 h-full w-[62.5rem] my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
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
            index={idx_homeBtmLg}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosHomeBtmLg}
            styles={{
              container: {
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(0,0,0,0.8)",
              },
              captionsTitle: {
                fontSize: "15px",
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
            open={idx_homeBtmLg >= 0}
            close={() => setIdx_homeBtmLg(-1)}
          />
        </div>
      </div>
      <SectionBreak />
      <PagePromos />
      <div className="home-page-outro max-w-[90%] mt-12 sm:mt-10 italic select-none">
        Thank you for visiting!
      </div>
    </div>
  );
};

export default HomePage;
