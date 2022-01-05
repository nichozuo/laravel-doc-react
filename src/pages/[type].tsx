import ResizePanel from 'react-resize-panel';
import { useState } from 'react';
import ApiContent from './components/ApiContent';
import LeftMenu from './components/LeftMenu';

export default function () {
  const typeName = useState('modules');

  return (
    <div className="container">
      <div className="body">
        <ResizePanel direction="e" style={{ flexGrow: '1' }}>
          <LeftMenu />
        </ResizePanel>
        <div className="content panel">
          <ApiContent />
        </div>
      </div>
    </div>
  );
}
