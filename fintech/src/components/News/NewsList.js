import React from "react";

const NewsList = ({ searchResultList }) => {
  return (
    <div>
      {searchResultList.map(({ title }) => {
        return <p>{title}</p>;
      })}
    </div>
  );
};

export default NewsList;
