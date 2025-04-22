function CommentList({comments}) {
    return (
        <div className="mt-5">
            <h5 className="mb-3">댓글 목록</h5>
            <ul className="list-group">
                {comments.map((comment, idx) => (
                    <li key={idx} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <strong>{comment.author || '익명'}</strong>
                            <small className="text-muted">{comment.date || '방금 전'}</small>
                        </div>
                        <p className="mb-1">{comment.text}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default CommentList