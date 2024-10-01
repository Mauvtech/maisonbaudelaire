import React, {ReactNode} from "react";

export function AboutItem({children}: { children: ReactNode }) {
    return (
        <p className="text-gray-600 text-xl leading-snug py-4 italic">
            {children}
        </p>
    );
}

export function About() {
    return (
        <div className="xl:h-screen overflow-scroll">
            <main
                className="mx-auto flex 2xl:mt-0 xl:mt-[5%] md:w-[80%]  xl:flex-row mt-[20%] flex-col justify-between items-center px-8">
                <div className="xl:w-1/2 w-full gap-[2%] flex flex-col justify-center items-center h-full py-4">
                    <h2 className="md:text-6xl text-3xl font-bold mb-[6%] text-error text-center">À PROPOS</h2>
                    <AboutItem>
                        « Maison Baudelaire est née de la passion de quatre jeunes pour la mode et la culture urbaine.»
                    </AboutItem>
                    <AboutItem>
                        « Inspirés par l’énergie des rues et l’élégance intemporelle , nous avons décidés de créer une
                        marque qui fusionne ces deux univers. »
                    </AboutItem>
                    <AboutItem>
                        « Chaque pièce que nous concevons raconte une histoire »
                    </AboutItem>
                    <AboutItem>
                        « Bienvenue chez Maison Baudelaire , ou l’authenticité et l’audace se rencontrent »
                    </AboutItem>
                    <div className={"w-full flex justify-end"}>
                        <p className="mt-8 font-bold text-2xl"> - MAISON BAUDELAIRE</p>
                    </div>

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
