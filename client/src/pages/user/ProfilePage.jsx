import { LogOut } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../services/userApi";

export const ProfilePage = () => {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        const response = await userLogout();
        if (response?.success) {
            navigate("/");
        }
    };

    return (
        <div className="flex flex-col gap-5 items-start px-20 py-10">
            <h1>Welcome User_name</h1>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit? Est modi deserunt et ducimus exercitationem sapiente
            </p>

            <button onClick={handleLogOut} className="btn btn-sm btn-error  ">
                <span>Log-out</span>
                <LogOut />
            </button>
        </div>
    );
};
