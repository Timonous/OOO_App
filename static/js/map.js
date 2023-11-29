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
        hintContent: 'Кофейня, Кафе',
        balloonContent: 'ВкусноКофе',
        iconCaption: 'ВкусноКофе'
    });

    var place2Mark = new ymaps.Placemark(place2Coordinates, {
        hintContent: 'Бар, Кафе',
        balloonContent: 'Goodnight',
        iconCaption: 'Goodnight'
    });

    var place3Mark = new ymaps.Placemark(place3Coordinates, {
        hintContent: 'Фастфуд, Кафе',
        balloonContent: 'ШаурмаClub',
        iconCaption: 'Шаурм Club'
    });

    var place4Mark = new ymaps.Placemark(place4Coordinates, {
        hintContent: 'Ресторан',
        balloonContent: 'The Hamber',
        iconCaption: 'The Hamber'
    });

    var place5Mark = new ymaps.Placemark(place5Coordinates, {
        hintContent: 'Фастфуд, Кафе',
        balloonContent: 'Пирожоки',
        iconCaption: 'Пирожоки'
    });

    // Добавляем метки на карту
    myMap.geoObjects.add(place1Mark);
    myMap.geoObjects.add(place2Mark);
    myMap.geoObjects.add(place3Mark);
    myMap.geoObjects.add(place4Mark);
    myMap.geoObjects.add(place5Mark);

    // Обработчик клика на метке
    function onMarkClick(placeName) {
        // Отображаем блок с описанием заведения и кнопкой "Посмотреть меню"
        showPlaceDescription(placeName);
        // Сохраняем выбранное заведение
        selectedPlaceText.textContent = placeName;
        // Возвращаем пользователя на главное меню
        window.location.href = '/OOO_App/static/templates/main_Menu.html';
    }

    // Добавляем обработчики клика на метки
    place1Mark.events.add('click', function () {
        onMarkClick('ВкусноКофе');
    });

    place2Mark.events.add('click', function () {
        onMarkClick('Goodnight');
    });

    place3Mark.events.add('click', function () {
        onMarkClick('Шаурм Club');
    });

    place4Mark.events.add('click', function () {
        onMarkClick('The Hamber');
    });

    place5Mark.events.add('click', function () {
        onMarkClick('Пирожоки');
    });
});