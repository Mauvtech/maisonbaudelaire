import React from "react";


type FormItemProps = {
    label: string,
    value: string,
    onChange: (value: string) => void
}

export default function FormItem({label, value, onChange}: FormItemProps) {
    return (
        <div className="flex">
            <label htmlFor="nom" className="mr-[2%]">{label}:</label>
            <input
                className="bg-transparent  border-none focus:outline-none"
                id="popup-nom"
                type="text"
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </div>
    )
}