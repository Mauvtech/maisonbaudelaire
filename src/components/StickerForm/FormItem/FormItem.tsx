import styles from "./FormItem.module.css";
import clsx from "clsx";

type FormItemProps = {
    label: string,
    value: string,
    onChange: (value: string) => void,
    id?: string,
    disabled?: boolean // Ajout de la propriété disabled
}

export default function FormItem({ label, value, onChange, id, disabled }: FormItemProps) {
    return (
        <div className={clsx("flex", styles.formItem)}>
            <label htmlFor={id} className="mr-[2%]">{label}:</label>
            <input
                id={id}
                className="bg-transparent border-none focus:outline-none"
                type={"text"}
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled} // Ajout de la gestion du disabled
                required
            />
        </div>
    )
}
