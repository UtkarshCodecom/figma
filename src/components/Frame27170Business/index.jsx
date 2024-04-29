import React from "react";
import { Text, Img, RatingBar } from "./..";

export default function Frame27170Business({
  businessesthat = (
    <>
      Businesses
      <br />
      that
    </>
  ),
  yourlogo = "Your Logo",
  yourlogo1 = "Your Logo",
  yourlogo2 = "Your Logo",
  yourlogo3 = "Your Logo",
  yourlogo4 = "Your Logo",
  yourlogo5 = "Your Logo",
  testimonials = "Testimonials",
  description1 = "Working with SECUREU has been a great experience. The young team is extremely technically sound and were able to explain complex security issues in easy terms. The team is very easy to work with and is always available for a conversation.",
  name1 = "Yash Tibrewala",
  designation1 = "Director - ICEM Engineering",
  description2 = "Working with SECUREU has been a great experience. The young team is extremely technically sound and were able to explain complex security issues in easy terms. The team is very easy to work with and is always available for a conversation.",
  name2 = "Yash Tibrewala",
  designation2 = "Director - ICEM Engineering",
  description = "Working with SECUREU has been a great experience. The young team is extremely technically sound and were able to explain complex security issues in easy terms. The team is very easy to work with and is always available for a conversation.",
  yashtibrewala = "Yash Tibrewala",
  directoricem = "Director - ICEM Engineering",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch pt-[11px]">
        <div className="relative h-[864px] px-3.5 pt-3.5 md:h-auto">
          <Img
            src="images/img_trust_us.png"
            alt="trustus"
            className="ml-[180px] mt-[72px] h-[72px] w-[26%] object-cover md:ml-0"
          />
          <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max flex-col items-center gap-[109px] md:gap-[81px] sm:gap-[54px]">
            <Text
              size="md"
              as="p"
              className="ml-2.5 w-[27%] self-start !font-ramabhadra leading-[120%] md:ml-0 md:w-full"
            >
              {businessesthat}
            </Text>
            <div className="grid grid-cols-4 justify-center gap-[37px] self-stretch md:grid-cols-2 sm:grid-cols-1">
              {[...Array(6)].map((d, index) => (
                <div
                  key={"gridyourlogo" + index}
                  className="flex w-full justify-center rounded-[20px] border border-solid border-gray-900 bg-white-A700_51 p-[17px]"
                >
                  <Text size="s" as="p" className="my-6 !font-ramabhadra">
                    {yourlogo}
                  </Text>
                </div>
              ))}
            </div>
            <Text size="lg" as="p" className="!font-ramabhadra">
              {testimonials}
            </Text>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1210px] overflow-auto pb-3.5 md:p-5">
        <div className="w-full">
          <div className="flex gap-[53px] md:flex-col">
            <div className="flex h-[316px] w-full items-center justify-center bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
              <div className="mb-[5px] flex w-[87%] flex-col md:w-full">
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={28}
                  starCount={undefined}
                  className="flex justify-between"
                />
                <Text as="p" className="ml-2.5 mt-1.5 leading-[120%] md:ml-0">
                  {description1}
                </Text>
                <div className="ml-6 mt-[18px] flex w-[79%] items-start gap-[26px] md:ml-0 md:w-full sm:flex-col">
                  <Img
                    src="images/img_untitled_2_1536x735_84x106.png"
                    alt="image"
                    className="mt-2.5 h-[84px] w-[32%] object-cover sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[5px] sm:self-stretch">
                    <Text as="p">{name1}</Text>
                    <Text as="p" className="w-full leading-[120%]">
                      {designation1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[316px] w-full items-center justify-center bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
              <div className="mb-[5px] flex w-[87%] flex-col md:w-full">
                <RatingBar
                  value={1}
                  isEditable={true}
                  size={28}
                  starCount={undefined}
                  className="flex rotate-[180deg] justify-between"
                />
                <Text as="p" className="ml-2.5 mt-1.5 rotate-[180deg] leading-[120%] md:ml-0">
                  {description2}
                </Text>
                <div className="ml-6 mt-[18px] flex w-[79%] items-start gap-[26px] md:ml-0 md:w-full sm:flex-col">
                  <Img
                    src="images/img_untitled_2_1536x735_1.png"
                    alt="untitledtwo"
                    className="mt-2.5 h-[84px] w-[32%] object-cover sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[5px] sm:self-stretch">
                    <Text as="p" className="rotate-[180deg]">
                      {name2}
                    </Text>
                    <Text as="p" className="w-full rotate-[180deg] leading-[120%]">
                      {designation2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[316px] w-full items-center bg-[url(/public/images/img_group_11.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
              <div className="mb-[5px] ml-[25px] flex w-[-37px] items-end justify-between gap-5 md:ml-0">
                <div className="flex w-full items-start justify-between gap-5">
                  <div className="mb-[113px] flex w-full items-start justify-center gap-[47px]">
                    <Img
                      src="images/img_pngwing_2.png"
                      alt="pngwingtwo"
                      className="h-[28px] w-full object-cover md:h-auto"
                    />
                    <Text as="p" className="mt-[34px] w-[56%] leading-[120%]">
                      {description}
                    </Text>
                  </div>
                  <Img
                    src="images/img_untitled_2_1536x735_84x1.png"
                    alt="untitledtwo"
                    className="h-[84px] w-full object-cover md:h-auto"
                  />
                </div>
                <Text as="p" className="mb-[70px]">
                  {yashtibrewala}
                </Text>
                <Text as="p" className="mb-4 w-full leading-[120%]">
                  {directoricem}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
