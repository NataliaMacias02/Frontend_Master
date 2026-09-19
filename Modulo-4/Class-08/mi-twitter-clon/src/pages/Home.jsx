import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";
import "../styles/Home.css";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Cargar tweets del usuario actual desde localStorage
  useEffect(() => {
    if (user) {
      const userTweetsKey = `tweets_${user.id}`;
      const storedTweets = JSON.parse(localStorage.getItem(userTweetsKey)) || [];
      setTweets(storedTweets);
    }
  }, [user]);

  // Guardar tweets en localStorage
  useEffect(() => {
    if (user) {
      const userTweetsKey = `tweets_${user.id}`;
      localStorage.setItem(userTweetsKey, JSON.stringify(tweets));
    }
  }, [tweets, user]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      author: user.username,
      authorId: user.id,
      createdAt: new Date().toLocaleString("es-ES"),
    };

    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <h1>🐦 Twitter Clone</h1>
        </div>
        <div className="header-right">
          <span className="welcome-text">Bienvenido, {user.username}</span>
          <button onClick={() => navigate("/profile")} className="profile-btn">
            👤 Mi Perfil
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="home-main">
        <TweetForm onAddTweet={addTweet} />
        <TweetList
          tweets={tweets}
          onLike={likeTweet}
          onDelete={deleteTweet}
          currentUserId={user.id}
        />
      </main>
    </div>
  );
};

export default Home;