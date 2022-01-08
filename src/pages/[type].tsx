import ResizePanel from 'react-resize-panel';
import LeftMenu from './components/LeftMenu';
import RightContent from './components/RightContent';

export default function () {
  return (
    <div className="container">
      <div className="body">
        <ResizePanel direction="e" style={{ flexGrow: '0.7' }}>
          <LeftMenu />
        </ResizePanel>
        <div className="content panel">
          <RightContent />
        </div>
      </div>
    </div>
  );
}
