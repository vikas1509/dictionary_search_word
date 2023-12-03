import React, { useState } from "react";
import { useSelector } from "react-redux";
import WordDetails from "./WordDetails";
const History = () => {
  const word = useSelector((state) => state);
  const [clickedWord, setClickedWord] = useState();
  const [flag, setFlag] = useState(false);
  console.log(word);
  return (
    <div>
      {flag==false && (
        <div>
          {" "}
          <h1>Search History</h1>
          {word.length > 0 &&
            word.map((val, indx) => {
              return (
                <h2
                  key={indx}
                  style={{ color: "blue", margin: "5%" }}
                  onClick={() => {
                    setClickedWord(val);
                    setFlag(true);
                  }}
                >
                  {val}
                </h2>
              );
            })}
        </div>
      )}
      {clickedWord && flag && <WordDetails clickedWord={clickedWord} />}
    </div>
  );
};

export default History;
