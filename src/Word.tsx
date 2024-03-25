import { useState, useEffect } from "react";
import Synonymns from "./Synonyms";
import { setTimeout } from "timers/promises";

export default function Word() {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchSynonyms(word);
  // }, [word]);

  const handleSubmitBottonClick = () => {
    console.log(word);
    setLoading(true);
    fetchSynonyms(word);
    setLoading(false);
  };

  const handleWordClick = (e: any) => {
    console.log("child word: ", e.target.value);
    setLoading(true);
    let selected = e.target.value;
    setWord(selected);
    fetchSynonyms(selected);
    setLoading(false);
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
    setLoading(false);
  }

  return (
    <div>
      <h2>Enter a word to get its synonyms.</h2>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleSubmitBottonClick} disabled={!word}>
        Submit
      </button>
      <div style={{ height: "20px" }}></div>
      <Synonymns
        synonyms={synonyms}
        handleWordClick={handleWordClick}
        loading={loading}
      />
      {/* <ul>
        {synonyms.map((synonym) => (
          <li>{synonym}</li>
        ))}
      </ul> */}
    </div>
  );
}
