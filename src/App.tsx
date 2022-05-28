import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div className="calendly-container">
      <InlineWidget url="https://calendly.com/ben-r-pollock" />
    </div>
  );
};

export default App;
