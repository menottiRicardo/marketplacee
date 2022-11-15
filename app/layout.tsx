import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";
import "./globals.css";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = await getMobile();
  console.log(isMobile);
  if (isMobile == true) {
    return (
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <MobileHeader />
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

async function getMobile() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const { isMobile } = getSelectorsByUserAgent(userAgent as string);
  return isMobile;
}
