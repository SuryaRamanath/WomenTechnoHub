import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      {/* <select>
                 <option value="category1"></option>
                 <option value="category2"></option>
                 <option value="category3"></option>
                 <option value="category4"></option>
             </select> */}
             <div className="category-container">
      <label for="category">Choose category:</label>
      <select name="category" id="category">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      </div>
      


      <div className="cards">
        <div className="card">
          <h2>TITLE</h2>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>

        <div className="card">
          <h2>TITLE</h2>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
        <div className="card">
          <h2>TITLE</h2>
          <h4>closing time</h4>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
