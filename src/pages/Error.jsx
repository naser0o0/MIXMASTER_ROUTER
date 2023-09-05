import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="error_wrapper">
          <img src={img} alt="not found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
return (
  <div >
    <h3>something went wrong</h3>
  </div>
);
}
