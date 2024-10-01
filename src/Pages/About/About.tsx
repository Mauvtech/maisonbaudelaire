import React from "react";

export function About() {
    return (
        <div className="xl:h-screen overflow-scroll">
            <main
                className="mx-auto flex 2xl:mt-0 xl:mt-[5%] md:w-[80%]  xl:flex-row mt-[20%] flex-col justify-between items-center px-8">
                <div className="xl:w-1/2 w-full gap-[2%] flex flex-col justify-center items-center h-full">
                    <h2 className="md:text-6xl text-3xl font-bold mb-[6%] text-error text-center">À PROPOS</h2>
                    <p className="text-gray-600 md:text-2xl leading-snug ">
                        Maison Baudelaire est née de la passion de quatre jeunes pour la mode et la culture urbaine.
                        Inspirés par l’énergie des rues et l’élégance intemporelle, nous avons décidés de créer une
                        marque qui fusionne ces deux univers.
                    </p>
                    <p className="mt-4 text-gray-600 md:text-2xl leading-snug">
                        Chaque pièce que nous concevons raconte une histoire, alliant confort et style. Bienvenue chez
                        Maison Baudelaire, ou l’authenticité et l’audace se rencontrent
                    </p>
                    <p className="mt-8 font-bold md:text-3xl">MAISON BAUDELAIRE</p>
                </div>

                <div className="w-full lg:w-[42%] xl:py-[12%] py-[3%] h-full flex justify-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/group-image.jpg`}
                        alt="Group of models"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </main>
        </div>
    );
}
