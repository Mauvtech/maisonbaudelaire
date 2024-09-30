import React from "react";

export default function StickersImage() {
    return <img
        src={`${process.env.PUBLIC_URL}/sticker.png`}
        alt="Sticker"
        className="w-[79%] sm:w-[37%] md:-translate-y-[6%] -translate-y-[49%] sm:-translate-x-[25%]"
    />
}