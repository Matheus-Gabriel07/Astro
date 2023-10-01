// Variáveis de configuração
const levels = [
  //Tempo test
  { name: "01", requiredTime: 15 }, // 25 minutos
  { name: "02", requiredTime: 27 }, // 45 minutos
  { name: "03", requiredTime: 45 }, // 1 e 15 minutos
  { name: "04", requiredTime: 63 }, // 1 e 40 minutos
  { name: "05", requiredTime: 108 }, // 2 horas
  { name: "06", requiredTime: 864 }, // 1 dia
  { name: "07", requiredTime: 1728 }, // 2 dias
  { name: "08", requiredTime: 4320 }, // 5 dias
  { name: "09", requiredTime: 6048 }, // 1 semana
  { name: "10", requiredTime: 26784 }, // 1 meês
];

const level = document.querySelector("#level_user")

// Função para verificar o nível com base no tempo acumulado
function getLevel(totalTime) {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (totalTime >= levels[i].requiredTime) {
      level.innerHTML = levels[i].name
      return levels[i].name;
    }
  }
  return "00";
}

// Simulação de uso de música
let totalTimeListened = 0; // Tempo acumulado em segundos
let interval;

function updateBackgroundGradient() {
  const conicGradientValue = `${(totalTimeListened / levels[levels.length - 1].requiredTime) * 360}deg`;
  level.style.background = `radial-gradient(closest-side, var(--back-background-main) 79%, transparent 80% 100%),
  conic-gradient(var(--de-detail-purple) ${conicGradientValue}, var(--sha-shadow-black) 0)`;
}
// Simula o início da escuta de música
function startListening() {
  console.log("Iniciando a escuta de música...");
  interval = setInterval(() => {
    totalTimeListened += 1;
    updateBackgroundGradient();
    console.log(
      `Tempo total escutado: ${totalTimeListened} segundos. Nível: ${level}`
    );

  }, 1000);
}

// Simula a parada da escuta de música
function stopListening() {
  console.log("Parando a escuta de música...");
  clearInterval(interval);
}

export {
  startListening,
  stopListening
}
