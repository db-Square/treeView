import React, { useState, useEffect } from "react";
import ChildTree from "./childTree"
// import "./tree.css";

const TreeView = (props) => {
  const [getTreedata, setTreeData] = useState([]);
  //   const { treeData } = props;

  useEffect(() => {
    const { treeData } = props;
    setTreeData(treeData);
  });

  const rootRow = getTreedata[0];

  return (
    <div>
      <ul>
        {getTreedata.map((s) => {
          return (
            <>
              <ul><ChildTree fullList={getTreedata} row={s} updateCollection={setTreeData}> </ChildTree></ul>
            </>
          );
        })}
      </ul>
    </div>
  );
};

// const onToggle = (data) => {
//   console.log("clicked onToggle", data);
//   let newArr = getTreedata.map((data) => {
//     data.isOpen = data.name == it.name;
//     return data;
//   });
//   setTreeData(newArr);
// };

// const nodeRender = (data) => {
//   return (
//     <>
//       {parentNodeRender(data)}

//       <ul className="nested">
//         {data.isOpen &&
//           data.childrens.map((child) => {
//             return nodeRender(child);
//           })}
//       </ul>
//     </>
//   );
// };

// const parentNodeRender = (data) => {
//   return (
//     <li className="caret">
//       <label onClick={() => onToggle(data)}>
//         {data.name} - count - {data.childrens.length}
//       </label>
//     </li>
//   );
// };

export default TreeView;
