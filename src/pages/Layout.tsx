import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({children}:React.PropsWithChildren) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}