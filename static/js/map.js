ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [58.010046, 56.226531], // Координаты центра карты
        zoom: 10 // Уровень масштабирования
        controls: [] // Пустой массив для скрытия всех элементов управления
    });
}