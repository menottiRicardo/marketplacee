import { headers } from "next/headers";
import { Suspense } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import BottomTabs from "./BottomTabs";
import "./globals.css";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = await getMobile();

  if (isMobile == true) {
    return (
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="">
          <MobileHeader />
          <Suspense fallback={<p>loading</p>}>
            <div className="bg-gray-50 px-4 pt-4 pb-20">
              {children}
            </div>
          </Suspense>
          <BottomTabs />
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
