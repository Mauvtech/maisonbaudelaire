import React from "react";

export function Home() {
    return (
        <div className="relative -mt-[27%] min-h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
            {/* Conteneur principal pour aligner les éléments */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                {/* Image "The Brand" comme image de fond */}
                <img
                    src={`${process.env.PUBLIC_URL}/thebrand.png`}
                    alt="The Brand"
                    className="absolute w-[80%] object-contain"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Centrer verticalement et horizontalement
                />

                {/* Conteneur flex pour tous les éléments */}
                <div className="relative flex items-center justify-between w-[80%] mt-[33%]">
                    {/* Texte "Drop" à gauche, aligné avec "The Brand" */}
                    <img
                        src={`${process.env.PUBLIC_URL}/drop.png`}
                        alt="Drop Text"
                        className="w-32 -mt-[10%] ml-[5%] sm:w-[20%]"
                    />
                    {/* Image des filles au centre */}
                    <img
                        src={`${process.env.PUBLIC_URL}/MeufTransparente.png`}
                        alt="Models"
                        className="w-[40%] h-auto -translate-y-[25%] -mr-[10%]"
                    />
                    {/* Sticker à droite, agrandi */}
                    <img
                        src={`${process.env.PUBLIC_URL}/sticker.png`}
                        alt="Sticker"
                        className="w-48 sm:w-[40%]"
                    />
                </div>
            </div>
        </div>
    );
}
