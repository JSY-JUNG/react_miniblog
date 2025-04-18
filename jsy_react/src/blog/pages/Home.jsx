import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:8080/api/posts")
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">🎲 Mini Blog</h2>
                <Link to="/write" className="btn btn-outline-success">
                    ✨ 글쓰기
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="alert alert-info text-center">아직 작성된 게시글이 없습니다.</div>
            ) : (
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.postIdx} className="col-md-6 col-lg-4 mb-4">
                            <div className="card post-card h-100 border-0 shadow-lg">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-dark fw-bold mb-2">
                                        📢 {post.title}
                                    </h5>
                                    <p className="card-text text-secondary flex-grow-1 small">
                                        {post.content.length > 100
                                            ? post.content.substring(0, 100) + "..."
                                            : post.content}
                                    </p>
                                    <div className="text-end mt-3">
                                        <Link to={`/posts/${post.postIdx}`} className="btn btn-outline-primary btn-sm">
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default Home