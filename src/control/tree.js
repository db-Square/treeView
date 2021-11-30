import React, { useState, useEffect } from "react";
import ChildTree from "./childTree";

const TreeView = (props) => {
  const [getTreedata, setTreeData] = useState([]);

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
              <ul>
                <ChildTree
                  fullList={getTreedata}
                  row={s}
                  updateCollection={setTreeData}
                >                  
                </ChildTree>
              </ul>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TreeView;
