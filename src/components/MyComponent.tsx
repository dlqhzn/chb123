import React from "react";

const MyComponent: React.FC<{ commonValue: string }> = ({ commonValue }) => {
  return (
    <div>{commonValue}</div>
  );
};

export default MyComponent;
