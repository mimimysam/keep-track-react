import { useState, useEffect } from "react";
import Synonymns from "./Synonyms";

export default function Word() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    fetchSynonyms(word);
  }, [word]);

  const handleSubmitBottonClick = () => {
    console.log(word);
    fetchSynonyms(word);
    // setWord("");
  };

  const handleWordClick = (e: any) => {
    console.log("child word: ", e.target.value);
    let selected = e.target.value;
    setWord(selected);
    // fetchSynonyms(selected);
  };

  function fetchSynonyms(word: string) {
    let synonyms = null;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => {
        synonyms = data[0].meanings[0].synonyms;
        console.log("synonyms: ", synonyms);
        setSynonyms(synonyms);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h2>Enter a word to get its synonyms.</h2>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleSubmitBottonClick} disabled={!word}>
        Submit
      </button>
      <div style={{ height: "20px" }}></div>
      <Synonymns synonyms={synonyms} handleWordClick={handleWordClick} />
      {/* <ul>
        {synonyms.map((synonym) => (
          <li>{synonym}</li>
        ))}
      </ul> */}
    </div>
  );
}
