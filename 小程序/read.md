# 小程序
## 小，快捷，方便

### 语法
view === div
text === span
image === img
wx:for === v-for
wx:if === v-if
wx:else === v-else
hidden === v-show

响应式单位 rpx  
1rpx === 0.5px;

wxss 是可以引入外部css文件的， 使用@import’path‘

bindtap === @click  // 会事件冒泡 可以替换成catchtap 就会不冒泡了。

不能直接操作 this修改属性， 这里和react相似  this.setData({ count: this.data.count + 1  })

<view data-id="001"></view>  可以通过事件对象访问到这个data-id h5的新增元素 

<input 
	bindfocus="onFocus"  焦点后触发
	bindblur="onBlur"    失去焦点触发
	bindconfirm="onConfirm"  按回车后触发
	// 他们都有事件对象， 可以通过e.detail访问到数据
/> //   



存储数据， Storage

wx.setStorageSync('key', 'value');

wx.getStorageSync('key')