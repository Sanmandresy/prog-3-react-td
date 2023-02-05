import React from "react";

const Dones = (props) => {
  const { doneList } = props;
  return (
    <>
      <section>
        <h2>DONE</h2>
        <ul>
          {doneList?.map((done, index) => (
            <li key={index}>{done.text}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Dones;
