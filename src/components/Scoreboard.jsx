export default function Scoreboard({ cluster, incorrect }) {
  function calculateScore() {
    let tally = cluster.length - incorrect.length;
    if (tally < 0) {
      tally = 0;
    }
    return tally;
  }

  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <h2>
        Score: {calculateScore()}/{cluster.length}{" "}
      </h2>
      {!incorrect || incorrect.length === 0 ? (
        <h2>You had no mistakes, way to go!!!</h2>
      ) : (
        <div>
          <h2>Incorrect words:</h2>
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
