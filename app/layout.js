import { Inter } from "next/font/google";

import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {
        <ReduxProvider>
          <body className={inter.className}>
            <div>
              <main>{children}</main>
            </div>
          </body>
        </ReduxProvider>
      }
    </html>
  );
}
