/* Fondo tipo agua en movimiento */
body {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #0a0a0a;
  color: white;
}

.water {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: rgba(0, 50, 255, 0.2);
  border-radius: 50%;
  animation: wave 6s linear infinite;
  z-index: 1;
}

.water:nth-child(2) {
  animation-delay: 3s;
  background: rgba(0, 100, 255, 0.2);
}

/* Animación de ondas */
@keyframes wave {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Contenedor de contenido */
.container {
  position: relative;
  z-index: 2;
  background: rgba(0,0,0,0.6);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

/* Inputs y botones */
input {
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #0f0f0f;
  margin-top: 15px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  background: #ff6f91;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover:not([disabled]) {
  transform: scale(1.1);
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Mensajes de notificación */
#message {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

/* Pestañas */
.tab-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab-buttons button.active {
  background: #ff6f91;
}

.tab-content {
  text-align: center;
}