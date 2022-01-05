import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import request from '@/plugins/request';
import { API } from '@/services/apis';
import { useEffect, useState } from 'react';
import { history } from 'umi';
export default function (props: any) {
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(false);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const onExpand = (expandedKeys: React.Key[]) => {
    console.log('onExpand', expandedKeys);
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(true);
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
    console.log(key, '点击skkk测试');
    history.push({
      query: {
        selected: key,
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
    request.post(API.getMenu, { data: { type: props.type } }).then((res) => {
      setTreeData(res.data);
      let key = getLeaf(res.data) as any;
      setDefault(key);
      onExpand([key]);
    });
  }, []);
  return (
    <Tree
      onExpand={onExpand}
      onCheck={onCheck}
      onSelect={onSelect}
      showLine={true}
      showIcon={false}
      checkedKeys={checkedKeys}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      treeData={treeData}
      defaultExpandAll={true}
      selectedKeys={selectedKeys}
    />
  );
}
