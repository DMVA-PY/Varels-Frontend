import React from "react";
import Provider from '../redux/provider';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Setup } from "@/components/utils";
import "/home/vare/project/farm_varels/Varels-Frontend/src/styles/async.css"
import "/home/vare/project/farm_varels/Varels-Frontend/src/styles/critical.css"

import MainStyles from '/home/vare/project/farm_varels/Varels-Frontend/src/styles/MainStyles.jsx'

import Footer from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Footer.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider> 
          <Setup/>
          <MainStyles/> 
          {children}
          <Footer/> 
        </Provider> 
      </body>
    </html>
  );
}
