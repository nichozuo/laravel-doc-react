import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import { history } from 'umi';
import request from '@/plugins/request';

export default function (props: any) {
  const [content, setContent] = useState('');
  const [status, setAutoExpandParent] = useState<boolean>(false);
  useEffect(() => {
    let queryName: any = history.location.pathname.split('/');
    let type = queryName[queryName.length - 1];
    let key = history.location.query?.key;
    if (history.location.query?.key && !status) {
      setAutoExpandParent(true);
      request
        .post('docs/get_content', {
          data: {
            type: type,
            key: key,
          },
        })
        .then((res) => {
          setAutoExpandParent(false);
          setContent(
            res.data && res.data.content ? res.data.content : '暂无数据',
          );
        })
        .catch((err) => {
          setAutoExpandParent(false);
        });
    }
  }, [history.location.query]);

  return (
    <div style={{ padding: '15px 30px' }}>
      <ReactMarkdown plugins={[gfm]} className="markdown-body">
        {content}
      </ReactMarkdown>
    </div>
  );
}
