import React, {useEffect, useState} from "react";
import StickerForm from "../../components/StickerForm/StickerForm";
import DropImage from "../../assets/DropDateImage";
import WomenTransparent from "../../assets/WomensTransparentBackground";
import styles from "./Home.module.css";
import TheBrandImage from "../../assets/TheBrandImage";
import {containEmptyAttribute} from "../../utils/EmptyObject";
import {useFormData} from "./UseFormData";
import useEmail from "./UseEmail";
import {useMediaQuery} from 'react-responsive'
import StickersPopup from "../../components/StickersPopup";

export function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const {formData, setFormData} = useFormData();

    const {hasBeenSent} = useEmail();

    const isLargeScreen = useMediaQuery({query: '(min-width: 1024px)'})

    useEffect(() => {
        const timer = setTimeout(() => {
            if (containEmptyAttribute(formData) && !hasBeenSent && isLargeScreen) {
                setShowPopup(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [formData]);


    return (
        <div className="bg-white h-full md:mt-[10%] mt-[30%]">
            <div className={"flex flex-col lg:px-32 px-4 h-full"}>
                <TheBrandImage classname={"h-auto w-auto"}/>
                <div className={"h-12 flex justify-between md:mt-0 mt-[340px] "}>
                    <DropImage classname={"h-full w-auto"}/>
                    {isLargeScreen && <StickerForm formData={formData} setFormData={setFormData}/>}
                </div>
                <div className={"flex justify-center mt-12"}>
                    {!isLargeScreen && <button
                        className={"text-3xl underline float-end self-end text-[#cb66ad] font-shadows"}
                        onClick={() => setShowPopup(true)}
                    >
                        Sois le premier à en profiter
                    </button>
                    }
                </div>

            </div>

            <WomenTransparent classname={styles.models}/>


            <footer className={"flex justify-center p-4"}>Maison baudelaire™ all rights reserved</footer>

            {showPopup && (
                <StickersPopup formData={formData} setFormData={setFormData} open={showPopup}
                               setOpen={setShowPopup}/>)
            }
        </div>
    );
}
