import "../../../../styles/globals.css";
import { Quicksand } from "@next/font/google";
import { unstable_getServerSession } from "next-auth/next";
import SessionProvider from "../../../../components/providers/SessionProvider";
import Categories from "../../../../components/Categories";
import FooterLogged from "../../../../components/FooterLogged";
import Footer from "../../../../components/Footer";

const Qs = Quicksand({ subsets: ["latin"], variable: "--font-inter" });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();

  return (
    <html>
      <head>
        <title key="title">Search results</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </head>
      <body className={Qs.className}>
        <section id="category">
          <Categories />
        </section>

        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
