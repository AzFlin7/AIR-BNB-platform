import "../../../styles/globals.css";
import SessionProvider from "../../../components/providers/SessionProvider";
import { unstable_getServerSession } from "next-auth/next";
// import {useRouter} from "next/navigation"
import { Quicksand } from "@next/font/google";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  // console.log(session?.user);
  // if (session?.user !== undefined || null) {
  //   redirect("/");
  // }
  return (
    <html>
      <head key="main">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body className={Qs.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
