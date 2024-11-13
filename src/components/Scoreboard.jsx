export default function Scoreboard({ incorrect }) {
  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <h4>Words you got incorrect: </h4>
      <div className="incorrect-table">
        {incorrect.map((word, index) => (
          <div key={index} className="incorrect-table-item">
            <p>
              {word.Chinese} - {word.Pinyin} - {word.English}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
