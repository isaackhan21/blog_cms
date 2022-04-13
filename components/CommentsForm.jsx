import React, { useRef, useState, useEffect } from "react";

import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setshowSuccessMessage(true);
      setTimeout(() => {
        setshowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <div class="mx-auto mb-8 overflow-hidden rounded-lg  bg-white  dark:bg-gray-800">
      <div class="p-6">
        <div>
          <h3 class="mt-2 mb-8 block transform border-b pb-4 text-xl font-semibold text-gray-800  dark:text-white">
            Leave A Reply
          </h3>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <textarea
              ref={commentEl}
              className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Comment"
              name="comment"
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <input
              type="text"
              ref={nameEl}
              className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              ref={emailEl}
              className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <div>
              <input
                type="checkbox"
                ref={storeDataEl}
                id="storeData"
                name="storeData"
                value="true"
              />
              <label
                className="ml-2 cursor-pointer text-gray-500"
                htmlFor="storeData"
              >
                Save my email and name for the next time I comment.
              </label>
            </div>
          </div>
          {error && (
            <p className="text-xs text-red-500">All fields are required.</p>
          )}
          <div className="mt-8">
            <button
              type="button"
              onClick={handleCommentSubmission}
              className="mr-2 mb-2 inline-block transform cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-3 text-center text-sm font-medium text-white transition duration-500 hover:-translate-y-1 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              Post Comment
            </button>

            {showSuccessMessage && (
              <span className="float-right mt-3 text-xl font-semibold text-green-500">
                Comment submitted for review
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
