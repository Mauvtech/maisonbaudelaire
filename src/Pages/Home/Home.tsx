import React, {useEffect, useState} from "react";
import StickersPopup from "../../components/StickersPopup";
import StickerForm from "../../components/StickerForm/StickerForm";
import DropImage from "../../assets/DropDateImage";
import WomenTransparent from "../../assets/WomensTransparentBackground";
import styles from "./Home.module.css";
import TheBrandImage from "../../assets/TheBrandImage";

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
        console.log(formData);
        setFormData(formData);
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }


    return {formData, setFormData: setFormSelection};
}

export function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const {formData, setFormData} = useFormData();


    useEffect(() => {
        const timer = setTimeout(() => {
            if (formData.nom === null || formData.prenom === null || formData.email === null || formData.phone === null) {
                setShowPopup(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [formData]);


    return (
        <div className="bg-white h-full mt-[10%]">
            <div className={"flex flex-col px-32"}>
                <TheBrandImage classname={"h-auto w-auto"}/>
                <div className={"h-12 flex justify-between"}>
                    <DropImage classname={"h-full w-auto"}/>
                    <StickerForm formData={formData} setFormData={setFormData}/>
                </div>
            </div>


            <WomenTransparent classname={styles.models}/>


            {showPopup && (
                <StickersPopup formData={formData} setFormSelection={setFormData} open={showPopup}
                               setOpen={setShowPopup}/>)
            }
        </div>
    );
}
