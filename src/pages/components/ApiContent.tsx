import Markdown from './markdown';
export default function (props: any) {
  return (
    <div style={{ padding: '15px 30px' }}>
      <Markdown type={props.type} />
    </div>
  );
}
