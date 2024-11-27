export default function WordController({ getNextWord, handleGameOver }) {
  return (
    <div className="btns-container">
      <button className="btn" onClick={getNextWord}>
        Previous
      </button>
      <button className="btn" onClick={getNextWord}>
        Next
      </button>
      <button className="btn" onClick={handleGameOver}>
        GameOver
      </button>
    </div>
  );
}
