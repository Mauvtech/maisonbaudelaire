import React from "react";

import {FormData} from "../Pages/Home/UseFormData";
import SelectionForm from "./StickerForm/SelectionForm";

interface StickersPopupProps {
    formData: FormData,
    setFormData: (formData: FormData) => void,
    open: boolean,
    setOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export default function StickersPopup({formData, setFormData, setOpen}: StickersPopupProps) {
    return (

        <div
            className="fixed inset-0 bg-black max-h-screen max-w-screen bg-opacity-50 flex justify-center items-center z-50">
            <div
                className="relative rounded-lg  flex items-center justify-center"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/sticker.png)`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '90%',
                    maxWidth: '80%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                }}
            >
                <SelectionForm
                    className="sm:mt-[5%] mr-[17%] mt-[5%]  h-[35%] tracking-wider caret-white inset-0 sm:mr-[13%] sm:h-[40%] flex flex-col justify-center font-shadows text-[0.6rem] -translate-x-[13%] sm:text-[17px] md:text-[21px] lg:text-[26px] xl:text-[35px] 2xl:text-[36px] text-white"
                    formData={formData} setFormData={setFormData}
                    onSend={() => setOpen(false)}
                />

            </div>
        </div>
    )
}