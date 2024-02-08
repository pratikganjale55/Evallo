import React, { useEffect, useState } from "react";
import "./contentPrev.css";
import apiClient from "../../utils/api";
import ContentCard from "./ContentCard";

const ContentPreview = () => {
  const [contentArr, setContentArr] = useState([]);

  async function getContentData() {
    apiClient
      .get("/")
      .then((res) => setContentArr(res.data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getContentData();
  }, []);
  console.log(contentArr);
  return (
    <div className="cardGrid">
      {contentArr?.map((item) => {
        return <ContentCard item={item} />;
      })}
    </div>
  );
};

export default ContentPreview;
