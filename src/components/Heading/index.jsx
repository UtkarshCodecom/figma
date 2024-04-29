import React from "react";

const sizes = {
  s: "text-[73px] font-bold md:text-5xl",
  xs: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
