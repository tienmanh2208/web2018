var p1_content = [
    1,
    {
        title : 'Unique and Modern Design',
        name : 'Portfolio PSD Template',
        content : 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum'
    },
    {
        title : 'Modern and Unique Design',
        name : 'ABC PSD Template',
        content : 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum'
    },
    {
        title : 'Unique and Modern Design',
        name : 'DEF PSD Template',
        content : 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum'
    },
    {
        title : 'Modern and Unique Design',
        name : 'GHI PSD Template',
        content : 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper- diet doming id quod mazim placerat facer possim assum'
    }
];

var p3_tab_current = 'p3-all';

window.onload = function(ev){
    document.getElementById('p1-left').onclick = function () {
        if(p1_content[0] === 1) {
            p1_content[0] = 4;
            changeContentOfPage1(4, 1);
        } else { changeContentOfPage1(p1_content[0] - 1, p1_content[0]--); }
    }

    document.getElementById('p1-right').onclick = function () {
        if(p1_content[0] === 4) {
            p1_content[0] = 1;
            changeContentOfPage1(1, 4);
        } else { changeContentOfPage1(p1_content[0] + 1, p1_content[0]++); }
    }

    document.getElementById('p3-all').onclick = function () { changeStateTabPage3('p3-all', p3_tab_current); }
    document.getElementById('p3-webdesign').onclick = function () { changeStateTabPage3('p3-webdesign', p3_tab_current); }
    document.getElementById('p3-mobileapp').onclick = function () { changeStateTabPage3('p3-mobileapp', p3_tab_current); }
    document.getElementById('p3-illustration').onclick = function () { changeStateTabPage3('p3-illustration', p3_tab_current); }
    document.getElementById('p3-photography').onclick = function () { changeStateTabPage3('p3-photography', p3_tab_current); }
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
    if( after === p3_tab_current ) return;
    else {
        p3_tab_current = after;
        document.getElementById(after).classList.remove('p3-btn');
        document.getElementById(after).classList.add('p3-btn-active');
        document.getElementById(before).classList.remove('p3-btn-active');
        document.getElementById(before).classList.add('p3-btn');
    }
}