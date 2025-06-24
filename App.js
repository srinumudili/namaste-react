import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h2>HelloWorld!</h2>;
};
const HeadingComponent = () => {
  return (
    <>
      <h1>Hello from jsx heading 🚀</h1>
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
