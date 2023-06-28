const ProgressBar = ({ progress }) => {
  // Calculate the width percentages for red and green parts of the progress bar
  const redWidth = progress * 10;
  const greenWidth = (progress / 5) * 100;

  return (
    <div className="flex w-full mt-3 mb-2 overflow-hidden bg-gray-200 rounded-lg">
      {/* Green part of the progress bar */}
      <div
        className={`h-2 bg-[#4caf50] transition-all duration-500`}
        style={{ width: `${greenWidth}%` }}
      ></div>
      {/* Red part of the progress bar */}
      <div
        className={`h-2 bg-[#d32f2f] transition-all duration-500`}
        style={{ width: `${redWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;