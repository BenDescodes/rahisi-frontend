import { ReactNode } from "react";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"] });

interface TextProps {
  children: ReactNode;
  className?: string;
  cat?: "c" | "l" | "i" | "b";
  color?: string;
  align?: "text-center" | "text-left" | "text-right";
  weight?: "font-medium" | "font-bold";
}

export function Text({ children, className, cat, color, align, weight }: TextProps) {
  switch (cat) {
    //i : text pour l'icon
    case "i":
      return <p className={`font-normal ${className} ${jost.className} ${color ? color : "text-gray-800"}`}>{children}</p>;
    //c : Text-center
    /* case 'c':
            return (
                <p className={`font-normal text-center ${className} ${jost.className} ${color ? color : 'text-gray-700'}`}>
                    {children}
                </p>
            )
            break;
        //l : left
        case 'l':
            return (
                <p className={`font-normal  ${className} ${jost.className} ${color ? color : 'text-gray-800'}`}>
                    {children}
                </p>
            )
            break; */
    /* //b : bold medium
        case 'b':
            return (
                <p className={`font-medium  ${className} ${jost.className} ${color ? color : 'text-gray-800'}`}>
                    {children}
                </p>
            )
            break; */

    default:
      return (
        <p
          className={` ${weight ? weight : "font-normal"} ${
            align ? (align = "text-center" ? align : (align = "text-left" && align)) : "text-justify"
          } ${className} ${jost.className} ${color ? color : "text-gray-700"} `}
        >
          {children}
        </p>
      );
      break;
  }
}
