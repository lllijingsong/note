# DOM
## DOM 
    Document Object Model 文本对象模型

## ECMAScript 内部对象
    本地对象和内置对象都是ES的内部对象
### JS 本地对象 Native Object
    Object Function Array String Boolean Number
    Error EvalError SyntaxError RangeError
    ReferenceError TypeError URIError
    Date RegExp

### JS 内置对象  Built-in Object
    Global Math
    Global是一个虚拟对象无法打印出来的，他上面有 isNaN() parseInt() Number decodeURI 等方法。
    Infinity NaN undefined 都是 他下面的属性

### 宿主对象 Host Object
    执行JS脚本的环境提供的对象， 浏览器对象, 兼容性问题!!! DOM的难题。
    浏览器对象 window(BOM)和document(DOM);

### DOM存在的意义
	通过浏览器提供的这一套方法表示或者操作HTML和XML;
	
	DOM无法操作CSS的, 也就是说JavaScript 无法操作CSS, 他操作是当前标签上的style属性。
	间接通过内联样式去修改样式。

### HTML / XML
	XML -> XTML -> HTML
	一开始只有XML可以自定义标签, 后来经过演化，XTML 就是最近是HTML的一个过度阶段;
	HTML的标签浏览器是可以直接识别的并带有默认样式。
	XML可以使用DOM解析 document.getElementsByTagName('xxx'); 就可以取到该元素;
	
	<div></div> // 这个叫标签
	<div> 123 </div>   // 加一起叫元素
	
	getElementsByTagName // 通过某一个标签获取某一个元素。

### 元素节点树
	节点包含元素 -》 元素节点 -》DOM元素
	
	<ul>
		<li>
			<h2></h2>
			<a></a>
			<p></p>
		</li>
	</ul>
	
	h2, a, p 是li 的子元素;
	li > h2, a, p 是ul的子元素
	h2 是 a 的前一个兄弟元素
	p 是 a 的后一个兄弟元素

### document对象
#### document 方法
	在选择一个元素的时候，命名规范：o_xxx; 企业级的写法
	o === object;
	
	document.getElementById('xxx');
	document.getElementsByTagName('div');
	document.getElementsByClassName('box-cover');
	
	DOM 规定了 document 是一个顶层对象, 包含了整个html元素;
	
	document = {
		getElementById: function () {}, 
			// 注意ie8及以下的浏览器是不区分id属性大小写的！！！也就是说大写小写都能匹配上。 
		   	   还有如果标签中有name属性，那么ie8及以下也可以通过name这个值来匹配元素;
			
			// id 能不用就别使用，作为钩子,给后台使用的， 也可能作为tpl的标签提供给模板使用的；
	
		getElementsByTagName(): function () {}, // 获取一组元素; 返回一个类数组; // 放心用基本全线支持！！！ 兼容到ie4；
	
		getElementsByClassName(): function () {}, // // 获取一组元素; 返回一个类数组; ie8及以下是没有该方法的！！！
	
		getElementsByName(''): function () {}, // ie8以下， 读取元素中name属性 用的贼少...


	// HTML5 新引入的WEB API, 但是他不是HTML5以后才有的, 只是HTML5正式把他引入进标准。 兼容到ie7, ie6以下不兼容。
	// 经过测试，querySelector 的整体性能没有get系的高也没有get系速度快, 公司这个方法也使用的很少。 ！！！
	// 通过测试，querySelectorAll 的数据是存在缓存里的，不能像getElementsByTagName一样实时同步,！！！
	// 节点被删除了不能实时同步。
	
		var divs = document.querySelectorAll('.items'); // 有3个div的
		var divs2 = document.getElementsByClassName('items');
		divs[0].remove();
		divs2[0].remove();
		console.log(divs); // 即使移除了这数组依然没有改变还是返回3个div [div, div, div];
		console.log(divs2); // 结果返回了一个div [div];
		
		// 和css选中器一样的传参 #id、 .className、 div、
		querySelector: function () {}, // 最多选择一个元素，读取第一个元素。 可以使用css3选择器的方法传参;
		querySelectorAll: function () {}, // 会返回一个类数组, 可以继承数组方法！但是无法操作！！！原型指向NodeList。可以使用css3选择器的方法传参;
	}
	
	总结： 推荐使用get系的，其速度性能都比querysSelector的好，并且querySelector的数据是存储在内存的，无法同步DOM树，也就是说DOM发生改变了querySelector无法更新。
	querySelector的优点：方便！可以使用css选择器的方法去找DOM元素，可以兼容IE7;



#### document 属性
##### parentNode
	return 每一个元素只有一个父元素节点
	
	div.parentNode.parentNode.parentNode.parentNode.parentNode
	可以使用方法查找父节点 body -> html -> #document -> null;

##### childNodes （节点树）（兼容好 IE5 ~ IE6）

	这个是一个神奇的方法，不仅可以打印子级元素还可以打印出空格数和注释数。
	好在我们有一个对照表，熟话说，给我一个字典表，什么字段我都可以给你转译喽！
	
	1：元素节点 = 1
	2：属性节点 = 2
	3：文本节点 = 3(text)
	4：注释节点 = 8(comment)
	5: document = 9
	6: DocumentFragment = 11

##### firstChild and lastChild （节点树） (公司不用)（兼容好 IE5 ~ IE6）
	结合childNodes的返回值， 一般情况下会返回 #text 文本节点

##### nextSibling and previousSibling （节点树） (公司不用)（兼容好 IE5 ~ IE6）
	结合childNodes的返回值， 根据childNodes 对照表来判断


##### parentElement (元素节点树) IE9 及以下不支持 (公司不用)
	和parentNode 唯一区别
	div.parentElement.parentElement.parentElement
	可以使用方法查找父节点 body -> html（没有父元素了） -> null

##### children （元素节点树） IE7 及以下不支持
	子元素树， 返回一个数组里面都是子元素合集
	！！！ childrenElementCount 就是 children.length;！！！  IE9 及以下不支持

##### firstElementChild and lastElementChild  IE9 及以下不支持 (公司不用)
	父节点的第一个子元素和最后一个子元素;

##### nextElementSibiling and previousElementSibling  IE9 及以下不支持 (公司不用)
	上一个兄弟元素 和 下一个兄弟元素

### 节点属性

#### nodeName (节点的第一个属性)（用的不多）
	返回节点的名称 只读属性， 修改无效，不会报错。
	"DIV", "#text" ...

#### nodeValue (节点的二个属性)（用的不多）
	打印对应的节点value, 元素节点返回null,
	这个是可写的 属性， 注释， 文本可用。

#### nodeType
	会返回 根据传入的数据放回对应编号
	1：元素节点 = 1
	2：属性节点 = 2
	3：文本节点 = 3(text)
	4：注释节点 = 8(comment)
	5: document = 9
	6: DocumentFragment = 11
	
	使用 childNodes 和 nodeType 写一个兼容爆炸贼牛逼的仿children
	
	// 用普通数组方法来写的
	let div = document.getElementsByClassName('deve1')[0];
	console.log(div);
	function elemChildren (elem) {
		var arr = [],
			chils = elem.childNodes;
	
		for(var i = 0; i < chils.length; i++) {
			var item = chils[i];
			if (item.nodeType === 1) {
				arr.push(item);
			}
		}
		return arr;
	}
	console.log(elemChildren(div));
	
	// 用类数组来完成
	
	let div = document.getElementsByClassName('deve1')[0];
	function elemChildren (elem) {
		var temp = {
			'length': 0,
			'splice': Array.prototype.splice，
			'push': Array.prototype.push
		},
		len = elem.childNodes.length;
		for(var i = 0; i < len; i++) {
			var item = elem.childNodes[i];
			if (item.nodeType === 1) {
				temp[temp['length']] = item;
				temp['length']++;
				// 可以用push temp.push(item);
			}
		}
		return temp
	}
	console.log(elemChildren(div));

### 属性节点 (用的很少)
	<!-- 了解即可 -->
	getAttributeNode('id').nodeValue,
	getAttributeNode('id').value,
	attributes[1] // 返回一个集合

### 查看属性，修改属性 （用的多）
	getAttribute
	setAttribute

### hasChilNodes()
	查看当前节点有没有子级 true or false 
	根据下表来判断的，注意换行，注释，空格，都放回true
	1：元素节点 = 1
	2：属性节点 = 2
	3：文本节点 = 3(text)
	4：注释节点 = 8(comment)
	5: document = 9
	6: DocumentFragment = 11

##### parentNode and childrenNodes
	节点包含元素 -> 元素节点 = DOM元素
	每一个元素只有一个父节点，
	每一个父节点可以能有多个子节点

### DOM结构树



### 创建节点
	document.createElement('div');
	使用appendChild(div) // 放进父级元素中;

### 创建文本节点
	没有标签就是普通文本；
	let txt = document.createTextNode('xxx');
	appendChild(txt);

### 创建注释节点
	// 创建注释
	document.createComment('这里是注释')
	appendChild('')

### appendChild ！
	Node.prototype上的方法;
	传参是 节点 或者 是DOM元素;
	会把追加的节点放到父节点的最后一位;
	appendChild 不仅可以动态增加节点， 还可以动态剪切节点！！！
	可以直接把其他节点直接剪切 追加到其他位置!!!;

### insertBefore
	给一个父级元素中的一个子元素前面追加一个节点;
	parent.insertBefore(new Element, origin);

### removeChild
	parent.removeChild(child);
	父节点 干掉 子节点;
	只会删除DOM节点，不会删除堆里面的数据; 

### remove
	自己干掉自己，删除DOM节点，删除堆的数据。
	ES5 带来的方法，如果浏览器支持ES5，最好就只用这个方法；

### replaceChild
	IE 6
	parentNode.replaceChild(newChild, oldChild);
	用来替换 oldChild 的新节点。如果该节点已经存在于 DOM 树中，则它首先会被从原始位	   置删除。

### innerText / innerHTML
	// HTMLElement.prototype 都在里面
	// innerHTML 在Element.prototype里面也有.
	innerHTML 支持解析标签
	innerText 会把 <> / 等解析成字符实体，这样就可以显示<div></div>这种在页面上了
	老版本的火狐不支持innerText (支持textContent) (老版本IE不支持textContent);


### document.createDoucumentFragment();
	这个方法很牛逼， 用的很多。
	比方说我们需要给一个ul里面添加很多的li标签，这个时候就要创建出很多
	document.createElement('li'); 然后通过innerHTML插入到ul，
	这个插入的过程会导致页面回流也就是浏览器渲染引擎不停的计算几何位置，严重影响性能，
	
	所以这个时候我们需要再中间包一个盒子，一次渲染， 但是呢这样性能是保护了，
	不过与此同也多了一个标签 ul > div > li; 这样看起来就很奇怪了，
	这个时候我们就要使用这个新东西，document.createDoucmentFragrment();
	创建一个文档碎片， 这个东西是存储在内存中的不会渲染到DOM树上，所以可以放心把
	li innerHTML这个这个对象的上面。
	推荐 li 使用 字符串来写，经过测试 字符串性能最好，速度最快！

### setAttribute / getAttribute

	一个设置用来设置节点属性的，另一个用来获取节点属性的

### dataset（html5)
	在PC端兼容不好，IE9及以下，移动端可以放心使用。
	<div data-index="1" data-id="111"></div>

### 浏览器的怪异模式和标准模式
	在html的最上行代码加上<!DOCTYPE html> 就是遵循W3C标准的，html5规范 标准模式：
	没有这行代码就是浏览器的怪异模式，

#### document.compatMode （编译模式）
	CSS1Compat   W3C规范模式， 标准模式；
	BackCompat 怪异模式，向后兼容模式；

### 查看滚动条距离 兼容写法
	常规使用： window.pageXOffset  window.pageYOffset
	IE9/IE8及以下走false
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

### 浏览器可视区域
	不包括F12调试框控制台 和url框 工具栏
	常规：window.innerWidth   window.innerHeigth
	IE9/IE8及以下：
		标准模式：document.documentElement.clientWidth
				document.documentElement.clientHeight
				
		怪异模式 document.body.clientWidth
				document.body.clientHeight
	
		function getViewPorSize() {
			if (window.innerWidth) {
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
		
	window.outHeight  window.outWidth（取整个浏览器的宽高， 控制台都算进去了）

### DOM文档的宽高
	整个html的大小，包括滚动条里被隐藏的内容
	// window.innerWidth + window.pageXOffset
	常用：document.body.scrollHeight / scrollWidth; // IE 5 6 7 不支持 
	
		function getScrollSize () {
			if (document.body.scrollWidth) {
				return {
					width: document.body.scrollWidth,
					height: document.body.scrollHeight
				}
			} else {
				return {
					width: document.documentElement.scrollWidth,
					height: document.documentElement.scrollHeight
				}
			}
		}

### getBoundingClientRect() 不用
	不可以实时更新数据
	查看某个元素的定位 宽高
	xxx.getBoundingClientRect(); 


### offsetLeft offsetTop offsetParent;
	offsetTop/offsetLeft
	首先根据自身有无position属性，如果有就取自身的top, left属性（margin和padding和影响结果）
	其次就是取父级的position属性，如果父级也没有就一直往上找，直到body停止，取body到子节点的位置。
	
	offsetParent:
		child.offsetParent // 返回父级中有定位position属性的元素，一层一层往上找，最高返回body, 在找就是null了。
		
			function getElemDocPosition (el) {
				var parent = el.offsetParent,
					offsetLeft = el.offsetLeft,
					offsetTop = el.offsetTop;
	
				while(parent) {
					offsetLeft += parent.offsetLeft;
					offsetTop += parent.offsetTop;
					parent = parent.offsetParent
				}
				return {
					Left: offsetLeft,
					top: offsetTop
				}
			}

### 控制滚动条
	// 没有兼容性的问题，效果一样，控制浏览器的滚动条跳到某一个位置上；
	window.scroll(x, y) window.scrollTo(x, y); 
	
	// 小说里的自动滚动就是用的这个方法，滚动条递增的滚动。
	window.scrollBy(x, y)
	
	// 浏览器的高度（包含滚动条） = innerWidth（当前高度，不包括滚动条）+ 滚动距离

### DOM间接操作CSS
	JS是没有办法直接操作修改CSS的样式的，只能通过DOM间接修改element.style的属性来控制样式。
	elem.style.xxx ->可读可写; // 可以通过elem.style.width读取到值，注意这里读取到的是行内样式，不是CSS的样式！！！
	oDiv.style 可以查看已经设置的值 // 如果没有设置打印默认是""
	所有的行内样式必须按照小驼峰，写的值一定要用字符串！
	符合值一定要拆解赋值 比如：
		oDiv.style.border = '1px solid #000'; // 效率低下
		要拆解成以下
		// 效率比前面的好
		oDiv.style.borderWidth = '1px';
		oDiv.style.borderStyle = 'solid';
		oDiv.style.borderColor = '#000';
	
	如果使用JS 保留字 一定要在前面加css // oDiv.style.cssFloat = 'left' // 这是规范 ！！！一定记住

### getComputedStyle 查看计算样式
	计算样式，计算机认为的绝对值，16进制 转化成 rgb, rem, em，转换成px;
	
		// 查看行内样式的属性兼容写法
		// getComputedStyle //不兼容IE9及以下
		// 这个方法只能读取行内的属性，element.style下的，无法访问CSS的。
		function getStyles (elem, prop) {
			if (window.getComputedStyle) {
				if (prop) {
					return window.getComputedStyle(elem, null)[prop];
				} else {
					return window.getComputedStyle(elem, null);
				}
			} else 
			if (prop) {
				return elem.currentStyle(prop);
			} else {
				return elem.currentStyle;
			}
		}
		
	window.getComputedStyle(elem, null)
	null 是用来操作伪元素的。 after、 before

### offsetWidth / offsetHeight
	可以访问元素的物理宽高、不过会把盒子的padding也计算进去，贼不好，所以要获取并修改的时候就不要使用这个会出大问题的。
	最好是使用getComputedStyle这方法。

## DOM 事件
	绑定事件：点击、鼠标移入/移出、这些事件是元素天生就带着的，所谓的绑定事件，其实是给事件的反馈绑定一个处理函数。
	事件 + 事件的反馈 = 前端交互 交互体验;
###`事件句柄`是指事件发生时要进行的操作。

### 如何绑定事件处理函数
	都属句柄的绑定方法
	by DOM0
	element.onclick = function (e) {}; // JS
	<button onclick="test()">xxx</button> // HTML
	注意 上面这种绑定事件处理函数的方法 会覆盖之前声明声明的同一事件的绑定方法。
	简单就是一个元素的一个事件只能出现一种处理函数！！！

### 监听事件
	IE9以下不支持，但是是W3C的规范 by DOM2
	不是句柄
	elem.addEventListener(事件类型，事件处理函数，false);
	oBtn.addEventListener('click', function () {
		....
		this -> oBtn
	}, false)
	注意，这个和句柄的完全不同，他可以给一个元素写多个事件的处理方法。（比如多个click事件处理函数，前提是这两个函数指向不同的堆内存，如果相同就执行一次）；
	简单说：当事件处理函数的地址指向不相同的时候可以执行多次，相同就执行一次。
	
	兼容IE8以下的绑定方法
	这个无视上面IE9的规制，绑定了啥就执行啥，不管是否重复
	注意这里有 on！！！
	oBt.attachEvent('onclick', function () {
		...
		this 指向 window
		用 call 和 apply 可以完美解决这个问题。
	})
	
	    /*
	        @param { Object } HTML Element
	        @param { String } event 'click', 'mouseenter', 'mouseover', 'mouseup', 'keydown'
	        @param { Function } event 
	        @return undefined
	    */
	    function addEvent (elem, type, fn) {
	        if (elem.addEventListener) {
	            elem.addEventListener(type, fn, false);
	        } else if (elem.attachEvent) {
	            elem.attachEvent('on' + type, fn);
	        } else {
	            elem['on' + type] = fn;
	        }
	    }


### 解除事件处理
	elem.onclick = null / false;
	elem.removeEventListener('click', text, false); // 绑定时候是什么样解除的时候还是什么样
	ele.detachEvent('onclick', test); // 这个也一样


### 事件冒泡 && 事件捕获

#### 事件冒泡
	不能从视角分析， 这个是HTML嵌套结构, 只要是嵌套结构默认子元素事件被触发都会产生冒泡
	子级的点击事件被执行，会带动父级的点击事件。
	从子级向父级传递，一层一层传递
	子元素的事件会从子元素起，向父元素冒泡，从而触发父元素和子元素传递的同一事件

##### 取消冒泡
	// 加上后就阻止了。
	e.stopPropagation(); // Event.prototype   W3C 推荐
	// IE的处理
	e.cancelBubble = true; // 默认这个值是false;
	    function cancelBubble(e) {
	        var e = e || window.event;
	        if (e.stopPropagation) {
	            e.stopPropagation();
	        } else {
	            e.cancelBubble = true;
	        }
	    }

#### 事件捕获
	老IE 和老版本的浏览器没有捕获。
	必须是嵌套关系，
	在elem.addEventListener('click', function () {
}, true) // 把false 修改成，true就是事件捕获，和事件冒泡正好相反。
事件冒泡是从 子级 向 父级 冒泡。
事件捕获是从 父级 向 子级 捕获。

#### 冒泡、捕获 执行顺序
	先捕获 后冒泡，到事件源就执行事件源。（事件源不属于捕获和冒泡）

### 取消默认事件（右键菜单）（a标签）（form commit 提交）
	document.oncontextmenu = function (e) {
		return false; // 这个只能在句柄的情况下使用。
	}
	
	W3C推荐 e.preventDefault(); // IE9 及以下不支持
	e.returnValue = false //  IE9兼容 
	
### 事件流
	事件流：描述从页面中接收事件的顺序 冒泡、捕获
	微软IE提出： 事件冒泡流 （Event Bubbling)
	网景Netscape提出: 事件捕获流 （Event Capturing)
	
	分为3个阶段，
	事件捕获、处于目标阶段、事件冒泡阶段、// 顺序从左到右。
	
	遇到捕获就是  捕获（捕获到的父节点） -> 目标阶段（点击的子节点）
	遇到冒泡就是  目标阶段（点击的位置）-> 冒泡阶段。
	
	这里需要注意的是，当处于目标阶段的时候，就是按代码的顺序来执行了，也就是说，如果既有捕获又有冒泡的话，执行的目标阶段更加代码先后来执行。
	比如，冒泡事件在前，结果就会是 捕获 捕获，冒泡(目标阶段), 捕获(目标阶段)，冒泡，冒泡

### 事件对象
	就是event；
	elem.onclick = function (e) {
		var e = e || window.event,
			tar = e.target || e.srcElement;
		console.log(e) // event ev e
		可以通过 e.target or e.srcElemtn 访问到事件源（点击的元素）
		火狐只有 target IE只有srcElement 谷歌都有；
		所以需要写兼容 // var tar = target || srcElement;
	}

### 事件委托事件代理
	说白了就是通过冒泡的特性，监听父级 点击事件来判断点击了那个子级。
	比如，ul 下面有 很多个 li标签，我们不可能给每一个li都添加一个点击事件，所以就直接给ul这个父级添加点击事件来进行委托。 // e.tareget || e.srcElement 可以找到事件源
	好处： 不用循环绑定点击事件了，节约性能， 如果有数据追加又得重写绑定点击事件。
	