import React from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../ui/DarkMode";
import { BriefcaseBusiness, CircleUserRound } from "lucide-react";

export const UserHeader = () => {
    return (
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <Link to={"/"}>
                    <h1 className="text-4xl font-bold">Logo</h1>
                </Link>
            </div>

            <nav className="flex gap-20 font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/user/course"}>Courses</Link>
                <Link to={"/user/my-learnings"}>My Learnings</Link>
            </nav>

            <div className="flex items-center gap-8">
                <DarkMode  />
                <Link to={"/user/cart"}>
                    <BriefcaseBusiness width={30} height={30} />
                </Link>
                <Link to={"/user/profile"}>
                    <CircleUserRound  width={30} height={30}/>
                </Link>
            </div>
        </div>
    );
};
