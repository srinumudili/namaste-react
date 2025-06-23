const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello from child")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
