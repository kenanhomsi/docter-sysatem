import type { Metadata } from "next";
import Script from "next/script";
import "leaflet/dist/leaflet.css";
import "./globals.scss";
import { MotionObserver } from "@/components/MotionObserver";
import { BackgroundLogo } from "@/components/BackgroundLogo";

export const metadata: Metadata = {
  title: "Doctor's System | Metwali Labs",
  description:
    "Metwali Clinical Laboratory — precision diagnostics, advanced medical screening, and lab results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-(--font-sans)">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
        <MotionObserver />
        <BackgroundLogo />
        {children}
      </body>
    </html>
  );
}
