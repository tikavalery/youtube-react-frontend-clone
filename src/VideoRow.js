import React from "react";
import "./VideoRow.css";

export default function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="image of programming" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs} </span> Subcribers
          </span>{" "}
          {views} Views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}
