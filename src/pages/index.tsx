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
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              style={{ width: '100%' }}
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
            <LeftTree />
          </div>
        </ResizePanel>
        <div className={cx('content', 'panel')}>
          <ApiContent />
        </div>
      </div>
    </div>
  );
}
