//let center = [55.19605132804138, 30.20596746403505];

function init(){
    let map = new ymaps.Map('map', {
        center: [55.19605132804138, 30.20596746403505],
        zoom: 16
    });

    

    let tags = [[55.19483685721631, 30.204918528912845], [55.202035369499114, 30.211409431193754], [55.19869712616922, 30.20411382267325], [55.19521130744284, 30.19269834110585], [55.19017842296411, 30.195788245891013], [55.18875436899876, 30.202096801494026], [55.1892945334181, 30.205143790934954], [55.179668683318404, 30.20548711368887], [55.1788336780774, 30.206774574016023]];

    tags.forEach((tag) => {
        let placemark = new ymaps.Placemark(tag, {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/main/tags/map_tag.png',
            iconImageSize: [36, 36],
            iconImageOffset: [5, 5]
        });
        map.geoObjects.add(placemark);
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил  
    
    
}

ymaps.ready(init);