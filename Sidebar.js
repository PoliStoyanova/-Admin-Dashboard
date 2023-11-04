import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

    const MENU_ITEMS = [
        { link: "/", title: "Home" },
        { link: "/products", title: "Products" },
        { link: "/users", title: "Users" },
    ]

    return (
        <>
            <div className="bg-dark" style={{height: '100vh'}}>
                <div className="position-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            {
                                MENU_ITEMS.map((i, index) => 
                                    <Link key={index} className="nav-link text-white" to={i.link}>
                                        {i.title}
                                    </Link>)
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}