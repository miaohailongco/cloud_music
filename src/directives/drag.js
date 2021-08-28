export default {
	bind(el, binding) {
		el.style.position = 'relative'
		el.children.forEach((item,index) => {
			if (index > 0) {
				item.onmousedown = function (e) {
					// 阻止冒泡
					e.stopPropagation()
					// 取消默认行为
					e.preventDefault()
				}
			}
		})
		var elChild = el.children[0]
		el.onmousedown = function(ev) {
			// 浏览器的兼容
			var e = ev || window.event
			if (e.toElement.localName == 'img' || e.toElement.localName == 'input' || e.toElement.localName == 'span') return
			//记录鼠标按下时的位置
			var offsetX = e.clientX - el.offsetLeft;
			var offsetY = e.clientY - el.offsetTop;

			// 鼠标移动时触发的事件
			document.onmousemove = function(ev) {
				// 浏览器的兼容
				var e = ev || window.event
				// 定义 currentLeft
				var currentLeft = e.clientX - offsetX
				// 限制左边边界
				if (currentLeft <= 0) {
					currentLeft = 0
				}
				// 限制右边边界
				// 浏览器的兼容性
				var windowWidth = document.documentElement.clientWidth || document.body.clientWidth
				if (currentLeft >= windowWidth - el.offsetWidth) {
					currentLeft = windowWidth - el.offsetWidth
				}
				// 定义 currentTop
				var currentTop = e.clientY - offsetY
				if (currentTop <= 0) {
					currentTop = 0
				}
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
				if (currentTop >= windowHeight - el.offsetHeight) {
					currentTop = windowHeight - el.offsetHeight
				}
				// 当前被拖拽元素的 left 和 top 值
				el.style.left = currentLeft + 'px'
				el.style.top = currentTop + 'px'
			}

			// 鼠标按下后，松开时触发的事件
			document.onmouseup = function() {
				document.onmousemove = null;
			}
		}
		scaleTool(el,el.children[3],document.body)
		//缩放
		function scaleTool(drag,scale,box){
		    scale.onmousedown = function(e){
		        // 阻止冒泡
		        e.stopPropagation()
		        // 取消默认行为
		        e.preventDefault()
		        // 定义一个 position 变量
		        var position = {
		            'w': drag.offsetWidth, // 被缩放元素的offsetWidth
		            'h': drag.offsetHeight,  
		            'x': e.clientX,  // 当前窗口鼠标指针的水平坐标
		            'y': e.clientY
		        }
		        document.body.onmousemove = function(ev){
		            e.preventDefault()
		            // 设置最大为 30*30
		            var w = Math.max(30,ev.clientX - position.x + position.w)
		            var h = Math.max(30,ev.clientY - position.y + position.h)
		
		            // 设置最大的宽高
		            w = w >= box.offsetWidth - drag.offsetLeft ? box.offsetWidth - drag.offsetLeft : w
		            h = h >= box.offsetHeight - drag.offsetTop ? box.offsetHeight - drag.offsetTop : h
		            drag.style.width = w + 'px'
		            drag.style.height = h + 'px'
		        }
		
		        document.body.onmouseup = function(){
		            document.body.onmousemove = null
		            document.body.onmouseup = null
		        }
		
		        document.body.onmouseleave = function(){
		            document.body.onmousemove = null
		            document.body.onmouseup = null
		        }
		    }
		}
	},
	update() {
		// console.log(el)
	}
}
