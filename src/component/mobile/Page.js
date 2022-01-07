import React from "react";
const Page = React.forwardRef(({ children, center, bgColor }, ref) => {
  return (
    <div
      className={`relative w-full h-screen flex flex-col overflow-hidden ${
        center ? "items-center" : ""
      } bg-${bgColor ? bgColor : ""}
      }`}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Page;
