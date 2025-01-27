import React, {useState} from 'react';
import {cn} from "@/lib/utils";


interface ITextField {
    label: string;
    value?: string;
    type?: "text" | "date" | "number" | "email";
    variant?: "outlined" | "filled" | "standard";
    color?: "enabled" | "hovered" | "disabled" | "focused" | "error";
    size?: "sm" | "md";
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    onChange?: (value: string) => void;
}

export function TextField(
    {
        label,
        value = "",
        type = "text",
        variant = "outlined",
        color = "enabled",
        size = "md",
        disabled = false,
        error = false,
        helperText,
        onChange,
    }: ITextField) {
    const [isFocused, setIsFocused] = useState(false);
    const [valueInput, setValueInput] = useState(value);

    // Define color styles
    const colors = {
        enabled: "border-gray-300 focus:border-blue-500",
        hovered: "border-gray-400 hover:border-blue-500",
        disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
        focused: "border-blue-500 ring-2 ring-blue-200",
        error: "border-red-500 focus:border-red-500",
    };

    // Define size styles
    const sizes = {
        sm: "px-2 py-1.5 text-sm",
        md: "px-3 pt-2.5 text-base",
    };

    // Define variant styles
    const variants = {
        standard: {
            container: "rounded-md h-14",
            input: "bg-transparent border-t-0 border-x-0 border-b-4 focus:outline-none",
            label: `absolute left-2  px-1 transition-all duration-200 ${
                isFocused || value
                    ? "top-1 text-xs text-blue-500"
                    : "top-1/2 -translate-y-1/2 text-gray-500"
            }`,
        },
        filled: {
            container: "border bg-gray-100 border-b rounded-t-md h-14",
            input: "border bg-transparent focus:outline-none",
            label: `absolute left-2 bg-gray-100 px-1 transition-all duration-200 ${
                isFocused || value
                    ? "top-1 text-xs text-blue-500"
                    : "top-1/2 -translate-y-1/2 text-gray-500"
            }`,
        },
        outlined: {
            container: "border-b h-14",
            input: "bg-transparent rounded-sm focus:outline-none",
            label: `absolute left-2 px-1 transition-all duration-200 ${
                isFocused || value
                    ? "top-1 text-xs text-gray-600"
                    : "top-1/2 -translate-y-1/2 text-gray-500"
            }`,
        },
    };

    // Handle focus and blur events
    const handleFocus = () => {
        setIsFocused(true)
    };
    const handleBlur = () => {
        if (valueInput?.trim() != "") {
            setIsFocused(true)
            return;
        }
        setIsFocused(false);
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    };

    return (
        <div className={cn("z-[5] relative w-full max-w-xs", variants[variant].container)}>
            {/* Input Field */}
            <input
                type={type}
                value={valueInput}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className={cn(
                    "w-full h-full transition-colors duration-200",
                    variants[variant].input,
                    colors[disabled ? "disabled" : error ? "error" : color],
                    sizes[size]
                )}

            />
            {/* Label */}
            <label
                className={cn(
                    "pointer-events-none",
                    variants[variant].label,
                    error ? "text-red-500" : ""
                )}
            >
                {label}
            </label>
            {/* Helper Text */}
            {helperText && (
                <p
                    className={cn(
                        "mt-1 text-xs",
                        error ? "text-red-500" : "text-gray-500"
                    )}
                >
                    {helperText}
                </p>
            )}
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
