# JavaScript
    html css 占前端 15% javaScript 占 85%;
    javaScript 和 框架， 语言本身占85% 框架 15%;
    高内聚 低耦合;

## 前端发展史

### 5大浏览器以及其内核
    名称        内核
    IE          trident
    chrome      webkit blink
    safari      webkit
    opera       presto
    firefox     gecko

### 浏览器的历史 和 JS诞生
    1： 真正意义上浏览器的诞生是在1990年，是一个叫 蒂姆 伯纳斯 李 的家伙 搞出来的，这个人是用超文本分享资讯的人(工作)
    他开发了一个 world wide web。(用啥写的？)， 后来把这个移植到了C 并修改了一个名称叫 
    libWWW --> nexus 意义是： 允许别人浏览他人编写的网站。
    
    2：1993 美国伊利诺大学 一个组织(NCSA 不确定)的一个人 （马克 安德森）在该组织开发了一个叫` MOSIAC `浏览器，（可以显示图片的浏览器，真正意义上浏览图片的浏览器） 
    
    3：1994 马克 安德森 和 吉姆 克拉克(SGI 硅图公司) 成立了一个公司叫 MOSIAC communication corporation (马赛克交流公司)
    巧的是发生了版权问题, MOSIAC 这个名字的版权在伊利诺大学，然后好巧不巧的这个大学把这个版权又买给了别人(spy glass)公司;
    没办法，只能改名字了。 后来 改名为：Netscape communication corporation。 (网景公司)
    网景公司的神作 netscape navigator(这个是真牛逼) (领航员)
    
    4：1995 微软公司收购了spy glass 顺便接盘了他的所有MOSIAC代码，搞出了今天所有前端程序员的噩梦IE浏览器(internet exploror 1.0)
    同年发布了 IE3 和 JScript; JScript 脚本语言为了开发动态化网页;
    
    5：1995 网景公司的一个开发人员 Brendan eich 牛逼的人; 在 netscape navigator的基础上开f了一个能让网页动态化的语言livescript;(javascript的前生了) 
    
    6：1995 java 爆炸了(火起来了), 而网景公司的liveScript就惨兮兮的，最后为了提高热度，决定和sun公司进行py交易(合作推广宣传产品), 然后给liveScript 改了名字，变成了 javaScript, 后来js就火了， 果然眼光平台都很重要啊！
    
    7：2001 IE6 XP诞生 IE6的诞生带来了js引擎, 单独解析js的东西;
    
    8：2003 mozilla公司 firefox 出来了， 因为netscape navigator 把源码开源了， 然后火狐cope了一份，来了个换汤不换药;
    
    9：2008 google基于 webkit blink GEARS 搞出了最牛逼的浏览器 chrome; 趋势(PROGRESSIVE WEB APP 渐进式APP) 
    V8引擎(js引擎) 1：直接翻译机器码， 2：独立于浏览器运行，
    
    10： 2009 甲骨文oracle 收购了 sun公司 JS的所有权给你甲骨文;


### ECMA
    European Computer Manufacturers Association 欧洲计算机制造联合会; 所在地日内瓦; 
    评估 开发 认可电信 计算机标准 
    ECMA-262 规范 ecmascript 规范标准;


### 编程语言
    编译型： 编译过程：源码 -> 编译器 -> 机器语言 -> 可执行的文件
    解释型： 解释器 -> 解释一行就执行一行
    
    优缺点： 解释型语言不需要根据不同的系统平台进行移植。编译速度编译型语言更快。大型项目大型运算项目等推荐用编译型语言（银行系统，电商系统）。
    
    脚本语言： javascript PhP;
        js客户端脚本  php服务端脚本;  等等。。。 最大的区别就是在网页上可以查看js代码，但是无法查看php的代码；
        actionscript 开发 adobe flash player
    
    编程语言绝对不能少的4个因素 变量 数据结构 函数 运算能力;

### ECMAScript DOM BOM
    ECMAscript: 语法，变量，关键字，保留字，值，原始类型，引用类型， 运算， 对象 继承， 闭包 等...
    
    DOM: documet object model W3C 规范; html树增删改
    
    BOM: browser object model 没有规范; 滚动条，正则。
    
    js引擎是单线程；
    javascript  是个单线程的语言, 但是他可以模拟多线程执行, 这个功能叫 "轮转时间片"
    
    短时间之内轮流执行多个任务的片段。
    
    轮转时间片 的执行步骤是：
        1： 有多个任务， 任务1， 任务2， 任务3 ...;
        2： 切分任务1 任务2。
        3： 随机排列这些任务片段， 组成队列。
        4： 按照这个队列顺序将任务片段送进js进程。
        5： js线程执行一个又一个的任务片段。
    
        (就像吃西瓜，有大西瓜和小西瓜，我们把他们切成很多小块儿, 随机排列，然后按照这个随机排列的顺序来吃);

### javascript
    读取引入
    <script type="text/javascript"></script> // 这个type 建议写上去;
    <script src="index.js"></script>
    
    <script type="text/tpl" id="tpl"></script>
    也有企业喜欢这样写, 这段script不会执行, 后期可以使用这个id 读取他改成模板；

#### 变量
    变量是个容器，存储数据， 方便后期使用;
    申明变量使用 var(variable);
    var a; // 声明变量
    a = 1; // 变量赋值
    var a = 3; 变量声明并赋值
    // = 号， 不是数学的等号，在编程里是赋值的意思;
    // 一行代码结束 建议加上 ; 结束 （js 解释引擎是根据分号来识别一行语句的）
    // 有些可以不用写 if for function;

##### 变量的命名
    在企业开发中：
        申明变量不能用数字开头， 不过可以使用_ $开头 也可以 字母_$数字 a_$1;
        关键字和保留字不能使用; 
    
        比如这些关键字：
            break, case, catch, continue,
            default, delete, do, else, finally, for, function,
            if, in, instanceof, new, return, switch,
            this, throw, try, typeof, var, void, while, with,
    
        比如这些保留字 
            abstract, boolean, byte, char, class,
            const, debugger, double, enum, export,
            extends, final, float, goto, implements,
            import, int, interface, long, native, package, 
            private, protected, public, short, static, super,
            synchronized, throws, transient, volatile,
    
        命名一定要有语义化，结构化
        比如class 中， 如果该类名要被js使用可以这样写 J_header or j_header  J-header j-header 标记一下;
    
        javascript 要用小驼峰命名法;
    
        var x = 3, y = 4;
        var z = x + y;
        console.log(z) // 7 这里有个优先级， 运算 > 赋值;

##### 原始值
    基本数据类型
    Number Boolean String undefined null
    
    根据赋得值来判断该变量是什么类型这种特点是弱类型语言;
    动态语言 -> 脚本语言 -> 解释型语言 -> 弱类型语言
    静态语言 -> 编译型语言 -> 强类型语言
    javascript 是一门弱类型的语言
    计算机里: 非真即假 非假即真


##### 引用值
    object array function date RegExp;

###### Array
    let arr = [1, 2, 3, 4];
    arr[0] // 1;
    arr.length = 4;

###### Object
    let person = {
        name: 'xxx',
        age: 18,
        height: 183,
        weight: 140,
        job: 'web'
    }

##### 区分
    首先存储数据有堆和栈的区别;
        一般呢基本数据类型存储在栈里面,遵循先进后出的原则; 而引用类型呢, 存储在堆里;
    举个例子，定义一个 a 变量 存储一个数字 10, 此时呢，栈里面就会存储一个名字为a, 值为10的一个空间;
    如果我们又定义了一个 b 变量, 将a赋值给b, 这个时候栈会存储一个名字为b的，值为复制a值的另外一个空间。
    他们指向的并不相同, 就算修改也不会有影响.
    
    然后就是引用了.
        同样我们定义一个a 存储一个数组[ 1, 2, 3], 这个时候栈中存储名字为a，他的值是一个指针，指向想堆中的 [1, 2, 3]这个数组;
        我们在定义一个b 变量 将 a 赋值给 b, 此时b保存的是指向这个[1, 2, 3]数组的指针，也就是说，这个时候我使用a对他存储在堆中数组进行push操作,
        这个数组发生了改变, a 的值和b的值都会变, 因为他们指向的是同一个堆空间。

#### 语法
    每一断码结果最好都加上;号, 方便打包，或者方便js引擎解析;
    for, if, switch, function 可以不加分号， 其他的最好加上;
    代码打空格的问题一定要注意;

#### 报错
    SyntaxError (语法错误) 整段代码不会执行
    ReferenceError(引用错误) 代码中断执行，错误前的代码会执行.
    
    多个script标签，代码块，如果前面一个代码块报错，是不会影响后面代码块执行的。

#### 运算符
    + - * / % ()
    括号运算 > 普通运算 > 赋值
    
    字符串 + 字符串 = 字符串拼接  'skr' + 'skr' = 'skrskr'
    字符串 + 数值   = 字符串拼接  '1' + 1 = '11'
    数值   + 数值   =  数值   1 + 1 = 2
    字符串 + undefined = 字符串拼接
    字符串 + null = 字符串拼接
    字符串 + true = 字符串拼接
    字符串 + Nan = 字符串拼接
    在chrome 调试器中, 颜色蓝色的是数值， 灰黑色的是字符串;
    
    0 / 0  // NaN
    1 / 0 // infinity  数值类型
    -1 / 0 // -infinity  数值类型
##### NaN

    Not a Number
    NaN是一个数值类型(number); 但是他是一个非数， NaN === NaN // false
    NaN 不等于自己; 
    isNaN() // 判断是不是nan

##### % 取模 取余
    5 % 2 = 1;
    0 % 6 = 0;
    4 % 6 = 4;

##### 交换值

    var a = 1,
    b = 2;
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a, b)
// --------------------------

    var a = 1,
    b = 2;
    a = a + b; // 3
    b = a - b;
    a = a - b;
    console.log(a, b)

##### 自增自减
    a++ a--, ++a --a;
    在后就是过了这一步在加，在前就是这一步就加，减号同理;

##### 比较运算符
    > < !== === == >= <= !=
    
    // number > string 这个时候先把string转成number在做运算;
    // string > string 使用ASCII码(字符相对应的十进制码, 字符比较多的情况下就从左往右依次对比,直到比较出结果);
    
    == 转换类型后是否相等。 === 不需要转换类型就相等。
    
    NaN不等于任何数包括自己。

##### if else and switch
    && 就是并且的意思， 两边条件都满足才返回true
    || 或者的意思，两边有一边满足条件就返回true;
    
    在写代码中要考虑一下写的代码是否有互斥性，或者有值范围的，多个的，用 if else 最好;
    不过如是定值的 推荐使用switch来写;
    
    规范，最好 if else 和  switch default; 有头有尾;
    switch 是遵守严格相等！！！

##### 逻辑运算
    与&&  或||  非!
    除了 undefined null NaN "" 0 false 都是真
    
    与    var a = 1 && 2 && undefind && 10 // 会返回undefind，果然没有假，就返回10; 全真才是真，有一个假都是假。
    
    或    var b = 0 || null || 1 || 0; 会返回1;  有一个是真的那全是真的; 全是假才是真的假;
    
    非    var a = !1 // false 

##### 注释
    /*                //
     *
     *
     *
     */

#### for循环 while  do...while
    说白了就是把一组代码 循环执行;
    
    for(let i = 0; i < 10; i++) {
        console.log(i);
    }
    -- 先识别for。
    -- 创建 i 变量
    -- 判断 i 是否 小于 10;
    -- i < 10 
    -- 通过， 执行 console.log(i); 执行判断里面的代码;
    -- i++
    -- 在判断 i 是否小于 10;
    .......
    // 如果条件一直满足，也就是说 中间判断一直返回true就是死循环，不停的循环下去;


        ...
    for(; i < 10;) {
        console.log(i);
        i++;
    }
    
        ...
    while(i < 10) {
        console.log(i);
        i++;
    }
    其实是一回事;
    
    do while 即使一开始的值就是false 他还是会执行一次循环;

##### 结束循环
    判断条件返回false, 或者使用 break; 和 return;

##### 跳过该次循环
    continue;
    可以使i减1的方式在循环一次嘻嘻;

##### 题目
    打印 0 - 100的数， （）只能有一句，不能写比较， {}不能出现i++ i--
    var i = 1;
    for(; i;) {
        console.log(i - 1);
        if (i === 101) {
            break;
            // i = 0;
        } else {
            i += 1
        }
    }
    // ----------------------------------------------------------------
    var i 100;
    for(; i--;) {
        console.log(i);
    }


    10的N次方:
    
    var n = 5,
        num = 1;
    
    for(let i = 0; i < n; i++) {
        num *= 10;
    }
    
    N的阶乘:
    
    var n = 5,
        num = 1;
    
    for(let i = 1; i <= n; i++) {
        num *= i;
    }
    
    交换位置
    var num = 789;
    
    var a = num % 10;
    
    var b = (num - a) % 100 / 10;
    
    var c = (num - a - b * 10) / 100;
    
    num = '' + a + b + c;
    console.log(num)
    
    3位比大小
    var a = 1, b = 2, c = 3;
    
    if (a > b) {
        if (a > c) {
            console.log(a)
        } else {
            console.log(c);
        }
    } else {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c)
        }
    }
    
    算质数
    var num = 0;
    for(let i = 2; i < 100; i++) {
        for(let j = 1; j <= i; j++) {
            if (i % j === 0) {
                num++
            }
        }
    
        if(num === 2) {
            console.log(i)
        }
        num = 0;
    }

##### typeof
    typeof(1) // Number
    typeof(true) // Boolean
    typeof('1') // string
    typeof(null) // object
    typeof({}) // object
    typeof([]) // object
    typeof(function(){}) // function
    typeof(undefined) // undefined
    typeof(Object) // function


    typeof (1 - '1') // number
    
    typeof ('1' - '1') // number
    
    typeof (一个未定的值) // undefined
    
    typeof(typeof(123)); // string typeof 返回值是string类型的;

##### 显示类型转换
    Number:
    
        Number(1) // 1 number
        Number(true) // 1 number
        Number('true') // NaN number
        Number('1a') // NaN number
        Number(null) // 0 number
        Number(undefined) // NaN number
        Number(3.13) // 3.13 number
    
    parseInt:
    
        parseInt(123) // 123 number
        parseInt(true) // NaN number
        parseInt(null) // NaN number
        parseInt(undefined) // NaN number
        parseInt('1.32')  // 1 number
        parseInt('1a') // 1 number
        parseInt('a1a') // NaN number
    
        有一个基数 可以转换进制的 2 8 10 16 32 36
    
        parseInt('f', 16) // 15     0123456789abcdef
        parseInt(10, 16) // 16  看到16就进一;
    
    parseFloat
    
        parseFloat('3.14'); // 3.14;
    
        let a = 3.213;
        Number(a.toFixed(2)); toFixed 会转成string类型所以记得转回来；
    
    String
    
        String(123) // 123  string
        123 + ''  // 123 string
    
    toString() 也是有基数的
        可以转进制
    
    Boolean
        Boolean(1) // true
        Boolean() null, undefined, NaN, 0, false 都返回false;


##### 隐式类型转换
        var a = '123';
        a++ // 这里偷偷的给a转了number类型
        console.log(a) // 124
    
        var a = "a" + 1;
        偷偷把 1给  String(1);
        console.log(a) // a1
    
        var a = '3' * 2;
        // 偷偷把 '3' 给转成了number;
        console.log(6)
    
        var a = '1' > 2;
        // false
    
        var a = 1 > '2';
        // false
    
        var a = 1 == '1' // true;
        var a = 1 != '2'  // true;
        
        var a = 1 === '1' // 这个不会进行转换！！！
    
        var a = NaN == NaN // false
    
        var a = 2 > 1 > 3 // false
        var a = 2 > 1 == 1 // true
    
        var a = undefined > 0 // false
        var a = undefined < 0 // false
        var a = undefined = 0 // false
    
        var a = null > 0 // false
        var a = null < 0 // false
        var a = null = 0 // false
    
        null == undefined // true
        null === undefined // false
    
        var num = '123';
        typeof (+ num) // 123 number
    
        var num = 'abc';
        typeof (+ num) // NaN number
    
    isNaN // es5规范中的 判断是不是NaN
    
        isNaN(1) // false
    
        isNa('a') // true 隐式转换了用了number()
    
        isNaN(null) // false Number(null) === 0
    
        isNaN(undefined) // true  Number(undefined) // NaN

##### 斐波那契数列
    var n = Number(window.prompt('n ? '))
    
    var num = 0,
        f = 1,
        s = 2;
    
    for(var i = 3; i <= n; i++) {
        num = f + s; // 3
        f = s; // 2
        s = num;   
    }
    console.log(num)
    // 1 + 2 + 3 + 5 + 8

#### function 函数

    一个固定的功能或者是程序段被封装的过程, 实现一个固定的功能或者是程序，在这个封装体中需要一个入口和一个出口。
    
    function test (参数) {}  // 基本语法
    test() // 调用
    
    函数就是一个封装的代码段，为了完成某个工作
    
    var test = function () { // 匿名函数表达式， 函数自变量
        
    }
    
    var test = function test1 () {
        // 在里面是可以 使用这个test1()的，
    }
    // 但是在全局就无法访问到

##### 函数的命名规则
    和声明变量一样, 小驼峰就行

##### 函数形参和实参
    // a, b 就是占位用的，形式上占位符， 形式参数， 也就是形参
    function test (a, b) {
        return a + b;
    }
    // 1， 2 是实际传入的参数，实际参数， 就是实参
    test(1, 2);
    
    js的函数一定要注意传递的位置，否则会出错的。
    
    形参和实参可以不相等
    函数中有一个值arguments {Array} 可以查看所有实参的值 还可以直接去
    可以使用函数的名称的length方法取出 形参的长度;
    
    functin 实参求和
    functin sum () {
        let a = 0;
        for(let i = 0; i < arguments.length; i++) {
            a += arguments[i];
        }
        return a;
    }
    
    函数实参不传默认形参就是undefined
    // 可以这样写函数参数默认值；
    funtion test(a = 1, b = 2) {}

##### 函数实参映射
    functino test (a, b) {
        a = 2;
        conosle.log(arguments[0]) // 2; 可以修改；
        b = 3;
        connosole.log(arguments[1]) // undefined; 无法修改 如果实参里面没有这个值，即使你给他赋值了也没有用;
    }
    test(1)
    // 
    1: 首先，实参决定了 arguments的内容以及长度。
    2: 如果想修改实参的值，首先要确定有形参才能修改成功，否则无效！！!
    3: 修改时，比如上面这个test函数，a 和 arguments[0] 他们只是映射关系，只是值一样，他们不是一个东西。(一个在堆， 一个在栈);
    
    //es5的写法:
    function (a, b) {
        var a = arguments[0] || 1;
        var b = arguments[1] || 2;
        or
        var a = typeof(arguments[0]) !== 'undefined' ? arguments[0] : 1
        var b = typeof(arguments[1]) !== 'undefined' ? arguments[1] : 2
    }
    
    // es6的写法:
    function test (a, b = 1, c = undefined) {
        a // 2
        b // 1,
        c // undefined;
    }
    test(2, undefined, undefined);

##### 函数的return
    每个函数最后一个语句都是return(在你不添加的情况下)(隐式添加)
    可以使用return 结束函数(终止)， return 后代码后面的语句不会执行了。
    可以在return后面带一个东西 变量，值，等等...

#### 递归
    // 乘积 斐波那契数列
        function fbiic (n) {
            if (n === 1) {
                return 1;
            }
            return n * fbiic(n - 1);
        }
        console.log(fbiic (5))
    
        fbiic (5) = 5 * fbiic (4)
        fbiic (4) = 4 * fbiic (3)
        fbiic (3) = 3 * fbiic (2)
        fbiic (2) = 2 * fbiic (1)
        --
        120
        fbiic (5) = 5 * 24
        fbiic (4) = 4 * 6
        fbiic (3) = 3 * 2
        fbiic (2) = 2 * 1

### 预编译 超级重要
    js执行过程:
        1. 检查通篇语法错误;
        1.5 预编译的过程;
        2 解释一行,执行一行;
    
    提升问题:
    函数声明式整体提升， 变量只是声明提升，赋值不会提升;
    
    // 预解析:
        
    运行全局会创建一个 global object // GO对象 执行期上下午 全局上下文
    运行函数会创建出一个 activatin object // AO 对象; 函数上下文
    
    js遇到这种执行函数的时候，首先会
        1. 寻找形参和变量声明.
        2. 实参赋值给形参.
        3. 找函数声明，赋值.
        4. 执行.
    
    js 遇到全局上下文执行的时候
        1. 找变量
        2. 找函数声明
        3. 执行
    其实GO就是window Go === window

#### 例题1

    function test (a) {
        console.log(a); // function a() {}
        var a = 1;
        console.log(a); // 1
        function a() {}
        console.log(a); // 1
        var b = function () {}
        console.log(b); // function () {}
        function d() {}
    }
    test(2);
    执行结果：
    
    代码描述,
    会创建出一个 activatin object // AO 对象;
    AO = {
        a: undefined -> 2 -> functiono a() {} -> 1, // 有形参所以开始时undefined;
        b: undefined -> function() {},
        d: function d(){}
    }

#### 例题2

    function test(a, b) {
        console.log(a); // 1;
        c = 0;
        var c;
        a = 5;
        b = 6;
        console.log(b); // 6
        function b() {};
        function d() {};
        console.log(b);  //6
    }
    
    AO = {
        a: undefined -> 1 -> 5,
        c: undefined -> 0,
        b: function b() {} -> 6,
        d: function d() {}
    }
    test(1);

#### 例题3
    var a = 1;
    function a() {
        console.log(2);
    }
    
    GO = {
        a: undefined -> function a() {} -> 1;
    }

#### 例题4
    console.log(a, b);
    function a(){};
    var b = function (){}
    
    GO = {
        a: function a() {},
        b: undefined -> function() {}
    }

#### 例题5 
    function test () {
        var a = b = 1;
    }
    test();
    Go = {
        b: 1
    }
    AO = {
        a: undefined -> 1 (找到AO中的b的值赋值给a)
    }

#### 例题6

    var b = 3;
    console.log(a);
    
    function a(a) {
        console.log(a); // function a() {}
        var a = 2;
        console.log(a); // 2
        function a() {}
        var b = 5;
        console.log(b); // 5
    }
    a(1);
    
    // GO = {
    //     b: undefined  -> 3
    //     a: function() { ... }
    // }
    // AO = {
    //     a: undefined -> 1 -> function a() {} -> 5
    //     b: undefined -> 5
    // }

#### 例题7

    a = 1;
    function test () {
        console.log(a);
        a = 2;
        console.log(a);
        var a = 3;
        console.log(a);
    }
    test();
    var a;
    
    /**
    GO = {
        a: undefined -> 1;
        function test() {}
    }
    
    AO = {
        a: undefined -> 2 -> 3
    }
    */

#### 例题8

    function test() {
        console.log(b); // undefined;
        if (a) { // 预编译不看if 只看声明变量;
            var b = 2;
        }
    
        c = 3;
        console.log(c); // 3
    }
    
    var a;
    test();
    a = 1;
    console.log(a);  // 1
    
    /*
        GO = {
            test: function(){}
            a: undefind -> 1;
            c: 3
        }
    
        AO = {
            b: undefined,
    
        }
    */

#### 例题9

    function Test() {
        this.name = 123;
    }
    let test = new Test();
    
    GO = {
        Test: function () {};
        test: undefined -> {
            this.name: 123
            __proto__: Test.prototype,
        }
    }
    
    AO = {
        var this =  {
            this.name: 123
            __proto__: Test.prototype,
        }
    }


### 作用域

    function a () {
        function b () {
            function c () {
    
            }
            c();
        }
        b();
    }
    a();
    
    用该段代码进行解析:
    1 首先按照正常的预编译, 现在对全局上下文进行编译 生成GO;
    
    2 当 a 函数被 预编(定义) 的时候，就会生成一个 a.[[scope]] -> a[[scope.chain]]指向全局的GO; a[[scope.chain]][0] = GO;
        a[[scope.chain]][0] = GO
    
    3 当 a 函数被 执行 的时候，会生成一个 a 的AO, 并且会把这个AO 添加在 a[[scope.chain]] 的最前方 GO被挤到最后去了
        a[[scope.chain]][0] = AO, a[[scope.chain]][1] = GO
    
    4 当 b 函数被 预编(定义) 的时候，就会生成一个 b.[[scope]] -> b.[[scope.chain]] 指向的是a函数被执行后的作用域；
        b[[scope.chain]][0] = AO( a函数的 ), b[[scope.chain]][1] = GO
    
    5 当 b 函数被 执行 的时候，会生成一个 b 的AO, 并且会把这个AO 添加在b[[scope.chain]] 的最前方
        b[[scope.chain]][0] = AO( b函数的AO ), b[[scope.chain]][1] = AO( a函数的AO ), b[[scope.chain]][2] = GO;
    
    6 当 c 函数被 预编(定义) 的时候，就会生成一个 c.[[scope]] -> c.[[scope.chain]] 指向的是b函数被执行后的作用域；
        c[[scope.chain]][0] = AO( b函数的AO ), c[[scope.chain]][1] = AO( a函数的AO ), c[[scope.chain]][2] = GO
    
    7 当 c 函数被 执行 的时候，会生成一个 c 的AO, 并且会把这个AO 添加在c[[scope.chain]] 的最前方
        c[[scope.chain]][0] = AO( c函数的AO ), c[[scope.chain]][1] = AO( b函数的AO ), c[[scope.chain]][2] = AO( a函数的AO ), c[[scope.chain]][3] = GO
    
    8 当 c 函数 执行 完毕后, 会删除 c[[scope.chain]]中的c函数执行阶段创建的AO。
        c[[scope.chain]][0] = AO( b函数的AO ), c[[scope.chain]][1] = AO( a函数的AO ), c[[scope.chain]][2] = GO
        
    9 当 b 函数 执行 完毕后，会删除 b[[scope.chain]]中的b函数执行阶段创建的AO, 这个时候 c 函数将不复存在, 彻底被删干净了。
        b[[scope.chain]][0] = AO( a函数的 ), b[[scope.chain]][1] = GO
    
    10 当 a 函数 执行 完毕后, 会删除 a[[scope.chain]]中的a函数执行阶段创建的AO, 这个时候 b 函数将不复存在, 彻底被删干净了。
        a[[scope.chain]][0] = GO
    
    因为a函数存在于GO中，所以GO不结束，a函数不会被销毁。


### 闭包

    function a() {
        var d = 100;
        function aa() {
            d++;
            console.log(d);
        }
        return aa;
    }
    b = 1;
    var b;
    var c = a();
    c()
    
    简单说，a函数中的内部函数aa被返回了并且赋值给了一个全局变量; 然后函数aa紧紧抓住a函数的作用域链, 形成了闭包;
    
    a函数执行完毕后，会回到初始值，并删除自身的AO, 但是因为a函数内部的aa函数被返回到全局，所以aa函数会把a函数的AO一并带出走，所以即使a函数
    回到初始值了， aa函数还是会带着a函数的AO;
    
    function init() { 
      var name = 'Mozilla'; // name is a local variable created by init 
      function displayName() { // displayName() is the inner function, a closure 
        alert(name); // use variable declared in the parent function 
      } 
      displayName(); 
    } 
    init(); // 也属于闭包

### 立即执行函数
    // 初始化函数;
        1. 自动执行。
        2. 执行完立即销毁。
    
    IIFE = immediately-invoked function expression 立即执行函数
    
    (function () {
        // ....
    })(); // 用的人多
    
    (function () {
        // ...
    }()); // W3C 建议这么写;
    
    括号包裹的，是变量 是函数，是数字， 都会变成表达式。
    
    只有表达式才能被执行符号执行； ();
    
    函数声明变成表达式的方法， 在函数前面加上 + - || &&；
    function test() {
        return 123
    }()  // 如果直接这样执行会报错，所以必须把这个函数转化函数表达式;
    
    + function test() {
        return 123
    }()
    
    被转化成表达式并立即执行完的函数，会被销毁掉，在之后都无法访问到;
    
    function test(a) {
    
    }(1); // 这种是不会报错的, 也不会执行，js会把他解析成两个步骤, 声明函数和 声明一个数字，因为用括号包裹住的会变成表达式;
    
    function test(a) {
    
    }() // 会报错；
    
    var a = 10;
    if (function b() {}) { // b函数变成表达式了， 然后执行销毁了。
        a += typeof(b);
    }
    console.log(a) // 10undefined,


### ，逗号运算
    会执行，号后面的值， let num = (1 + 2, 3 + 4, 12); // 12

### 对象
    let obj = {
        num: 1,
        plus: function () {
            console.log(this);
            this.num ++;
            console.log(this.num)
            console.log(this.name)
        }
    }
    obj.plus();
    obj.name = '啦啦啦' // 这种赋值叫做对象自变量， 对象直接量；
    在对象里，this 就是他本身;
    
    Array内置 API
        indexOf ;查看数组中某个属性的下标;
        splice  ;删除数组中的某个元素;
    
    var obj = new Object 和 var obj = {} // 他们创建的对象基本一致; 开发更推荐后者;

### 构造函数 基础
    就是一个普通的函数， 命名规则是大驼峰;
    为了和普通函数有所区别所以才使用了大驼峰命名
    
    function Person (name, age) {
        this.name = name;
        this.age = age;
    }
    let man1 = new Person('qq', 12);
    let nan2 = new Preson('ww', 34);
    
    开发时候，给你构造函数 尽量传options 对象;
    
    this指向实例化的对象， 不实例化指向window;
    
    // 构造函数原理
    function Car (color, brand) {
        this.color = color;
        this.brand = brand;
        // return this; 隐式偷偷返回出this；
    }
    var car1 = new Car('red', 'Banz');
    
    console.log(car1);
    
    GO = {
        Car: function () {},
        car1: undefined; -》 {  color， brand }
    }
    AO = {
        this: {
            color: color,
            brand: brand
        }
    }
    1. 其实和普通函数也差不多， 普通函数完全可以模仿写一个效果一样；
    
    2. 其实我们也可以修改构造函数的return, 可以直接return一个引用值，[] {} function, 引用类型，
        如果是基本类型就无效，即使写了也无效果；

### 基本包装类型
    new Number() new String() new Boolean();

#### 包装内
    原始值是没有属性的，比如length这些方法都是处理后才可以访问到的
    var a = 123;
    a.len = 3;
    
    console.log(a.len) // undefined;
    
    // js 会解析成 new Number(123).len = 3; 但是并没有空间给他存储这个数据 所以系统内部会把他删除掉； 包装内的过程;
    如果实在要保存， 可以直接new Number() 创建就可以保存方法了;
    
    var str = 'abc'; 为啥他可以使用length的方法，他明明是一个原始值呀？
    因为在使用length方法的时候，js 偷偷多做了一层操作，使用了 new String(str).length,才有这个方法的。堆的临时容器存储的;


    var str = 'abc';
    str.length = 1; // new String(str).length = 1; 还是没有地方保存，所以自动删除; 堆的临时容器存储的;
    所以这个string不会有任何影响。

### prototype原型
    简单说就是原型上的一个对象；
    一般情况下开发，大家都把需要传值的放在构造函数中，而方法和固定值都放在他原型上；
    
    function Test() {}
    Test.prototype.name = '123';
    
    实例无法增删改原型的值，子辈无法修改祖宗，但是可以正常读取查看(修改的值全部都挂到自己身上了)
    不过构造函数可修改prototype上面的值,(不管是不是在实例后面修改还是赋值，只要有操作实例就可以访问到，因为实例的prototype 和 实例的__proto__ 是指向同一个内存地址的；
    
    可以通过prototype 是可以修改constructor的；
    
    说白了就是，在构造实例化然后会给this 对象添加一个__proto__属性 指向他的原型(prototype), 原型里有一个constructor指向他的构造函数;
    实例查找属性的时候优先查找自身的属性， 如果没有就会去prototype原型上找;


### 插件开发

    window  and return;
    
    ;(functiono () {
        function Test() {}
    
        Test.prototype = {
            ...
        }
    
        window.Test = Test;
    
    })();
    // es5 模块化开发;

### 原型链
    对象的原型，里也有他的原型；
    沿着__proto__ 一直往上继承的链，叫做原型链；
    
    原型链的顶端 是object.prototype ！！！
    
    function Boss () {
    }
    Boss.prototype.money = '100w';
    
    let boss = new Boss();
    
    Manager.prototype = boss;
    function Manager () {
        this.money = '10w';
    }
    
    let manager = new Manager();
    
    Worker.prototype = manager;
    function Worker () {
        this.money = '1w';
    }
    
    let worker = new Worker();
    console.log(worker);
    
    // 例子 下面这段代码，worker.students.baidu的值成功修改了，而 worker.student 没有成功修改反而在自己的对象属性中添加了
    一个 student 属性值为501;
    因为引用类型可以修改值，而基本类型不行, 至于为啥是501》
        worker.student = worker.student + 1
        先去在自身去找 student 发现没有就去原型上找，找到了先赋值然后在相加， 所以最后得到501；
    
        function Boss () {}
        Boss.prototype.money = '100w';
        
        let boss = new Boss();
    
        Manager.prototype = boss;
        function Manager () {
            this.money = '10w';
            this.student = 500;
            this.students = {
                alibaba: 10,
                baidu: 10,
                tencent: 20
            }
        }
    
        let manager = new Manager();
    
        Worker.prototype = manager;
        function Worker () {
            this.money = '1w';
        }
    
        let worker = new Worker();
        worker.students.baidu++
        worker.student++
        
        console.log(manager, worker);
    
    // 例题
    function Car() {
        this.brand = 'Benz';
    }
    Car.prototype = {
        brand: 'Mazda',
        intro: function () {
            console.log('我是' + this.brand + '车')
        }
    }
    var car = new Car();
    car.intro() // 打印奔驰，因为this指向car这个实例，所以先读取；
    // 如果想调用打印 Mazda 就 Car.prototype.intro();
    
    var obj1 = {};
    var obj2 = new Object(); // 公司不用这个
    他们的构造函数是一样的，都是Object, 前者更加方便。
    
    原型的原型是new Object构造出来的；

#### Object.create()
    有一个参数， 一个是null， 还是一个是任意一个对象， 或者对象的prototype，
    function Obj(){}
    let obj1 = new Obj();
    let obj2 = Object.create(Obj.prototype);
    这个两个意思是一样的，都是创建了一个Obj的实例;
    
    1. new Obj()执行过程， 实例化obj1 ——》 调用构造函数Obj的初始化属性和方法 --》 指定实例对象的原型；
    
    不是所有对象都继承于 Object.prototype; 比如 var obj1 = Object.create(null);
    
    没有办法自己造一个__proto__在 对象里，没有原型链的效果的；
    
    var obj1 = Object.create(null);
    obj1.num = 123;
    var obj2 = Object.create(obj1); // 继承了obj1的属性， 可以隐式调用；
    console.log(obj2)


#### call apply
	他们是改变方法内部this指向的方法。
	call 和 apply 的第一个参数都是一个对象,
	call (obj1, arguments) // 第二个值是参数。
	apply (obj1, [arguments]) // 第二个参数是数组，可以传arguments; // 大公司用这个方法多

### 继承

        继承说白了就是，让自己的prototype 指向别的对象，或者别的对象的prototype;
    通过实例的__proto__属性，访问这个被修改的原型;
    
    但是这种处理的方法有个很大的问题，就是如果 继承的这个对象 身上也继承了别的对象，
    
    Boss.prototype.tSkill = '123';
    function Boss() {}
    let boss = new Boss();
    
    Manager.prototype = boss;
    function Manager () {
        this.money = 123,
    };
    let manager = new Manager()
    
    Worker.prototype = manager;
    
    function Worker = function () {};
    let worker = new Worker();
    
        比如这段代码， Worker构造函数只想继承 manager 实例上的 属性，但是由于 Manager构造函数也继承了其他原型，
    所以也被迫继承了 Manager上面的原型， 可以通过__proto__ 属性进行访问。 (原型链继承);
    
    案例2 
    
        Manager.prototype.num = 123;
    
        function Manager () {
            this.money = 100;
        }
    
        let manager = new Manager();
    
        Worker.prototype = Manager.prototype;// inherit(Manager, Worker);
    
        function Worker () {}
    
        let worker = new Worker();
    
        Worker.prototype.num = 124;
        console.log(worker);
    
        console.log(manager);
    
        比如这个案例， 假如这个Manager构造函数的prototype是个一个公共的 原型，有很多地方都继承这个原型，
    我们让 Worker 构造函数的原型继承于Manager的原型，
        我们进行修改后， 发现 Manager构造函数的原型保存的值也被修改了， (因为prototyp保存的是一个内存地址，他们指向同一个内存地址所以修改会被同步);
    
    不过我可以使用一个企业的方法来规避这种情况; Buffer()
    
    Buffer 完美解决 继承 隔离的问题； 又叫做圣杯模式;
        Manager.prototype.num = 123;
    
        function Manager () {
            this.money = 100;
        }
    
        let manager = new Manager();
    
        // Worker.prototype = Manager.prototype;// inherit(Manager, Worker);
    
        function Worker () {}
    
        inherit(Manager, Worker);
    
        let worker = new Worker();
    
        Worker.prototype.num = 124;
        console.log(worker);
        console.log(manager);
    
        function inherit (Origin, Target) {
            function Buffer() {};
            Buffer.prototype = Origin.prototype;
            Target.prototype = new Buffer();
            Target.prototype.constructor = Target;
            Target.prototype.super_calss = Origin; // 源类  继承源
        }
    
        // yahoo的写法；
        var inherit = (function () {
            var Buffer = function (){};
            return function (Origin, Target) {
                Buffer.prototype = Origin.prototype;
                Target.prototype = new Buffer();
                Target.prototype.constructor = Target;
                Target.prototype.super_calss = Origin;
            }
        })();

### 对象的枚举
    一开始没有这种 obj.name 这种调用对象的方法的。 只有 obj['name']， 后来有了， 是因为他js引擎做了 obj.name -> obj['name'] 的修改...
    
    有枚举 就有遍历; 
    
    在javascript中 数组是一个特殊的对象；（数组和对象都是引用值）
    枚举:
    let obj = {
        name: '123',
        age: 321,
        weight: 123
    }
    for(let k in obj) {
        console.log(obj.k) // 这样打印出来的是undefined, 因为js引擎会把  obj.k -> 转化成 obj['k'];  所以会返回undefined;
        console.log(obj[k]); // 正常打印出key的结果；
    }

#### hasOwnProperty
    在枚举对象的时候，如果该对象的原型或者原型链上的其他对象有自定义属性（就是程序员自己添加的属性）非系统自带的；
    都会被识别出来，这个时候我们需要区分一下这种情况，就要使用 hasOwnProperty这个属性， obj.hasOwnProperty(key);
    返回true代表是自身的属性。
    
    in这个方法来判断 'name' in obj // 记住要加字符串; 不加字符串 会隐式转化 xxx in obj  -> obj['xxx']; // in不会排除原型上的属性， 原型上的属性返回true 这个方法用处不大；

#### instanceof 
    function Car () {}
    var car = new Car();
    
    function Person () {};
    var person = new Person();
    
    console.log(car instanceof Car) // true
    console.log(car instanceof Object) // true
    console.log([] instanceof Array) // true
    console.log([] instanceof Object) // true
    console.log({} instanceof Object) // true
    // 在原型上重叠了， 就会返回true;

### this
    在普通的函数中，this指向默认是window。
    如果是构造函数，通过new关键字实例化后，指向该实例对象。
    普通函数执行， 在函数上下文中没有关键字声明(var let const) 那么这个值会被保存在window上。
    全局上下文中this指向window对象
    
    1: 全局this -> window
    2: 预编译this -> window
    3: apply / call / bind 改变this 指向
    4: 构造函数的this指向实例化对象；

### callee
实参列表中的一个属性；
    是function 中 argument的callee方法，在函数中执行得到 函数本身；
    在无法确定函数名字的时候使用，比如匿名函数递归的时候；

### caller
在函数中， 打印出谁调用了这个函数；严格模式下报错；

typeof 可以打印出多少结果
    object / number / string / undefined / boolean / function

### 三目运算
    var str = 89 > 9 ? (
                            "89" > "9" ? '通过了':
                                         '未通过'
    
                       )
    console.log(str) // 打印未通过， 因为两个字符串比较比的是 ASCII码表。 如果字符串前一位相等，那就比较后一位;

### 拷贝 clone
    很多人喜欢这样
    let a = { };  let b = a; // 这里把a的内存地址赋值给了b， 如果a 或者 b进行了值的修改存储 对应的也会被修改，因为 a === b;
    所以我们需要clone


#### 浅拷贝
    简单说就是拷贝对象的第一层数据， 如果对象的属性也是对象或者数组就无法拷贝; 不拷贝属性中的引用类型；
    let obj = {
        name: '123',
        age: 321,
        job: 'car'
    }
    
    let obj2 = {};
    for(let k in obj) {
        obj2[k] = obj[k];
    }
    console.log(obj, obj2)
    console.log(obj === obj2)

#### 深拷贝
    function deepClone (origin) {
        return JSON.parse(JSON.stringify);
    } // 如果有clone方法的就不行了...
    
    function deepClone (origin, target) {
        let tar = target || new origin.constructor(),
            toStr = Object.prototype.toString,
            arrType = '[object Array]' 
    
        if (typeof (origin) === 'object' && origin !== null) {
            for(let k in origin) {
                if (origin.hasOwnProperty(k)) {
                    if (typeof(origin[k]) === 'object' && origin[k] !== null) {
                        tar[k] = toStr.call(origin[k]) === arrType ? [] : {};
                        deepClone(origin[k], tar[k]);
                    } else {
                        tar[k] = origin[k];
                    }
                }
            }
        }
        return tar;
    }
    
    为什么这里非要使用 Object.prototype.toString的方法呢？ 为啥不直接使用 Array.isArray()的方法呢。
    因为这个写法在底层里，兼容性，最不容易出问题。 Array.isArray是es5的方法...

## Array
(push, pop, shift, unshift, indexOf, splice)

会改变原数组： push, unshift, pop, shift, splice, sort, reverse
不会改变原数组：concat, slice, join, 


### create an Array
    let fruits = ['Apple', 'Banana']; // fruits.length 数组字面量
    let fruits = new Array(1, 2, 3); // 不推荐使用
    let fruits = Array(1, 2, 3) // 不使用这个...
    // 所有数组都继承于Array.prototype
    let arr = [1, 2, ,,, ] // 稀松数组
    let arr1 = new Array(2) // [empty x2] 如果只给了一个参数就生成几个empty, 小数报错， 字符串直接生成数组；
    var test = [, 1, 2]; // test[0] // undefined  数组可以出现empty空值, 访问会返回undefined
    在数组内部前面加，是算一个item的， 但是在后面加就不算了
    let a = [, 1, 2]; // length 3
    let a = [1, 2];   // length 2
### Array index
    JavaScript arrays are zero-indexed. The first element of an array is at index 0 , and the last element
    is at the index value equal to the value of the array's length property minus 1 .
    Using an invalid index number returns undefined 
    // 为什么是undefined 因为js的数组是类似对象的，对象里面查找不到的值就会返回undefined;
    // 数组的索引，index就像对象的key，值就像value;

### Access an Array item using the index position
    let first = fruits[0] // Apple;
    let last = fruits[fruits.length - 1] // Banana


### forEach
    Loop over an Array
    fruits.forEach((item, index, array) => {
        // item
        // index
        // origin array
    })

### push
    Add an item to the end of an Array
    let newLength = fruits.push('Orange') // return Array.length 会返回执行方法以后的长度 
    // ['Apple', 'Banana', 'Orange']


### pop
    Remove an item from the end of an Array
    let last = fruits.pop();  // return 被删除的最后一个item
    // ['Apple', 'Banana']

### shift
    Remove an item from the beginning of an Array
    let first = fruits.shift(); // return 被删除的第一个item
    // ['Banana'];

### unshift
    Add an item to the Beginning of an Arrat
    let newLength = fruits.unshift('Strawberry');  // return Array.length 会返回执行方法以后的长度 
    // ['Strawberry', 'Banana']

### push 
    find the index of an item in the Array
    fruits.push('Mango');
    // ['strawberry', 'Banana', 'Mango'];
    fruits.indexOf('Banana') // 1

### reverse
    Reverses the order of the elements of an array in place. (First becomes the last, last becomesfirst.)
    倒序

### splice
    Adds and/or removes elements from an array.
    @params (开始项的下标)
    @params (剪切长度) // 如果值是0，就不会删除;
    @params (添加的数据)
    
    let a = [1, 2, 3]; 
    a.splice(2, 1) // return [3]  删除
    // [1, 2]
    
    如果要追加到2的后面，就索引最后一个值加1；
    如果要追加到2的前面，就直接使用2的索引；
    a.splice(2, 0, 3, 5) // return [] // 追加
    // [1, 2, 3, 5];
    
    a.splice(3, 1, 4) // return [5] // 替换
    // [1, 2, 3, 4]
    
    function splice (arr, index) {
        return index += index >= 0 ? 0 : arr.length;
    }

### reverse
    也是排序用的，不过使用频率没有sort高;
    方法会返回修改后的数组;
    The first array element becomes the last, and the last array element becomes the first.

### sort
    Sorts the elements of an array in place and returns the array;
    and returns the sorted array; // 最后返回排序后的数组;
    不给sort传方法的话，sort按照ascii码表来排序，和string的比较一样，会出问题;
    
    let arr = [23, -2, -1, 3, 0];
    
    @params a,
    @params b.
    @return  正值 a排在前面， 负值 b排在前面 0 保持不动;
    arr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    })
    用的就是冒泡排序
    
    也可以使用sort 给数组做无序排列;
    let arr1 = [1, 2, 3, 4, 5, 6];
    arr1.sort((a, b) => {
        let rem = Math.random();
        if (rem > 0.5) { // 无所谓谁大谁小;
            return 1;
        } else {
            return -1;
        }
    })
    console.log(arr1)

### concat
    数组合并。
    let arr1 =[1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr3 = arr1.concat(arr2);
    // [1, 2, 3, 4, 5, 6];
    谁在前谁数据就在前;

### toString
    数组转成string;
    let arr1 = [1, 2, 3];
    arr1.toString(); // 返回转化成字符串后的结果；

### slice
    let arr = [1, 2, 3];
    let arr1 = arr.slice(); // [1, 2, 3]
    // arr === arr1 // false
    多试一试；有参数！！！

### join
    let arr [1, 2, 3];
    arr.join() // "1,2,3" 和 toString的结果一致 
    arr.join("") // "123"
    arr.join("-") // "1-2-3"
    arr.join("&") // "1&2&3"

### split (字符串的方法)
    这个是String.prototype上的方法，主要用途是把字符串转化成数组；
    let str = "1,2,3"
    str.split(',') // ["1", "2", "3"]; // 转换后，array 里面的每一个item是string类型！！！
    let str = "1-2-3";
    str.split('-');
    他有第二个参数，填写数组，返回长度，填写1 返回长度1;
    let str = "1,2,3";
    str.split(',', 1) // ["1"]
    join 就像 split 的克星，或者说他们相互克制，一个把数组转化成特定的字符串， 一个把特定字符串转化成数组;

## 类数组 Array-like
    一般出现在function 的 arguments中。 是一个对象，但是这个对象有着数组一样的结构，有length属性，有私有的方法;
    类数组的原型指向的是Object，也就是说像push，unshift, splice等数组的方法都无法使用(可以自定义);
    也可以自己写一个类数组：
    var obj = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        length: 5, // 因为对象默认是不会生成length属性的所以要自己加；
        splice: Array.prototype.splice // 继承该属性以后对象变成类数组了;
        // 此时该对象的 __proto__ 还是指向Object;
    }
    // 如果想使用push方法，直接在obj中加入 push: Array.prototype.push;
    变成类数组，首先原型或者本身要有数组的splice方法，其次必须有length属性；
    优点: 可以使用数组的方法访问，也可以使用对象的方法访问 obj[0], obj[name];
    
    阿里真题
    var obj1 = {
        '2': 3,
        '3': 4,
        'length': 2,
        'splice': Array.prototype.splice,
        'push': Array.prototype.push
    }
    
    obj1.push(1);
    obj1.push(2);
    
    console.log(obj1);
    // [empty × 2, 1, 2, splice: ƒ, push: ƒ]
    // 因为是从
    
    // Array.prototype.push = function (elem) {
    //     this[this.length] = elem;
    //     this.length ++;
    // }
    
    用 for in 循环; 因为原型上没有数组的方法;

### 封装一个typeof
    function cloneType (any) {
        var type = typeof(any);
        var toStr = Object.prototype.toString;
        var types = {
            "[object Array]": 'array',
            "[object Object]": 'object',
            "[object Number]": 'number',
            "[object String]": 'string',
            "[object Boolean]": 'boolean',
        }
        if (any === null) {
            return 'null';
        } else if (type === 'object') {
            var ret = toStr.call(any);
            return types[ret]
        } else {
            return type;
        }
    }

## 错误信息
    浏览器报错
### 错误信息类型

#### SyntaxError 语法错误


## try catch finally

## 严格模式
    IE9一下 包含IE9 是不支持严格模式的;
    es5 分为 正常模式 和 严格模式
    
    在脚本上最上面写一个'use strict'; 开启严格模式；
    但是在公司里，建议写在函数里的最顶层，不建议写在全局的最顶层; 容易出问题;
    
    为啥用字符串表示呢？
    因为字符串不会报错，用其他的容易报错；