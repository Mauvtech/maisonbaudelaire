import React, { useState, useEffect } from "react";

export function Home() {
    // État pour contrôler la visibilité du popup
    const [showPopup, setShowPopup] = useState(false);

    // Utiliser useEffect pour afficher le popup après 2 secondes
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000); // 2000 ms = 2 secondes

        // Nettoyer le timer lors du démontage du composant
        return () => clearTimeout(timer);
    }, []);

    // Fonction pour gérer la fermeture du popup
    const handleSubmit = (event:any) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setShowPopup(false); // Ferme le popup
    };

    return (
        <div className="relative max-w-full max-h-screen -mt-[27%] sm:mt-0 min-h-screen w-screen overflow-hidden  flex justify-center items-center">
            {/* Conteneur principal pour aligner les éléments */}
            <div className="relative w-full h-full mt-[2%] sm:-mt-[10%] overflow-hidden flex items-center justify-center">
                {/* Image "The Brand" comme image de fond */}
                <img
                    src={`${process.env.PUBLIC_URL}/thebrand.png`}
                    alt="The Brand"
                    className="absolute sm:w-[80%] -mt-[40%] sm:mt-0"
                />

                {/* Conteneur flex pour tous les éléments */}
                <div className="relative mt-[20%] flex max-w-full w-full sm:flex-row flex-col items-center md:justify-between sm:w-[80%] md:mt-[33%]">
                    {/* Texte "Drop" à gauche, aligné avec "The Brand" */}
                    <img
                        src={`${process.env.PUBLIC_URL}/drop.png`}
                        alt="Drop Text"
                        className="w-[20%] md:translate-y-0 translate-y-[480%] sm:-mt-[15%] -ml-[70%] sm:ml-[5%] sm:w-[18%]"
                    />

                    {/* Image des filles au centre */}
                    <img
                        src={`${process.env.PUBLIC_URL}/MeufTransparente.png`}
                        alt="Models"
                        className="sm:w-[47%] w-[150%] max-w-full sm:h-auto translate-y-[5%] sm:-translate-y-[14%] -mr-[1%]"
                    />

                    {/* Sticker à droite, agrandi */}
                    <img
                        src={`${process.env.PUBLIC_URL}/sticker.png`}
                        alt="Sticker"
                        className="w-[75%] sm:w-[37%] md:-translate-y-[6%] -translate-y-[49%] sm:-translate-x-[25%]"
                    />

                    {/* Formulaire sur le Sticker avec des Labels */}
                    <form className="absolute  -ml-[12%] sm:ml-0 top-[66%] leading-normal opacity-85 md:left-[73%] md:top-[47%] transform sm:-translate-x-1/2 sm:-translate-y-1/2 font-shadows text-[13px] sm:text-[4px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-white">
                        <div className="md:ml-6 ml-[5%] flex">
                            <label htmlFor="nom" className="mr-[2%]">NOM:</label>
                            <input
                                id="nom"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                defaultValue="TON"
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="prenom" className="mr-[2%]">PRENOM:</label>
                            <input
                                id="prenom"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                defaultValue="BLAZE"
                            />
                        </div>
                        <div className="md:ml-6 ml-[3%] flex">
                            <label htmlFor="mail" className="mr-[2%]">MAIL:</label>
                            <input
                                id="mail"
                                type="email"
                                className="bg-transparent border-none focus:outline-none"
                                defaultValue="TON@MAIL.COM"
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="couleur" className="mr-[2%]">COULEUR:</label>
                            <input
                                id="couleur"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                defaultValue="ROUGE"
                            />
                        </div>
                        <div className="md:ml-6 ml-[1%] flex">
                            <label htmlFor="taille" className="mr-[2%]">TAILLE:</label>
                            <input
                                id="taille"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                defaultValue="M"
                            />
                        </div>
                        <button
                            type="submit"
                            className=" font-shadows  underline bg-transparent ml-[30%]  bottom-4 right-6"
                        >
                            Valider
                        </button>
                    </form>
                </div>
            </div>

            {/* Popup qui apparaît après 2 secondes */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    {/* Conteneur avec l'image en fond et formulaire superposé */}
                    <div
                        className="relative rounded-lg flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/sticker.png)`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '90%',
                            maxWidth: '70%',
                            height: 'auto',
                            aspectRatio: '1 / 1',
                        }}
                    >
                        {/* Formulaire centré sur le sticker */}
                        <form onSubmit={handleSubmit} className="absolute mt-[5%] inset-0 flex flex-col justify-center items-center font-shadows text-[9px] -translate-x-[13%] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white">
                            <div className="flex">
                                <label htmlFor="popup-nom" className="mr-2">NOM:</label>
                                <input
                                    className="bg-transparent border-none focus:outline-none"
                                    id="popup-nom"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-prenom" className="mr-2">PRENOM:</label>
                                <input
                                    className="bg-transparent border-none focus:outline-none"
                                    id="popup-prenom"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-mail" className="mr-2">MAIL:</label>
                                <input
                                    id="popup-mail"
                                    type="email"
                                    className="bg-transparent border-none focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-couleur" className="mr-2">COULEUR:</label>
                                <input
                                    className="bg-transparent border-none focus:outline-none"
                                    id="popup-couleur"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-taille" className="mr-2">TAILLE:</label>
                                <input
                                    id="popup-taille"
                                    type="text"
                                    className="bg-transparent border-none focus:outline-none"
                                    required
                                />
                            </div>
                            {/* Bouton Valider */}
                            <button
                                type="submit"
                                className=" font-shadows text-[13px] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px]  underline bg-transparent  bottom-4 right-6"
                            >
                                Valider
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
