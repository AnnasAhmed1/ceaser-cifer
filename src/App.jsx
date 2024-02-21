import React, { useState } from "react";

const App = () => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const cifer = (word, operation) => {
    let tempWord = word.split("");
    for (let i = 0; i < tempWord.length; i++) {
      if (!alphabets.includes(tempWord[i].toLowerCase())) {
        alert("Invalid input, word should only contain alphbets");
        console.log("anna");
        return;
      }
      const index = alphabets.indexOf(tempWord[i]);
      if (operation === "encode") {
        tempWord[i] = alphabets[index + 3];
      } else {
        tempWord[i] = alphabets[index - 3];
      }
    }
    return tempWord.join("").toString();
  };
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <label
          style={{
            fontSize: "18px",
            fontWeight: 500,
            marginRight: "4px",
          }}
          htmlFor="inputText"
        >
          Enter any text:
          <input
            id="inputText"
            placeholder="Enter any word"
            type="text"
            style={{
              padding: "2px",
              marginLeft: "10px",
            }}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </label>

        <br />
        <br />

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <button
            onClick={() => {
              setResult(cifer(word, "encode"));
            }}
          >
            Encode
          </button>

          <button
            onClick={() => {
              setResult(cifer(word, "decode"));
            }}
          >
            Decode
          </button>
        </div>

        <h2>
          Final Result:{" "}
          {result && (
            <span
              style={{
                border: "1px solid grey",
                padding: "5px",
                width: "100%",
              }}
            >
              {result}
            </span>
          )}
        </h2>
      </div>
    </main>
  );
};

export default App;
