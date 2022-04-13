import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-white p-12 text-center dark:bg-gray-800 ">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          className="rounded-full align-middle"
          src={author.photo.url}
          alt={author.name}
          height="90px"
          width="100px"
        />
      </div>
      <h3 className="my-4 text-xl font-bold dark:text-white">{author.name}</h3>
      <p className="text-lg dark:text-white">{author.bio}</p>
    </div>
  );
};

export default Author;
