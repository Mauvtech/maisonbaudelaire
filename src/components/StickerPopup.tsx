import React from "react";

import {FormData} from "../Pages/Home/UseFormData";
import SelectionForm from "./StickerForm/SelectionForm";
import Soldout from "../assets/Soldout";

interface StickersPopupProps {
    formData: FormData,
    setFormData: (formData: FormData) => void,
    open: boolean,
    setOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export default function StickerPopup({formData, setFormData, setOpen}: StickersPopupProps) {
    return (
        <div
            className="fixed inset-0 bg-black max-h-screen max-w-screen bg-opacity-50 flex justify-center items-center z-50">
            <div
                className="flex items-center justify-center"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/sticker.png)`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '75%',
                    maxWidth: '100%',
                    aspectRatio: '1 / 1',
                }}
            >
                <SelectionForm
                    classValider="mr-3 -mt-4"
                    className="px-0 lg:px-16 mr-6 lg:mt-0 mt-4 tracking-wider caret-white absolute left-1/4 inset-0 flex flex-col justify-center font-shadows text-[0.6rem] -translate-x-[10%] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white"
                    formData={formData} setFormData={setFormData}
                    onSend={() => setOpen(false)}
                />
                
            </div>
        </div>
    )
}