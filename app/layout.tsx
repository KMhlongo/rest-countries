import type { Metadata } from "next";
import "./globals.css";
import { nunito_sans } from "./ui/fonts";
import MoonOutline from '@/public/moon-outline.svg'
import Image from "next/image";
import { Providers } from "./providers";
import ToggleTheme from "./ui/ToggleTheme";

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Rest Countries Application | Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito_sans.className} antialiased `}>
        <Providers>
          <div className="bg-LightModeBg dark:bg-DarkModeBg">
            <header className='flex items-center py-4 md:px-16 px-4 bg-LightModeElements shadow dark:bg-DarkModeElements dark:text-LighModeElemets'>
              <h1 className='font-extrabold md:text-2xl text-lg'>Where in the world?</h1>
              <ToggleTheme />
            </header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
