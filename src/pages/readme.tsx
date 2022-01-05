import ResizePanel from 'react-resize-panel';
import style from './index.less';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);
import { Select } from 'antd';
import LeftTree from './components/LeftTree';
import ApiContent from './components/ApiContent';

export default function () {
  return (
    <div className={cx('container')}>
      <div className={cx('body')}>
        <ResizePanel direction="e" style={{ flexGrow: '1' }}>
          <div className={cx('sidebar', 'withMargin', 'panel')}>
            <div className={cx('menu_search')}>
              <Select
                showSearch
                placeholder="搜索"
                style={{ width: '100%' }}
              ></Select>
            </div>
            <div className={cx('menustyle')}>
              <div className={cx('leftTree')}>
                <LeftTree type="readme" />
              </div>
            </div>
          </div>
        </ResizePanel>
        <div className={cx('content', 'panel')}>
          <ApiContent type="readme" />
        </div>
      </div>
    </div>
  );
}
