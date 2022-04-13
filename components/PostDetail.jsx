import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div class=" mx-auto mb-8 max-w-6xl overflow-hidden rounded-lg bg-white  dark:bg-gray-800 ">
      <div className="">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>

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
            class="mt-6 mb-6 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600  hover:underline dark:text-white dark:hover:text-white"
          >
            {post.title}
          </h1>
          <p class="mt-2 mb-6 text-lg text-gray-600 dark:text-white">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemIndex) =>
                getContentFragment(itemIndex, item.text, item)
              );
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </p>
        </div>

        <div class="mt-4 ">
          <div className="mt-4 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
