export default function Synonymns(props: any) {
  const synonyms = props.synonyms;
  console.log("synonyms child: ", synonyms);
  const syn = synonyms[0];

  return (
    <div>
      <p>list of synonyms here...</p>
      <ul>
        {synonyms.map((synonym: string) => (
          <li>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}
