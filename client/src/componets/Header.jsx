import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { DarkMode } from "./ui/DarkMode";

export const Header = () => {
    return (
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <h1 className="text-4xl font-bold">Logo</h1>
            </div>

            <nav className="flex gap-20 font-semibold">
                <Link to={"/"}>Home</Link>
                <Link>About</Link>
                <Link>Courses</Link>
            </nav>

            <div className="flex items-center gap-8">
                <DarkMode />
                <button className="btn btn-primary">Join Us</button>
            </div>
        </div>
    );
};
