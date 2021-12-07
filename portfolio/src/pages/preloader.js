import React from "react";
import Circle from "react-circle";

const Preloader = () => {
  return (
    <>
      <Circle
        animate={true}
        animationDuration="1s"
        progress={35}
        progressColor="white"
        bgColor="transparant"
        textColor="white"
        textStyle={{
          font: "bold 5rem Inter var, sans-serif",
        }}
        percentSpacing={10}
        roundedStroke={true}
        showPercentage={true}
        showPercentageSymbol={true}
      />
    </>
  );
};

export default Preloader;
