import React from "react";
import { Helmet } from "react-helmet";

export default function BusinessThattrustusPage() {
  return (
    <>
      <Helmet>
        <title>Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* trust section */}
      <div className="flex w-full flex-col items-center gap-[305px] md:gap-[228px] sm:gap-[152px]">
        {/* separator line section */}
        <div className="h-px w-full self-stretch bg-gray-900" />

        {/* features overview section */}
        <div className="container-xs mb-[5px] flex md:p-5">
          <div className="flex w-full flex-col items-center gap-[55px] sm:gap-[27px]">
            {/* features row section */}
            <div className="flex gap-[37px] self-stretch md:flex-col">
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
            </div>

            {/* additional features row section */}
            <div className="flex w-[49%] gap-[37px] md:w-full md:flex-col">
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
              <div className="h-[144px] w-full rounded-[20px] border border-solid border-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
