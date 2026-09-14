import { useReducer, useRef, useCallback, useEffect, useState } from "react";
import "./CounterGame.css";

// ---------------------------------------------------------------------------
// Reducer: maneja count, history y ahora también una pila `past` para
//    poder deshacer (Ejercicio 1) y soporta un `amount` variable (Ejercicio 2)
// ---------------------------------------------------------------------------
const initialState = { count: 0, history: [], past: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const amount = action.amount ?? 1;
      const newCount = state.count + amount;
      return {
        count: newCount,
        history: [...state.history, `+${amount} (Nuevo valor: ${newCount})`],
        past: [...state.past, state.count],
      };
    }
    case "decrement": {
      const amount = action.amount ?? 1;
      const newCount = state.count - amount;
      return {
        count: newCount,
        history: [...state.history, `-${amount} (Nuevo valor: ${newCount})`],
        past: [...state.past, state.count],
      };
    }
    case "undo": {
      if (state.past.length === 0) return state;
      const previousCount = state.past[state.past.length - 1];
      return {
        count: previousCount,
        history: state.history.slice(0, -1),
        past: state.past.slice(0, -1),
      };
    }
    case "reset":
      return initialState;
    case "hydrate":
      // Ejercicio 3: restaura un estado guardado previamente
      return action.payload ?? state;
    default:
      return state;
  }
}

export default function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const amountInputRef = useRef(null);
  const [savedFlash, setSavedFlash] = useState(false);

  // useRef: foco automático en el botón de incremento al montar
  useEffect(() => {
    incrementBtnRef.current?.focus();
  }, []);

  // Ejercicio 3: persistencia. En un proyecto local puedes cambiar esto por
  // localStorage.getItem/setItem; aquí usamos una ref en memoria.
  const memoryStoreRef = useRef(null);

  useEffect(() => {
    if (memoryStoreRef.current) {
      dispatch({ type: "hydrate", payload: memoryStoreRef.current });
    }
  }, []);

  useEffect(() => {
    memoryStoreRef.current = state;
  }, [state]);

  // useCallback: evita recrear estas funciones en cada render
  const handleIncrement = useCallback(() => {
    const raw = amountInputRef.current?.value;
    const amount = raw ? Math.abs(Number(raw)) || 1 : 1;
    dispatch({ type: "increment", amount });
  }, []);

  const handleDecrement = useCallback(() => {
    const raw = amountInputRef.current?.value;
    const amount = raw ? Math.abs(Number(raw)) || 1 : 1;
    dispatch({ type: "decrement", amount });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleSave = useCallback(() => {
    memoryStoreRef.current = state;
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 1200);
  }, [state]);

  return (
    <div className="counter-page">
      <div className="counter-panel">
        <p className="counter-eyebrow">Contador &amp; registro de eventos</p>

        <div className="counter-scoreboard">
          <span className="counter-score-label">Marcador</span>
          <span className="counter-score-value">{state.count}</span>
        </div>

        <div className="counter-controls-row">
          <button
            ref={incrementBtnRef}
            onClick={handleIncrement}
            className="counter-btn counter-btn-primary"
          >
            + Sumar
          </button>
          <button onClick={handleDecrement} className="counter-btn">
            − Restar
          </button>
        </div>

        <div className="counter-amount-row">
          <label htmlFor="amount" className="counter-amount-label">
            Cantidad
          </label>
          <input
            id="amount"
            ref={amountInputRef}
            type="number"
            min="1"
            defaultValue={1}
            className="counter-amount-input"
          />
        </div>

        <div className="counter-controls-row">
          <button
            onClick={handleUndo}
            disabled={state.past.length === 0}
            className="counter-btn"
          >
            ↩ Deshacer
          </button>
          <button onClick={handleReset} className="counter-btn">
            ⟲ Reiniciar
          </button>
          <button onClick={handleSave} className="counter-btn">
            {savedFlash ? "✓ Guardado" : "💾 Guardar"}
          </button>
        </div>

        <div className="counter-history-box">
          <p className="counter-history-title">Historial de cambios</p>
          {state.history.length === 0 ? (
            <p className="counter-history-empty">Aún no hay movimientos.</p>
          ) : (
            <ul className="counter-history-list">
              {state.history
                .slice()
                .reverse()
                .map((entry, index) => (
                  <li
                    key={state.history.length - index}
                    className="counter-history-item"
                  >
                    <span className="counter-history-dot" />
                    {entry}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}