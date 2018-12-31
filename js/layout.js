var p1_content = [
    1,
    {
        title: 'Unique and Modern Design',
        name: 'Portfolio PSD Template',
        content: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum',
        img: '../web2018/images/page1/page1-background.jpg'
    },
    {
        title: 'Modern and Unique Design',
        name: 'ABC PSD Template',
        content: 'Nam liber tempor cum soluta imper- diet doming id quod mazim placerat facer possim assum',
        img: '../web2018/images/page1/page1-background-2.jpg'
    },
    {
        title: 'Unique and Modern Design',
        name: 'DEF PSD Template',
        content: 'Nam eleifend option congue nihil imper- diet possim assum',
        img: '../web2018/images/page1/page1-background-3.jpg'
    },
    {
        title: 'Modern and Unique Design',
        name: 'GHI PSD Template',
        content: 'Nam liber tempor id quod mazim placerat facer possim assum',
        img: '../web2018/images/page1/page1-background-4.jpg'
    }
];

var p3_tab_current = 'p3-all';
var p2menu = {
    current: 1,
};

var p3item = { current: 1 };
var touch = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0
}

var p1_sidenav_overlay, p1_sidenav, p2_menu_flex, page1content, p3_slider;

window.onload = function (ev) {
    p1_sidenav_overlay = document.getElementById('p1-sidenav-overlay');
    p2_menu_flex = document.getElementById('p2-menu-flex');
    // p1_sidenav = document.getElementById('p1-sidevav');
    page1content = document.getElementById('page1content');
    p3_slider = document.getElementById('p3-slider');
    p1_sidenav = document.getElementById('p1-sidenav');

    document.getElementById('p1-left').onclick = function () { changeContentPage1('pre'); }

    document.getElementById('p1-right').onclick = function () { changeContentPage1('next'); }

    document.getElementById('p1-header-option').onclick = function () {
        p1_sidenav_overlay.style.transform = 'translate(0,0)';
        p1_sidenav_overlay.style.msTransform = 'translate(0,0)';
        p1_sidenav_overlay.style.webkitTransform = 'translate(0,0)';
        p1_sidenav.style.transform = 'translate(0,0)';
        p1_sidenav.style.msTransform = 'translate(0,0)';
        p1_sidenav.style.webkitTransform = 'translate(0,0)';
    }

    document.getElementById('p1-sidenav-close').onclick = function () {
        p1_sidenav_overlay.style.transform = 'translate(100%,0)';
        p1_sidenav_overlay.style.msTransform = 'translate(100%,0)';
        p1_sidenav_overlay.style.webkitTransform = 'translate(100%,0)';
        p1_sidenav.style.transform = 'translate(100%,0)';
        p1_sidenav.style.msTransform = 'translate(100%,0)';
        p1_sidenav.style.webkitTransform = 'translate(100%,0)';
    }

    p1_sidenav_overlay.onclick = function () {
        p1_sidenav_overlay.style.width = '0px';
        p1_sidenav.style.width = '0px';
    }

    document.getElementById('p3-all').onclick = function () { changeStateTabPage3('p3-all', p3_tab_current); }
    document.getElementById('p3-webdesign').onclick = function () { changeStateTabPage3('p3-webdesign', p3_tab_current); }
    document.getElementById('p3-mobileapp').onclick = function () { changeStateTabPage3('p3-mobileapp', p3_tab_current); }
    document.getElementById('p3-illustration').onclick = function () { changeStateTabPage3('p3-illustration', p3_tab_current); }
    document.getElementById('p3-photography').onclick = function () { changeStateTabPage3('p3-photography', p3_tab_current); }

    document.getElementById('p2-submenu-1').ontouchend = function () {
        var tmp = p2_menu_flex.offsetWidth;
        var tmp2 = p2_menu_flex.scrollLeft;
        if (tmp2 > 100) changeMenuPage2('next');
        else changeMenuPage2('current');
    }

    document.getElementById('p2-submenu-2').ontouchend = function () {
        var tmp = p2_menu_flex.offsetWidth;
        var tmp2 = p2_menu_flex.scrollLeft;
        if (tmp2 > (tmp + 100)) changeMenuPage2('next');
        else if ((tmp - 100) < tmp2 && tmp2 < (tmp + 100)) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    document.getElementById('p2-submenu-3').ontouchend = function () {
        var tmp = p2_menu_flex.offsetWidth;
        var tmp2 = p2_menu_flex.scrollLeft;
        if (tmp2 > (tmp * 2 + 100)) changeMenuPage2('next');
        else if ((tmp * 2 - 100) < tmp2 && tmp2 < (tmp * 2 + 100)) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    document.getElementById('p2-submenu-4').ontouchend = function () {
        var tmp = p2_menu_flex.offsetWidth;
        var tmp2 = p2_menu_flex.scrollLeft;
        if ((tmp * 3 - 100) < tmp2) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    page1content.ontouchstart = function () {
        touch.start_x = event.touches[0].clientX;
    }

    page1content.ontouchmove = function () {
        touch.end_x = event.touches[0].clientX;
    }

    page1content.ontouchend = function () {
        if ((touch.end_x - touch.start_x) > 100) { changeContentPage1('pre'); }
        else if ((touch.end_x - touch.start_x) < -100) { changeContentPage1('next'); }
    }
}

/**
 * This function will change icon slide of page 1
 * @param {number} index
 * @param {number} before
 */
function changeContentOfPage1(index, before) {
    document.getElementById('p1-title').innerHTML = p1_content[index].title;
    document.getElementById('p1-name').innerHTML = p1_content[index].name;
    document.getElementById('p1-content').innerHTML = p1_content[index].content;
    document.getElementById('p1-slide' + before).classList.remove('p1-img-active');
    document.getElementById('p1-slide' + before).classList.add('p1-img-circle');
    document.getElementById('p1-slide' + before).setAttribute('src', './images/page1/page1-circle.png');
    document.getElementById('p1-slide' + index).classList.remove('p1-img-circle');
    document.getElementById('p1-slide' + index).classList.add('p1-img-active');
    document.getElementById('p1-slide' + index).setAttribute('src', './images/page1/page1-circle-active.png');
}

/**
 * Change color and background color of tab is chosen
 * @param {id} after 
 * @param {id} before 
 */
function changeStateTabPage3(after, before) {
    if (after === p3_tab_current) return;
    else {
        p3_tab_current = after;
        document.getElementById(after).classList.add('p3-btn-active');
        document.getElementById(before).classList.remove('p3-btn-active');
    }
}

/**
 * Change current tab of page 2 menu
 * @param {string} direction next, pre or current
 */
function changeMenuPage2(direction) {
    if (direction === 'next') {
        if (p2menu.current === 4) {
            document.getElementById('p2-slider-4').classList.remove('p2-slider-active');
            document.getElementById('p2-slider-4').classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-1').classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-1').classList.add('p2-slider-active');
            p2_menu_flex.scrollLeft = 0;
            p2menu.current = 1;
            console.log(p2menu.current);
        } else {
            document.getElementById('p2-slider-' + p2menu.current).classList.remove('p2-slider-active');
            document.getElementById('p2-slider-' + p2menu.current).classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current + 1)).classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current + 1)).classList.add('p2-slider-active');
            p2_menu_flex.scrollLeft = p2_menu_flex.offsetWidth * p2menu.current + (p2menu.current - 1) * 5;
            p2menu.current++;
        }
    } else if (direction === 'pre') {
        if (p2menu.current === 1) {
            document.getElementById('p2-slider-1').classList.remove('p2-slider-active');
            document.getElementById('p2-slider-1').classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-4').classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-4').classList.add('p2-slider-active');
            p2_menu_flex.scrollLeft = p2_menu_flex.offsetWidth * 3 + 50;
            p2menu.current = 4;
        } else {
            document.getElementById('p2-slider-' + p2menu.current).classList.remove('p2-slider-active');
            document.getElementById('p2-slider-' + p2menu.current).classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current - 1)).classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current - 1)).classList.add('p2-slider-active');
            p2_menu_flex.scrollLeft = p2_menu_flex.offsetWidth * (p2menu.current - 2) + (p2menu.current - 1) * 5;
            p2menu.current--;
        }
    } else if (direction === 'current') {
        p2_menu_flex.scrollLeft = p2_menu_flex.offsetWidth * (p2menu.current - 1) + (p2menu.current - 1) * 5;
    }
}

/**
 * change content of page 1
 * @param {*} direction 'next' or 'pre'
 */
function changeContentPage1(direction) {
    document.getElementById('page1content').style.opacity = 0;

    fade = setTimeout(function () {
        if (direction === 'next') {
            if (p1_content[0] === (p1_content.length - 1)) {
                p1_content[0] = 1;
                changeContentOfPage1(1, p1_content.length - 1);
            } else { changeContentOfPage1(p1_content[0] + 1, p1_content[0]++) }
        } else if (direction === 'pre') {
            if (p1_content[0] === 1) {
                p1_content[0] = p1_content.length - 1;
                changeContentOfPage1(p1_content.length - 1, 1);
            } else { changeContentOfPage1(p1_content[0] - 1, p1_content[0]--) }
        }

        document.getElementById('page1content').style.opacity = 1;
    }, 300)
}

/**
 * Change tab is display of page 3
 * @param {*} direction 'next', 'pre' or 'current'
 */
function changeItemPage3(direction) {
    if (direction === 'next') {
        if (p3item.current === 6) {
            document.getElementById('p3-item-6').classList.remove('p3-item-active');
            document.getElementById('p3-item-6').classList.add('p3-item-deactive');
            document.getElementById('p3-item-1').classList.remove('p3-item-deactive');
            document.getElementById('p3-item-1').classList.add('p3-item-active');
            p3_slider.scrollLeft = 0;
            p3item.current = 1;
            console.log(p3item.current);
        } else {
            document.getElementById('p3-item-' + p3item.current).classList.remove('p3-item-active');
            document.getElementById('p3-item-' + p3item.current).classList.add('p3-item-deactive');
            document.getElementById('p3-item-' + (p3item.current + 1)).classList.remove('p3-item-deactive');
            document.getElementById('p3-item-' + (p3item.current + 1)).classList.add('p3-item-active');
            p3_slider.scrollLeft = p3_slider.offsetWidth * p3item.current * 8 / 10;
            p3item.current++;
        }
    } else if (direction === 'pre') {
        if (p3item.current === 1) {
            document.getElementById('p3-item-1').classList.remove('p3-item-active');
            document.getElementById('p3-item-1').classList.add('p3-item-deactive');
            document.getElementById('p3-item-6').classList.remove('p3-item-deactive');
            document.getElementById('p3-item-6').classList.add('p3-item-active');
            p3_slider.scrollLeft = p3_slider.offsetWidth * 5 * 8 / 10;
            p3item.current = 6;
        } else {
            document.getElementById('p3-item-' + p3item.current).classList.remove('p3-item-active');
            document.getElementById('p3-item-' + p3item.current).classList.add('p3-item-deactive');
            document.getElementById('p3-item-' + (p3item.current - 1)).classList.remove('p3-item-deactive');
            document.getElementById('p3-item-' + (p3item.current - 1)).classList.add('p3-item-active');
            p3_slider.scrollLeft = p3_slider.offsetWidth * (p3item.current - 2) * 8 / 10 + (p3item.current - 1) * 5;
            p3item.current--;
        }
    } else if (direction === 'current') {
        p3_slider.scrollLeft = p3_slider.offsetWidth * (p3item.current - 1) * 8 / 10 + (p3item.current - 1) * 5;
    }
}

function setActionForPage3Item(index) {
    document.getElementById('p3-item-' + index).ontouchend = function () {
        var tmp = p3_slider.offsetWidth;
        var tmp2 = p3_slider.scrollLeft;
        if (tmp2 > (tmp * (index - 1) * 8 / 10 + 100)) { changeItemPage3('next'); }
        else if (tmp2 < (tmp * (index - 1) * 8 / 10 - 100)) { changeItemPage3('pre'); }
        else { changeItemPage3('current'); }
    }
}