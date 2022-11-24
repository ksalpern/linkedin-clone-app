import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Post({ name, descr, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{descr}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
