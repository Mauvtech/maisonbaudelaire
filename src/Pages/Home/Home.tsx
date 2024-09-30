import React, {useEffect, useState} from "react";
import StickersPopup from "../../components/StickersPopup";
import StickersForm from "../../components/StickersForm";
import DropImage from "../../assets/DromDateImage";
import WomenTransparent from "../../assets/WomensTransparentBackground";
import StickersImage from "../../assets/StickersImage";


export type FormData = {
    nom: string | null;
    prenom: string | null;
    email: string | null;
    phone: string | null;
    couleur: string;
    taille: string;
};


function useFormData() {

    const [formData, setFormData] = useState(
        sessionStorage.getItem('formData') ? JSON.parse(sessionStorage.getItem('formData') as string) : {
        nom: null,
        prenom: null,
        email: null,
        phone: null,
        couleur: 'ROSE',
        taille: 'M'
    });
    function setFormSelection(formData: FormData) {
        setFormData(formData);
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }


    return {formData, setFormSelection};
}

export function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const { formData, setFormSelection } = useFormData();


    useEffect(() => {
        const timer = setTimeout(() => {
            if (formData.nom === null || formData.prenom === null || formData.email === null || formData.phone === null) {
                setShowPopup(true);
            }
        }, 2000);

        // Nettoyer le timer lors du démontage du composant
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className="relative max-w-full -mt-[27%] min-h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
            <div className="relative w-full h-full mt-[2%] overflow-hidden flex items-center justify-center">
                <img
                    src={`${process.env.PUBLIC_URL}/thebrand.png`}
                    alt="The Brand"
                    className="absolute sm:w-[80%] -mt-[40%] sm:mt-0"
                />

                <div className="relative mt-[20%] max-h-screen flex max-w-full w-full sm:flex-row flex-col items-center md:justify-between sm:w-[80%] md:mt-[33%]">
                    <DropImage/>

                    <WomenTransparent/>
                    <StickersImage/>

                    <StickersForm formData={formData} setFormData={setFormSelection}/>
                </div>
            </div>

            {showPopup && (
                <StickersPopup formData={formData} setFormSelection={setFormSelection} open={showPopup} setOpen={setShowPopup}/>)
            }
        </div>
    );
}
