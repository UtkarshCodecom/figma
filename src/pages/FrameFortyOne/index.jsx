import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function FrameFortyOnePage() {
  return (
    <>
      <Helmet>
        <title>Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* image gallery section */}
      <div className="flex w-full justify-end overflow-auto py-2.5">
        <div className="mb-5 flex w-[61%] flex-col gap-[179px] md:w-full md:gap-[134px] md:p-5 sm:gap-[89px]">
          <div className="flex justify-between gap-5">
            <Img src="images/img_pngwing_2_28x128.png" alt="pngwingtwo" className="h-[28px] w-[17%] object-cover" />
            <Img src="images/img_pngwing_2_1.png" alt="pngwingtwo" className="h-[28px] w-[17%] object-cover" />
          </div>
          <div className="mx-auto flex w-full max-w-[720px] justify-between gap-5">
            <Img
              src="images/img_untitled_2_1536x735_2.png"
              alt="untitledtwo"
              className="h-[84px] w-[15%] object-cover"
            />
            <Img
              src="images/img_untitled_2_1536x735_3.png"
              alt="untitledtwo"
              className="h-[84px] w-[15%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
