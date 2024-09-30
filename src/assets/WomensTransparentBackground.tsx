import React from "react";

export default function WomenTransparent({classname} : {classname: string}) {
    return         <img
        src={`${process.env.PUBLIC_URL}/femmes-transparent.png`}
        alt="Models"
        className={classname}
    />
}