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
	自己干掉自己.
	ES5 带来的方法，如果浏览器支持ES5，最好就只用这个方法；

### innerText / innerHTML
	// HTMLElement.prototype 都在里面
	// innerHTML 在Element.prototype里面也有.