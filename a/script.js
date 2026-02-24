/* Fondo tipo agua animado con gradiente */
body {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  position: relative;
}

/* Fondo animado */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #000000, #0a0a2e, #000000, #0a0a2e);
  background-size: 800% 800%;
  animation: waterAnim 20s ease infinite;
  z-index: -1;
}

@keyframes waterAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Contenedor de contenido */
.container {
  position: relative;
  z-index: 1;
  background: rgba(0,0,0,0.6);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}