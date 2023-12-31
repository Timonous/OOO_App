document.addEventListener('DOMContentLoaded', function() {
  const selectButton = document.getElementById('selectButton');
  const dropdownList = document.getElementById('dropdownList');
  const triangleMapImg = document.getElementById('triangleMapImg');
  const selectedPlaceText = document.getElementById('selectedPlaceText');

  selectButton.addEventListener('click', function() {
    // Проверяем, открыт ли список
    const isOpen = dropdownList.classList.toggle('show');

    // Изменяем стили в зависимости от состояния
    if (isOpen) {
      selectButton.style.backgroundColor = "#d3d3d3";
      triangleMapImg.src = '/OOO_App/static/img/triangleMapBarUp.svg';
    } else {
      selectButton.style.backgroundColor = "#F2F2F2";
      triangleMapImg.src = '/OOO_App/static/img/triangleMapBarBottom.svg';
    }
  });

  dropdownList.addEventListener('click', function(event) {
    // Обработка клика на кнопке внутри выпадающего списка
    if (event.target.tagName === 'BUTTON') {
      const selectedPlace = event.target.value;
      selectedPlaceText.textContent = selectedPlace;
      dropdownList.classList.remove('show');
      selectButton.style.backgroundColor = "#F2F2F2";
      triangleMapImg.src = '/OOO_App/static/img/triangleMapBarBottom.svg';
    }
  });

  document.addEventListener('click', function(event) {
    // Закрытие выпадающего списка при клике вне блока
    if (!dropdownList.contains(event.target) && event.target !== selectButton) {
      dropdownList.classList.remove('show');

      // Установка стилей после закрытия списка
      selectButton.style.backgroundColor = "#F2F2F2";
      triangleMapImg.src = '/OOO_App/static/img/triangleMapBarBottom.svg';
    }
  });
});

function mapOpen() {
  window.location.href = '/OOO_App/static/templates/map.html';
}