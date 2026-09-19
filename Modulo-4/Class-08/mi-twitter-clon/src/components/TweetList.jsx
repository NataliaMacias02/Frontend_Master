import Tweet from "./Tweet";
import "../styles/TweetList.css";

const TweetList = ({ tweets, onLike, onDelete, currentUserId }) => {
    if (tweets.length === 0) {
        return (
            <div className="tweet-list-empty">
                <p className="empty-message">📝 Aún no hay tweets. ¡Sé el primero en publicar!</p>
            </div>
        );
    }

    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    onLike={onLike}
                    onDelete={onDelete}
                    currentUserId={currentUserId}
                    isOwner={tweet.authorId === currentUserId}
                />
            ))}
        </div>
    );
};

export default TweetList;