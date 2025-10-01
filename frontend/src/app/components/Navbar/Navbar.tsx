"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import capitalizeFirstLetter from "../../../../lib/capitalizeFirstLetter";

type menuItem = {
    name: string;
    href: string;
}

const menuItems: menuItem[] = [
    { name: "About", href: "/about"},
    { name: "Legacy", href: "/Legacy"},
    { name: "News", href: "/News"},
    { name: "Videos", href: "Videos"},
    { name: "Join", href: "Join"}
];

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return (
        <header className="py-8 px-12 fixed top-0 w-full">
            <div className="header__content flex items-center justify-between">
                <Link href={"/"}><Image src={`/images/logo.png`} alt="logo" width="104" height="45" /></Link>

                <nav className="nav">

                    {/* Desktop menu */}
                    <div className="hidden md:flex gap-6">
                        {menuItems.map((item) => (
                            <Link key={item.name} href={item.href} className="hover:text-blue-600">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden flex flex-col gap-1"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="w-6 h-1 bg-black"></span>
                        <span className="w-6 h-1 bg-black"></span>
                        <span className="w-6 h-1 bg-black"></span>
                    </button>

                    {/* Sidebar (slides from right) */}
                    {open && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-40" onClick={() => setOpen(false)}>
                            <div
                                className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 transform translate-x-0"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="self-end text-2xl"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                >
                                    &times;
                                </button>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg hover:text-blue-600"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}