//==================================Dom manipulation using js======================================================
// const parent = document.getElementById("root");
// const ul = document.createElement("ul");
// ul.style.width = "400px";
// ul.style.padding = "24px";
// ul.style.backgroundColor = "yellow";
// ul.style.margin = "48px auto";


// parent.appendChild(ul);

// const li1 = document.createElement("li");
// li1.textContent = "List item 1";
// li1.style.margin = "12px";
// li1.style.color = "brown";

// ul.appendChild(li1);

// const li2 = document.createElement("li");
// li2.textContent = "List item 2";
// li2.style.margin = "12px";
// li2.style.color = "brown";

// ul.appendChild(li2);

//-----------------------------------Dom manipulation using React-------------------------------------------
// const listItem1 = React.createElement("li",{},"Item 1")
// const listItem2 = React.createElement("li",{},"Item 2")
// const list = React.createElement("ul",{},[listItem1,listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);

// const d1 = document.createElement('div')
// console.dir(d1);
// console.dir(typeof d1);

// const d2 = React.createElement('div',{},"hello");
// console.dir(d2);
// console.dir(typeof d2);

// const listitem1 = {
//     $$typeof: Symbol.for("react.element"),
//         type: "li",
//         key: null,
//         ref: null,
//         props: {
//             children: "Item 1",
//             style: {
//                 color: "red",
//                 backgroundColor: "yellow",
//                 }
//         },
//         _owner: null,
//         _store: {}
//     }
// const listitem2 = {
//     $$typeof: Symbol.for("react.element"),
//         type: "li",
//         key: null,
//         ref: null,
//         props: {
//             children: "Item 2",
//             style: {
//                 color: "red",
//                 backgroundColor: "yellow",
//                 }
//         },
//         _owner: null,
//         _store: {}
//     }
// const list = {
//     $$typeof: Symbol.for("react.element"),
//         type: "div",
//         key: null,
//         ref: null,
//         props: {
//             children: listitem1,listitem2,
//             style: {
//                 color: "red",
//                 backgroundColor: "yellow",
//                 }
//         },
//         _owner: null,
//         _store: {}
//     }

// const root = ReactDOM.createRoot(parent)
// root.render(list)


//-----------------------------------Dom manipulation using React-------------------------------------------
// const listItem1 = React.createElement("li",{},"Item 1")
// const listItem2 = React.createElement("li",{},"Item 2")
// const list = React.createElement("ul",{},[listItem1,listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);


// const parent = document.getElementById('root')
// const listItem1 = <l1>Item 1</l1>
// const list = <ul>{listItem1}</ul>
// const root = ReactDOM.createRoot(parent);
// root.render(list);

//******************************Babel *************************** */
const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const divHello = <div>Hello</div>;
const TextFrom = () =>{
    return <h3>From</h3>
}

const TextReact = () => <h3>textReact</h3>
const divReact = <div>React</div>;

const container = (
  <div>
    {divHello}
    {divReact}
    <TextFrom/>
    {/* {TextReact()} */}
    <TextReact />
  </div>
);

root.render(container);
