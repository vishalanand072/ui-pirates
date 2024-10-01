import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import FooterPage from "@/screens/Home/footer.tsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import clsx from "clsx";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background text-black font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {/* <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color="0, 0, 0"
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            /> */}
            <main className="pt-16 flex-grow">{children}</main>
            <FooterPage />
          </div>
        </Providers>
      </body>
    </html>
  );
}
