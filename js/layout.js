var p1_content = [
    1,
    {
        title: 'Unique and Modern Design',
        name: 'Portfolio PSD Template',
        content: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum'
    },
    {
        title: 'Modern and Unique Design',
        name: 'ABC PSD Template',
        content: 'Nam liber tempor cum soluta imper- diet doming id quod mazim placerat facer possim assum'
    },
    {
        title: 'Unique and Modern Design',
        name: 'DEF PSD Template',
        content: 'Nam eleifend option congue nihil imper- diet possim assum'
    },
    {
        title: 'Modern and Unique Design',
        name: 'GHI PSD Template',
        content: 'Nam liber tempor id quod mazim placerat facer possim assum'
    }
];

var p3_tab_current = 'p3-all';
var p2menu = {
    current: 1,
};

var p3item = { current: 1 };

window.onload = function (ev) {
    document.getElementById('p1-left').onclick = function () {
        if (p1_content[0] === 1) {
            p1_content[0] = 4;
            changeContentOfPage1(4, 1);
        } else { changeContentOfPage1(p1_content[0] - 1, p1_content[0]--); }
    }

    document.getElementById('p1-right').onclick = function () {
        if (p1_content[0] === 4) {
            p1_content[0] = 1;
            changeContentOfPage1(1, 4);
        } else { changeContentOfPage1(p1_content[0] + 1, p1_content[0]++); }
    }

    document.getElementById('p1-header-option').onclick = function () {
        document.getElementById('p1-sidenav-overlay').style.width = '100%';
        document.getElementById('p1-sidenav').style.width = '60%';
    }

    document.getElementById('p1-sidenav-close').onclick = function () {
        document.getElementById('p1-sidenav-overlay').style.width = '0px';
        document.getElementById('p1-sidenav').style.width = '0px';
    }

    document.getElementById('p1-sidenav-overlay').onclick = function () {
        document.getElementById('p1-sidenav-overlay').style.width = '0px';
        document.getElementById('p1-sidenav').style.width = '0px';
    }

    document.getElementById('p1-sidenav').onclick = function () {
    }

    document.getElementById('p3-all').onclick = function () { changeStateTabPage3('p3-all', p3_tab_current); }
    document.getElementById('p3-webdesign').onclick = function () { changeStateTabPage3('p3-webdesign', p3_tab_current); }
    document.getElementById('p3-mobileapp').onclick = function () { changeStateTabPage3('p3-mobileapp', p3_tab_current); }
    document.getElementById('p3-illustration').onclick = function () { changeStateTabPage3('p3-illustration', p3_tab_current); }
    document.getElementById('p3-photography').onclick = function () { changeStateTabPage3('p3-photography', p3_tab_current); }

    document.getElementById('p2-submenu-1').ontouchend = function () {
        var tmp = document.getElementById('p2-menu-flex').offsetWidth;
        var tmp2 = document.getElementById('p2-menu-flex').scrollLeft;
        if (tmp2 > 100) changeMenuPage2('next');
        else changeMenuPage2('current');
    }

    document.getElementById('p2-submenu-2').ontouchend = function () {
        var tmp = document.getElementById('p2-menu-flex').offsetWidth;
        var tmp2 = document.getElementById('p2-menu-flex').scrollLeft;
        if (tmp2 > (tmp + 100)) changeMenuPage2('next');
        else if ((tmp - 100) < tmp2 && tmp2 < (tmp + 100)) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    document.getElementById('p2-submenu-3').ontouchend = function () {
        var tmp = document.getElementById('p2-menu-flex').offsetWidth;
        var tmp2 = document.getElementById('p2-menu-flex').scrollLeft;
        if (tmp2 > (tmp * 2 + 100)) changeMenuPage2('next');
        else if ((tmp * 2 - 100) < tmp2 && tmp2 < (tmp * 2 + 100)) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    document.getElementById('p2-submenu-4').ontouchend = function () {
        var tmp = document.getElementById('p2-menu-flex').offsetWidth;
        var tmp2 = document.getElementById('p2-menu-flex').scrollLeft;
        if ((tmp * 3 - 100) < tmp2) changeMenuPage2('current');
        else changeMenuPage2('pre');
    }

    document.getElementById('p3-item-1').ontouchend = function () {
        var tmp = document.getElementById('p3-slider').offsetWidth;
        var tmp2 = document.getElementById('p3-slider').scrollLeft;
        if (tmp2 > 100) changeItemPage3('next');
        else changeItemPage3('current');
    }

    for (var i = 2; i <= 5; ++i) { setActionForPage3Item(i); }

    document.getElementById('p3-item-6').ontouchend = function () {
        var tmp = document.getElementById('p3-slider').offsetWidth;
        var tmp2 = document.getElementById('p3-slider').scrollLeft;
        if ((tmp * 5 * 8 / 10 - 100) < tmp2) changeItemPage3('current');
        else changeItemPage3('pre');
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
            document.getElementById('p2-menu-flex').scrollLeft = 0;
            p2menu.current = 1;
            console.log(p2menu.current);
        } else {
            document.getElementById('p2-slider-' + p2menu.current).classList.remove('p2-slider-active');
            document.getElementById('p2-slider-' + p2menu.current).classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current + 1)).classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current + 1)).classList.add('p2-slider-active');
            document.getElementById('p2-menu-flex').scrollLeft = document.getElementById('p2-menu-flex').offsetWidth * p2menu.current + (p2menu.current - 1) * 5;
            p2menu.current++;
        }
    } else if (direction === 'pre') {
        if (p2menu.current === 1) {
            document.getElementById('p2-slider-1').classList.remove('p2-slider-active');
            document.getElementById('p2-slider-1').classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-4').classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-4').classList.add('p2-slider-active');
            document.getElementById('p2-menu-flex').scrollLeft = document.getElementById('p2-menu-flex').offsetWidth * 3 + 50;
            p2menu.current = 4;
        } else {
            document.getElementById('p2-slider-' + p2menu.current).classList.remove('p2-slider-active');
            document.getElementById('p2-slider-' + p2menu.current).classList.add('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current - 1)).classList.remove('p2-slider-deactive');
            document.getElementById('p2-slider-' + (p2menu.current - 1)).classList.add('p2-slider-active');
            document.getElementById('p2-menu-flex').scrollLeft = document.getElementById('p2-menu-flex').offsetWidth * (p2menu.current - 2) + (p2menu.current - 1) * 5;
            p2menu.current--;
        }
    } else if (direction === 'current') {
        document.getElementById('p2-menu-flex').scrollLeft = document.getElementById('p2-menu-flex').offsetWidth * (p2menu.current - 1) + (p2menu.current - 1) * 5;
    }
}

/**
 * Change tab is display of page 3
 * @param {*} direction 'next', 'pre' or 'current'
 */
function changeItemPage3(direction) {
    if (direction === 'next') {
        if (p3item.current === 6) {
            // document.getElementById('p3-item-6').classList.remove('p3-item-active');
            // document.getElementById('p3-item-6').classList.add('p3-item-deactive');
            // document.getElementById('p3-item-1').classList.remove('p3-item-deactive');
            // document.getElementById('p3-item-1').classList.add('p3-item-active');
            document.getElementById('p3-slider').scrollLeft = 0;
            p3item.current = 1;
            console.log(p3item.current);
        } else {
            // document.getElementById('p3-item-' + p3item.current).classList.remove('p3-item-active');
            // document.getElementById('p3-item-' + p3item.current).classList.add('p3-item-deactive');
            // document.getElementById('p3-item-' + (p3item.current + 1)).classList.remove('p3-item-deactive');
            // document.getElementById('p3-item-' + (p3item.current + 1)).classList.add('p3-item-active');
            document.getElementById('p3-slider').scrollLeft = document.getElementById('p3-slider').offsetWidth * p3item.current * 8 / 10;
            p3item.current++;
        }
    } else if (direction === 'pre') {
        if (p3item.current === 1) {
            // document.getElementById('p3-item-1').classList.remove('p3-item-active');
            // document.getElementById('p3-item-1').classList.add('p3-item-deactive');
            // document.getElementById('p3-item-6').classList.remove('p3-item-deactive');
            // document.getElementById('p3-item-6').classList.add('p3-item-active');
            document.getElementById('p3-slider').scrollLeft = document.getElementById('p3-slider').offsetWidth * 5 * 8 / 10;
            p3item.current = 6;
        } else {
            // document.getElementById('p3-item-' + p3item.current).classList.remove('p3-item-active');
            // document.getElementById('p3-item-' + p3item.current).classList.add('p3-item-deactive');
            // document.getElementById('p3-item-' + (p3item.current - 1)).classList.remove('p3-item-deactive');
            // document.getElementById('p3-item-' + (p3item.current - 1)).classList.add('p3-item-active');
            document.getElementById('p3-slider').scrollLeft = document.getElementById('p3-slider').offsetWidth * (p3item.current - 2) * 8 / 10 + (p3item.current - 1) * 5;
            p3item.current--;
        }
    } else if (direction === 'current') {
        document.getElementById('p3-slider').scrollLeft = document.getElementById('p3-slider').offsetWidth * (p3item.current - 1) * 8 / 10 + (p3item.current - 1) * 5;
    }
}

function setActionForPage3Item(index) {
    document.getElementById('p3-item-' + index).ontouchend = function () {
        var tmp = document.getElementById('p3-slider').offsetWidth;
        var tmp2 = document.getElementById('p3-slider').scrollLeft;
        if (tmp2 > (tmp * (index - 1) * 8 / 10 + 100)) { changeItemPage3('next'); }
        else if (tmp2 < (tmp * (index - 1) * 8 / 10 - 100)) { changeItemPage3('pre'); }
        else { changeItemPage3('current'); }
    }
}