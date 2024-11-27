export default function Question({ questionWord }) {
  return (
    <div className="question-container">
      <h3 className="english-word">English: {questionWord.English}</h3>
      <h3 className="pinyin-word">Pinyin: {questionWord.Pinyin}</h3>
    </div>
  );
}
