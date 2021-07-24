import Link from "next/link";
import { useState } from "react";

import { VscThreeBars } from "react-icons/vsc";

export default function Header() {
  return (
    <div className="bg-[#1b2136] py-4 px-4 md:px-8 text-white flex justify-between items-center z-50 fixed w-full">
      <div className="text-3xl font-extrabold cursor-pointer">TSR</div>

      <div class="relative flex gap-4 items-center justify-center">
        <button
          type="button"
          className="bg-transparent border-none inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2  text-sm font-medium text-gray-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-gray-800"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Resources
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          class="bg-transparent border-none inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2  text-sm font-medium text-gray-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-gray-800"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Data
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="text-3xl block md:hidden cursor-pointer">
          <VscThreeBars />
        </div>
      </div>

      <div
        class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-2"
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden cursor-pointer items-center sm:flex">
        <div className="ml-8 text-sm font-medium text-gray-white">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="ml-8 text-sm font-medium text-gray-white">
          {" "}
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>
        <div className="ml-8 text-sm font-medium text-gray-white">
          {" "}
          <Link href="/">
            <a>Docs</a>
          </Link>
        </div>
        <div className="ml-8 text-sm font-medium text-gray-white">
          {" "}
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div class="md:hidden hidden fixed bg-gray-900 left-0 right-0 bottom-0 top-16 p-8 z-50">
        <div className="block cursor-pointer items-center sm:hidden gap-8">
          <div className="mt-8 text-sm font-medium text-gray-white">
            <Link href="/about">
              <a className="hover:text-red-600">About</a>
            </Link>
          </div>
          <div className="mt-8 text-sm font-medium text-gray-white">
            {" "}
            <Link href="/">
              <a className="hover:text-red-600">Contact</a>
            </Link>
          </div>
          <div className="mt-8 text-sm font-medium text-gray-white">
            {" "}
            <Link href="/">
              <a className="hover:text-red-600">Docs</a>
            </Link>
          </div>
          <div className="mt-8 text-sm font-medium text-gray-white">
            {" "}
            <Link href="/">
              <a className="hover:text-red-600">Blog</a>
            </Link>
          </div>

          <form class="ml-12">
            <input
              type="text"
              name="search"
              id="input-search"
              placeholder="Search..."
              class="
              border-none
              focus:outline-none
              bg-gray-800
              hover:bg-gray-900
              text-white
              placeholder-gray-50
              p-2
              rounded-2xl
              pl-12
              mt-8
            "
            />
          </form>
        </div>
        <div className="mt-8">
          <div className="h-[2px] bg-gray-600"></div>
          <small className="ml-24 text-gray-500 mt-5">
            © 2021 TSR-Inc. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
}
