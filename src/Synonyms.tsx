export default function Synonymns({
  synonyms,
  handleWordClick,
  loading,
}: {
  synonyms: any;
  handleWordClick: any;
  loading: boolean;
}) {
  // let synonyms = props.synonyms;
  console.log("synonyms child: ", synonyms);

  return (
    <div style={{ border: "solid", color: "blue" }}>
      <p>list of synonyms here...</p>
      {!loading ? (
        <div style={{ marginBottom: "20px" }}>
          {synonyms.map((synonym: string, idx: number) => (
            <button key={idx} value={synonym} onClick={handleWordClick}>
              {synonym}
            </button>
          ))}
        </div>
      ) : (
        <span>Loading...</span>
      )}

      {/* <ul>
        {synonyms.map((synonym: string, idx: number) => (
          <li key={idx} value={synonym} onMouseDown={handleWordClick}>
            {synonym}
          </li>
        ))}
      </ul> */}

      {/* <select style={{ marginBottom: "10px" }}>
        <option>Choose a synonym</option>
        {synonyms.map((synonym: any) => (
          <option value={synonym}>{synonym}</option>
        ))}
      </select> */}
    </div>
  );
}
