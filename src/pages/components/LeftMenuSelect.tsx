import { Select } from 'antd';
import { useState, useEffect } from 'react';
import { history } from 'umi';

export default function (props: any) {
  const [options, setOptions] = useState<any>([]);

  let o: any[] = [];

  const setOptionsFun = (items: any) => {
    items.map((item: any) => {
      if (item.isLeaf) {
        o.push({ label: item.key, value: item.key });
      }
      if (item.children) {
        setOptionsFun(item.children);
      }
    });
  };

  const onSelect = (e: any) => {
    if (e) {
      history.push({
        query: {
          key: e,
        },
      });
    }
  };

  useEffect(() => {
    setOptionsFun(props.items);
    setOptions(o);
  }, [props.items]);

  return (
    <Select
      showSearch
      placeholder="搜索"
      options={options}
      allowClear
      onChange={onSelect}
      style={{ width: '100%', textAlign: 'left' }}
    ></Select>
  );
}
