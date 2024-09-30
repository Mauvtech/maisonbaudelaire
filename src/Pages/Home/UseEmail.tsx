import {FormData} from "./UseFormData";
import emailjs from "emailjs-com";
import {useState} from "react";

export default function useEmail() {

    const [hasBeenSent, setHasBeenSent] = useState<boolean>(
        sessionStorage.getItem('hasBeenSent') ? JSON.parse(sessionStorage.getItem('hasBeenSent') as string) : false
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
                sessionStorage.setItem('hasBeenSent', JSON.stringify(true));
                alert("Tes informations ont bien été envoyées !");
            }, (error) => {
                console.log(error.text);
                alert("Erreur, veuillez réessayer plus tard.");
            });
    };

    return {
        hasBeenSent,
        sendEmail
    }
}