import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

function ContentArea({ onChange, value }) {
  const quillRef = useRef(null);
  const handleChange = (e) => {
    onChange(e);
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold'],
          [{ align: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      theme='snow'
      modules={modules}
      formats={formats}
      onChange={handleChange}
      value={value}
      style={{ width: '100%', height: '200px', marginBottom: '50px' }}
    />
  );
}

export default ContentArea;
