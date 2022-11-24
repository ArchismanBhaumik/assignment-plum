import React,{ useState } from "react";
import ReactSlider from "react-slider";
import './App.css';

const Slider = () => {
    const [val,setVal]=useState(0);
    const updateVal=(e,item)=>{
            setVal(item);
    }
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      value={val}
      max={5}
      onChange={updateVal}
    />
  );
};
export default Slider;