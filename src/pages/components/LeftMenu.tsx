import { Select } from 'antd';
import LeftTree from './LeftTree';
import request from '@/plugins/request';
import { API } from '@/services/apis';
import { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
export default function () {
  const [treeData, setTreeData] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectValue, setselectValue] = useState<any>(undefined);
  let optionsData: any = [];
  // const setOptionsFun = (list: any) => {
  //   list.forEach((res: any) => {
  //     optionsData.push({ label: res.key, value: res.key });
  //     if (res.children && res.children.length > 0) {
  //       setOptionsFun(res.children);
  //     }
  //     setOptions(optionsData);
  //     console.log(optionsData, '岑参');
  //   });
  // };
  const setOptionsFun = (data: any[]) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].isLeaf) {
        optionsData.push({ label: data[i].key, value: data[i].key });
      }
      if (data[i].children) {
        setOptionsFun(data[i].children);
      }
      if (i == data.length - 1) {
        setOptions(optionsData);
      }
    }
  };
  const onSelectFun = (e: any) => {
    setselectValue(e);
    if (e) {
      history.push({
        query: {
          key: e,
        },
      });
    }
    console.log(e, 'skks');
  };

  useEffect(() => {
    let queryName: any = location.pathname.split('/');
    let type = queryName[queryName.length - 1];
    request.post(API.getMenu, { data: { type: type } }).then((res) => {
      setOptions([]);
      setselectValue(undefined);
      setTreeData(res.data);
      setOptionsFun(res.data);
    });
  }, [history.location.pathname]);
  return (
    <div className="sidebar withMargin panel">
      <div className="menuSearch">
        <Select
          showSearch
          placeholder="搜索"
          options={options}
          value={selectValue}
          allowClear
          onChange={onSelectFun}
          style={{ width: '100%', textAlign: 'left' }}
        ></Select>
      </div>
      <div className="menuStyle">
        <div className="leftTree">
          <LeftTree items={treeData} selected={selectValue} />
        </div>
      </div>
    </div>
  );
}
