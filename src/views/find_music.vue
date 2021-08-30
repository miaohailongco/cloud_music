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
			<swiper :swiperList="rec_song_list"></swiper>
		</div>
		<div class="section">
			<div class="section-title">
				<span>推荐歌单</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div v-for="item in 10" :key="item" class="rec-song" style="">
					<img src="../assets/eg_pic1.png" >
					<p>好歌推荐好歌推荐好歌推荐</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title">
				<span>独家放送</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div v-for="item in 3" :key="item" class="own-song">
					<img src="../assets/eg_pic2.png" >
					<p>好歌推荐好歌推荐好歌推荐</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title">
				<span>最新音乐</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div v-for="item in 12" :key="item" class="new-song">
					<img src="../assets/eg_pic3.png" >
					<div class="right-desc">
						<p>好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐</p>
						<p>陈小春</p>
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title">
				<span>推荐MV</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div v-for="item in 3" :key="item" class="rec-mv">
					<img src="../assets/eg_pic2.png" >
					<p>好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐</p>
					<p>好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐好歌推荐</p>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="section-title">
				<span>播客</span>
				<img src="../assets/more.png" alt="">
			</div>
			<div class="section-content">
				<div v-for="item in 5" :key="item" class="rec-song" style="">
					<img src="../assets/eg_pic1.png" >
					<p>好歌推荐好歌推荐好歌推荐</p>
				</div>
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
		},
		data () {
			return {
				rec_song_list: []
			}
		},
		mounted() {
			this.getBanner()
		},
		methods: {
			getBanner () {
				this.$axios({
					url: '/banner',
					method:'POST',//其实可以不用写，因为在axios封装文件中设置了默认method为POST
				}).then(res => {
					console.log(res)
					this.rec_song_list = res.banners
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.find-music {
		width: 100%;
		padding: 20px 30px;
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		
		&::-webkit-scrollbar {
			width: 6px;
			background-color: transparent;
		}
		
		&::-webkit-scrollbar-button {
			display: none;
		}
		
		&::-webkit-scrollbar-thumb {
			background-color: #434343;
			border-radius: 50px;
			width: 100%;
			height: 50px;
		}
		
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
				
				&>span {
					color: #D0D0D0;
					
					&:hover {
						color: #fff;
						cursor: pointer;
					}
				}
				
				&>img {
					width: 20px;
					height: 20px;
				}
			}
			
			.section-content {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				
				.rec-song,
				.own-song,
				.rec-mv {
					width: 18%;
					margin-bottom: 20px;
					
					&>img {
						width: 100%;
						margin-bottom: 5px;
					}
					
					&>p {
						width: 100%;
						height: 40px;
						font-size: 14px;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
				
				.own-song,
				.rec-mv {
					width: 32%;
				}
				
				.new-song {
					width: 32%;
					display: flex;
					margin-bottom: 15px;
					
					&>img {
						width: 50px;
						height: 50px;
						margin-right: 10px;
					}
					
					.right-desc {
						width: calc(100% - 60px);
						font-size: 14px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						
						&>p {
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							word-break: break-all;
						}
						
						&>p:nth-child(2) {
							color: #727272;
							margin-top: 5px;
						}
					}
				}
				
				.rec-mv {
					
					&>p {
						width: 100%;
						height: 20px;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					
					&>p:last-child {
						color: #727272;
						margin-top: 5px;
					}
				}
			}
		}
	}
</style>
