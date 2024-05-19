"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Props = {};

export default function Login({}: Props) {
  // const [name, setname] = useState("");
  // const [password, setPassword] = useState("");
  const [InputStyle, setInputStyle] = useState(
    "bg-gray-100 text-gray-700 focus:outline-none focus:ring-[3px] duration-300 transition-all focus:ring-zinc-300 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
  );
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const useSearchparams = useSearchParams() ?? "/";

  const handleGoogleLogin = async () => {
    const callbackUrl = useSearchparams.get("callbackUrl") ?? null;
    signIn("google", { callbackUrl: callbackUrl ?? "http://localhost:3000/" });
  };
  const handleGithubLogin = async () => {
    const callbackUrl = useSearchparams.get("callbackUrl") ?? null;
    signIn("github", { callbackUrl: callbackUrl ?? "http://localhost:3000/" });
  };
  const handleFacebookLogin = async () => {
    const callbackUrl = useSearchparams.get("callbackUrl") ?? null;
    signIn("facebook", {
      callbackUrl: callbackUrl ?? "http://localhost:3000/",
    });
  };

  useEffect(() => {
    if (useSearchparams.get("error") != null) {
      console.log("Wrong Creds");
      setInputStyle(
        "bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 border-red-400 duration-300 transition-all focus:ring-zinc-200 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
      );
    }
  }, []);

  // credentials login
  // @ts-ignore
  const handleCredLogin = async (e: FormEventHandler<HTMLButtonElement>) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const payload = { email, password };
    let callB = useSearchparams.get("callbackUrl") ?? null;
    console.log("-------------", callB);
    const status = await signIn("cred", {
      callbackUrl: callB ?? "http://localhost:3000/",
      redirect: true,
      ...payload,
    });

    console.log("login page:: " + JSON.stringify(status));
  };

  const [url, seturl] = useState("#");
  // useEffect(() => {
  //   const UrlFetch = async () => {
  //     // axios.get("/sanctum/csrf-cookie").then(async (response) => {
  //     //   //set XSRF-TOKEN and laravel session
  //     // });
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_api_url}/api/login/google`,
  //       {
  //         headers: new Headers({ accept: "application/json" }),
  //       }
  //     );
  //     const data = await res.json();
  //     seturl(data.url);
  //   };
  //   UrlFetch();
  // }, []);

  return (
    <section className="flex h-screen w-screen items-center bg-gray-50 text-sm sm:text-base">
      <title key="title">Login</title>
      <div className="mx-auto w-full p-8 sm:w-[600px]">
        <h2 className="text-center text-2xl font-semibold text-gray-700">
          Airbnb
        </h2>
        <p className="text-center text-xl text-gray-600">Welcome back!</p>

        {/* Google */}
        <div
          onClick={handleGoogleLogin}
          className="group/google mt-4 flex cursor-pointer select-none items-center justify-center rounded-lg text-white shadow-md transition-all duration-200 hover:bg-[#DB4437]"
        >
          {/* <Link
          href={url ?? "#"}
          className="flex items-center transition-all duration-200 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-[#DB4437]"
        > */}
          <div className="px-4 py-3">
            <svg className="h-6 w-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <h1 className="w-5/6 py-3 text-center font-bold text-gray-600 group-hover/google:text-gray-200">
            Sign in with Google
          </h1>
          <div className="w-14"></div>
        </div>
        {/* Facebook */}
        <div
          onClick={handleFacebookLogin}
          className="group/face mt-4 flex cursor-pointer select-none items-center justify-center rounded-lg text-white shadow-md transition-all duration-200 hover:bg-[#4267B2]"
        >
          <div className="px-4 py-3">
            <FaFacebookF className="h-6 w-6 text-[#4267B2] group-hover/face:text-gray-200" />
          </div>
          <h1 className="w-5/6 py-3 text-center font-bold text-gray-600 group-hover/face:text-gray-200">
            Sign in with Facebook
          </h1>
          <div className="w-14"></div>
        </div>
        {/* GITHUB */}
        <div
          onClick={handleGithubLogin}
          className="group/github mt-4 flex cursor-pointer select-none items-center justify-center rounded-lg text-white shadow-md transition-all duration-200 hover:bg-slate-600"
        >
          <div className="px-4 py-3">
            <FaGithub className="h-6 w-6 text-slate-800 group-hover/github:text-gray-100" />
          </div>
          <h1 className="w-5/6 py-3 text-center font-bold text-gray-600 group-hover/github:text-gray-100">
            Sign in with Github
          </h1>
          <div className="w-14"></div>
        </div>
        <div className="relative mt-4 flex items-center justify-center">
          <span className="w-full border-b"></span>
          <Link
            href="#"
            className="mx-10 w-96 truncate text-center text-xs uppercase text-gray-500"
          >
            or
          </Link>
          <span className="w-full border-b"></span>
        </div>
        <form onSubmit={handleCredLogin}>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email Address
            </label>
            <input
              className={InputStyle}
              ref={emailRef}
              type={"email"}
              required
              defaultValue={""}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Password
              </label>
              <Link href="#" className="text-xs text-gray-500">
                Forget Password?
              </Link>
            </div>
            <input
              className={InputStyle}
              type="password"
              ref={passwordRef}
              required
              defaultValue={""}
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full rounded bg-gray-700 py-2 px-4 font-bold text-white hover:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-full border-b"></span>
          <Link
            href={"/signup"}
            className="mx-10 w-96 truncate text-center text-xs uppercase text-gray-500"
          >
            or signup
          </Link>
          <span className="w-full border-b"></span>
        </div>
      </div>
    </section>
  );
}
