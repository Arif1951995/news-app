import Chip from "@mui/material/Chip";
import React from "react";

type TopicsProps = {
    topic: string;
    setTopic: Function
  };

const Topics: React.FC<TopicsProps> = ({topic, setTopic}) => {
    
    const handleSetTopic = (ev: any) => {
        console.log(ev.target?.textContent)    
        setTopic(ev.target?.textContent);
        
    }

    return (
    <div className="w-full [&>div]:mr-8 flex justify-center mb-8 flex-wrap">
      <Chip  onClick={handleSetTopic} label="apple" color="primary" variant={topic === "apple" ? "filled" : "outlined"} />
      <Chip onClick={handleSetTopic} label="netflix" color="primary" variant={topic === "netflix" ? "filled" : "outlined"} />
      <Chip onClick={handleSetTopic} label="google" color="primary" variant={topic === "google" ? "filled" : "outlined"} />
      <Chip onClick={handleSetTopic} label="twitter" color="primary" variant={topic === "twitter" ? "filled" : "outlined"} />
      <Chip onClick={handleSetTopic} label="tesla" color="primary" variant={topic === "tesla" ? "filled" : "outlined"} />




    </div>
  );
}


export default Topics









