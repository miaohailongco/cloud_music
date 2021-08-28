<template>
	<div class="container" v-drag>
		<div class="cloud-top">
			<div class="top-left">
				<img class="logo-img" src="../assets/logo_img.png" alt="">
				<div class="search-box">
					<img class="search-icon" src="../assets/search.png" alt="">
					<input type="text" placeholder="搜索">
				</div>
			</div>
			<div class="top-right">
				<img class="user-head" src="../assets/header.jpg" alt="">
				<span class="user-name">无敌大大龙</span>
				<img class="right-icon" src="../assets/skin.png" alt="">
				<img class="right-icon" src="../assets/set.png" alt="">
				<img class="right-icon" src="../assets/msg.png" alt="">
				<img class="right-icon" src="../assets/divid.png" alt="">
				<img class="right-icon" src="../assets/mini.png" alt="">
				<img class="right-icon" src="../assets/min.png" alt="">
				<img class="right-icon" src="../assets/max.png" alt="">
				<img class="right-icon" src="../assets/close.png" alt="">
			</div>
		</div>
		<div class="cloud-content">
			<div class="content-left">
				<router-link class="item-link" to="/" tag="div">发现音乐</router-link>
				<router-link class="item-link" to="/podcast" tag="div">播客</router-link>
				<router-link class="item-link" to="/video" tag="div">视频</router-link>
				<router-link class="item-link" to="/friends" tag="div">朋友</router-link>
				<!-- <router-link class="item-link" to="/video" tag="div">直播</router-link> -->
				<router-link class="item-link" to="/secretfm" tag="div">私人FM</router-link>
				<div class="mymusic">我的音乐</div>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/download.png" alt="">
					<span>本地与下载</span>
				</router-link>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/recent.png" alt="">
					<span>最近播放</span>
				</router-link>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/yunpan.png" alt="">
					<span>我的音乐云盘</span>
				</router-link>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/radio.png" alt="">
					<span>我的播客</span>
				</router-link>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/mycollect.png" alt="">
					<span>我的收藏</span>
				</router-link>
				<div class="singlist">
					<span>创建的歌单</span>
					<img class="cloud-icon" src="../assets/colspan.png" alt="">
					<img style="margin-left: 65px;" src="../assets/add.png" alt="">
				</div>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/like.png" alt="">
					<span>我喜欢的音乐</span>
					<div class="xindong">
						<img class="cloud-icon" src="../assets/xindong.png" alt="">
					</div>
				</router-link>
				<router-link class="item-link" to="/friends" tag="div">
					<img class="cloud-icon" src="../assets/singlist.png" alt="">
					<span>Alan Walker</span>
				</router-link>
			</div>
			<div class="content-right">
				<router-view/>
			</div>
		</div>
		<div class="cloud-bottom">
			
		</div>
		<img class="resize-icon" src="../assets/resize.png" alt="">
	</div>
</template>

<script>
	import drag from "../directives/drag.js"
	export default {
		name: 'index',
		directives: {
			drag
		},
		data () {
			return {
				li_active: 0
			}
		}
	}
</script>
<style lang="less" scoped>
	.container {
		width: 1024px;
		height: 670px;
		min-width: 1024px;
		min-height: 670px;
		-webkit-user-select: none;
		position: relative;

		.cloud-top {
			width: 100%;
			height: 60px;
			background-color: #222225;
			display: flex;
			justify-content: space-between;
			
			.top-left {
				display: flex;
				align-items: center;
				
				.logo-img:hover {
					cursor: pointer;
				}
				
				.search-box {
					position: relative;
					display: flex;
					align-items: center;
					
					.search-icon {
						width: 15px;
						height: 15px;
						position: absolute;
						top: 8px;
						left: 15px;
					}
					
					input {
						outline: none;
						width: 160px;
						height: 30px;
						border-radius: 50px;
						border-color: transparent;
						background-color: #29292C;
						padding: 0 20px 0 35px;
						color: #fff;
					}
				}
			}
			
			.top-right {
				display: flex;
				align-items: center;
				
				.user-head {
					width: 30px;
					height: 30px;
					border-radius: 50px;
					
					&:hover {
						cursor: pointer;
					}
				}
				
				.user-name {
					color: #a5a7a8;
					font-size: 14px;
					margin-left: 10px;
					
					&:hover {
						cursor: pointer;
					}
				}
				
				.right-icon {
					width: 20px;
					height: 20px;
					margin-left: 10px;
					
					&:last-child {
						margin-right: 10px;
					}
					
					&:not(:nth-child(6)):hover {
						cursor: pointer;
					}
				}
			}
		}
		
		.cloud-content {
			width: 100%;
			height: calc(100% - 140px);
			background-color: #2B2B2B;
			color: #D0D0D0;
			display: flex;
			
			.content-left {
				width: 200px;
				padding: 5px 0 5px 10px;
				border-right: 1px solid #434343;
				list-style: none;
				overflow-y: scroll;
				overflow-x: hidden;
				
				&::-webkit-scrollbar {
					width: 8px;
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
				
				&>ul>li {
					padding: 10px 5px 10px 10px;
					font-size: 14px;
					display: flex;
					align-items: center;
					
					&:not(.mymusic):hover {
						background-color: #333;
						border-radius: 4px;
						cursor: pointer;
					}
				}
				
				.item-link{
					width: 100%;
					padding: 10px 5px 10px 10px;
					font-size: 14px;
					display: flex;
					align-items: center;
					
					&:hover {
						background-color: #333;
						border-radius: 4px;
						cursor: pointer;
					}
				}
				
				.cloud-icon {
					width: 16px;
					height: 16px;
					margin-right: 5px;
				}
				
				.xindong {
					border: 1px solid #7c7c7c;
					padding: 0 8px;
					border-radius: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 10px;
					
					&>.cloud-icon {
						margin: 0;
					}
				}
				
				.mymusic {
					color: #7C7C7C;
					font-size: 14px;
					margin: 10px 0;
				}
				
				.singlist {
					color: #7C7C7C;
					font-size: 14px;
					display: flex;
					align-items: center;
					margin: 10px 0;
					
					&>div {
						display: flex;
					}
					
					&>img {
						width: 16px;
						height: 16px;
						margin-right: 5px;
					}
					
					&>span:hover,
					&>img:hover {
						cursor: pointer;
					}
				}
			}
			
			.content-right {
				width: calc(100% - 200px);
			}
		}
		
		.cloud-bottom {
			width: 100%;
			height: 80px;
			background-color: #222225;
			border-top: 1px solid #3B3B3E;
		}
		
		.resize-icon {
			width: 20px;
			height: 20px;
			position: absolute;
			right: 0;
			bottom: 0;
			
			&:hover {
				cursor: se-resize;
			}
		}
	}
</style>
