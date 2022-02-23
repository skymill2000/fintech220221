import React from "react";

const NewsList = ({ searchResultList }) => {
  return (
    <div>
      {searchResultList.map(({ title }, index) => {
        return <p key={index}>{title}</p>;
      })}
    </div>
  );
};

export default NewsList;
