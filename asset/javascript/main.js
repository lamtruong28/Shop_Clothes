var search = document.querySelector('.icon__search');
var boxSearch = document.querySelector('.box-search');
var sideBarMenu = document.querySelector('#sidebar .nav-lists .title-jeans');
var subMenu = document.querySelector('.sub-lists');

var subMenuHeight =subMenu.clientHeight;
sideBarMenu.addEventListener('click', function() {
    var isClosed = subMenu.clientHeight === subMenuHeight;
        if (isClosed) {
            subMenu.style.display = 'block';
        }else {
            subMenu.style.display = null;
        }
    });

var boxSearchWidth = boxSearch.clientWidth;
search.addEventListener('click', function () {
    var isHidden = boxSearch.clientWidth === boxSearchWidth;
    if(isHidden) {
        boxSearch.style.display = 'inline-block';
        boxSearch.style.animation = 'show-box-search linear .5s';
    }else {
        boxSearch.style.display = null;
    }
});

// js modal:

var modal = document.querySelector('.modal');
var signNew = document.querySelector('.sign-new');
var modalClose = document.querySelector('.close');
var modalContainer = document.querySelector('.modal__container');

function openModal() {
    modalContainer.style.display = 'block';
    modal.classList.add('open');
    sideBar.style.display = null;
    modalContainer.style.animation = 'container-fadeIn linear 0.25s'
}

function closeModal () {
    modal.classList.remove('open');
    modalContainer.style.display = null;
    sideBar.style.display = null;
}

signNew.addEventListener('click',openModal);
modalClose.addEventListener('click', closeModal)

modal.addEventListener('click', closeModal)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

//JS Mobile:

var menuMobile = document.querySelector('.menu-mobile');
var closeMenu = document.querySelector('.close-menu');
var sideBar = document.getElementById('sidebar');
var menuItems = document.querySelectorAll('#sidebar .sub-nav a')

var sideBarWidth = sideBar.clientWidth;
menuMobile.addEventListener('click', function() {
    var isClosed = sideBar.clientWidth === sideBarWidth;
    if (isClosed) {
        modal.classList.add('open');
        sideBar.style.display = 'block';
        sideBar.style.animation = 'sidebar-appear linear .3s'
    }else {
        sideBar.style.animation = 'sidebar-hidden linear .3s'
    }
})

closeMenu.addEventListener('click', function() {
    modal.classList.remove('open');
    sideBar.style.display = null;
})

//Tự động đóng menu khi chọn menu item:

for (var menuItem of menuItems) {
        if (menuItem ==signNew) {
            continue;
        }else {
            menuItem.onclick = function() {
            modal.classList.remove('open');
            sideBar.style.display = null;
        }
    }
}















