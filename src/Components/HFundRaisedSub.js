import React from "react";

function HFundRaisedSub(props) {
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
              <a className="btn  btn-sm btn-primary">$ {Urlcontent}</a>
            </div>
            <br />
            <div class="d-grid gap-2">
              <a className="btn  btn-sm btn-warning">
                Still Needed --$ {Urlcontent - Urlcontent/10}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HFundRaisedSub;
