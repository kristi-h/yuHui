export default function WordController({ skipWord, handleGameOver }) {
  return (
    <div className="btns-container">
      <button className="btn" onClick={skipWord}>
        Previous
      </button>
      <button className="btn" onClick={skipWord}>
        Next
      </button>
      <button className="btn" onClick={handleGameOver}>
        GameOver
      </button>
    </div>
  );
}
