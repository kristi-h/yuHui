export default function Scoreboard({ incorrect }) {
  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      {!incorrect || incorrect.length === 0 ? (
        <h3>You had no mistakes, way to go!!!</h3>
      ) : (
        <div>
          <h3>Incorrect words:</h3>
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
      )}
    </div>
  );
}
