import React from "react";

const ChildTree = (props) => {
  let { fullList, row, updateCollection } = props;

  const onToggle = (selectedRow) => {
    console.log("selectedRow", selectedRow);
    let updatedData = fullList.map((data) => {
      data.isOpen = data.name == selectedRow.name;
      if (data.isOpen===false && data.childrens && data.childrens.length > 0) {
        data = traceChildProp(data, selectedRow);
      }
      return data;
    });
    console.log("updatedData", updatedData);
    updateCollection(updatedData);
  };

  const traceChildProp = (data, selectedRow) => {
    data.childrens.map((child) => {
      child.isOpen = child.name == selectedRow.name;
      if (child.isOpen===false && child.childrens && child.childrens.length > 0) {
        traceChildProp(child, selectedRow);
      }
    });

    return data;
  };

  const nodeRender = (data) => {
    return (
      <>
        {parentNodeRender(data)}

        <ul>
          {data.isOpen &&
            data.childrens.map((child) => {
              return nodeRender(child);
            })}
        </ul>
      </>
    );
  };

  const parentNodeRender = (data) => {
    return (
      <li className="caret">
        <label onClick={() => onToggle(data)}>
          {data.name} - count - {data.childrens.length}
        </label>
      </li>
    );
  };

  return (
    <>
      {parentNodeRender(row)}

      <ul>
        {row.isOpen &&
          row.childrens.map((child) => {
            return nodeRender(child);
          })}
      </ul>
    </>
  );
};

export default ChildTree;
