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
		<swiper></swiper>
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
			margin-bottom: 30px;
			
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
	}
</style>
