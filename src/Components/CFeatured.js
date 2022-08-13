import React from "react";

function CFeatured(props) {
  let { title, description, imageUrl, Urlcontent } = props;

  const headcolor = {
    color: "rgb(141,11,11)",
  };

  return (
    <div>
      <div className="my-3">
        <div className="card" style={{ border: "2px solid blue" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            style={{ height: "15rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={headcolor}>
              {title}{" "}
            </h5>
            <p className="card-text">{description}...</p>
            <div class="d-grid gap-2">
              <a
                href={Urlcontent}
                target="_blank"
                className="btn  btn-sm btn-success"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CFeatured;
