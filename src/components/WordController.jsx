export default function WordController({
  skipWord,
  getPrevious,
  handleGameOver,
}) {
  return (
    <div className="btns-container">
      <button className="btn" onClick={getPrevious}>
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
