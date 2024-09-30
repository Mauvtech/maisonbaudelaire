import React from "react";
import {FormData} from "../../Pages/Home/Home";
import StickersImage from "../../assets/StickersImage";
import SelectionForm from "./SelectionForm";

interface StickersPopupProps {
    formData: FormData,
    setFormData: (formSelection: FormData) => void,
}

export default function StickerForm({formData, setFormData}: StickersPopupProps) {

    return (
        <div className={"relative w-[30rem]"}>
            <StickersImage classname={"absolute top-0 right-0 object-cover w-full"}/>
            <SelectionForm formData={formData} setFormData={setFormData}/>
        </div>

    )
}