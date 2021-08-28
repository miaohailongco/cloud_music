<template>
	<div class="swiper">
		<div class="swiper-box">
			<!-- <img class="swiper-img" :src="item" v-for="(item,index) in imgList" :key="index"> -->
			<img class="swiper-img swiper-img-left" src="../assets/swiper.png">
			<img class="swiper-img swiper-img-center" src="../assets/swiper1.png">
			<img class="swiper-img swiper-img-right" src="../assets/swiper2.png">
			<img class="touch-pre" src="../assets/left.png" alt="">
			<img class="touch-next" src="../assets/right.png" alt="">
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
				]
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
				z-index: 1;
			}
			
			&.swiper-img-center {
				height: 200px;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				z-index: 2;
				
				&:hover {
					cursor: pointer;
				}
			}
			
			&.swiper-img-right {
				height: 160px;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				z-index: 1;
			}
		}
	}
</style>
