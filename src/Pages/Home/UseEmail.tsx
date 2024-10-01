import {FormData} from "./UseFormData";
import emailjs from "emailjs-com";
import {useState} from "react";

export default function useEmail() {

    const [hasBeenSent, setHasBeenSent] = useState<boolean>(
        localStorage.getItem('hasBeenSent') ? JSON.parse(localStorage.getItem('hasBeenSent') as string) === true : false
    );
    const sendEmail = (formData: FormData) => {
        const emailData = {
            nom: formData.name,
            prenom: formData.surname,
            email: formData.email,
            phone: formData.phone, // Ajout du numéro de téléphone
            couleur: formData.color,
            taille: formData.size
        };


        emailjs.send('service_rx46rwb', 'template_dmlfjg3', emailData, 'PHFyWP1ZTKLuyga9T')
            .then((result) => {
                console.log(result.text);
                setHasBeenSent(true);
                localStorage.setItem('hasBeenSent', JSON.stringify("true"));
                alert("Tes informations ont bien été envoyées !");
            }, (error) => {
                localStorage.setItem('hasBeenSent', JSON.stringify("false"));
                console.log(error.text);
                alert("Erreur, veuillez réessayer plus tard.");
            });
    };

    return {
        hasBeenSent,
        sendEmail
    }
}