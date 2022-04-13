import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div class=" mx-auto mb-8 max-w-6xl overflow-hidden rounded-lg bg-white  dark:bg-gray-800 ">
      <img
        class="h-80 w-full object-cover"
        src={post.featuredImage.url}
        alt={post.title}
        height="30px"
      />

      <div class="p-6">
        <div class="flex items-center">
          <div class="flex items-center">
            <img
              class="h-10 rounded-full object-cover"
              src={post.author.photo.url}
              alt={post.author.name}
            />
            <p
              href="#"
              class="mx-2 text-lg font-semibold text-gray-700 dark:text-gray-200"
            >
              {post.author.name}
            </p>
          </div>
          <span class="mx-1 text-sm text-gray-600 dark:text-gray-300">
            {moment(post.createdAt).format("DD MMM, YYYY")}
          </span>
        </div>
        <div>
          <h1
            href="#"
            class="mt-4 mb-4 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600  hover:underline dark:text-white dark:hover:text-white"
          >
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
          <p class="mt-2 mb-6 text-lg text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>
        </div>

        <div class="mt-4 ">
          <div className="mt-4 text-center">
            <Link href={`/post/${post.slug}`}>
              <span className="mr-2 mb-2 inline-block transform cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-3 text-center text-sm font-medium text-white transition duration-500 hover:-translate-y-1 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
                Continue Reading
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
