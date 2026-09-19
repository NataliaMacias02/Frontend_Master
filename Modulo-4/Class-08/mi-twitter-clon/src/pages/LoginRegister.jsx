import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/LoginRegister.css";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { login, register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (isLogin) {
            const result = login(formData.email, formData.password);
            if (result.success) {
                setSuccess(result.message);
                setTimeout(() => navigate("/"), 1500);
            } else {
                setError(result.message);
            }
        } else {
            const result = register(formData.email, formData.password, formData.username);
            if (result.success) {
                setSuccess(result.message);
                setTimeout(() => setIsLogin(true), 1500);
                setFormData({ email: "", password: "", username: "" });
            } else {
                setError(result.message);
            }
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError("");
        setSuccess("");
        setFormData({ email: "", password: "", username: "" });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>{isLogin ? "🐦 Iniciar Sesión" : "🐦 Registrarse"}</h1>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="username">Nombre de Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="usuario123"
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Mínimo 6 caracteres"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Iniciar Sesión" : "Registrarse"}
                    </button>
                </form>

                <div className="toggle-section">
                    <p>
                        {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={toggleMode}
                        >
                            {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;