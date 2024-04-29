import React from "react";
import { Img, Heading } from "./..";

export default function Frame27170Ourservice({ title = "Our Service", ...props }) {
  return (
    <div {...props}>
      <Heading as="h1" className="text-center !text-[73.34px] blur-[2.00px] backdrop-opacity-[0.5]">
        {title}
      </Heading>
      <div className="mx-auto flex w-full max-w-[1343px] items-start self-stretch md:flex-col">
        <Img
          src="images/defaultNoData.png"
          alt="image"
          className="mb-[450px] h-[594px] w-[33%] rounded-[20px] md:w-full"
        />
        <Img
          src="images/defaultNoData.png"
          alt="image"
          className="ml-[88px] h-[594px] w-[33%] rounded-[20px] object-cover md:ml-0 md:w-full"
        />
        <Img
          src="images/defaultNoData.png"
          alt="image"
          className="ml-[109px] h-[594px] w-[33%] rounded-[20px] object-cover md:ml-0 md:w-full"
        />
      </div>
    </div>
  );
}
