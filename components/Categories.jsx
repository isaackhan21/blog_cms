import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div class="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white  dark:bg-gray-800">
      <div class="p-6">
        <div>
          <h3 class="mt-2 mb-4 block transform border-b pb-4 text-xl font-semibold text-gray-800  dark:text-white ">
            Categories
          </h3>
          <h3 class="text-md mt-2 text-gray-600 dark:text-white">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="mx-2 mb-3 flex cursor-pointer   p-2 pb-3 text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </h3>
        </div>

        <div class="mt-4"></div>
      </div>
    </div>
  );
};

export default Categories;
