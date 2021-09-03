import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName, setAppState } from "../actions";
function StartScreen() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="Menu">
      <label>Please Enter Your Company Name</label>
      <input
        type="text"
        placeholder="Ex. Swvl"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        disabled={!name ? true : false}
        onClick={() => {
          dispatch(setUserName(name));
          dispatch(setAppState("sectionOne"));
        }}
      >
        Generate Business Plan
      </button>
    </div>
  );
}

export default StartScreen;

