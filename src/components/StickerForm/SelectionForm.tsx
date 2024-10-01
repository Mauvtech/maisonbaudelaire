import FormItem from "./FormItem/FormItem";
import React from "react";

import {Color, FormData, Size} from "../../Pages/Home/UseFormData";
import useEmail from "../../Pages/Home/UseEmail";


interface SelectionFormProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
    className?: string,
    onSend?: () => any
}

export default function SelectionForm({formData, setFormData, className, onSend}: SelectionFormProps) {

    const {sendEmail} = useEmail()

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendEmail(formData);
        onSend && onSend();
    };


    return (
        <form onSubmit={handleSubmit}
              className={className}>
            <div className={"float-left"}>
                <FormItem
                    label={"NOM"}
                    value={formData.name ?? ""}
                    onChange={(nom) => setFormData({...formData, name: nom})}
                />
                <FormItem label={"PRENOM"} value={formData.surname ?? ""}
                          onChange={(e) => setFormData({...formData, surname: e})}
                />
                <FormItem label={"MAIL"} value={formData.email ?? ""}
                          id={"email"}
                          onChange={(e) => setFormData({...formData, email: e})}
                />

                <FormItem label={"TÉLÉPHONE"} value={formData.phone ?? ""}
                          onChange={(e) => setFormData({...formData, phone: e})}
                />
                <div className="flex">
                    <label htmlFor="popup-couleur" className="mr-[4%]">COULEUR:</label>
                    <div className="flex space-x-4">
                        {Object.values(Color).map((color) => (
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
                        {Object.values(Size).map((size) => (
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
            </div>
            <div className={"float-right flex items-end flex-wrap justify-end"}>
                <button
                    className={"text-[150%] underline"}
                    type="submit"
                >
                    Valider
                </button>
            </div>

        </form>
    )
}