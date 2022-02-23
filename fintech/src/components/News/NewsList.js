import React from "react";

const NewsList = ({ searchResultList }) => {
  return (
    <div>
      {searchResultList.map(({ title, url }, index) => {
        return (
          <>
            <a href={url} key={index}>
              {title}
            </a>
            <br></br>
          </>
        );
      })}
    </div>
  );
};

export default NewsList;
