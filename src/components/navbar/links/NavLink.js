"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({value}) {
    const pathname = usePathname();
    return (
        <Link
            className={`font-medium cursor-pointer py-2 px-3 rounded-3xl hover:bg-light2 hover:text-dark ${
                pathname == value.path ? "bg-light text-dark" : ""
            }`}
            href={value.path}
        >
            {value.title}
        </Link>
    );
}

export default NavLink;
