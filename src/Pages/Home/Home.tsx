import React from "react";

export function Home() {
    return (
        <div className="relative max-w-full -mt-[27%] min-h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
            {/* Conteneur principal pour aligner les éléments */}
            <div className="relative w-full h-full mt-[2%] overflow-hidden flex items-center justify-center">
                {/* Image "The Brand" comme image de fond */}
                <img
                    src={`${process.env.PUBLIC_URL}/thebrand.png`}
                    alt="The Brand"
                    className="absolute sm:w-[80%] -mt-[40%] sm:mt-0 "
                />

                {/* Conteneur flex pour tous les éléments */}
                <div className="relative flex max-w-full  w-full sm:flex-row flex-col items-center  md:justify-between sm:w-[80%] md:mt-[33%]">
                    {/* Texte "Drop" à gauche, aligné avec "The Brand" */}
                    <img
                        src={`${process.env.PUBLIC_URL}/drop.png`}
                        alt="Drop Text"
                        className="w-[20%] md:translate-y-0 translate-y-[480%] sm:-mt-[10%] -ml-[70%] sm:ml-[5%] sm:w-[18%]"
                    />

                    {/* Image des filles au centre */}
                    <img
                        src={`${process.env.PUBLIC_URL}/MeufTransparente.png`}
                        alt="Models"
                        className="sm:w-[47%] w-[150%] max-w-full  sm:h-auto translate-y-[5%] sm:-translate-y-[14%] -mr-[1%]"
                    />

                    {/* Sticker à droite, agrandi */}
                    <img
                        src={`${process.env.PUBLIC_URL}/sticker.png`}
                        alt="Sticker"
                        className="w-[55%] sm:w-[37%] md:translate-y-0 -translate-y-[49%] sm:-translate-x-[25%]  "
                    />

                    {/* Texte sur le Sticker */}
                    <div className="absolute top-[74%] leading-normal font-semibold md:left-[74%]  md:top-[50%]  transform sm:-translate-x-1/2 sm:-translate-y-1/2 font-shadows text-[7px] sm:text-[11px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[30px]  text-white">
                        <p className="ml-6">NOM: BONNANNO</p>
                        <p>PRENOM: LUCAS</p>
                        <p className="ml-6">MAIL: LUCAS@EXAMPLE.COM</p>
                        <p>COULEUR: ROUGE</p>
                        <p className="ml-6">TAILLE: M</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
