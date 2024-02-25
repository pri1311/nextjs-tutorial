"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { TbMenu2 } from "react-icons/tb";

function Links() {
    const links = [
        {
            title: "HomePage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];
    const session = true;
    const isAdmin = true;
    const [open, setOpen] = useState(false);
    const linksComponents =
        (links.map((value) => (
            <NavLink key={value.title} value={value}></NavLink>
        )) );
    const sessionComponents = (
      session ? (
            <>
                {isAdmin && (
                    <NavLink value={{ title: "Admin", path: "/admin" }} />
                )}
                <button className="font-medium cursor-pointer py-2 px-3 rounded bg-light2 text-dark hover:text-light hover:bg-dark">
                    Logout
                </button>
            </>
        ) : (
            <NavLink value={{ title: "Login", path: "/login" }} />
        )
    )
    return (
        <div>
            <TbMenu2
                onClick={() => setOpen(!open)}
                className="cursor-pointer font-medium text-3xl md:hidden"
            />
            {open && (
                <div className="bg-dark2 absolute right-10 sm:right-12 min-h-screen w-5/6 sm:w-1/2 z-10 flex flex-col justify-center gap-4 md:hidden">
                    {linksComponents}
                    {sessionComponents}
                </div>
            )}
            <div className="hidden md:flex md:flex-row gap-2.5 items-center">
                {linksComponents}
                {sessionComponents}
            </div>
        </div>
    );
}

export default Links;
