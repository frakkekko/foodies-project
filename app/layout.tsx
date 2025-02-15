import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

type Props = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
