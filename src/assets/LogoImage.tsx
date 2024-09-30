import React from "react";

export default function LogoImage() {
    return <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Logo"
        className="w-[10%]  mt-1"
    />
}