import React from "react";

const Person = ({ name, age, imaURL }) => {
  return (
    <article className="person">
      <img src={imaURL} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} year</p>
      </div>
    </article>
  );
};

export default Person;
