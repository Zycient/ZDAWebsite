import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";
import {
  zdamono_dark,
  zdamono_light,
  zerodayanubis_dark,
  zerodayanubis_light,
} from "../SvgSources";
import { loadImgHandler } from "../helpers";
import { altLongTextLogo, altZDALogoSm } from "../AltText";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { MdClosedCaption, MdClosedCaptionDisabled } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import {
  photosAbout,
  photosAboutHuion,
  photosAboutPenUp,
} from "../lightboxInfo";
import {
  photosAboutHuionThumbnail,
  photosAboutPenUpThumbnail,
  photosAboutThumbnail,
} from "../thumbnailInfo";

const AboutPage = () => {
  const theme = useRecoilValue(themeAtom);
  const [idx_about, setIdx_about] = React.useState(-1);
  const [idx_aboutPenUp, setIdx_aboutPenUp] = React.useState(-1);
  const [idx_aboutHuion, setIdx_aboutHuion] = React.useState(-1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captionsRef = React.useRef(null) as any;

  return (
    <div className="about-page-container w-full flex flex-col justify-center items-center">
      {/* Lightbox - About (Procreate/Inkscape) */}
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
        index={idx_about}
        render={{
          iconCaptionsVisible: () => <MdClosedCaption size={28} />,
          iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
          iconClose: () => <IoMdCloseCircle size={28} />,
        }}
        slides={photosAbout}
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
        open={idx_about >= 0}
        close={() => setIdx_about(-1)}
      />
      {/* Intro Part 1 */}
      <div className="about-intro-container w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row justify-between items-center md:mr-auto md:ml-5 lg:ml-24 xl:ml-48 2xl:ml-[17.5rem]">
        <div className="about-intro-title-and-pic-container flex flex-col md:flex-row-reverse items-center mx-2 my-4 w-full">
          <div className="about-intro-title-container flex flex-col justify-center md:justify-start items-center md:ml-8 w-full">
            <img
              src={theme === "dark" ? zerodayanubis_dark : zerodayanubis_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
              alt={altLongTextLogo}
            />
            <span className="font-light italic text-lg my-2 pointer-events-none select-none">
              Abstract Media Creator
            </span>
            <p className="about-intro-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I am Zero; I love photography, music, and gaming,
              <br /> and I create abstract oddities with a focus on
              <br />
              <span className="italic font-semibold tracking-wide">
                {"colors + contrast + textures."}
              </span>
            </p>
          </div>
          <img
            src={photosAboutThumbnail[0].blurSrc}
            alt={photosAboutThumbnail[0].alt}
            title={photosAboutThumbnail[0].title}
            className="about-img01b z-20 h-full w-80 my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_about(0)}
            onLoad={() => loadImgHandler("about-img01")}
            src={photosAboutThumbnail[0].src}
            alt={photosAboutThumbnail[0].alt}
            title={photosAboutThumbnail[0].title}
            className="hidden about-img01 z-10 h-full w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        <div className="about-intro-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-intro-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            I am Zero; I love photography, music, and gaming,
            <br /> but I also create abstract oddities with a focus on
            <br />
            <span className="italic font-semibold tracking-wide">
              {"colors + contrast + textures."}
            </span>
          </p>
        </div>
      </div>
      {/* Intro Part 2 */}
      <div className="about-intro-container2 w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row-reverse justify-between items-center md:ml-auto md:mr-5 lg:mr-24 xl:mr-48 2xl:mr-[17.5rem]">
        <div className="about-intro-title-and-pic-container2 flex flex-col md:flex-row items-center mx-2 my-4 w-full">
          <div className="about-intro-title-container2 flex flex-col justify-center md:justify-start items-center md:mr-8 w-full">
            <img
              src={theme === "dark" ? zdamono_dark : zdamono_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
              alt={altZDALogoSm}
            />
            <span className="h-px w-10 border-solid border-b-[3px] border-slate-800/70 dark:border-slate-200/70 rounded-xl my-2 pointer-events-none select-none" />
            <p className="about-intro-blurb-md2 hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I bring strange and unique ideas to life,
              <br /> using influences from the worlds of
              <br /> glitch art, albums, movie posters,
              <br /> pop-punk, landscape photography and more.
              <br />
              <span className="italic font-semibold tracking-wide">
                {"I throw out the rulebook of art and create my own aesthetic."}
              </span>
            </p>
          </div>
          <img
            onClick={() => setIdx_about(1)}
            src={photosAboutThumbnail[1].src}
            alt={photosAboutThumbnail[1].alt}
            title={photosAboutThumbnail[1].title}
            className="about-img02 z-10 h-full w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        <div className="about-intro-blurb-container-mobile2 flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-intro-blurb2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            I bring strange and unique ideas to life,
            <br /> using influences from the worlds of
            <br /> glitch art, albums, movie posters,
            <br /> pop-punk, landscape photography and more.
            <br />
            <span className="italic font-semibold tracking-wide">
              {"I throw out the rulebook of art and create my own aesthetic."}
            </span>
          </p>
        </div>
      </div>
      {/* Art History Summary */}
      <div className="about-summary-container w-full flex flex-col items-center mx-4 mb-4 mt-8 px-2">
        <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
          Summary of an artist...
        </span>
        <p className="about-summary-blurb1 font-normal dark:font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          Initially, I loved and appreciated art from afar;
          <br />I spent a long time doodling song lyrics and shapes in
          notebooks.
          <br />
          Later, I explored creating glitch art by programming custom filters
          <br />
          and editing my own photography files.
        </p>
        <span className="w-1/2 h-px border-solid border-b-[3px] border-slate-600/50 dark:border-slate-300/60 rounded-xl my-3 pointer-events-none select-none" />
        <p className="about-summary-blurb2 font-normal dark:font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          In January 2021, I decided to finally{" "}
          <br className="block md:hidden" /> try my hand at digital art;
          <br />I started out using PenUp and a phone stylus
          <br />
          to explore abstract art and re-discover{" "}
          <br className="block md:hidden" /> my love of{" "}
          <span className="inline-block font-semibold tracking-wide">
            {"colors."}
          </span>
          <br />
          <br />
          When I tried Huion Sketch, <br className="block md:hidden" /> I
          discovered a love of{" "}
          <span className="inline-block font-semibold tracking-wide">
            textures and layers.
          </span>
          <br />
          Finally, I was gifted a tablet and <br className="block md:hidden" />{" "}
          was able to try Procreate,
          <br />
          then my{" "}
          <span className="inline-block font-semibold tracking-wide">
            love and curiosity for art expanded.
          </span>
        </p>
      </div>
      {/* Old Section */}
      <div className="about-old-container w-full flex flex-col items-center mx-4 my-8 px-2">
        <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
          Small beginnings...
        </span>
        <p className="about-old-blurb1 font-normal dark:font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          In 2021, I bought a phone for <br className="block md:hidden" /> how
          well the camera did in reviews,
          <br />
          and it just happened <br className="block md:hidden" /> to come with a
          pen stylus.
          <br /> The PenUp app came with it, <br className="block md:hidden" />{" "}
          and after messing around,
          <br /> my old{" "}
          <span className="inline-block font-semibold tracking-wide">
            {"flame for art was reignited."}
          </span>
        </p>
        <div className="about-old-penup-gallery flex flex-col xs:grid xs:grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-center mx-2 my-4 gap-0 xs:gap-2">
          <img
            src={photosAboutPenUpThumbnail[0].blurSrc}
            alt={photosAboutPenUpThumbnail[0].alt}
            title={photosAboutPenUpThumbnail[0].title}
            className="about-img05b z-20 h-full w-36 my-2 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutPenUp(0)}
            onLoad={() => loadImgHandler("about-img05")}
            src={photosAboutPenUpThumbnail[0].src}
            alt={photosAboutPenUpThumbnail[0].alt}
            title={photosAboutPenUpThumbnail[0].title}
            className="hidden about-img05 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutPenUpThumbnail[1].blurSrc}
            alt={photosAboutPenUpThumbnail[1].alt}
            title={photosAboutPenUpThumbnail[1].title}
            className="about-img06b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutPenUp(1)}
            onLoad={() => loadImgHandler("about-img06")}
            src={photosAboutPenUpThumbnail[1].src}
            alt={photosAboutPenUpThumbnail[1].alt}
            title={photosAboutPenUpThumbnail[1].title}
            className="hidden about-img06 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutPenUpThumbnail[2].blurSrc}
            alt={photosAboutPenUpThumbnail[2].alt}
            title={photosAboutPenUpThumbnail[2].title}
            className="about-img07b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutPenUp(2)}
            onLoad={() => loadImgHandler("about-img07")}
            src={photosAboutPenUpThumbnail[2].src}
            alt={photosAboutPenUpThumbnail[2].alt}
            title={photosAboutPenUpThumbnail[2].title}
            className="hidden about-img07 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutPenUpThumbnail[3].blurSrc}
            alt={photosAboutPenUpThumbnail[3].alt}
            title={photosAboutPenUpThumbnail[3].title}
            className="about-img08b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutPenUp(3)}
            onLoad={() => loadImgHandler("about-img08")}
            src={photosAboutPenUpThumbnail[3].src}
            alt={photosAboutPenUpThumbnail[3].alt}
            title={photosAboutPenUpThumbnail[3].title}
            className="hidden about-img08 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
            index={idx_aboutPenUp}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosAboutPenUp}
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
            open={idx_aboutPenUp >= 0}
            close={() => setIdx_aboutPenUp(-1)}
          />
        </div>
        <p className="about-old-blurb2 font-normal dark:font-light text-slate-800/90 dark:text-slate-200/90 text-pretty leading-relaxed pointer-events-none select-none">
          A short time later, I tried out Huion Sketch and
          <br />
          started experimenting more with <br className="block md:hidden" />{" "}
          layers, textures, and brushes.
          <br />I knew from this point, <br className="block md:hidden" />
          <span className="inline-block font-semibold tracking-wide">
            {"that the flame of art was here to stay."}
          </span>
        </p>
        <div className="about-old-huion-gallery flex flex-col xs:grid xs:grid-cols-2 md:flex md:flex-row flex-wrap justify-center items-center mx-2 my-4 gap-0 xs:gap-2">
          <img
            src={photosAboutHuionThumbnail[0].blurSrc}
            alt={photosAboutHuionThumbnail[0].alt}
            title={photosAboutHuionThumbnail[0].title}
            className="about-img09b z-20 h-full w-36 my-2 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutHuion(0)}
            onLoad={() => loadImgHandler("about-img09")}
            src={photosAboutHuionThumbnail[0].src}
            alt={photosAboutHuionThumbnail[0].alt}
            title={photosAboutHuionThumbnail[0].title}
            className="hidden about-img09 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutHuionThumbnail[1].blurSrc}
            alt={photosAboutHuionThumbnail[1].alt}
            title={photosAboutHuionThumbnail[1].title}
            className="about-img10b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutHuion(1)}
            onLoad={() => loadImgHandler("about-img10")}
            src={photosAboutHuionThumbnail[1].src}
            alt={photosAboutHuionThumbnail[1].alt}
            title={photosAboutHuionThumbnail[1].title}
            className="hidden about-img10 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutHuionThumbnail[2].blurSrc}
            alt={photosAboutHuionThumbnail[2].alt}
            title={photosAboutHuionThumbnail[2].title}
            className="about-img11b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutHuion(2)}
            onLoad={() => loadImgHandler("about-img11")}
            src={photosAboutHuionThumbnail[2].src}
            alt={photosAboutHuionThumbnail[2].alt}
            title={photosAboutHuionThumbnail[2].title}
            className="hidden about-img11 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
          <img
            src={photosAboutHuionThumbnail[3].blurSrc}
            alt={photosAboutHuionThumbnail[3].alt}
            title={photosAboutHuionThumbnail[3].title}
            className="about-img12b z-20 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md select-none"
            loading="lazy"
          />
          <img
            onClick={() => setIdx_aboutHuion(3)}
            onLoad={() => loadImgHandler("about-img12")}
            src={photosAboutHuionThumbnail[3].src}
            alt={photosAboutHuionThumbnail[3].alt}
            title={photosAboutHuionThumbnail[3].title}
            className="hidden about-img12 z-10 h-full w-36 my-1 md:my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
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
            index={idx_aboutHuion}
            render={{
              iconCaptionsVisible: () => <MdClosedCaption size={28} />,
              iconCaptionsHidden: () => <MdClosedCaptionDisabled size={28} />,
              iconClose: () => <IoMdCloseCircle size={28} />,
            }}
            slides={photosAboutHuion}
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
            open={idx_aboutHuion >= 0}
            close={() => setIdx_aboutHuion(-1)}
          />
        </div>
        <span className="w-1/2 h-px border-solid border-b-[3px] border-slate-600/50 dark:border-slate-300/60 rounded-xl my-3 pointer-events-none select-none" />
      </div>
      {/* Modern Summary Part 1 */}
      <div className="about-modern-container w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row justify-between items-center md:mr-auto md:ml-5 lg:ml-24 xl:ml-48 2xl:ml-[17.5rem]">
        <div className="about-modern-title-and-pic-container flex flex-col md:flex-row-reverse items-center mx-2 my-4 w-full">
          <div className="about-modern-title-container flex flex-col justify-center md:justify-start items-center md:ml-8 w-full">
            <span className="font-light italic text-lg tracking-tight my-2 pointer-events-none select-none">
              Fast forward...
            </span>
            <p className="about-modern-blurb-md hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              In January 2024, I started using Inkscape{" "}
              <br className="block md:hidden" /> and learning vector arts,
              <br /> channeling my passion for{" "}
              <span className="inline-block italic font-semibold tracking-wide">
                {"graphic design and geometry."}
              </span>
            </p>
          </div>
          <img
            onClick={() => setIdx_about(2)}
            src={photosAboutThumbnail[2].src}
            alt={photosAboutThumbnail[2].alt}
            title={photosAboutThumbnail[2].title}
            className="about-img03 z-10 h-full w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        <div className="about-modern-blurb-container-mobile flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-modern-blurb text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
            In January 2024, I started using Inkscape{" "}
            <br className="block md:hidden" /> and learning vector arts,
            <br /> channeling my passion for{" "}
            <span className="inline-block italic font-semibold tracking-wide">
              {"graphic design and geometry."}
            </span>
          </p>
        </div>
      </div>
      {/* Modern Summary Part 2 */}
      <div className="about-modern-container2 w-full md:w-5/6 lg:w-3/5 xl:w-1/2 flex flex-col px-4 md:flex-row-reverse justify-between items-center md:ml-auto md:mr-5 lg:mr-24 xl:mr-48 2xl:mr-[17.5rem]">
        <div className="about-modern-title-and-pic-container2 flex flex-col md:flex-row items-center mx-2 my-4 w-full">
          <div className="about-modern-title-container2 flex flex-col justify-center md:justify-start items-center md:mr-8 w-full">
            <img
              src={theme === "dark" ? zdamono_dark : zdamono_light}
              className="mx-2 my-1 max-h-12 pointer-events-none select-none"
              alt={altZDALogoSm}
            />
            <span className="h-px w-10 border-solid border-b-[3px] border-slate-800/70 dark:border-slate-200/70 rounded-xl my-2 pointer-events-none select-none" />
            <p className="about-modern-blurb-md2 hidden md:block my-2 text-slate-800 dark:text-slate-200 text-pretty pointer-events-none select-none">
              I also embraced my love of fonts and typography again,
              <br /> getting back into typefaces, kerning, and stroke styles.
              <br />
              <br /> Now, I create logos, posters, album covers,
              <br /> wallpapers, ultrawide landscapes and more.
              <br />
              <span className="italic font-semibold tracking-tight">
                {"I create abstract oddities and hope that you enjoy them!"}
              </span>
            </p>
          </div>
          <img
            onClick={() => setIdx_about(3)}
            src={photosAboutThumbnail[3].src}
            alt={photosAboutThumbnail[3].alt}
            title={photosAboutThumbnail[3].title}
            className="about-img04 z-10 h-full w-80 my-4 object-cover object-center rounded-md brightness-[.96] border-solid border dark:border-2 border-transparent motion-safe:transition-all motion-safe:duration-300 ease-out hover:brightness-[1.025] hover:border-neutral-600/40 dark:hover:border-neutral-500/60 motion-safe:hover:transition-all motion-safe:hover:duration-300 hover:ease-out select-none cursor-pointer"
          />
        </div>
        <div className="about-modern-blurb-container-mobile2 flex flex-col md:hidden justify-center items-center mx-2 mb-4">
          <p className="about-modern-blurb2 text-slate-800 dark:text-slate-200 text-pretty leading-relaxed pointer-events-none select-none">
            I also embraced my love of <br className="block md:hidden" /> fonts
            and typography again,
            <br /> getting back into typefaces,{" "}
            <br className="block md:hidden" /> kerning, and stroke styles.
            <br />
            <br /> Now, I create logos, posters, album covers,
            <br /> wallpapers, ultrawide landscapes and more.
            <br />
            <span className="italic font-semibold tracking-tight">
              {"I create abstract oddities"}
              <br className="block md:hidden" />
              {" and hope that you enjoy them!"}
            </span>
          </p>
        </div>
      </div>
      <span className="about-thanks italic text-slate-800/80 dark:text-slate-200/80 tracking-tight mt-8 -mb-2 pointer-events-none select-none">
        Thanks for reading!
      </span>
    </div>
  );
};

export default AboutPage;
