import { ReactNode } from "react";
import { Input, Label } from "../atoms";

interface InputTProps {
    text: any,
    type?: string,
    cat?: 'p',
    other?: any,
    required?: any,
}

export function InputText({ text, type, cat, required, ...other }: InputTProps) {
    switch (cat) {
        // p :  sans le label mais avec le placeholder uniquement
        case 'p':
            return (
                <div className="md:flex items-center">
                    <Input className="md:w-4/4" type={type ? type : 'text'} placeholder={text} {...other} />
                </div>
            )
            break;
        // l : input type avec disposition right
        default:
            return (
                <div className="md:flex items-center py-2">
                    <Label className="md:w-1/4">{text}</Label>
                    <Input className="md:w-3/4" type={type ? type : 'text'} {...other} required={required} />
                </div>
            )
            break;
    }
}
