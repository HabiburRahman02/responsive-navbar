import { useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", route: "/" },
        { id: 2, name: "About", route: "/about" },
        // { id: 3, name: "Services", route: "/services" },
        { id: 4, name: "Users", route: "/users" },
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
                        <ul className={`lg:flex gap-12 ${isOpen ? 'top-16' : '-left-full top-16 hidden'} absolute left-0 lg:static bg-pink-600 py-3 duration-1000 mx-auto text-center w-full`}>
                            {
                                routes.map(route => <LinkItem
                                    key={route.id}
                                    route={route}
                                ></LinkItem>)
                            }
                        </ul>
                    </div>
                    <AwesomeButton type="secondary">login</AwesomeButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;