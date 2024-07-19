import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import styled from 'styled-components';

const Content = styled(EditorContent)`
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

  .ProseMirror {
    font-size: 16px; /* 폰트 크기 조정 */
    line-height: 1.5; /* 줄 높이 조정 */
    height: 300px;
  }
`;

// .ProseMirror ul {
//     padding-left: 20px; /* 리스트의 왼쪽 패딩 조정 */
//   }

//   .ProseMirror li {
//     margin-bottom: 5px; /* 리스트 아이템의 아래 여백 조정 */
//     list-style-type: disc; /* 점 추가 */
//   }
const MenuContainer = styled.div`
  background-color: var(--gray300);
`;

const Tiptap = (props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.content,
    editable: props.isEditable,
  });

  useEffect(() => {
    if (editor && props.editorRef) {
      props.editorRef.current = editor;
    }
  }, [editor, props.editorRef]);
  return (
    <>
      <TipTapMenu editor={editor} />
      <Content editor={editor} />
    </>
  );
};

const TipTapMenu = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <MenuContainer>
      <button
        size={20}
        cursor={'pointer'}
        onClick={() => editor.chain().focus().toggleBold().run()}
        style={{ color: editor.isActive('bold') ? 'orange' : 'black' }}
      >
        bold
      </button>
      <div className='button-group'>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          //   className={editor.isActive('bulletList') ? 'is-active' : ''}
          style={{ ul: editor.isActive('bulletList') ? 'is-active' : '' }}
        >
          Toggle bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().splitListItem('listItem').run()}
          disabled={!editor.can().splitListItem('listItem')}
        >
          Split list item
        </button>
        <button
          onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
          disabled={!editor.can().sinkListItem('listItem')}
        >
          Sink list item
        </button>
        <button
          onClick={() => editor.chain().focus().liftListItem('listItem').run()}
          disabled={!editor.can().liftListItem('listItem')}
        >
          Lift list item
        </button>
      </div>
    </MenuContainer>
  );
};

export default Tiptap;
