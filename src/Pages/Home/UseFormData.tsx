import {useState} from "react";

export type FormData = {
    name: string | null;
    surname: string | null;
    email: string | null;
    phone: string | null;
    color: string;
    size: string;
};

export function useFormData() {

    const [formData, setFormData] = useState<FormData>(
        sessionStorage.getItem('formData') ? JSON.parse(sessionStorage.getItem('formData') as string) : {
            name: null,
            surname: null,
            email: null,
            phone: null,
            color: 'ROSE',
            size: 'M'
        } satisfies FormData);

    function setFormSelection(formData: FormData) {
        console.log(formData);
        setFormData(formData);
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }


    return {formData, setFormData: setFormSelection};
}