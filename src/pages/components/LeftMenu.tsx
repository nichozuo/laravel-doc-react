import { Select, Tree } from 'antd';
export default function () {
  return (
    <div className="sidebar withMargin panel">
      <div className="menuSearch">
        <Select
          showSearch
          placeholder="搜索"
          style={{ width: '100%' }}
        ></Select>
      </div>
      <div className="menuStyle">
        <div className="leftTree">
          <Tree
          // onExpand={onExpand}
          // // onCheck={onCheck}
          // onSelect={onSelect}
          // showLine={true}
          // showIcon={false}
          // checkedKeys={checkedKeys}
          // expandedKeys={expandedKeys}
          // autoExpandParent={autoExpandParent}
          // treeData={treeData}
          // defaultExpandAll={true}
          // selectedKeys={selectedKeys}
          />
        </div>
      </div>
    </div>
  );
}
