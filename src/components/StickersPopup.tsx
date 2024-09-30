import React from "react";
import emailjs from "emailjs-com";
import {FormData} from "../Pages/Home/Home";

interface StickersPopupProps {
    formData: FormData,
    setFormData: (formData: FormData) => void,
    open: boolean,
    setOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export default function StickersPopup({formData, setFormData, setOpen}: StickersPopupProps) {

    const sendEmail = (formData: any) => {
        emailjs.send('service_rx46rwb', 'template_dmlfjg3', formData, 'PHFyWP1ZTKLuyga9T')
            .then((result) => {
                console.log(result.text);
                alert("Tes informations ont bien été envoyées !");
            }, (error) => {
                console.log(error.text);
                alert("Erreur, veuillez réessayer plus tard.");
            });
    };


    const handleSubmit = (event: any) => {
        event.preventDefault();

        sendEmail(formData);

        setOpen(false);
    };

    return (

        <div
            className="fixed inset-0 bg-black max-h-screen max-w-screen bg-opacity-50 flex justify-center items-center z-50">
            {/* Conteneur avec l'image en fond et formulaire superposé */}
            <div
                className="relative rounded-lg  flex items-center justify-center"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/sticker.png)`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '90%',
                    maxWidth: '80%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                }}
            >
                <form onSubmit={handleSubmit}
                      className="sm:mt-[5%] mr-[17%] mt-[5%]  h-[35%] tracking-wider caret-white inset-0 sm:mr-[13%] sm:h-[40%] flex flex-col justify-center font-shadows text-[0.6rem] -translate-x-[13%] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white">
                    <div className="flex">
                        <label htmlFor="popup-nom" className="">NOM:</label>
                        <input
                            className="bg-transparent  border-none focus:outline-none"
                            id="popup-nom"
                            type="text"
                            value={formData.nom ?? ""}
                            onChange={(e) => setFormData({...formData, nom: e.target.value})}
                            required
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="popup-prenom" className="">PRENOM:</label>
                        <input
                            className="bg-transparent pl-2 border-none focus:outline-none"
                            id="popup-prenom"
                            type="text"
                            value={formData.prenom ?? ""}
                            onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                            required
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="popup-mail" className="">MAIL:</label>
                        <input
                            id="popup-mail"
                            type="email"
                            className="bg-transparent border-none focus:outline-none"
                            value={formData.email ?? ""}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="popup-phone" className="mr-[2%]">TÉLÉPHONE:</label>
                        <input
                            id="popup-phone"
                            type="tel"
                            className="bg-transparent border-none focus:outline-none"
                            value={formData.phone ?? ""}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                                    onChange={(e) => setFormData({...formData, couleur: color})}
                                    className={`${formData.couleur === color ? 'underline' : ''
                                    } bg-transparent focus:outline-none text-white`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex mr-[30%]">
                        <label htmlFor="popup-taille" className="mr-[2%]">TAILLE:</label>
                        <div className="flex space-x-[34%]">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onChange={(e) => setFormData({...formData, taille: size})}
                                    className={`${formData.taille === size ? 'underline' : ''
                                    } bg-transparent focus:outline-none text-white`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="sm:translate-x-[300%] font-shadows text-[13px] sm:translate-y-[] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white underline"
                    >
                        Valider
                    </button>
                </form>

            </div>
        </div>
    )
}