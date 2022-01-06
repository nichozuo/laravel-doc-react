import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import { history } from 'umi';
import request from '@/plugins/request';
import { API } from '@/services/apis';

export default function Markdown() {
  const [markdown, setMarkdown] = useState('');
  const [status, setAutoExpandParent] = useState<boolean>(false);
  useEffect(() => {
    console.log('markdown.tsx:::history', history.location.query);
    let queryName: any = location.pathname.split('/');
    let type = queryName[queryName.length - 1];
    let key = history.location.query?.key;
    if (history.location.query?.key && !status) {
      setAutoExpandParent(true);
      request
        .post(API.getContent, {
          data: {
            type: type,
            key: key,
          },
        })
        .then((res) => {
          setAutoExpandParent(false);
          setMarkdown(
            res.data && res.data.content ? res.data.content : '暂无数据',
          );
        })
        .catch((err) => {
          setAutoExpandParent(false);
        });
    }
  }, [history.location.query]);

  return (
    <ReactMarkdown plugins={[gfm]} className="markdown-body">
      {markdown}
    </ReactMarkdown>
  );
}
