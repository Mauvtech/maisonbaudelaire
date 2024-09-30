import React, {useEffect, useState} from "react";
import StickersPopup from "../../components/StickersPopup";
import StickersForm from "../../components/StickersForm";
import DropImage from "../../assets/DropDateImage";
import WomenTransparent from "../../assets/WomensTransparentBackground";
import StickersImage from "../../assets/StickersImage";
import styles from "./Home.module.css";
import TheBrandImage from "../../assets/TheBrandImage";
import {clsx} from "clsx";

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

    const {formData, setFormSelection} = useFormData();


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
            <div className={"flex flex-col p-4"}>
                <div className={clsx(styles.imageContainer, "h-96 mb-[-46px]")}>
                    <TheBrandImage classname={"w-full h-auto"}/>
                </div>
                <div className={clsx(styles.dropImageContainer, "h-12")}>
                    <DropImage classname={"ml-[10%]"}/>
                </div>
            </div>


            <WomenTransparent classname={styles.models}/>
            <span>
                        <StickersImage classname={styles.sticker}/>

                        <StickersForm formData={formData} setFormData={setFormSelection}/>
            </span>

            {showPopup && (
                <StickersPopup formData={formData} setFormSelection={setFormSelection} open={showPopup}
                               setOpen={setShowPopup}/>)
            }
        </div>
    );
}
