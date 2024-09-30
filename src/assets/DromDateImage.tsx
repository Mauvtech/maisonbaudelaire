import React from "react";

export default function DropImage() {
    return (   <img
        src={`${process.env.PUBLIC_URL}/drop.png`}
        alt="Drop Text"
        className="w-[20%] md:translate-y-0 translate-y-[410%] sm:-mt-[15%] -ml-[70%] sm:ml-[5%] sm:w-[18%]"
    />)
}