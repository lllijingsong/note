;(function () {
    // 获取html文档的高度
    function getScrollSize () {
        if(document.body.scrollHeight) {
            return {
                width: document.body.scrollWidth,
                height: document.body.scrollHeight,
            }
        } else {
            return {
                width: document.documentElement.scrollWidth,
                height: document.documentElement.scrollHeight
            }
        }
    }

    function getViewPorSize() {
        if (window.innerHeight) {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        } else {
            if (document.compatMode === 'BackCompat') {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }
            } else {
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            }

        }   
    }

    
    function getScrollOffset () {
        if (window.pageXOffset) {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        } else {
            return {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            }				
        }
    }

    window.getScrollSize = getScrollSize();
    window.getViewPorSize = getViewPorSize();
    window.getScrollOffset = getScrollOffset;
})();