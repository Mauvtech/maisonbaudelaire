import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

export function Home() {
    // État pour contrôler la visibilité du popup
    const [showPopup, setShowPopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState('ROSE'); // État pour la couleur sélectionnée
    const [selectedSize, setSelectedSize] = useState('M'); // État pour la taille sélectionnée
    const [nom, setNom] = useState(''); // État pour le nom
    const [prenom, setPrenom] = useState(''); // État pour le prénom
    const [email, setEmail] = useState(''); // État pour l'email

    // Utiliser useEffect pour afficher le popup après 2 secondes
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000); // 2000 ms = 2 secondes

        // Nettoyer le timer lors du démontage du composant
        return () => clearTimeout(timer);
    }, []);

  // Fonction pour envoyer l'email via EmailJS
  const sendEmail = (formData:any) => {
      emailjs.send('service_rx46rwb', 'template_dmlfjg3', formData, 'PHFyWP1ZTKLuyga9T')
      .then((result) => {
        console.log(result.text);
        alert("Email envoyé avec succès !");
      }, (error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi de l'email.");
      });
  };

    // Fonction pour gérer la fermeture du popup et l'envoi d'email
    const handleSubmit = (event:any) => {
        event.preventDefault(); // Empêche le rechargement de la page
        // Récupérer les informations du formulaire
        const formData = {
            nom: nom,
            prenom: prenom,
            email: email,
            couleur: selectedColor,
            taille: selectedSize
        };

        // Envoyer l'email avec EmailJS
       sendEmail(formData);

       setShowPopup(false); // Ferme le popup après soumission
    };


    return (
        <div className="relative max-w-full -mt-[27%] min-h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
            {/* Conteneur principal pour aligner les éléments */}
            <div className="relative w-full h-full mt-[2%] overflow-hidden flex items-center justify-center">
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
                    <form onSubmit={handleSubmit} className="absolute sm:h-[20%] -ml-[12%] sm:ml-0 top-[66%] leading-normal opacity-85 md:left-[74%] md:top-[48%] transform sm:-translate-x-1/2 sm:-translate-y-1/2 font-shadows text-[13px] sm:text-[11px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[30px] text-white">
                        <div className="md:ml-6 ml-[5%] flex">
                            <label htmlFor="nom" className="mr-[2%]">NOM:</label>
                            <input
                                id="nom"
                                name="nom"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)} // Met à jour l'état du nom
                                required
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="prenom" className="mr-[2%]">PRENOM:</label>
                            <input
                                id="prenom"
                                name="prenom"
                                type="text"
                                className="bg-transparent border-none focus:outline-none"
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)} // Met à jour l'état du prénom
                                required
                            />
                        </div>
                        <div className="md:ml-6 ml-[3%] flex">
                            <label htmlFor="mail" className="mr-[2%]">MAIL:</label>
                            <input
                                id="mail"
                                name="mail"
                                type="email"
                                className="bg-transparent border-none focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Met à jour l'état de l'email
                                required
                            />
                        </div>
                        <div className="flex">
                            <label htmlFor="popup-couleur" className="mr-[2%]">COULEUR:</label>
                            <div className="flex space-x-4">
                                {['ROSE', 'NOIR'].map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => setSelectedColor(color)}
                                        className={`${selectedColor === color ? 'underline' : ''
                                            } bg-transparent focus:outline-none text-white`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex">
                            <label htmlFor="popup-taille" className="mr-[2%]">TAILLE:</label>
                            <div className="flex space-x-4">
                                {['S', 'M', 'L','XL'].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setSelectedSize(size)}
                                        className={`${selectedSize === size ? 'underline' : ''
                                            } bg-transparent focus:outline-none text-white`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Bouton Valider */}
                        <button
                            type="submit"
                            className="font-shadows sm:translate-x-[520%] text-[11px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[30px] text-white underline bg-transparent sm:translate-y-[-43%]"
                        >
                            Valider
                        </button>
                    </form>
                </div>
            </div>

            {/* Popup qui apparaît après 2 secondes */}
            {showPopup && (
                <div className="fixed inset-0 bg-white max-h-screen  bg-opacity-50 flex justify-center items-center z-50">
                    {/* Conteneur avec l'image en fond et formulaire superposé */}
                    <div
                        className="relative rounded-lg  flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/sticker.png)`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '90%',
                            maxWidth: '60%',
                            height: 'auto',
                            aspectRatio: '1 / 1',
                        }}
                    >
                        {/* Formulaire centré sur le sticker */}
                        <form onSubmit={handleSubmit} className="sm:mt-[4%] h-[35%] inset-0 sm:mr-[13%] sm:h-[40%] flex flex-col justify-center items-center font-shadows text-[9px] -translate-x-[13%] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white">
                            <div className="flex">
                                <label htmlFor="popup-nom" className="">NOM:</label>
                                <input
                                    className="bg-transparent border-none focus:outline-none"
                                    id="popup-nom"
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)} // Met à jour l'état du nom
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-prenom" className="">PRENOM:</label>
                                <input
                                    className="bg-transparent border-none focus:outline-none"
                                    id="popup-prenom"
                                    type="text"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)} // Met à jour l'état du prénom
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-mail" className="">MAIL:</label>
                                <input
                                    id="popup-mail"
                                    type="email"
                                    className="bg-transparent border-none focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Met à jour l'état de l'email
                                    required
                                />
                            </div>
                            <div className="flex">
                                <label htmlFor="popup-couleur" className="mr-[2%]">COULEUR:</label>
                                <div className="flex space-x-4">
                                    {['ROSE', 'NOIR'].map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() => setSelectedColor(color)}
                                            className={`${selectedColor === color ? 'underline' : ''
                                                } bg-transparent focus:outline-none text-white`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex mr-[30%]">
                                <label htmlFor="popup-taille" className="mr-[2%] ">TAILLE:</label>
                                <div className="flex space-x-[34%]">
                                    {['S', 'M', 'L', 'XL'].map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setSelectedSize(size)}
                                            className={`${selectedSize === size ? 'underline' : ''
                                                } bg-transparent focus:outline-none text-white`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Bouton Valider */}
                            <button
                                type="submit"
                                className="sm:translate-x-[300%] font-shadows text-[13px] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white underline bg-transparent"
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