;(function () {
	function TabWrap () {
		this.headerTab = document.getElementsByClassName('tab-header-items');
		this.bodyTab = document.getElementsByClassName('tab-body-items');
		this.init();
	}

	TabWrap.prototype.init = function () {
		var _self = this;

		for(var i = 0 ;i < this.headerTab.length; i++) {
			(function (j) {
				var items = _self.headerTab[j];
				items.onclick = function (e) {
					_self.clear();
					items.className += ' cur';
					_self.bodyTab[j].className += ' active';
				}
			})(i)
		}

	}

	TabWrap.prototype.clear = function () {
		for(var i = 0; i < this.headerTab.length; i++) {
			var items = this.headerTab[i];
			items.className = 'tab-header-items';
			this.bodyTab[i].className = 'tab-body-items';
		}
	}

	window.TabWrap = TabWrap;
})();