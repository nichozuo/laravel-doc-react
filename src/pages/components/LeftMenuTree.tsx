import { Tree } from 'antd';
import { useEffect, useState } from 'react';
import { history } from 'umi';

const Title = ({ title, subTitle, multi }: any) => {
  const cls = subTitle
    ? multi
      ? 'tree-title-multi-inline'
      : 'tree-title-multi-inline'
    : 'tree-title-single';
  return (
    <div className={cls}>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default function (props: any) {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [expandKeys, setExpandKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(false);

  const onExpand = (expandedKeys: React.Key[]) => {
    // console.log('onExpand', expandedKeys);
    setExpandKeys(expandedKeys);
    setAutoExpandParent(true);
    // setTimeout(() => {
    //   setAutoExpandParent(true);
    // }, 200);
  };

  const onSelect = (s: React.Key[], info: any) => {
    const key = s[0] as string;
    if (info.node.isLeaf) {
      setSelectedKeys([key]);
      setExpandKeys([key]);
      history.push({
        query: {
          key: key,
        },
      });
    }
  };

  useEffect(() => {
    const key = history.location.query?.key as string;
    // console.log('LeftMenuTree::useEffect::', key);
    if (key) {
      setSelectedKeys([key]);
      setExpandKeys([key]);
    }
  }, [history.location.query]);

  return (
    <>
      {props.items.length > 0 ? (
        <Tree.DirectoryTree
          defaultExpandAll={false}
          defaultExpandedKeys={selectedKeys}
          defaultSelectedKeys={selectedKeys}
          autoExpandParent={autoExpandParent}
          onSelect={onSelect}
          onExpand={onExpand}
          className="sidebar"
          showLine={false}
          showIcon={true}
          treeData={props.items}
          titleRender={(nodeData: any) => (
            <Title
              title={nodeData.title}
              subTitle={nodeData.subTitle}
              multi={nodeData?.children}
            />
          )}
          selectedKeys={selectedKeys}
          expandedKeys={expandKeys}
        />
      ) : (
        ''
      )}
    </>
  );
}
