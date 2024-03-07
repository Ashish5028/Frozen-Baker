import { Fragment, useEffect, useState } from "react";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { FaCartArrowDown, FaWindows } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuItems from "./menuItems";
import { LoginItems } from "./loginItems";
import {  useSelector } from "react-redux";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Shop", href: "Team", current: false },
  { name: "Cake", href: "product", current: false },
  { name: "Cup Cake", href: "product", current: false },
  { name: "Service", href: "service", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderPage() {
  const [user, setUser] = useState("");
  const value = useSelector((state) => state.header.value);
  useEffect(() => {
    const data = localStorage.getItem("User");
    setUser(data);
  }, []);
  



  const cartId = useSelector((state) => state.product.users);
  // const auth = localStorage.getItem("auth");
  return (
    <Disclosure as="nav" className="bg-navBar ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  sm:px-6 lg:px-1">
            <div className="relative flex py-3 items-center ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center justify-center">
                  <p className="text-yellow-500 text-3xl font-heading   flex">
                    <span className="px-1 ">Frozen</span>Baker
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <MenuItems />
                </div>
              </div>
              <div className="absolute space-x-6 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/cartitems">
                  <div className="font-text text-sm position-relative text-white -space-x-4 top-1 ">
                    <div className="absolute top-1  rounded-full bg-bgColor px-2">
                      {value}
                    </div>
                    <FaCartArrowDown
                      fontSize="20px"
                      className="hover:text-bgColor   "
                    />
                  </div>
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full  text-sm text-white">
                      <span className="absolute -inset-1.5" />
                      <div>
                        {user ? (
                          user
                        ) : (
                          <span className="material-symbols-outlined ">
                            account_circle
                          </span> 
                        )}
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -right-5  z-30 mt-5 w-60 font-text  origin-top-right rounded-sm bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <LoginItems />
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default HeaderPage;
