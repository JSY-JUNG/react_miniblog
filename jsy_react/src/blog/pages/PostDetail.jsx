import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import CommentForm from "../components/CommentForm.jsx";
import CommentList from "../components/CommentList.jsx";

function PostDetail() {

    const {postIdx} = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    const fetchPost = () => {
        axios.get(`http://localhost:8080/api/posts/${postIdx}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    const fetchComments = () => {
        axios.get(`http://localhost:8080/api/posts/${postIdx}/comments`)
            .then(res => {
                setComments(res.data);
            })
            .catch(err => {
            console.log(err);
            })
    };

    const addComment = (postIdx, text) => {
        // console.log(postIdx, text);
        axios.post(`http://localhost:8080/api/posts/${postIdx}/comments`, {text},{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                fetchComments();
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchPost();
        fetchComments();
    },[postIdx])

    if (!post) return <div className={'container mt-4'}>Loading...</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <hr/>
            <h5>Comments</h5>
            <CommentForm postIdx={post.postIdx} onAdd={addComment} />
            <CommentList comments={comments} />
        </div>
    );
}

export default PostDetail