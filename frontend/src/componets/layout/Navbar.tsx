"use client";

import { useCurrentUser } from "@/hooks/useCurrenuser";
import { useLogout } from "@/hooks/useLogout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const { data: user, isPending } = useCurrentUser();

  const { mutate: logout } = useLogout();

  const menu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>

      <li>
        <Link href={"/courses"}>Courses</Link>
      </li>
    </>
  );
  return (
    <div className="px-2 navbar bg-white/70 backdrop-blur-md text-black shadow-sm fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LearnHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {/* User logged in */}
        {!isPending && user && (
          <div className="flex items-center gap-3">
            <span className="font-medium hidden sm:block">{user.username}</span>
            <button onClick={() => logout()} className="btn btn-outline btn-sm">
              Logout
            </button>
          </div>
        )}
        {/*  Not Logged-in */}
        {!user && (
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-neutral btn-sm">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
