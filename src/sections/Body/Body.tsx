import * as React from "react";
import { useRecoilValue } from "recoil";
import { pageAtom, pagesList } from "../../states/pageAtom";
import InfoBanner from "../../components/InfoBanner";
import PageIndicator from "../../components/PageIndicator";
import JumpToTop from "../../components/JumpToTop";

const Body = () => {
  const page = useRecoilValue(pageAtom);
  const isPageInBody = () => {
    // Filter list of pages for match and check if part of standard body
    let pageInBody = false;
    const result = pagesList.filter((p) => p.pageName === page && p.isInBody);
    if (result && result.length > 0) {
      pageInBody = result[0].isInBody;
    }
    return pageInBody;
  };

  React.useEffect(() => {}, [page]);
  return (
    <>
      {/* Standard Body */}
      {isPageInBody() && (
        <div className="body-container w-full mb-16 xs:mb-20 flex flex-col justify-center items-center">
          <JumpToTop />
          <InfoBanner />
          <PageIndicator />
          {pagesList.map((currentPage, idx) => (
            <React.Fragment key={idx}>
              {page === currentPage.pageName &&
                currentPage.isInBody &&
                currentPage.pageElement}
            </React.Fragment>
          ))}
        </div>
      )}
      {/* Pages Not In Standard Body */}
      {pagesList.map((currentPage, idx) => (
        <React.Fragment key={idx}>
          {page === currentPage.pageName &&
            !currentPage.isInBody &&
            currentPage.pageElement}
        </React.Fragment>
      ))}
    </>
  );
};

export default Body;
