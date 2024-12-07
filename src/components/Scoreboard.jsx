export default function Scoreboard({ cluster, incorrect }) {
  function calculateScore() {
    let tally = cluster.length - incorrect.guessedWords.length;
    if (tally < 0) {
      tally = 0;
    }
    return tally;
  }

  function wrongListEle() {
    console.log("incorrect.questWord", incorrect.questWord);
    const wrongQuest = incorrect.questWord;
    wrongQuest.map((word, index) => (
      <div key={index} className="incorrect-table-item">
        <p>
          {word.Chinese} - {word.Pinyin} - {word.English}
        </p>
      </div>
    ));
  }

  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <h2>
        Score: {calculateScore()}/{cluster.length}{" "}
      </h2>
      {!incorrect.questWord || incorrect.length === 0 ? (
        <h2>You had no mistakes, way to go!!!</h2>
      ) : (
        <div>
          <h2>Incorrect words:</h2>
          <div className="incorrect-table">{wrongListEle()}</div>
        </div>
      )}
    </div>
  );
}
