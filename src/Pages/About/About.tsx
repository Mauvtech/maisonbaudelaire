import React from "react";

export function About() {
    return (
        <div className="xl:h-screen overflow-scroll">
            <main
                className="mx-auto flex 2xl:mt-0 xl:mt-[5%] md:w-[80%]  xl:flex-row mt-[20%] flex-col justify-between items-center px-8">
                <div className="xl:w-1/2 w-full gap-[2%] flex flex-col justify-center items-center h-full">
                    <h2 className="md:text-6xl text-3xl font-bold mb-[6%] text-error text-center">À PROPOS</h2>
                    <p className="text-gray-600 md:text-2xl leading-snug ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus sem
                        vitae urna ornare, ac porttitor velit euismod. Suspendisse potenti. Sed
                        pellentesque orci id efficitur finibus. Maecenas posuere vestibulum ipsum
                        accumsan varius. Sed et urna libero. Nunc congue arcu a ante convallis, id
                        rutrum justo luctus. Curabitur finibus mi risus, a consequat ligula
                        sollicitudin tristique.
                    </p>
                    <p className="mt-4 text-gray-600 md:text-2xl leading-snug">
                        Vivamus nisi magna, lobortis eu enim vitae, vestibulum tristique odio. Nam
                        placerat orci consequat ex vehicula, a gravida velit dignissim. Aenean
                        tincidunt fringilla ex, id molestie erat feugiat id. Quisque a ultrices eros.
                        Aliquam ullamcorper ipsum gravida, euismod lorem sit amet, dictum turpis.
                        Cras quis velit at mauris placerat pretium. Cras risus nisl, porttitor id dui
                        quis, euismod hendrerit libero.
                    </p>
                    <p className="mt-8 font-bold md:text-3xl">MAISON BAUDELAIRE</p>
                </div>

                <div className="w-[42%] xl:py-[12%] py-[3%] h-full flex justify-center">
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
