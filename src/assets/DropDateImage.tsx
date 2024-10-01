import React from "react";

interface DropImageProps {
    classname?: string
}

export default function DropImage({classname}: DropImageProps) {
    return (<img
        src={`${process.env.PUBLIC_URL}/drop-cropped.png`}
        alt="Drop Text"
        className={classname}
    />)
}