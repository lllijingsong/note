##CSS
	cascading style sheet 层叠样式表

### 浏览器
	组成部分
	shell 	内核
	IE	 trident
	Chrome   webkit(谷歌和苹果一起搞的)
			/blink(谷歌从webkit剥离出来的其实和webkit差不多)
	firefox		gecko
	opera		presto (360 和 昆仑万维 收购了)
	safari	webkit
	
	内核： 渲染(rendering)引擎 / JS引擎
	Chrome V8引擎直接JS代码转换机器码转换

###选择器
	选择器 {
		属性名：属性值
	}
	类名选择	id选择器	标签名选择器  通配符选择器 *
	
	属性选择器:
	[id="box"] {
		width: 100px;
		height: 100px;
	}
	
	[href] {
		
	}
	[type="text"]

!important

opacity: 1;
filter: alpha(opacity=100);

###盒子模型
	1.宽高所划分的区域
	2.边框
	3.内边距
	4.外边距	