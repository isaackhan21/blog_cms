import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comment.length > 0 && (
        <div class="mx-auto mb-8  overflow-hidden rounded-lg  bg-white  dark:bg-gray-800">
          <div class="p-6">
            <div>
              <h3 class="mt-2 mb-8 block transform border-b pb-4 text-xl font-semibold text-gray-800  dark:text-white">
                {comments.length} Comments
              </h3>

              {comments.map((comment) => (
                <div
                  key={comment.createdAt}
                  className="mb-4 border-b border-gray-100 pb-4"
                >
                  <p className="mb-4 dark:text-white">
                    <span className="font-semibold">{comment.name}</span>{" "}
                    on&nbsp;
                    {moment(comment.createdAt).format("DD MMM YYYY")}
                  </p>
                  <p className="w-full whitespace-pre-line dark:text-white">
                    {parse(comment.comment)}
                  </p>
                </div>
              ))}
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
