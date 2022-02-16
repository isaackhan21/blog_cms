import React from "react";

const Author = ({ author }) => {
  return (
    <div>
      <img
        className="rounded-full align-middle"
        src={author.photo.url}
        alt={author.name}
        height="100px"
        width="100px"
      />
    </div>
  );
};

export default Author;
