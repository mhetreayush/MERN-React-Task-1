import "./App.css";
import { useState } from "react";

const updateWordCount = (text) => {
  const wordCount = text.trim().split(" ").length;
  return wordCount;
};

const App = () => {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      <div className="shadow-md rounded-md p-2 flex flex-col gap-y-4 max-w-[30%]">
        <p className="text-4xl font-semibold text-center">
          Responsive Paragraph Word Counter
        </p>
        <textarea
          className="border-2 border-gray-300 rounded-md p-2"
          placeholder="Type here"
          onChange={(e) => {
            setWordCount(updateWordCount(e.target.value));
          }}
        />
        <p>Word count: {wordCount}</p>
      </div>
    </div>
  );
};

export default App;
