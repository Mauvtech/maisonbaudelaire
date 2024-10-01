import {useState} from "react";

export type FormData = {
    name: string | null;
    surname: string | null;
    email: string | null;
    phone: string | null;
    color: Color;
    size: Size;
};

export enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XXL = 'XXL'
}


export enum Color {
    WHITE_PINK = 'Blanc / Rose',
    BLACK_WHITE = 'Noir / Blanc'
}

export function useFormData() {

    const [formData, setFormData] = useState<FormData>(
        sessionStorage.getItem('formData') ? JSON.parse(sessionStorage.getItem('formData') as string) : {
            name: null,
            surname: null,
            email: null,
            phone: null,
            color: Color.WHITE_PINK,
            size: Size.M,
        } satisfies FormData);

    function setFormSelection(formData: FormData) {
        setFormData(formData);
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }


    return {formData, setFormData: setFormSelection};
}