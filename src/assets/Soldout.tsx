import React from "react";

export default function Soldout({classname}: { classname?: string }) {
    return <img
        src={`${process.env.PUBLIC_URL}/soldout.webp`}
        alt="Soldout"
        className={classname}
    />
}