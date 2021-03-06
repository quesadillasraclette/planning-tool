import React, { Component } from "react";
import { Tag } from "antd";

export class ContentCard extends Component {
  render() {
    const {
      text,
      imageURL,
      channel,
      created,
      tags,
      budget,
      publishDate,
      userID
    } = this.props;
    return (
      <div className="content-card">
        <div className="card-phone">
          <span />
          <span />
          <img src={imageURL} alt={text} />
          <span />
          <span />
        </div>
        <div>
          <h1>{text}</h1>
          <h3>Channel{channel}</h3>
          <p>Budget : ${budget}</p>
          {/*<span>Published Date{publishDate}</span> */}
          <span>{userID} </span>
          <div>
            {tags.split(",").map((tag, key) => (
              <Tag key={key}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentCard;
