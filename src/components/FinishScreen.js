function FinishScreen({ point, maxPossiblePoints, highscore, dispatch }) {
  const percentPoint = Math.ceil((point / maxPossiblePoints) * 100);

  let emoji;
  if (percentPoint === 100) emoji = "🥇";
  if (percentPoint >= 80 && percentPoint < 100) emoji = "🎉";
  if (percentPoint >= 50 && percentPoint < 80) emoji = "😍";
  if (percentPoint >= 0 && percentPoint < 50) emoji = "😊";
  if (percentPoint === 0) emoji = "💀";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{point}</strong> out of{" "}
        {maxPossiblePoints} ({percentPoint}%)
      </p>
      <p className="highscore">(High Score: {highscore} points)</p>

      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
