import { ReactNode } from "react";
import { Satisfy } from "next/font/google";
const satis = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

interface TitleProps {
  children: ReactNode;
  className?: string;
  cat?: "m" | "b";
}

export function Title({ children, className, cat }: TitleProps) {
  switch (cat) {
    //m: mini text
    case "m":
      return <p className={`text-3xl font-medium text-primary ${satis.className}`}>{children}</p>;
      break;
    //m: mini text avec bold
    case "b":
      return <p className={`text-2xl font-bold text-white `}>{children}</p>;
      break;
    default:
      return <p className={`text-2xl font-bold w-full text-gray-900 capitalize pb-3 pt-1 ${className}`}>{children}</p>;
      break;
  }
}
