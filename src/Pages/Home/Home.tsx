import React from "react";

export function Home() {
    return (
        <div className="relative min-h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
            {/* Conteneur principal avec une image de fond */}
            <div
                className="relative w-full max-w-4xl h-[70vh] md:h-[80vh] lg:h-[100vh] -mt-72 bg-center bg-cover flex flex-col items-center"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/thebrand.png)`, // Définir "The Brand" comme image de fond
                }}
            >
                {/* Image des filles au centre */}
                <img
                    src={`${process.env.PUBLIC_URL}/MeufTransparente.png`}
                    alt="Models"
                    className="w-3/4 h-auto mt-16 mb-[-41rem]" 
                />

                {/* Conteneur pour "Drop" et "Sticker" alignés en dessous */}
                <div className="flex justify-between items-center w-[120%] -ml-10 mt-8">
                    {/* Texte "Drop" à gauche */}
                    <img
                        src={`${process.env.PUBLIC_URL}/drop.png`}
                        alt="Drop Text"
                        className="w-32 md:w-24 lg:w-40 -mt-16 ml-36"
                    />

                    {/* Sticker à droite, agrandi */}
                    <img
                        src={`${process.env.PUBLIC_URL}/sticker.png`}
                        alt="Sticker"
                        className="w-48 md:w-56 lg:w-80 ml-8"
                    />
                </div>
            </div>
        </div>
    );
}
