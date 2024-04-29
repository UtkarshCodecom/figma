import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import Frame27170Business from "../../components/Frame27170Business";
import Frame27170Founder from "../../components/Frame27170Founder";
import Frame27170Ourservice from "../../components/Frame27170Ourservice";

export default function Frame27170Page() {
  return (
    <>
      <Helmet>
        <title>Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="w-full pb-[155px] md:pb-5">
        {/* services overview section */}
        <div className="flex flex-col gap-[50px] bg-black-900">
          {/* why choose us section */}
          <div className="relative h-[4118px] md:h-auto">
            {/* services highlights section */}
            <div className="w-full">
              <div className="flex flex-col items-center">
                {/* security features section */}
                <div className="flex flex-col items-center self-stretch">
                  <Img
                    src="images/img_mask_group.png"
                    alt="image"
                    className="mx-auto h-[1045px] w-full max-w-[1235px] object-cover md:h-auto md:p-5"
                  />
                  <Img
                    src="images/img_why_nexus_security.png"
                    alt="whynexus"
                    className="relative mt-[-203px] h-[967px] w-full object-cover md:h-auto"
                  />
                </div>
                <Img
                  src="images/img_untitled_3_1536x735.png"
                  alt="untitledthree"
                  className="relative mt-[-21px] h-[841px] w-[52%] object-cover"
                />
              </div>

              {/* our services section */}
              <div className="relative mt-[-859px] flex flex-col">
                {/* service description section */}
                <Frame27170Ourservice className="flex flex-col items-center gap-[614px] px-[84px] md:gap-[460px] md:px-5 sm:gap-[307px]" />

                {/* unique selling points section */}
                <div className="container-sm relative mt-[-264px] flex items-end justify-between gap-5 px-[54px] pt-[54px] md:flex-col md:p-5 md:px-5 md:pt-5">
                  <Img
                    src="images/img_why_nexus_security.png"
                    alt="image"
                    className="h-px w-[57%] object-cover md:w-full"
                  />
                  <Heading
                    size="xs"
                    as="h1"
                    className="mr-[23px] mt-[817px] text-center blur-[2.00px] backdrop-opacity-[0.5] md:mr-0"
                  >
                    apart ?
                  </Heading>
                </div>
              </div>
            </div>

            {/* founder section */}
            <Frame27170Founder className="absolute bottom-[7%] left-0 right-0 m-auto flex w-full max-w-[1515px] flex-col items-center gap-[47px] px-3 pt-3 md:p-5" />
          </div>

          {/* testimonials intro section */}
          <div className="relative mx-auto h-[1501px] w-full max-w-[1505px] md:p-5">
            {/* testimonial highlights section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center">
              <Img
                src="images/img_vector_1.png"
                alt="vectorone"
                className="relative z-[1] h-[624px] w-[75%] object-cover"
              />
              <div className="relative mt-[-466px] flex flex-col items-end gap-[49px] self-stretch">
                <Img
                  src="images/img_untitled_2_1536x735.png"
                  alt="untitledtwo"
                  className="mr-[19px] h-[284px] w-[20%] object-cover md:mr-0"
                />
                <Img src="images/img_frame_27169.png" alt="image" className="h-[996px] w-full object-cover md:h-auto" />
              </div>
            </div>

            {/* client testimonials section */}
            <Frame27170Business className="absolute left-0 right-0 top-[0.00px] z-[2] m-auto flex w-[96%] flex-col items-end gap-[137px] md:gap-[102px] sm:gap-[68px]" />
          </div>
        </div>

        {/* partners and clients section */}
        <div>
          {/* client logos section */}
          <div className="flex flex-col items-start">
            {/* partners highlights section */}
            <div className="relative h-[1949px] self-stretch bg-black-900">
              <div className="absolute left-0 right-0 top-[0.00px] m-auto w-full">
                <div className="relative z-[3] flex py-[202px] md:py-5">
                  <Img
                    src="images/img_partners.png"
                    alt="partners"
                    className="mb-[924px] h-[112px] w-[9%] object-cover"
                  />
                </div>
                <Img
                  src="images/img_rectangle_3825.png"
                  alt="image"
                  className="relative mt-[-41px] h-[360px] w-full object-cover md:h-auto"
                />
              </div>

              {/* additional views section */}
              <div className="absolute bottom-[0.00px] left-0 right-0 z-[4] m-auto flex w-[98%] flex-col">
                <Img
                  src="images/img_group_27169.png"
                  alt="image_ten"
                  className="relative z-[5] h-[823px] object-cover"
                />
                <div className="relative mt-[-201px] h-[448px] w-full max-w-[1440px] border border-solid border-gray-900 md:p-5" />
              </div>
            </div>
            <Img
              src="images/img_image_27.png"
              alt="imagetwentyseve"
              className="ml-[194px] h-[105px] w-[14%] object-cover md:ml-0"
            />
            <div className="mx-auto flex w-full max-w-[1063px] items-start justify-between gap-5 self-center md:p-5">
              <Img src="images/img_image_28.png" alt="imagetwentyeigh" className="h-[72px] w-[8%] object-cover" />
              <div className="mt-[7px] flex w-[9%] items-start justify-center gap-2.5">
                <Img src="images/img_citypng_1.png" alt="citypngone" className="h-[20px] w-[20px] object-cover" />
                <Img src="images/img_close.png" alt="close" className="h-[30px] w-[76%] object-cover" />
              </div>
            </div>
            <Img
              src="images/img_group_27184.png"
              alt="image_eleven"
              className="relative mr-[204px] mt-[-1px] h-[40px] w-[10%] self-end object-cover md:mr-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
