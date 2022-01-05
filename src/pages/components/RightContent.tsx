import ReactMarkdown from 'react-markdown';

export default function () {
  return (
    <div style={{ padding: '15px 30px' }}>
      <ReactMarkdown plugins={[gfm]} className="markdown-body">
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
