// This is the root layout
import type { Metadata } from "next";
import NavbarLayout from "./components/navbar/layout";
import BackgroundImage from "./BackgroundImage";

export const metadata: Metadata = {
  title: "Personal Site",
  description: "Sohails Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundImage />
        <NavbarLayout>{children}</NavbarLayout>
      </body>
    </html>
  );
}
