function openMaps() {
    // URL para abrir en Google Maps (web) en PC o móvil
    var mapsWebUrl = "https://www.google.com/maps/search/?api=1&query=Real+Racing+Club+de+Santander";

    // URL para abrir en la app de mapas predeterminada en móviles
    var mapsAppUrl = "geo:0,0?q=Real+Racing+Club+de+Santander";

    // Detectar si está en móvil para abrir en la app de mapas
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
        window.location.href = mapsAppUrl;
    } else {
        window.open(mapsWebUrl, "_blank");
    }
}
