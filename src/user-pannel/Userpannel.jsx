import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

import image from "../assets/image.png"; // Image import

const UserPanel = () => {
  const location = useLocation(); // Get the current route

  const handleLogout = () => {
    // You can implement your logout logic here
    console.log("User logged out");
  };

  const handleCreateAccount = () => {
    // You can implement the logic for creating a new account here
    console.log("Create another account");
  };

  // List of pages where Navbar should be hidden
  const hideNavbarPages = ["/buy", "/sell", "/swap", "/transfer"];

  return (
    <div className="h-screen bg-gray-100">
      {/* Conditionally render Navbar */}
      {!hideNavbarPages.includes(location.pathname) && (
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
          {/* Left Side: Logo and Name */}
          <div className="flex items-center">
            <img src={image} alt="Logo" className="h-5 w-8 mr-2" />
            <span className="text-xl font-semibold text-gray-900">Crypto-Wallet</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/buy" className="text-gray-700 hover:text-blue-500">Buy</Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-500">Sell</Link>
            <Link to="/swap" className="text-gray-700 hover:text-blue-500">Swap</Link>
            <Link to="/transfer" className="text-gray-700 hover:text-blue-500">Transfer</Link>
          </div>

          {/* Right Side: User Icon & Dropdown Menu */}
          <div className="relative">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-2 focus:outline-none">
                <UserIcon className="h-6 w-6 text-gray-600" />
                <ChevronDownIcon className="h-4 w-4 text-gray-600" />
              </Menu.Button>

              {/* Dropdown Transition */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`block px-4 py-2 text-gray-700 ${active ? "bg-gray-100" : ""}`}
                        onClick={handleCreateAccount}
                      >
                        Create Another Account
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`block px-4 py-2 text-gray-700 ${active ? "bg-gray-100" : ""}`}
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      )}

      {/* Content Below */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome to your User Panel</h2>
        {/* Additional user content can go here */}
      </div>
    </div>
  );
};

export default UserPanel;
