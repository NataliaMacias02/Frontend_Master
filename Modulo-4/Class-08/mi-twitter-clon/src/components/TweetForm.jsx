import { useState } from "react";
import "../styles/TweetForm.css";

const TweetForm = ({ onAddTweet }) => {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    const MAX_CHARS = 280;

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= MAX_CHARS) {
            setText(value);
            setCharCount(value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAddTweet(text);
        setText("");
        setCharCount(0);
    };

    const isDisabled = !text.trim() || charCount === 0;
    const charWarning = charCount > MAX_CHARS * 0.9;

    return (
        <form className="tweet-form" onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="¿Qué estás pensando?"
                className="tweet-input"
                rows="4"
            />

            <div className="tweet-form-footer">
                <div className={`char-count ${charWarning ? "warning" : ""}`}>
                    {charCount}/{MAX_CHARS}
                </div>
                <button
                    type="submit"
                    className="tweet-submit-btn"
                    disabled={isDisabled}
                >
                    🐦 Tweet
                </button>
            </div>
        </form>
    );
};

export default TweetForm;