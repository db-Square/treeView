import React from "react";
// import "./tree.css";

const TreeView = (props) => {
  const { treeData } = props;
  console.log("treeData", treeData);
  const rootRow = treeData[0];

  return (
    <div>
      <ul>
        {treeData.map((s) => {
          return (
            <>
              <ul>{nodeRender(s)}</ul>
            </>
          );
        })}
      </ul>
    </div>
  );
};

const nodeRender = (data) => {
  return (
    <>
      {parentNodeRender(data)}

      <ul>
        {data.childrens.map((child) => {
          return nodeRender(child);
        })}
      </ul>
    </>
  );
};

const parentNodeRender = (data) => {
  return (
    <li>
      {data.name} - count - {data.childrens.length}
    </li>
  );
};

export default TreeView;
