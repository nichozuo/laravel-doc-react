import { IRouteComponentProps } from 'umi';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';

export default function ({ children }: IRouteComponentProps) {
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
  };
  return <ProLayout {...layoutConfig}>{children}</ProLayout>;
}
