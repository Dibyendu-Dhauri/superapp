import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) ||
      "This is how I am going to learn MERN Stack in next 3 months."
  );

  const handleChange = (e) => {
    setNotes(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  });
  return (
    <div className="bg-goldenrod w-[470px] h-[535px] rounded-[19px]  overflow-hidden ">
      {/* <input type="textarea" alt="ld" className="h-full w-full bg-none text-black outline-none border-none text-start"/> */}
      {/* <div className=" "> */}
      <span className="text-2xl mx-8 mt-4 text-black font-semibold ">
        All Notes
      </span>
      {/* </div> */}
      <textarea
        type="text"
        value={notes}
        onChange={(e) => handleChange(e)}
        placeholder="This is how I am going to learn MERN Stack in next 3 months."
        className="w-full h-full  resize-none border-none outline-none
      bg-transparent text-black px-6 mt-6 placeholder-black flex-wrap overflow-y-auto"
      />
    </div>
  );
}
