// 💞 Fecha en que comenzaron
const fechaInicio = new Date("2025-02-04");

// 💕 Fecha del próximo reencuentro
const fechaEncuentro = new Date("2027-11-01");

// 💖 Función que actualiza ambos contadores
function actualizarContadores() {
  const ahora = new Date();

  // -------- Tiempo juntos --------
  const diff = ahora - fechaInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const años = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);
  const diasRestantes = dias - (años * 365) - (meses * 30);

  document.getElementById("tiempoJuntos").innerText =
    `Llevamos juntos: ${años} años, ${meses} meses y ${diasRestantes} días 💖`;

  // -------- Cuenta regresiva --------
  const diffEncuentro = fechaEncuentro - ahora;
  if (diffEncuentro > 0) {
    const diasFaltan = Math.floor(diffEncuentro / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diffEncuentro / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diffEncuentro / (1000 * 60)) % 60);
    const segundos = Math.floor((diffEncuentro / 1000) % 60);

    document.getElementById("cuentaRegresiva").innerText =
      `Nos veremos en persona: ${diasFaltan} días, ${horas}h ${minutos}m ${segundos}s 💕`;
  } else {
    document.getElementById("cuentaRegresiva").innerText =
      "¡Ya estamos juntos! 💞";
  }
}

// 🕐 Actualiza cada segundo
setInterval(actualizarContadores, 1000);
actualizarContadores();
