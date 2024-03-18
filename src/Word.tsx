import { useState } from "react";
import Synonymns from "./Synonyms";

export default function Word() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const handleClick = () => {
    console.log(word);
    let synonyms = null;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => {
        synonyms = data[0].meanings[0].synonyms;
        console.log("synonyms: ", synonyms);
        setSynonyms(synonyms);
      })
      .catch((error) => console.error(error));
    // setWord("");
  };

  return (
    <div>
      <h2>Enter a word to get its synonyms.</h2>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleClick} disabled={!word}>
        Submit
      </button>
      <Synonymns synonyms={synonyms} />
      {/* <ul>
        {synonyms.map((synonym) => (
          <li>{synonym}</li>
        ))}
      </ul> */}
    </div>
  );
}
