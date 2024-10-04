import React from "react";
import Segment from "../components/Segmented";
import Styles from "../components/components.module.css";

const options = ["Upcoming", "Past"];
const Head = (props) => {
  const { label } = props;
  return (
    <>
    <div className={Styles.headEl}>
       <div >
      <h2>{label}</h2>
    </div>
    <div className={Styles.segment}>
    <Segment options={options} />
    </div>
    </div>
    </>
 
    
  );
};

export default Head;
