export default function Scoreboard({ cluster, incorrect }) {
  function calculateScore() {
    console.log("incorrect.questWords.length", incorrect.questWords.length);
    let tally = cluster.length - incorrect.questWords.length;
    if (tally < 0) {
      tally = 0;
    }
    return tally;
  }

  function wrongListEle() {
    console.log("inside wrongListEle?");
    console.log("scoreboard: incorrect.questWord", incorrect.questWord);
    const wrongQuest = incorrect.questWords;
    return wrongQuest.map((word, index) => (
      <div key={index} className="incorrect-table-item">
        <p>
          {word.Chinese} - {word.Pinyin} - {word.English}
        </p>
      </div>
    ));
  }

  return (
    <div className="scoreboard">
      <h1>
        {" "}
        Score: {calculateScore()}/{cluster.length}{" "}
      </h1>
      {incorrect.questWords.length === 0 ? (
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
