import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// @import url("https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css");

function NavBar() {
    return (
        <header className="bg-red-400">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        James Jorissen
                    </NavLink>

                    <NavLink to="/projects" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-pink-700" >
                        Projects
                    </NavLink>
                    <NavLink to="/aboutjames" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-pink-700" >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/james-jorissen-4a68461b0/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}

export default NavBar