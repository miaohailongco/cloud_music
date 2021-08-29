<template>
	<div class="find-music">
		<ul class="cate-title">
			<li class="active">个性推荐</li>
			<li>专属订制</li>
			<li>歌单</li>
			<li>排行榜</li>
			<li>歌手</li>
			<li>最新音乐</li>
		</ul>
		<div class="find-music-content">
			<swiper></swiper>
		</div>
		<div class="section">
			<div class="section-title">
				<span>推荐歌单</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div style="width: 18%;height:0;padding-bottom:18%;background-color: aliceblue;"></div>
				<div style="width: 18%;height:0;padding-bottom:18%;background-color: aliceblue;"></div>
				<div style="width: 18%;height:0;padding-bottom:18%;background-color: aliceblue;"></div>
				<div style="width: 18%;height:0;padding-bottom:18%;background-color: aliceblue;"></div>
				<div style="width: 18%;height:0;padding-bottom:18%;background-color: aliceblue;"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import swiper from "../components/swiper.vue"
	export default {
		name: 'find_music',
		components: {
			swiper
		}
	}
</script>

<style lang="less" scoped>
	.find-music {
		width: 100%;
		padding: 20px 30px;
		
		.cate-title {
			list-style: none;
			display: flex;
			margin-bottom: 25px;
			
			&>li {
				margin-right: 20px;
				
				&:hover {
					cursor: pointer;
				}
				
				&.active {
					font-size: 20px;
					font-weight: bold;
					position: relative;
					
					&::after {
						position: absolute;
						content: '';
						width: 80%;
						height: 4px;
						background-color: #EC4141;
						border-radius: 50px;
						left: 50%;
						bottom: -10px;
						transform: translateX(-50%);
					}
				}
			}
		}
		
		.find-music-content {
			max-width: 1100px;
			margin: 0 auto;
		}
		
		.section {
			max-width: 1100px;
			margin: 0 auto;
			
			.section-title {
				width: 100%;
				display: flex;
				align-items: center;
				font-size: 20px;
				font-weight: bold;
				margin-bottom: 15px;
				
				&>img {
					width: 20px;
					height: 20px;
				}
			}
			
			.section-content {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
