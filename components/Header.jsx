import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Toggle from "./Toggle";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-gray-300 py-8 dark:border-white">
        <div className="flex md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold dark:text-white">
              GraphCMS Blog App
            </span>
          </Link>
          <div className="bg-gray-800 dark:bg-white rounded-lg ml-4">
            <Toggle />
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="text-md mt-2 ml-4 cursor-pointer align-middle font-semibold text-black dark:text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
