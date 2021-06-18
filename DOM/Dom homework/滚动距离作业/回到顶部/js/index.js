;(function () {
    var backBtn = document.getElementsByClassName('backToTop')[0];
    console.log(backBtn)
    backBtn.onclick = function (e) {
        window.scrollTo(0, 0);
    }
})();