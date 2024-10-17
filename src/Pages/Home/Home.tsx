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
import StickerPopup from "../../components/StickerPopup";

export function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const {formData, setFormData} = useFormData();

    const {hasBeenSent} = useEmail();

    const isLargeScreen = useMediaQuery({query: '(min-width: 1024px)'})
    const isMobile = useMediaQuery({query: '(max-width: 1023px)'})

    useEffect(() => {
        const timer = setTimeout(() => {
            if (containEmptyAttribute(formData) && !hasBeenSent) {
                setShowPopup(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [formData]);


    return (
        <div className="bg-white h-full md:mt-[10%] mt-[10%]">
            <div className={"flex flex-col lg:px-32 px-4 "}>
                <TheBrandImage classname={"h-auto w-auto contrast-75 brightness-125"}/>
                <div className={"h-6 lg:h-12 flex justify-between "}>
                    <DropImage classname={"h-full w-auto"}/>
                    {isLargeScreen && <StickerForm formData={formData} setFormData={setFormData}/>}
                </div>
            </div>
            {isMobile && <div className={"py-4 px-1 mt-[69%] flex justify-center lg:mt-0"}>
                <StickerForm formData={formData} setFormData={setFormData}/>
            </div>}


            <WomenTransparent classname={styles.models}/>


            {showPopup && (
                <StickerPopup formData={formData} setFormData={setFormData} open={showPopup}
                              setOpen={setShowPopup}/>)
            }
        </div>
    );
}
