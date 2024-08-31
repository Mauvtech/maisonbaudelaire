import React from "react";

export function Home() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-screen">
            {/* Conteneur pour superposer les images */}
            <div className="relative 3xl:-mt-[65vh] md:-mt-[45vh]  flex w-full justify-center items-center">
                {/* Image de fond - deux fois plus large */}
                <img
                    src={`${process.env.PUBLIC_URL}/thebrand.png`}
                    alt="Brand Logo"
                    className="w-2/3"
                />
                {/* Image superposée - cinq fois plus petite */}
                <img
                    src={`${process.env.PUBLIC_URL}/MeufTransparente.png`}
                    alt="Overlay Image"
                    className="absolute mt-56 w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Image en dessous alignée à gauche */}
            <div className="w-1/6  flex justify-center -mt-[65vh] -ml-[43vw]">
                <img
                    src={`${process.env.PUBLIC_URL}/drop.png`}
                    alt="Drop Image"
                    className="w-auto h-auto"
                />
            </div>

            {/* Image en dessous alignée à gauche */}
            <div className="w-[27vw] -mt-[35vh] flex ml-[43vw]  ">
                <img
                    src={`${process.env.PUBLIC_URL}/sticker.png`}
                    alt="Drop Image"
                    className="w-auto h-auto"
                />
            </div>
        </div>
    );
}
