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
          ['bold', 'italic', 'underline', 'strike'],
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

// // src/Tiptap.tsx
// import {
//   useEditor,
//   EditorContent,
//   FloatingMenu,
//   BubbleMenu,
//   EditorProvider,
// } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';

// // define your extension array
// const extensions = [StarterKit];

// const content = '<p>Hello World!</p>';

// const ContentArea = () => {
//   const editor = useEditor({
//     extensions,
//     content,
//   });

//   return (
//     <>
//       <EditorContent editor={editor} />
//       <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
//       <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
//       <EditorProvider
//         // slotBefore={<MenuBar />}
//         extensions={extensions}
//         content={'<p>아니 어케하는거임?</p>'}
//       ></EditorProvider>
//     </>
//   );
// };

// export default ContentArea;
