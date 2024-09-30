import React from "react";

interface StickersImageProps {
    classname?: string
}

export default function StickersImage({classname}: StickersImageProps) {
    return <img
        src={`${process.env.PUBLIC_URL}/sticker.png`}
        alt="Sticker"
        className={classname}
    />
}