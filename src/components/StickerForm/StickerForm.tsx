import React from "react";
import StickersImage from "../../assets/StickersImage";
import SelectionForm from "./SelectionForm";
import {FormData} from "../../Pages/Home/UseFormData";
import clsx from "clsx";
import styles from "./StickerForm.module.css";

interface StickersPopupProps {
    classname?: string,
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
}

export default function StickerForm({classname, formData, setFormData}: StickersPopupProps) {

    return (
        <div className={clsx("relative lg:w-[30rem]", classname)}>
            <StickersImage classname={"absolute top-0 right-0 object-cover w-full"}/>
            <SelectionForm
                className={clsx(styles.formOverlay, "lg:text-xl text-l lg:p-0 p-6 text-white leading-normal font-shadows float-left flex ")}
                formData={formData} setFormData={setFormData}/>
        </div>

    )
}