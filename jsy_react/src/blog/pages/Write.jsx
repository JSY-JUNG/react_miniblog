import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Write() {

    const [form, setForm] = useState({title : '', content: ''});
    const navi = useNavigate();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        console.log(`form : ${form}, e : ${e.target.name}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post('http://localhost:8080/api/posts', form,{
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(()=> {
            navi('/'); // 글 작성 후 홈
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="notion-editor container-fluid py-5" style={{ minHeight: "100vh" }}>
            <div className="editor-wrapper mx-auto bg-white p-5 shadow-lg rounded" style={{ maxWidth: "800px" }}>
                <h2 className="mb-4" style={{ fontWeight: 600, fontSize: "2.25rem" }}>📖 Write</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="form-control notion-title mb-4"
                    />

                    <textarea
                        name="content"
                        placeholder="Content"
                        value={form.content}
                        onChange={handleChange}
                        required
                        className="form-control notion-content"
                        rows="12"
                    />

                    <div className="text-end mt-4">
                        <button type="submit" className="btn btn-outline-dark px-4 py-2">
                            ✅ Post
                        </button>
                    </div>
                </form>
            </div>
        </div>


    );
}

export default Write