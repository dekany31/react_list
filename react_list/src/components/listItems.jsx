

const arr = ["position", "display", "border", "padding",
                 "margin", "overflow", "background", "font", "text", "transform"];
const listItems = arr.map((x, i) => 
                    <li key={i.toString()}><input className = "list" type="checkbox" id="checkbox"/>{x}</li>);

export default listItems
