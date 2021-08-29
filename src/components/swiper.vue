<template>
	<div class="swiper">
		<div class="swiper-box" @mouseover="stopLoop" @mouseleave="swiperLoop">
			<div>
				<img class="swiper-img" 
				v-for="(item,index) in imgList" 
				:key="index" 
				:class="swiperComputed(currentIndex,index)" 
				:src="imgList[index]" 
				>
			</div>
			<div v-if="showTouch">
				<img class="touch-pre" src="../assets/left.png" alt="" @click="pre">
				<img class="touch-next" src="../assets/right.png" alt="" @click="next">
			</div>
		</div>
		<div class="indicators">
			<div 
			:class="'indicator' + (currentIndex == index ? ' active' : '')" 
			v-for="(item,index) in getListLength" 
			:key="index" 
			@mouseover="currentIndex = index"
			></div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				imgList: [
					require("../assets/swiper.png"),
					require("../assets/swiper1.png"),
					require("../assets/swiper2.png"),
					require("../assets/swiper3.png"),
					require("../assets/swiper4.png")
				],
				currentIndex: 0,
				timer: null,
				showTouch: false
			}
		},
		mounted() {
			this.swiperLoop()
		},
		computed: {
			swiperComputed () {
				return (currentIndex,index) => {
					var cls = ''
					let pre = currentIndex
					let active = currentIndex + 1
					let next = currentIndex + 2
					if (index == currentIndex) {
						cls = ' swiper-img-pre'
					}
					if (index == (active > this.getListLength - 1 ? active - this.getListLength : active)) {
						cls = ' swiper-img-active'
					}
					if (index == (next > this.getListLength - 1 ? next - this.getListLength : next)) {
						cls = ' swiper-img-next'
					}
					return cls
				}
			},
			getListLength () {
				return this.imgList.length
			}
		},
		methods: {
			pre () {
				this.currentIndex--
				if (this.currentIndex < 0) {
					this.currentIndex = this.imgList.length - 1
				}
			},
			next () {
				this.currentIndex++
				if (this.currentIndex == this.imgList.length) {
					this.currentIndex = 0
				}
			},
			swiperLoop () {
				if (this.timer) {
					clearInterval(this.timer)
				}
				if (this.showTouch) {
					this.showTouch = false
				}
				this.timer = setInterval(() => {
					this.next()
				},4000)
			},
			stopLoop () {
				clearInterval(this.timer)
				this.showTouch = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.swiper {
		width: 100%;
		height: 250px;
		position: relative;
		
		.swiper-box {
			width: 100%;
			height: 200px;
			position: relative;
			display: flex;
			overflow: hidden;
			margin-bottom: 15px;
		}
		
		.indicators {
			width: 100%;
			display: flex;
			justify-content: center;
			
			.indicator {
				width: 6px;
				height: 6px;
				background-color: #2E3033;
				margin: 0 5px;
				border-radius: 50px;
				
				&.active {
					background-color: #EC4141;
				}
			}
		}
		
		.touch-pre,
		.touch-next {
			width: 30px;
			height: 30px;
			position: absolute;
			z-index: 9;
			background-color: rgba(0,0,0,.3);
			border-radius: 50px;
			
			&:hover {
				cursor: pointer;
			}
		}
		
		.touch-pre {
			left: 10px;
			top: 50%;
			transform: translateY(-50%);
		}
		
		.touch-next {
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
		}
		
		.swiper-img {
			position: absolute;
			height: 160px;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			z-index: 1;
			
			transition: all .3s ease-in-out;
			
			&.swiper-img-pre {
				height: 160px;
				left: 0;
				top: 50%;
				transform: translate(0,-50%);
				z-index: 2;
				
				transition: all .4s ease-out;
			}
			
			&.swiper-img-active {
				height: 200px;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				z-index: 3;
				
				transition: all .4s ease-out;
				
				&:hover {
					cursor: pointer;
				}
			}
			
			&.swiper-img-next {
				height: 160px;
				left: 100%;
				top: 50%;
				transform: translate(-100%,-50%);
				z-index: 2;
				
				transition: all .4s ease-out;
			}
		}
	}
</style>
