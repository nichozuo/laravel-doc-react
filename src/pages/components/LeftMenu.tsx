import request from '@/plugins/request';
import { useEffect, useState } from 'react';
import { history, useLocation } from 'umi';
import LeftMenuSelect from './LeftMenuSelect';
import LeftMenuTree from './LeftMenuTree';
export default function () {
  const [treeItems, setTreeItems] = useState([]);

  useEffect(() => {
    let queryName: any = history.location.pathname.split('/');
    let type = queryName[queryName.length - 1];
    request.post('docs/get_menu', { data: { type: type } }).then((res) => {
      setTreeItems(res.data);
    });
  }, [history.location.pathname]);
  return (
    <div className="sidebar withMargin panel">
      <div className="menuSearch">
        <LeftMenuSelect items={treeItems} />
      </div>
      <div className="menuStyle">
        <div className="leftTree">
          <LeftMenuTree items={treeItems} />
        </div>
      </div>
    </div>
  );
}
