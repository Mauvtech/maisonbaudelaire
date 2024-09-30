import clsx from "clsx";
import styles from "./StickerForm.module.css";
import FormItem from "./FormItem";
import React from "react";
import emailjs from "emailjs-com";
import {FormData} from "../../Pages/Home/Home";


interface SelectionFormProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void
}

export default function SelectionForm({formData, setFormData}: SelectionFormProps) {

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
        <form onSubmit={handleSubmit}
              className={clsx(styles.formOverlay, "text-xl text-white leading-normal font-shadows float-left flex ")}>
                <span>
                    <FormItem
                        label={"NOM"}
                        value={formData.nom ?? ""}
                        onChange={(nom) => setFormData({...formData, nom})}
                    />
                    <FormItem label={"PRENOM"} value={formData.prenom ?? ""}
                              onChange={(e) => setFormData({...formData, prenom: e})}
                    />
                    <FormItem label={"MAIL"} value={formData.email ?? ""}
                              onChange={(e) => setFormData({...formData, email: e})}
                    />

                    <FormItem label={"TÉLÉPHONE"} value={formData.phone ?? ""}
                              onChange={(e) => setFormData({...formData, phone: e})}
                    />
                    <div className="flex">
                        <label htmlFor="popup-couleur" className="mr-[4%]">COULEUR:</label>
                        <div className="flex space-x-4">
                            {['ROSE', 'NOIR'].map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={(e) => setFormData({...formData, couleur: color})}
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
                                    onClick={(e) => setFormData({...formData, taille: size})}
                                    className={`${formData.taille === size ? 'underline' : ''
                                    } bg-transparent focus:outline-none text-white`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </span>
            <span className={"flex"}>
                <button
                    className={"text-2xl underline float-end self-end"}
                    type="submit"
                >
                    Valider
                </button>
                </span>

        </form>
    )
}