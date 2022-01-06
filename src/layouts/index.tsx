import { IRouteComponentProps } from 'umi';
import { useEffect, useState } from 'react';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { ReadOutlined, ApiOutlined, DatabaseOutlined } from '@ant-design/icons';
import { history } from 'umi';
export default function ({ children }: IRouteComponentProps) {
  const [activeSkey, setActiveSkey] = useState('/modules');
  const layoutConfig: BasicLayoutProps = {
    title: 'Api Document',
    logo: false,
    layout: 'top',
    fixedHeader: true,
    contentStyle: {
      margin: 0,
      padding: 0,
      minHeight: 'calc(100vh - 48px)',
    },
    route: {
      routes: [
        {
          index: 0,
          path: '/modules',
          name: 'Api文档',
          icon: <ApiOutlined />,
        },
        {
          index: 1,
          path: '/database',
          name: '数据字典',
          icon: <DatabaseOutlined />,
        },
        {
          index: 2,
          path: '/readme',
          name: '说明',
          icon: <ReadOutlined />,
        },
      ],
    },
  };
  useEffect(() => {
    setActiveSkey(history.location.pathname);
  }, [history.location.pathname]);
  return (
    <ProLayout
      {...layoutConfig}
      location={{ pathname: activeSkey }}
      menuItemRender={(item: any, dom) => (
        <a
          onClick={() => {
            setActiveSkey(item.key);
            history.push(item.path as string);
          }}
        >
          {dom}
        </a>
      )}
    >
      {children}
    </ProLayout>
  );
}
