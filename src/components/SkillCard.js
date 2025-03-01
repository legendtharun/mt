import React from "react";

const SkillCard = ({ logo, gradient, name }) => {
  return (
    <card
      className={`relative xsl:w-[120px] xsl:h-[180px] w-[200px] h-[300px] p-3 flex flex-col gap-5 justify-center items-center  
    text-[#13121c] dark:text-[#e4e3ed]`}
    >
      <div className={`absolute inset-0 ${gradient} z-[10] opacity-30`}></div>
      <img src={logo} className="w-[100px] h-[100px] z-[11]" />
      <span className="font-atkinson text-md md:text-lg lg:text-xl">
        {name}
      </span>
    </card>
  );
};

export default SkillCard;
