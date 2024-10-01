import React from "react";
import StickersImage from "../../assets/StickersImage";
import SelectionForm from "./SelectionForm";
import {FormData} from "../../Pages/Home/UseFormData";
import clsx from "clsx";
import styles from "./StickerForm.module.css";

interface StickersPopupProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
}

export default function StickerForm({formData, setFormData}: StickersPopupProps) {

    return (
        <div className={"relative lg:w-[30rem] w-full"}>
            <StickersImage classname={"absolute top-0 right-0 object-cover w-full"}/>
            <SelectionForm
                className={clsx(styles.formOverlay, "text-xl text-white leading-normal font-shadows float-left flex ")}
                formData={formData} setFormData={setFormData}/>
        </div>

    )
}