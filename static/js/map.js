ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [58.010002, 56.227147],
        zoom: 10,
        controls: ['zoomControl']
    });
    // Координаты метки
    var place1Coordinates = [58.012330, 56.234103];
    var place2Coordinates = [58.011690, 56.239021];
    var place3Coordinates = [58.006141, 56.207894];
    var place4Coordinates = [58.003921, 56.214095];
    var place5Coordinates = [58.015923, 56.240324];

    // Создаем метки
    var place1Mark = new ymaps.Placemark(place1Coordinates, {
        // Свойства метки (в данном случае описание)
        hintContent: 'ВкусноКофе',
        balloonContent: 'ВкусноКофе',
        iconCaption: 'Кофейня, Кафе'
    });

    var place2Mark = new ymaps.Placemark(place2Coordinates, {
        hintContent: 'Шаурм Club',
        balloonContent: 'Шаурм Club',
        iconCaption: 'Фастфуд, Кафе'
    });

    var place3Mark = new ymaps.Placemark(place3Coordinates, {
        hintContent: 'Шаурм Club',
        balloonContent: 'Шаурм Club',
        iconCaption: 'Фастфуд, Кафе'
    });

    var place4Mark = new ymaps.Placemark(place4Coordinates, {
        hintContent: 'Шаурм Club',
        balloonContent: 'Шаурм Club',
        iconCaption: 'Фастфуд, Кафе'
    });

    var place5Mark = new ymaps.Placemark(place5Coordinates, {
        hintContent: 'Шаурм Club',
        balloonContent: 'Шаурм Club',
        iconCaption: 'Фастфуд, Кафе'
    });

    // Добавляем метки на карту
    myMap.geoObjects.add(place1Mark);
    myMap.geoObjects.add(place2Mark);
    myMap.geoObjects.add(place3Mark);
    myMap.geoObjects.add(place4Mark);
    myMap.geoObjects.add(place5Mark);
});