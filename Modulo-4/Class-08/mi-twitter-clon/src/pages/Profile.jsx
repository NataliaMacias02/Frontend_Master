import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Profile.css";

const Profile = () => {
  const { user, updateProfile, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    bio: user?.bio || "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.username.trim()) {
      setMessage("El nombre de usuario no puede estar vacío");
      return;
    }

    const result = updateProfile({
      username: formData.username,
      bio: formData.bio,
    });

    if (result.success) {
      setMessage("Perfil actualizado correctamente");
      setIsEditing(false);
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage(result.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <button onClick={() => navigate("/")} className="back-btn">
          ← Volver
        </button>
        <h1>Mi Perfil</h1>
      </header>

      <div className="profile-card">
        <div className="profile-avatar">
          <span>👤</span>
        </div>

        {message && (
          <div
            className={`message ${message.includes("error") ? "error" : "success"}`}
          >
            {message}
          </div>
        )}

        <div className="profile-info">
          {!isEditing ? (
            <>
              <div className="info-item">
                <label>Nombre de Usuario:</label>
                <p>{user?.username}</p>
              </div>
              <div className="info-item">
                <label>Correo Electrónico:</label>
                <p>{user?.email}</p>
              </div>
              <div className="info-item">
                <label>Biografía:</label>
                <p>{user?.bio || "Sin biografía"}</p>
              </div>
              <div className="info-item">
                <label>Miembro desde:</label>
                <p>{new Date(user?.createdAt).toLocaleDateString("es-ES")}</p>
              </div>

              <button onClick={() => setIsEditing(true)} className="edit-btn">
                ✏️ Editar Perfil
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="username">Nombre de Usuario:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografía:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre ti..."
                  rows="4"
                />
              </div>

              <div className="button-group">
                <button onClick={handleSave} className="save-btn">
                  💾 Guardar Cambios
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      username: user?.username || "",
                      bio: user?.bio || "",
                    });
                  }}
                  className="cancel-btn"
                >
                  ✕ Cancelar
                </button>
              </div>
            </>
          )}
        </div>

        <button onClick={handleLogout} className="logout-btn-profile">
          🚪 Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
