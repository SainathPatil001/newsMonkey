import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description,imageUrl,newsUrl,author,date,source} = this.props;
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
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"91%",zIndex:1}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
        </div>
      </div>
    );
  }
}

export default NewsItem;
