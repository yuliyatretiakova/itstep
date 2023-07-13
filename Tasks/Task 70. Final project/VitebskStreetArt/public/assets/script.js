//let center = [55.19605132804138, 30.20596746403505];

function init(){
    let map = new ymaps.Map('map', {
        center: [55.19605132804138, 30.20596746403505],
        zoom: 16
    });

    let placemarc = new ymaps.Placemarc([55.19605132804138, 30.20596746403505], {}, {
       // iconLayout: 'default#image',
        //iconImageHref: 'D:\github\itstep\Tasks\Task 70. Final project\VitebskStreetArt\public\assets\img\main\tags\map_tag.png',
        //iconImageSize: [36, 36],
        //iconImageOffset: [10, 10]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил  
    
    map.geoObjects.add(placemarc);
}

ymaps.ready(init);