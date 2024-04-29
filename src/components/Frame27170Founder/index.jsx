import React from "react";
import { Img } from "./..";

export default function Frame27170Founder({ ...props }) {
  return (
    <div {...props} className="container-sm">
      <div className="flex w-[87%] items-start justify-between gap-5 md:flex-col">
        <div className="mt-2.5 flex w-[60%] items-start justify-between gap-5 md:w-full md:flex-col">
          <Img
            src="images/img_ellipse_9.png"
            alt="image"
            className="mb-[30px] h-[321px] w-[40%] rounded-[156px] object-cover md:w-full"
          />
          <Img
            src="images/img_ellipse_9.png"
            alt="image"
            className="h-[321px] w-[40%] rounded-[156px] object-cover md:w-full"
          />
        </div>
        <Img
          src="images/img_ellipse_9.png"
          alt="image"
          className="h-[321px] w-[24%] rounded-[156px] object-cover md:w-full"
        />
      </div>
      <div className="flex w-[86%] items-start justify-between gap-5 md:flex-col">
        <div className="mb-[418px] h-[313px] w-[24%] rounded-[156px] shadow-xs" />
        <div className="h-[313px] w-[24%] rounded-[156px] shadow-xs" />
        <div className="h-[301px] w-[24%] rounded-[156px] shadow-xs" />
      </div>
    </div>
  );
}
