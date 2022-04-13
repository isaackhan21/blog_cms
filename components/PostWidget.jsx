import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div class="mx-auto mb-8 max-w-2xl overflow-hidden rounded-lg  bg-white  dark:bg-gray-800">
      <div class="p-6">
        <div>
          <h3 class="mt-2 mb-8 block transform border-b pb-4 text-xl font-semibold text-gray-800  dark:text-white">
            {slug ? "Related Posts" : "Recent Posts"}
          </h3>
          {relatedPosts.map((post) => (
            <div
              key={post.title}
              className="mb-4 flex w-full cursor-pointer items-center"
            >
              <div className="w-16 flex-none">
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  height="60px"
                  width="60px"
                  className="rounded-full align-middle"
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="mx-1 text-sm text-gray-600 dark:text-gray-300">
                  {moment(post.createdAt).format("DD MMM YYYY")}
                </p>
                <Link href={`/post/${post.slug}`} key={post.title}>
                  <h3 className="text-md mt-2 text-gray-600 dark:text-white">
                    {post.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
