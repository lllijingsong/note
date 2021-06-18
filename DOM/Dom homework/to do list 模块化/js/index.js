window.onload = function () {
    init();
}

function init() {
    initToDoList;
}

var initToDoList = (function () {
    var showInput = document.getElementsByClassName('j-show-input')[0],
        inputWrap = document.getElementsByClassName('input-wrap')[0],
        textInput = document.getElementById('textInput'),
        addItem = document.getElementsByClassName('j-add-item')[0],
        oList = document.getElementsByClassName('j-list')[0],
        inputStatus = false,
        isEdit = false,
        oEdit = null;

    addEvent(showInput, 'click', function () {
        if (!inputStatus) {
            inputStatus = true;
            inputWrap.style.display = 'block';
            addItem.innerText = '增加项目';
            isEdit = false;
        } else {
            inputStatus = false;
            inputWrap.style.display = 'none';
        }
    });

    addEvent(addItem, 'click', function () {
        if (isEdit) {
            oEdit.innerText = textInput.value;
            isEdit = false;
            inputStatus = false;
            inputWrap.style.display = 'none';
            textInput = '';
            return
        } else {
            var oLi = document.getElementsByClassName('item'),
                inpValue = textInput.value.trim(),
                len = inpValue.length,
                item,
                liLength = oLi.length;

            for(var i = 0; i < liLength; i++) {
                item = elemChildren(oLi[i])[0];
                var text = item.innerText;
                if (text === inpValue) {
                    alert('重复啦。。。。')
                    textInput.value = '';
                    return
                }
            }

            if (len !== 0) {
                var li = document.createElement('li');
                li.className = 'item';
                li.innerHTML = itemTpl(inpValue);
                oList.appendChild(li);
                textInput.value = '';
                inputStatus = false;
                inputWrap.style.display = 'none';
            } else {
                return
            }
        }
    })

    addEvent(oList, 'click', function (e) {
        var e = e || window.event,
            tar = e.target || e.srcElement,
            className = tar.className;
        
        if (className === 'item-icon item-edit') {

            var parent = elemParent(tar, 2),
                childs = elemChildren(parent)[0],
                oli = document.getElementsByClassName('item'),
                length = oli.length,
                item;

            for(var i = 0; i < length; i++) {
                item = oli[i];
                item.className = 'item';
            }

            // console.log(document.getElementsByClassName('item'))

            console.log(Array.prototype.indexOf.call(oli, parent))




            parent.className = 'item active';
            addItem.innerText = '修改项目';
            inputStatus = true;
            isEdit = true;
            inputWrap.style.display = 'block';
            textInput.value = childs.innerText;
            oEdit = childs;

        } else if (className === 'item-icon item-del') {
            elemParent(tar, 2).remove();
        }
    })

    function itemTpl (text) {
        return (
            '<p class="item-content">'+ text +'</p>' +
            '<div class="btn-group">' +
                '<a href="javascript:;" class="item-icon item-edit"></a>' +
                '<a href="javascript:;" class="item-icon item-del"></a>' +
            '</div>'
        )
    }
}());