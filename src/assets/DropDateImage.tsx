import React from "react";

interface DropImageProps {
    classname?: string
}

export default function DropImage({classname}: DropImageProps) {
    return (<img
        src={`${process.env.PUBLIC_URL}/drop-cropped.png`}
        alt="Drop Text"
        className={classname}
        //className="w-[20%] md:translate-y-0 translate-y-[410%] sm:-mt-[15%] -ml-[70%] sm:ml-[5%] sm:w-[18%]"
    />)
}