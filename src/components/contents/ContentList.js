import React, { Component } from "react";
import ContentForm from "./ContentForm";
import ContentCard from "./ContentCard";
import "./contents.css";
import { getContents } from "../../services/firebase";
import { message, Card } from "antd";
import { Link } from "react-router-dom";

export class content extends Component {
  state = {
    contents: []
  };

  componentWillMount() {
    getContents()
      .then(snapshot => {
        const { contents } = this.state;
        const c = [];
        snapshot.forEach(doc => {
          c.push(doc.data());
        });
        this.setState({ contents: c });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { contents } = this.state;
    return (
      <div>
        {contents.map((c, key) => (
          <Link to={`/content/${c.id}`}>{c.text}</Link>
        ))}
      </div>
    );
  }
}

export default content;
