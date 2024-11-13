export default function Scoreboard({ incorrect }) {
  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <h4>Words you got incorrect: </h4>
      <ul>
        {incorrect.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
