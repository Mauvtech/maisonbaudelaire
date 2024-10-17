import FormItem from "./FormItem/FormItem";
import React from "react";

import { Color, FormData, Size } from "../../Pages/Home/UseFormData";
import useEmail from "../../Pages/Home/UseEmail";

interface SelectionFormProps {
    formData: FormData;
    setFormData: (formSelection: FormData) => void;
    className?: string;
    classValider?: string;
    onSend?: () => any;
}

// Tailles disponibles en fonction de la couleur sélectionnée
const availableSizesByColor = {
    [Color.WHITE_PINK]: [Size.S, Size.M, Size.XXL, Size.Oversize],// Sold out pour Blanc&Rose
    [Color.BLACK_WHITE]: [Size.S, Size.M, Size.XXL, Size.Oversize], // Tailles disponibles pour Noir&Blanc
};

export default function SelectionForm({ formData, setFormData, className, onSend, classValider }: SelectionFormProps) {

    const { sendEmail } = useEmail();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendEmail(formData);
        onSend && onSend();
    };

    // Obtenir les tailles disponibles en fonction de la couleur sélectionnée
    const availableSizes = availableSizesByColor[formData.color] || [];

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className={"float-left"}>
                <FormItem
                    label={"NOM"}
                    value={formData.name ?? ""}
                    onChange={(nom) => setFormData({ ...formData, name: nom })}
                />
                <FormItem
                    label={"PRENOM"}
                    value={formData.surname ?? ""}
                    onChange={(e) => setFormData({ ...formData, surname: e })}
                />
                <FormItem
                    label={"MAIL"}
                    value={formData.email ?? ""}
                    id={"email"}
                    onChange={(e) => setFormData({ ...formData, email: e })}
                />
                <FormItem
                    label={"TÉLÉPHONE"}
                    value={formData.phone ?? ""}
                    onChange={(e) => setFormData({ ...formData, phone: e })}
                />

                <div className="flex">
                    <label htmlFor="popup-couleur" className="mr-[4%]">COULEUR:</label>
                    <div className="flex space-x-4">
                        {Object.values(Color).map((color) => (
                            <button
                                key={color}
                                type="button"
                                onClick={() => setFormData({ ...formData, color })}
                                className={`${formData.color === color ? 'underline' : ''} bg-transparent focus:outline-none text-white`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex">
                    <label htmlFor="popup-taille" className="mr-[4%]">TAILLE:</label>
                    <div className="flex space-x-4">
                        {availableSizes.length > 0 ? (
                            availableSizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, size })}
                                    className={`${formData.size === size ? 'underline' : ''} z-50 focus:outline-none text-white`}
                                >
                                    {size}
                                </button>
                            ))
                        ) : (
                            <span className="text-red-500">Sold out</span> // Affiche "Sold out" si aucune taille n'est disponible
                        )}
                    </div>
                </div>
            </div>

            <div className={"float-right flex items-end flex-wrap justify-end " + classValider}>
                <button className={"text-[150%] underline lg:mr-[10%]"} type="submit">
                    Valider
                </button>
            </div>
        </form>
    );
}

