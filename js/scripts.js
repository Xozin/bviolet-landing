let states = [
    {
        class: "start",
        videoURL: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/cook-scroll-web.mp4",
        videoPoster: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/dish.jpg",
        headerHTML: '<h2 class="header-header">Быстрые и эффективные покупки<br><a href="/">в магазинах города</a></h2><div class="changeble-plain-text">Сделайте свою жизнь лучше уже сегодня</div>'
    },
    {
        class: "time",
        videoPoster: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/sidebar.jpg",
        videoURL: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/sidebar-web.mp4",
        headerHTML: '<h2 class="header-header">Экономьте время</h2><ul class="header-list"><li class="header-li">Составляйте список покупок</li><li class="header-li">Делитесь списком с друзьями и близкими</li><li class="header-li">Покупайте продукты в ближайшем магазине</li><li class="header-li">Включите ваш умный холодильник!</li></ul>'
    },
    {
        class: "manage",
        videoURL: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/cook-scroll-web.mp4",
        videoPoster: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/dish.jpg",
        headerHTML: '<h2 class="header-header">Управляйте расходами</h2><ul class="header-list"><li class="header-li">Просматривайте акции  на Ваши любимые товары</li><li class="header-li">Теперь расходы всегда под Вашим контролем</li><li class="header-li">Установите лимит и покупайте только то, что нужно</li><li class="header-li">Сделайте поход в магазин рациональным!</li></ul>'
    },
    {
        class: "dishes",
        videoURL: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/filter-scroll-web.mp4",
        videoPoster: "http://iaroslavzhmak.name/zhmak2-0/media/cooktime/Filter-scroll.jpg",
        headerHTML: '<h2 class="header-header">Открывайте новое</h2><ul class="header-list"><li class="header-li">Новые вкусы и новые возможности</li><li class="header-li">Изучайте товары, сканируя штрих-код</li><li class="header-li">Получайте персоональные предложения </li><li class="header-li">Сделайте вашу жизнь ярче!</li></ul>'
    }

];

var counter = 0;


document.addEventListener('DOMContentLoaded', () => {
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });
    parallaxInstance.friction(0.2, 0.2);
    let video = document.getElementsByTagName("video")[0];
    let header = document.getElementsByClassName("header")[0];
    let content = document.getElementsByClassName("changable-content")[0];
    let source = document.getElementsByTagName("source")[0];
    header.classList.add(states[counter].class);
    content.innerHTML = states[counter].headerHTML;

    function playVideo(number){
        header.classList.add(states[number].class);
        content.innerHTML = states[number].headerHTML;
        source.src = states[number].videoURL;
        video.load();
        video.play();
    }
    function playNext() {
        header.classList.remove(states[counter].class);
        counter = (counter + 1)%4;
        playVideo(counter);
    }

    function playPrev() {
        header.classList.remove(states[counter].class);
        counter = (3 + counter)%4;
        playVideo(counter)

    }

    video.addEventListener("ended", function () {
        playNext();
    }, true);

    var nextButton = document.getElementById("next");
    nextButton.addEventListener('click', () => {
        playNext();
    });

    var prevButton = document.getElementById("prev");
    prevButton.addEventListener('click', () => {
        playPrev();
    });
});