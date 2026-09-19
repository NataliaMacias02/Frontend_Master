import { useState } from "react";
import "../styles/Tweet.css";

const Tweet = ({ tweet, onLike, onDelete, currentUserId, isOwner }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLiked(true);
            onLike(tweet.id);
        }
    };

    const handleDelete = () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este tweet?")) {
            onDelete(tweet.id);
        }
    };

    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-author">@{tweet.author}</span>
                <span className="tweet-time">{tweet.createdAt}</span>
                {isOwner && (
                    <button
                        className="tweet-delete-btn"
                        onClick={handleDelete}
                        title="Eliminar tweet"
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="tweet-content">
                <p>{tweet.text}</p>
            </div>

            <div className="tweet-footer">
                <button
                    className={`tweet-like-btn ${liked ? "liked" : ""}`}
                    onClick={handleLike}
                    disabled={liked}
                >
                    ❤ {tweet.likes}
                </button>
            </div>
        </div>
    );
};

export default Tweet;