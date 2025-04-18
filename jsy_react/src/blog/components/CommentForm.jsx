import {useState} from "react";

function CommentForm({postIdx,onAdd}) {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;

        onAdd(postIdx, text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={'mb-3'}>
                <input type="text"
                       className={'form-control'}
                       placeholder={'Write a comment...'}
                       value={text}
                       onChange={handleChange}
                       required={true}
                />
                <button type={'submit'} className={'btn btn-primary mt-2'}>Add Comment</button>
            </form>
        </div>
    );
}

export default CommentForm