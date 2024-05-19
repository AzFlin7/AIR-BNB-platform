"use client";
import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
  //responsable for storing values as cookies
}
