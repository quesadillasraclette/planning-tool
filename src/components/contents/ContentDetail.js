import React, { Component } from "react";
import ContentForm from "./ContentForm";
import ContentCard from "./ContentCard";
import "./contents.css";
import { saveContent, uploadfile } from "../../services/firebase";
import { message } from "antd";

export class ContentDetail extends Component {
  state = {
    content: {
      text: "Content Title",
      imageURL:
        "http://tarantulafactory.com/wp-content/uploads/healthy-restaurant-web-facebook-banners-ads-belegija-graphicriver-restaurant-banners.jpg",
      channel: ": Google",
      created: new Date(),
      tags: "Branding, Performance",
      budget: 10000,
      publishDate: "",
      userID: "asacoman@google.com"
    }
  };

  handleChange = event => {
    console.log(event.target);
    const { content } = this.state;
    const newContent = { ...content };
    newContent[event.target.name] = event.target.value;
    this.setState({ content: newContent });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { content } = this.state;
    saveContent(content)
      .then(r => {
        console.log(r);
        message.success("Saved successfully");
        this.props.history.push("/contents");
      })
      .catch(e => {
        console.log(e);
        message.error("Errooooorrrr");
      });
  };

  handleImage = f => {
    console.log(f);
    const file = f.file.originFileObj;
    console.log(file);
    const { content } = this.state;
    const task = uploadfile(file);

    task.on(
      "state_changed",
      snapshot => {
        console.log(snapshot);
      },
      error => {},
      () => {
        task.snapshot.ref
          .getDownloadURL()
          .then(url => {
            content["imageURL"] = url;
            this.setState({ content });
          })
          .catch(e => {
            console.log(e);
          });
      }
    );
  };

  render() {
    const { content } = this.state;
    return (
      <div className="content-detail">
        <article>
          <ContentForm
            handleImage={this.handleImage}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </article>
        <article>
          <ContentCard {...content} />
        </article>
      </div>
    );
  }
}

export default ContentDetail;
