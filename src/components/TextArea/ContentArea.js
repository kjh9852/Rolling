import React, {
    useMemo,
    useState,
    useRef
} from 'react';
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

function ContentArea() {


    const quillRef = useRef(null);
    const [values, setValues] = useState();

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
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={setValues}
            style={{ width: '100%', height: '200px', marginBottom: '50px' }}
        />
    )
}

export default ContentArea;