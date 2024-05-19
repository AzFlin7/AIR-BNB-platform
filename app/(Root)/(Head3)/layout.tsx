import Header_Logged2 from "../../../components/Header_Logged2";
import "../../../styles/globals.css";
import SessionProvider from "../../../components/providers/SessionProvider";
import { unstable_getServerSession } from "next-auth/next";
import { Quicksand } from "@next/font/google";
import FooterLogged2 from "../../../components/FooterLogged2";
import Footer from "../../../components/Footer";
const Qs = Quicksand({ subsets: ["latin"], variable: "--font-Quicksand" });

export default async function Header3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html className="overflow-hidden">
      <head key="main">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body className={Qs.className}>
        <header id="header" className="fixed top-0 z-20">
          <Header_Logged2 />
        </header>
        <footer
          id="footer"
          className="fixed bottom-[0px] z-50 self-end mobile:hidden"
        >
          {session ? <FooterLogged2 /> : <Footer />}
        </footer>
        <section className="mobile:mt-20">
          <SessionProvider>{children}</SessionProvider>
        </section>
      </body>
    </html>
  );
}
