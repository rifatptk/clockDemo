import React from "react";
import './Cards.css';

export default function Cards() {
  return (
    <div className="cards-container">
      <div className="left">
        <div className="card p-5 bg-info"><i class="fa-brands fa-react"></i></div>
      </div>
      <div className="left-mid">
        <div className="card p-5 bg-warning"><i class="fa-brands fa-angular"></i></div>
        <div className="card p-5 bg-danger"><i class="fa-brands fa-js"></i></div>
      </div>
      <div className="middle">
        <div className="card p-5 bg-danger"><i class="fa-brands fa-css3"></i></div>
        <div className="card p-5 bg-primary"><i class="fa-brands fa-html5"></i></div>
        <div className="card p-5 bg-success"><i class="fa-solid fa-code"></i></div>
      </div>
      <div className="right-mid">
        <div className="card p-5 bg-warning"><i class="fa-brands fa-github"></i></div>
        <div className="card p-5 bg-danger"><i class="fa-brands fa-git-alt"></i></div>
      </div>
      <div className="right">
        <div className="card p-5 bg-info"><i class="fa-brands fa-digital-ocean"></i></div>
      </div>
      
    </div>
  );
}
