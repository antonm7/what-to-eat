import React from "react";

export default function Navbar() {
    return (
        <div className="px-spacing absolute flex justify-between items-center w-full h-auto pt-8">
                <p>Logo</p>
                <div className="flex">
                    <p>Home</p>
                    <p className="px-12 whitespace-nowrap">What To Eat</p>
                    <p>Profile</p>
                </div>
        </div>
    )
}