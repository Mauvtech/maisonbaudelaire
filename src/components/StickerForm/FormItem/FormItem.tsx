import styles from "./FormItem.module.css";
import clsx from "clsx";

type FormItemProps = {
    label: string,
    value: string,
    onChange: (value: string) => void
    id?: string
}

export default function FormItem({label, value, onChange, id}: FormItemProps) {
    return (
        <div className={clsx("flex", styles.formItem)}>
            <label htmlFor="nom" className="mr-[2%]">{label}:</label>
            <input
                id={id}
                className="bg-transparent  border-none focus:outline-none"
                type={"text"}
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}

                required
            />
        </div>
    )
}