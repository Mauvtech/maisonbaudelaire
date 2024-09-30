import React from "react";
import {FormData} from "../Pages/Home/Home";
import emailjs from "emailjs-com";


interface StickersPopupProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
}

export default function StickersForm({ formData, setFormData }: StickersPopupProps) {
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

    };

    return (
        <form onSubmit={handleSubmit} className="absolute sm:h-[20%] -ml-[18%] sm:ml-0 top-[79%] leading-normal opacity-85 md:left-[74%] md:top-[48%] transform sm:-translate-x-1/2 sm:-translate-y-1/2 font-shadows text-[10px] sm:text-[11px] md:text-[10px] lg:text-[13px] xl:text-[17px] 2xl:text-[28x] text-white">
            <div className="flex">
                <label htmlFor="nom" className="mr-[2%]">NOM:</label>
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
                <label htmlFor="prenom" className="mr-[2%]">PRENOM:</label>
                <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    className="bg-transparent border-none focus:outline-none"
                    value={formData.prenom ?? ""}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value}) }
                    required
                />
            </div>
            <div className="flex">
                <label htmlFor="mail" className="mr-[2%]">MAIL:</label>
                <input
                    id="mail"
                    name="mail"
                    type="email"
                    className="bg-transparent border-none focus:outline-none"
                    value={formData.email ?? ""}
                    onChange={(e) => setFormData({...formData, email: e.target.value}) }
                    required
                />
            </div>
            {/* Ajout du champ de numéro de téléphone */}
            <div className="flex">
                <label htmlFor="phone" className="mr-[2%]">TÉLÉPHONE:</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-transparent border-none focus:outline-none"
                    value={formData.phone ?? ""}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                />
            </div>
            <div className="flex">
                <label htmlFor="popup-couleur" className="mr-[4%]">COULEUR:</label>
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
            <div className="flex">
                <label htmlFor="popup-taille" className="mr-[4%]">TAILLE:</label>
                <div className="flex space-x-4">
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
                className="font-shadows sm:translate-x-[520%] text-[11px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[30px] text-white underline bg-transparent sm:translate-y-[-43%]"
            >
                Valider
            </button>
        </form>
    )
}