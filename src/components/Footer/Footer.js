import React from "react";

const Footer = () => {
  return (
    <div class="container-wide flex flex-col items-left">
      <div class="font-semibold text-[#FFFBEB] mt-6 -mb-6 text-[14px] pt-5 md:text-[24px] lg:text-[38px] xl:text-[38px] 2xl:text-[42px]">
        <h2>
          Have questions? Email us at{" "}
          <a href="mailto: hello@calpoly.edu">hello@calpoly.edu</a>{" "}
        </h2>
      </div>
      <div class="font-light text-[#FFFFFF] text-[14px] pt-5 md:text-[16px] mb-11 lg:text-[24px] xl:text-[24px] 2xl:text-[38px]">
        <h2>© 2022 CPBC. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
