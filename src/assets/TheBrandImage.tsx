import React from "react";

export default function TheBrandImage({classname}: { classname?: string }) {
    return <img
        src={`${process.env.PUBLIC_URL}/thebrand.png`}
        alt="The Brand"
        className={classname}
    />
}