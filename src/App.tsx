import { useState } from "react";
import "./App.css";

const App = () => {
  const [oddSubs, setOddSubs] = useState(0);
  const [oddSgpa, setOddSgpa] = useState(0);
  const [evenSubs, setEvenSubs] = useState(0);
  const [evenSgpa, setEvenSgpa] = useState(0);
  const [result, setResult] = useState(null);

  const calculateMarks = () => {
    if (oddSgpa === 0 || oddSubs === 0 || evenSgpa === 0 || evenSubs === 0) {
      alert("Please enter the values correctly!");
    } else {
      const totalSubs = oddSubs + evenSubs;
      const ygpa = (oddSgpa + evenSgpa) / 2;
      const totalMarks = totalSubs * 100;
      const percentage = (ygpa - 0.75) * 10;
      const obtainedMarks = (percentage / 100) * totalMarks;

      setResult({
        obtainedMarks,
        totalMarks,
        percentage,
      });
    }
  };

  return (
    <main className="">
      <h1 className="text-center md:text-4xl text-[1.9rem] px-6 font-bold md:my-20 ">
        Calculate Your Yearly Marks and Percentage (%)
      </h1>

      <div className="grid grid-cols-1 px-10 md:px-20 py-4  ">
        <div className="inputSection">
          <input
            type="text"
            placeholder="Odd Sem SGPA"
            inputMode="numeric"
            onChange={(e) => setOddSgpa(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Even Sem SGPA"
            inputMode="numeric"
            onChange={(e) => setEvenSgpa(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="Odd Sem Subjects"
            inputMode="numeric"
            onChange={(e) => setOddSubs(Number(e.target.value))}
          />

          <input
            type="text"
            placeholder="Even Sem Subjects"
            inputMode="numeric"
            onChange={(e) => setEvenSubs(Number(e.target.value))}
          />
        </div>

        <div className="px-6 text-center">
          <button
            onClick={calculateMarks}
            className="px-4 py-1.5 border-2 border-green-300 rounded-xl font-bold mt-4 hover:bg-neutral-800"
          >
            Calculate
          </button>
        </div>
      </div>

      {result && (
        <div className="returnObj text-center text-green-400 font-bold">
          <div>Obtained Marks: {result.obtainedMarks.toFixed(2)}</div>
          <div>Out of: {result.totalMarks}</div>
          <div>Overall Percentage: {result.percentage.toFixed(2)}%</div>
        </div>
      )}
    </main>
  );
};

export default App;
