import FormItem from "./FormItem";
import React from "react";
import emailjs from "emailjs-com";

import {FormData} from "../../Pages/Home/UseFormData";


interface SelectionFormProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
    className?: string,
    onSend?: () => any
}

export default function SelectionForm({formData, setFormData, className, onSend}: SelectionFormProps) {

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
        onSend && onSend();
    };


    return (
        <form onSubmit={handleSubmit}
              className={className}>
                <span>
                    <FormItem
                        label={"NOM"}
                        value={formData.name ?? ""}
                        onChange={(nom) => setFormData({...formData, name: nom})}
                    />
                    <FormItem label={"PRENOM"} value={formData.surname ?? ""}
                              onChange={(e) => setFormData({...formData, surname: e})}
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
                                    onClick={(e) => setFormData({...formData, color: color})}
                                    className={`${formData.color === color ? 'underline' : ''
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
                                    onClick={(e) => setFormData({...formData, size: size})}
                                    className={`${formData.size === size ? 'underline' : ''
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