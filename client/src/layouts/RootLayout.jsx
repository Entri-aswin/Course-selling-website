import React from "react";
import { Header } from "../componets/Header";
import { Footer } from "../componets/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <div>
            <Header />
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
