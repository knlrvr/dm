import React, { useState } from "react"
import Link from 'next/link'
import {
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai'
import {
  BsMoon
} from 'react-icons/bs'
import useDarkMode from "./Theme";

export default function Navbar() {
    
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <nav>
          <section className="flex">
            <div className="py-8 pl-8 text-gray-900 dark:text-gray-200">
                DMR
            </div>
            <div
              className="open absolute top-0 right-0 px-8 py-6"
              onClick={() => setIsNavOpen((prev) => !prev)} 
            >
              <AiOutlineMenu className="text-4xl cursor-pointer dark:text-gray-300"/>
            </div>

            <div className={isNavOpen ? "showMenuNav dark:bg-gray-900" : "hideMenuNav"}> 
              <div
                className="close absolute top-0 right-0 px-8 py-6"
                onClick={() => setIsNavOpen(false)} 
              >
                <AiOutlineClose className="text-4xl cursor-pointer dark:text-gray-300"/>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] dark:text-gray-300">
                <li className="my-8 text-5xl">
                  <Link href="/">Home</Link>
                </li>
                <li className="my-8 text-5xl">
                  <Link href="/">Page 2</Link>
                </li>
                <li className="my-8 text-5xl">
                  <Link href="/">Page 3</Link>
                </li>
                <li className="my-8 text-5xl">
                  <Link href="/">Page 4</Link>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <div className="text-xl text-center absolute inset-y-0 right-24 top-8">
        {colorTheme === "light" ? (
        <BsMoon 
            onClick={() => setTheme("light")} 
            className="cursor-pointer text-gray-300"
        />
        ) : (
        <BsMoon 
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-gray-900"
        />
        )}  
        </div>
        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
      </div>
    </main>
  );
}