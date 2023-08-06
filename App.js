// const heading = React.createElement("h1", {}, "hello this is react app");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"}, 
[React.createElement("h1",{},"Hello this is h1 tag"),
React.createElement("h2",{},"Hello this is h2 tag")]
))
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)