import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="backgroundClassEducation">
      <div style={{ marginTop: "100px" }}>
        <p className="textGradientEdu">
          <b>
            <i> September 2014 - November 2019</i>
          </b>
        </p>
        <p className="eduStyle" style={{ width: "550px" }}>
          Bachelor degree of information science and computer engineering,
          University “St. Cyril and Methodius”, Skopje, Republic of Macedonia
        </p>

        <p className="textGradientEdu">
          <b>
            <i> September 2010 - June 2014</i>
          </b>
        </p>
        <p className="eduStyle" style={{ width: "550px" }}>
          Secondary School “Josif Josifovski”, Gevgelija, Republic of Macedonia
        </p>

        <p className="textGradientEdu">
          <b>
            <i> September 2002 - June 2010</i>
          </b>
        </p>
        <p className="eduStyle" style={{ width: "550px" }}>
          Primary School “Kliment Ohridski”, Miravci, Gevgelija, Republic of
          Macedonia
        </p>
      </div>
    </div>
  );
};
export default Education;
