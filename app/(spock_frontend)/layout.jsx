import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "./_components/SideBar";
import Footer from "./_components/Footer";
import "react-big-calendar/lib/css/react-big-calendar.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Front Office Tool",
  description: "Front Office Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-2 w-[100vw] h-[100vh]">
          <div className="row-span-10 flex ">
            <SideBar />
            <div>{children}</div>
          </div>
          <div className="row-span-3">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
