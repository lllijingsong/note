;(function () {
    var lazyBody = document.querySelector('.lazy-cover');
    var imgs = lazyBody.querySelectorAll('img');
    var imgArrays = Array.prototype.slice.call(imgs);

    lazyLoad(imgArrays);

    lazyBody.onscroll = function (e) {
        if (imgArrays.length !== 0) {
            lazyLoad(imgArrays)
        }
    }

    function getTop(e) {
        var T = e.offsetTop;
        while(e = e.offsetParent) {
            T += e.offsetTop;
        }
        return T;
    }

    function lazyLoad(imgs) {
        var H = lazyBody.clientHeight;//获取可视区域高度
        var S = lazyBody.scrollTop;

        console.log(H, S)

        for (var i = 0; i < imgs.length; i++) {
            if (H + S > getTop(imgs[i]) && !imgs[i]['src']) {
                imgs[i].src = imgs[i].getAttribute('data-src');
                imgs.splice(i, 1);
            }
        }
    }
})();