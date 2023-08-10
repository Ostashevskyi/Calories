import { Inter } from "next/font/google";

import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {
        <NextAuthProvider>
          <ReduxProvider>
            <body className={inter.className}>
              <div>
                <main>{children}</main>
              </div>
            </body>
          </ReduxProvider>
        </NextAuthProvider>
      }
    </html>
  );
}
