const VERSION = "1.2.0";

function saludar(nombre) {
    return `Hola ${nombre}, bienvenido DeiviFlow`;
}

function healthCheck() {
    return {
        status: "ok",
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: "Sistema DeiviFlow funcionando correctamente"
    };
}

function verificarSistema() {
    const resultado = healthCheck();
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
        statusDiv.style.color = "#009B4C";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const versionSpan = document.getElementById('version');
    if (versionSpan) {
        versionSpan.textContent = `v${VERSION}`;
    }
    verificarSistema();
});