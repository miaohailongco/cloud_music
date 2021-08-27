<template>
	<div class="container">
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

		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home'
	}
</script>
<style lang="less">
	.container {
		width: 1024px;
		height: 670px;
		margin: 0 auto;

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
						box-sizing: border-box;
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
	}
</style>
