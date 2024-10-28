import { useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", route: "/" },
        { id: 2, name: "About", route: "/about" },
        { id: 3, name: "Services", route: "/services" },
        { id: 4, name: "Contact", route: "/contact" },
        { id: 5, name: "Blog", route: "/blog" }
    ];


    return (
        <nav className="bg-pink-600 text-white p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <IoClose className="text-3xl"></IoClose> : <FaBars className="text-3xl"></FaBars>
                        }
                    </div>
                    <div className=" w-full lg:w-auto text-center">
                        <h4 className="text-2xl">Duplex Flex Nature</h4>
                    </div>
                    <div className="">
                        <ul className={`lg:flex gap-12 ${isOpen ? 'top-20' : '-left-full top-20'} absolute left-0 lg:static bg-pink-600 py-3 duration-1000 mx-auto text-center w-full`}>
                            {
                                routes.map(route => <LinkItem
                                    key={route.id}
                                    route={route}
                                ></LinkItem>)
                            }
                        </ul>
                    </div>
                    <button className="btn">login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;