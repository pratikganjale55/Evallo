import React, { useState } from "react";

const api = "http://localhost:8080";

const ContentCard = ({ item }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="card" key={item._id}>
      <h2>{item.title}</h2>
      <div className={more ? "descriptionMore" : "description"}>
        <p>{item.description} </p>
      </div>
      <span className="more" onClick={() => setMore(!more)}>
        {more ? "...less" : "more..."}
      </span>

      {item.file && (
        <div className="fileAnchor">
          <a href={`${api}/file/${item._id}`} rel="noopener noreferrer">
            Download File
          </a>
          <a href={`${api}/preview/${item._id}`} rel="noopener noreferrer">
            Preview
          </a>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
