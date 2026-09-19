import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializar desde localStorage usando lazy initializers
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch (error) {
      console.error("Error loading user:", error);
      return null;
    }
  });

  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("users")) || [];
    } catch (error) {
      console.error("Error loading users:", error);
      return [];
    }
  });

  const [loading, setLoading] = useState(false);

  // Registrar nuevo usuario
  const register = (email, password, username) => {
    // Validaciones
    if (!email || !password || !username) {
      return { success: false, message: "Todos los campos son requeridos" };
    }

    if (password.length < 6) {
      return { success: false, message: "La contraseña debe tener al menos 6 caracteres" };
    }

    // Verificar si el usuario ya existe
    if (users.some((u) => u.email === email)) {
      return { success: false, message: "El correo electrónico ya está registrado" };
    }

    if (users.some((u) => u.username === username)) {
      return { success: false, message: "El nombre de usuario ya existe" };
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now(),
      email,
      username,
      password: btoa(password), // Codificación básica
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true, message: "Registro exitoso" };
  };

  // Iniciar sesión
  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Email y contraseña son requeridos" };
    }

    const foundUser = users.find((u) => u.email === email);

    if (!foundUser) {
      return { success: false, message: "Usuario no encontrado" };
    }

    // Comparar contraseña
    if (btoa(password) !== foundUser.password) {
      return { success: false, message: "Contraseña incorrecta" };
    }

    // No guardar la contraseña en el usuario actual
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));

    return { success: true, message: "Inicio de sesión exitoso" };
  };

  // Cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  // Actualizar perfil de usuario
  const updateProfile = (updates) => {
    if (!user) return { success: false, message: "No hay usuario autenticado" };

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    // Actualizar en la lista de usuarios
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, ...updates } : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true, message: "Perfil actualizado" };
  };

  const value = {
    user,
    loading,
    users,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};