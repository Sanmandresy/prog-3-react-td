import React from "react";

const Dones = (props) => {
  const { doneList } = props;
  return (
    <>
      <section>
        <h2>DONE</h2>
        <ul data-testid="done-list">
          {doneList?.map((done, index) => (
            <li className="done" key={index}>
              {done.text}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Dones;
