import React from "react";
import "./Networks.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function Networks() {
  return (
    <div className="container-networks">
      <div className="container-social">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="net"
          href="https://www.instagram.com/bugsites/?hl=es-la"
        >
          <InstagramIcon className="icon-social" />
        </a>
      </div>
      <div className="container-social">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="net"
          href="https://github.com/duwan2112"
        >
          <GitHubIcon className="icon-social" />
        </a>
      </div>
      <div className="container-social">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="net"
          href="https://www.linkedin.com/in/duwan-pe%C3%B1a-309453172/"
        >
          <LinkedInIcon className="icon-social" />
        </a>
      </div>
    </div>
  );
}
