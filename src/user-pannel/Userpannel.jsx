import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../assets/image.png'; // Import logo image (change the path as needed)

const UserPanel = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear user session or token)
    console.log("User logged out");
    navigate("/"); // Navigate to Home page after logout
  };

  const handleCreateAccount = () => {
    // Navigate to the register page when "Create Another Account" is clicked
    console.log("Create another account");
    navigate("/signup"); // Navigate to Register page
  };

  const handleMyBalance = () => {
    // Navigate to MyBalance page when "My Balance" is clicked
    console.log("Navigating to My Balance");
    navigate("/mybalance"); // Navigate to MyBalance page
  };

  const handleMyOrders = () => {
    // Navigate to MyOrders page when "My Orders" is clicked
    console.log("Navigating to My Orders");
    navigate("/myorder"); // Navigate to MyOrders page
  };

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="Site Logo" className="h-12 w-12 mr-3" />
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
        <div className="relative flex items-center">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 focus:outline-none">
              <UserIcon className="h-8 w-8 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
              <ChevronDownIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors duration-200" />
            </Menu.Button>

            {/* Dropdown Transition */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
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
                      onClick={handleMyBalance} // Navigate to MyBalance page
                    >
                      My Balance
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`block px-4 py-2 text-gray-700 ${active ? "bg-gray-100" : ""}`}
                      onClick={handleMyOrders} // Navigate to MyOrders page
                    >
                      My Orders
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
    </div>
  );
};

export default UserPanel;
