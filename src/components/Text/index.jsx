import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  lg: "text-8xl font-normal md:text-5xl",
  s: "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  md: "text-6xl font-normal md:text-[52px] sm:text-[46px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
