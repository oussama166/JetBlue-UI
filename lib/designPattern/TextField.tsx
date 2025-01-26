import React from 'react';


interface ITextFiled {
    label: string
    value?: string
    type: "text" | "datePicker" | "number" | "email"
    variant: "outlined" | "filled" | "standard"
    color: "enabled" | "hovered" | "disabled" | "focused" | "error"
    size: "sm" | "md"
}


export function TextField(
    {
        label,
        value,
        variant,
        type,
        color,
        size
    }: ITextFiled) {

    const colors = {
        enabled: "",
        hovered: "",
        disabled: "",
        focused: "",
        error: ""
    };
    const sizes = {
        sm: "",
        md: ""
    };

    return (
        <div className={"bg-jetblue-900"}>
            <h1>{label}</h1>
            <input value={value ?? ""}/>
        </div>
    );
}


export function Input() {
    return (
        <div>
            <input type="text" placeholder={"data"}/>
        </div>
    )
}
