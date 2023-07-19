import ReduxProvider from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import Containers from "@/components/Containers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <ToastContainer />
          <Containers className="my-2">{children}</Containers>
        </ReduxProvider>
      </body>
    </html>
  );
}
