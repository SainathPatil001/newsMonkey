import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className="card" >
        <img src={imageUrl?imageUrl:"https://i.gadgets360cdn.com/large/microsoft_clippy_twitter_1626334118424.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}.
          </p>

          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()} </small></p>
          <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary" target="_blank">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
