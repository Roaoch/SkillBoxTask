const select = document.querySelector('.selection');
const choices = new Choices(select, {
    searchEnabled: false,
    placeholder: true,
    placeholderValue: 'Материал',
    itemSelectText: ''
});

ymaps.ready(init);
function init(){
    const myMap = new ymaps.Map("map", {
        center: [48.872185, 2.354224],
        zoom: 15,
        controls: []
    });
    const marker = new ymaps.Placemark([48.872185, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'mdi_location_on.svg',
        iconImageSize: [48, 48],
    })
    myMap.geoObjects.add(marker);
}

const tel = document.querySelector('input[type="tel"]');
const im = new Inputmask('+7(999) 999-99-99');
im.mask(tel);

const validate = new window.JustValidate('.form', {
    rules: {
        name: {
            required: true,
        },
        mail: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            function: () => {
                const phone = tel.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    },
    messages: {
        name: {
            required: 'Вы не ввели имя'
        },
        mail: {
            required: 'Вы не ввели e-mail',
            email: 'E-mail некорректен'
        },
        tel: {
            required: 'Вы не ввели телефон',
            function: 'Телефон некорректен'
        }
    }
});

tippy('.tooltip-icon', {
    content: 'Глава 2, страница 176',
});