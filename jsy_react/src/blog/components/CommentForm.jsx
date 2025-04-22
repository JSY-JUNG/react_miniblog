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
        <div className="mt-5">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="당신의 생각을 남겨주세요..."
                        value={text}
                        onChange={handleChange}
                        required
                     />
                        </div>
                        <button type="submit" className="btn btn-primary float-end">
                            등록하기
                        </button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default CommentForm