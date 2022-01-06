import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import request from '@/plugins/request';
import { API } from '@/services/apis';
import { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
const { DirectoryTree } = Tree;
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
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const location = useLocation();
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(false);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const onExpand = (expandedKeys: React.Key[]) => {
    console.log('onExpand', expandedKeys);
    setSelectedKeys(expandedKeys);
    setExpandedKeys(expandedKeys);
    setTimeout(() => {
      setAutoExpandParent(true);
    }, 200);
  };
  const onCheck = (checkedKeys: React.Key[]) => {
    console.log('onCheck', checkedKeys);
    setCheckedKeys(checkedKeys);
  };
  const getLeaf = (data: any[]) => {
    console.log(data, 'cxss');
    let key = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        key = getLeaf(data[i].children);
        break;
      } else {
        key = data[i].key;
        break;
      }
    }
    return key;
  };
  const setDefault = (key: string) => {
    history.push({
      query: {
        key: key,
      },
    });
    setSelectedKeys([key]);
    onExpand([key]);
  };
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('onSelect', info);
    if (info.node.isLeaf) setDefault(selectedKeys[0] as string);
  };
  useEffect(() => {
    if (props.selected) {
      setExpandedKeys([props.selected]);
      setSelectedKeys([props.selected]);
    }
    console.log(props.selected, '选择');
  }, [props.selected]);
  useEffect(() => {
    setAutoExpandParent(false);
    setTreeData(props.items);
    let key = getLeaf(props.items);
    setDefault(key);
    onExpand([key]);
    console.log(key, '选择222');
  }, [props.items]);
  return (
    <>
      {autoExpandParent && treeData.length > 0 ? (
        <DirectoryTree
          onExpand={onExpand}
          onCheck={onCheck}
          onSelect={onSelect}
          className="sidebar"
          // showLine={autoExpandParent}
          // showIcon={false}
          treeData={treeData}
          defaultExpandAll={autoExpandParent}
          titleRender={(nodeData: any) => (
            <Title
              title={nodeData.title}
              subTitle={nodeData.subTitle}
              multi={nodeData?.children}
            />
          )}
          selectedKeys={selectedKeys}
        />
      ) : (
        ''
      )}
    </>
  );
}
