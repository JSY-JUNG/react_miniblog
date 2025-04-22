import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../components/CommentForm.jsx";
import CommentList from "../components/CommentList.jsx";

function PostDetail() {
    const { postIdx } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const navigate = useNavigate();

    const onDelete = () => {
        if (window.confirm("삭제하시겠습니까..?")) {
            axios.delete(`http://localhost:8080/api/posts/${postIdx}/delete`)
                .then(() => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    const onEdit = () => {
        setIsEditing(true);
        setEditTitle(post.title);
        setEditContent(post.content);
    };

    const onSave = () => {
        axios.put(`http://localhost:8080/api/posts/${postIdx}/update`, {
            postIdx: postIdx,
            title: editTitle,
            content: editContent
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setPost(prev => ({ ...prev, title: editTitle, content: editContent }));
                setIsEditing(false);
            })
            .catch(err => console.log(err));
    };

    const fetchPost = () => {
        axios.get(`http://localhost:8080/api/posts/${postIdx}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    };

    const fetchComments = () => {
        axios.get(`http://localhost:8080/api/posts/${postIdx}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err));
    };

    const addComment = (postIdx, text) => {
        axios.post(`http://localhost:8080/api/posts/${postIdx}/comments`, { text }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => fetchComments())
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [postIdx]);

    if (!post) return <div className="container mt-4">Loading...</div>;

    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0">
                {post.thumbnailUrl && (
                    <img src={post.thumbnailUrl} className="card-img-top" alt="Post Thumbnail" />
                )}

                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        {isEditing ? (
                            <input
                                type="text"
                                className="form-control form-control-lg me-3"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                        ) : (
                            <h1 className="card-title display-5 mb-0">{post.title}</h1>
                        )}

                        <div className="text-nowrap">
                            {isEditing ? (
                                <button className="btn btn-sm btn-success me-2" onClick={onSave}>
                                    💾 저장
                                </button>
                            ) : (
                                <button className="btn btn-sm btn-outline-secondary me-2" onClick={onEdit}>
                                    ✏️ 수정
                                </button>
                            )}
                            <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
                                🗑️ 삭제
                            </button>
                        </div>
                    </div>

                    {isEditing ? (
                        <textarea
                            className="form-control fs-5 mb-3"
                            rows="8"
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        />
                    ) : (
                        <p className="card-text fs-5">{post.content}</p>
                    )}

                    <hr className="my-4" />

                    <h4 className="mb-3">💬 Comments</h4>
                    <CommentForm postIdx={post.postIdx} onAdd={addComment} />
                    <CommentList comments={comments} />
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
