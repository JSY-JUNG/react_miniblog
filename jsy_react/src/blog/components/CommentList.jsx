function CommentList({comments}) {
    return (
        <div>
            <ul className={'list-group mt-3'}>
                {comments.map((comment) => (
                    <li key={comment.postIdx} className={'list-group-item'}>
                        {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentList