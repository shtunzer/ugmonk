// MENU

document.getElementById('burger-btn-open').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burger-btn-hide').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});

// TABS

const tabItem = document.querySelectorAll('.goods__tabsBox-btn');
const tabContent = document.querySelectorAll('.goods__content');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('--active-btn');
    })

    tabTarget.classList.add('--active-btn');

    tabContent.forEach(function(item){
        item.classList.remove('--active-content')
    })

    document.querySelector(`#${button}`).classList.add('--active-content');
}
