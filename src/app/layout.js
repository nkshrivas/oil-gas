import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Indraprastha",
  description: "Biofuel oil and gas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<MainHeader />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
