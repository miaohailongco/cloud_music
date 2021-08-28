<template>
	<div class="swiper">
		<div class="swiper-box">
			<!-- <img class="swiper-img" :src="item" v-for="(item,index) in imgList" :key="index"> -->
			<div>
				<!-- <img class="swiper-img swiper-img-left" :src="imgList[currentIndex % this.imgList.length]">
				<img class="swiper-img swiper-img-center" :src="imgList[(currentIndex + 1) % this.imgList.length]">
				<img class="swiper-img swiper-img-right" :src="imgList[(currentIndex + 2) % this.imgList.length]"> -->
				<img class="swiper-img" 
				v-for="(item,index) in imgList" 
				:key="index" 
				:class="swiperComputed(currentIndex + index)" 
				:src="imgList[index]" 
				>
			</div>
			<img class="touch-pre" src="../assets/left.png" alt="" @click="pre">
			<img class="touch-next" src="../assets/right.png" alt="" @click="next">
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
					require("../assets/swiper2.png")
				],
				currentIndex: 0
			}
		},
		mounted() {
			// console.log(this.imgList)
		},
		computed: {
			swiperComputed () {
				return index => {
					console.log('index:' + index)
					var cls = ''
					if (index % 3 == 0) {
						cls = ' swiper-img-left'
					}
					if (index % 3 == 1) {
						cls = ' swiper-img-center'
					}
					if (index % 3 == 2) {
						cls = ' swiper-img-right'
					}
					console.log('cls:' + cls)
					return cls
				}
			}
		},
		methods: {
			pre () {
				// this.currentIndex--
				this.currentIndex = (this.currentIndex + 2) % 3
				console.log('currentIndex:' + this.currentIndex)
			},
			next () {
				this.currentIndex = (this.currentIndex + 1) % 3
				console.log('currentIndex:' + this.currentIndex)
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
			width: 540px;
			position: absolute;
			
			&.swiper-img-left {
				height: 160px;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				z-index: 2;
				
				transition: all .3s ease-in-out;
			}
			
			&.swiper-img-center {
				height: 200px;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				z-index: 3;
				
				transition: all .3s ease-in-out;
				
				&:hover {
					cursor: pointer;
				}
			}
			
			&.swiper-img-right {
				height: 160px;
				left: 100%;
				top: 50%;
				transform: translate(-100%,-50%);
				z-index: 2;
				
				transition: all .3s ease-in-out;
			}
			
			&.swiper-img-wait {
				height: 160px;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				z-index: 1;
				
				transition: all .3s ease-in-out;
			}
		}
	}
</style>
