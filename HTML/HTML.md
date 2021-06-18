#HTML
	html 和 html5 声明html方式简化了 <!DOCTYPE html>
	html5删除了一些标签 center font big small frameset frame s u ...
	
	增加了新标签 video audio/ 结构化标签 header、 footer、section、nav、		canvas
	增加了JavaScript API 地理定位、离线存储、canvas、 应用缓存、拖拽、
	
	CSS3 过渡、转换、动画、
	h5 app
	html5+

## 结构
### 声明
	<!DOCTYPE html>
	指定版本编写HTML 这个就是HTML5的声明方式。
###  根标签
	<html></html>
		<html lang="zh-CN"></html> // 简体中文
		<html lang="en"></html> // 英文		
		<html lang="zh-HK"></html> // 香港		
		<html lang="zh-TW"></html>		// 台湾
		<html lang="zh-MO"></html> // 澳门


​	
#### 向浏览器传递网页的基本信息和配置
	<head></head> 
#####head 3大件之
	<title></title> 
	title的编写规范：（重要）
	1：网页标题一般控制在 30 ~ 40个字
	2：网站主页  网站名称 + 主要的关键字/关键词的描述
	3：详情页  详情名称 + 网站名称 + 简介
	4：列表页  分类名称 + 关键字 + 网站名称
	5：文章页  标题 + 分类 + 网站名称
	
	<meta name="keywords" content=""></meta>
	keywords 100个汉字
	网站名称 + 分类信息 + 网站名称
	
	<meta name="description" content=""></meta>
	description 80 ~ 120个汉字
	综合title + keywords的简单描述
	
	<meta charset="UTF-8"></meta>
		文本设置 
		编码字符集： 
	        GB2312：中国信息处理标准码，简体中文编码
	        GBK：	汉字扩展规范，扩大汉字收入，增加繁体、新疆语、藏语等少数名称文字
	        UTF-8：uniCode 万国码，基本包括全世界所有国家的文字。


####页面的呈现配置
	<body></body>

##搜索引擎认知的优先级
	title > description > keywords
	为了迎合搜索引擎爬虫抓取网页，提高网页优先级，

### 标签
	h1 ~ h6 标题标签 是标题就用这个 搜索引擎爬虫喜欢这个。
	p 段落标签	浏览器默认的文字大小是16像素
#### 内联元素：
	span / strong / em / ins / label / a / sub / sup
#### 块级元素：
	div / h1~h6 / p / address / ul / ol / li / dl / dt / dd / table / form / fieldset / legend
#### 内联块元素：
	input / img / select / textarea / iframe