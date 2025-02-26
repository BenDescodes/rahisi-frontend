import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "../style/globals.css";
import { Topbar } from "@/components/organisms/Topbar";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms";

const marvellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahisi Style",
  description: "Maison de vente congolais. vous trouvez des habits, chaussures et accessoire à la mode",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={marvellus.className}>
        <Topbar />
        <Navbar />
        {children}
        ` <Footer />
      </body>
    </html>
  );
}
