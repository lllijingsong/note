/***
 * 
 * 点击事件
 */

function addEvent (elem, type, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(type, fn, false);
    } else if (elem.attachEvent) {
        elem.attachEvent(type, function () {
            fn.call(el);
        });
    } else {
        elem['on' + type] = fn;
    }
}


/***
 * 找到子级元素
 * 
 */

function elemChildren (node) {
    var temp = {
        length: 0,
        'splice': Array.prototype.splice
    },
        len = node.childNodes.length,
        i = 0;
    
        for(i; i < len; i++) {
            var childItem = node.childNodes[i];
            if (childItem.nodeType === 1) {
                temp[temp.length] = childItem;
                temp.length++;
            }
        }
    return temp;
}

/**
 * 找父级元素，根据输出的数字找父级元素
 * 
 */

function elemParent (node, n) {
    var type = typeof(n);

    if (type === 'undefined') {
        return node.parentNode;
    } else if (n <= 0 || type !== 'number') {
        return undefined;
    }

    while (n) {
        node = node.parentNode;
        n--;
    }
    return node;
}