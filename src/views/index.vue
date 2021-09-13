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
				<div class="login-box" @click="tologin">
					<div class="header-box">
						<img class="user-head" src="../assets/unlogin.png" alt="" v-if="!userInfo">
						<img class="user-head" :src="userInfo.avatarUrl" alt="" v-else>
					</div>
					<span class="user-name" v-if="!userInfo">未登录</span>
					<span class="user-name" v-else>{{ userInfo.nickname }}</span>
					<img class="login-icon" src="../assets/colspan.png" alt="">
				</div>
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
		<!-- 登录注册弹框 -->
		<cld-modal width="350" height="530" v-model="show" :showTitle="showreg" @toLogin="doLogin">
			<!-- 登录内容 -->
			<div class="login-modal">
				<div class="login-form">
					<img src="../assets/login_pic.png" alt="">
					<div class="login-phone">
						<div>
							<img src="../assets/login_phone.png" >
							<span>+86</span>
							<img src="../assets/colspan.png" >
						</div>
						<input type="text" placeholder="请输入手机号" v-model="phone" />
					</div>
					<div class="login-pwd">
						<div>
							<img src="../assets/login_pwd.png" >
						</div>
						<input type="text" :placeholder="showreg ? '设置登录密码' : '请输入密码'" v-model="password" />
						<span v-if="!showreg">重设密码</span>
					</div>
					<label class="auto-login" v-if="!showreg">
						<input type="checkbox" />
						<span>自动登录</span>
					</label>
					<div class="register-tip" v-if="showreg">密码8-20位，至少包含字母/数字/字符2中组合</div>
					<div class="login-btn" @click="logReg">{{ showreg ? '注册' : '登录' }}</div>
					<div class="to-register" @click="showreg = true" v-if="!showreg">注册</div>
					<div class="other-login-way" v-if="showreg">
						<div class="divider-left"></div>
						<span>其他注册方式</span>
						<div class="divider-right"></div>
					</div>
					<div class="login-way">
						<div class="way">
							<div></div>
							<div v-if="showreg">微信</div>
						</div>
						<div class="way">
							<div></div>
							<div v-if="showreg">QQ</div>
						</div>
						<div class="way">
							<div></div>
							<div v-if="showreg">新浪微博</div>
						</div>
						<div class="way">
							<div></div>
							<div v-if="showreg">网易邮箱</div>
						</div>
					</div>
				</div>
				<div class="cloud-clause" v-if="!showreg">
					<label>
						<input type="checkbox" />
						<span class="">同意</span>
					</label>
					<span class="clause">《服务条款》</span>
					<span class="clause">《隐私政策》</span>
					<span class="clause">《儿童隐私政策》</span>
				</div>
			</div>
		</cld-modal>
	</div>
</template>

<script>
	import drag from "../directives/drag.js"
	import cldModal from "../components/cld_modal.vue"
	export default {
		name: 'index',
		components: {
			cldModal
		},
		directives: {
			drag
		},
		data () {
			return {
				li_active: 0,
				show: false,
				phone: '',
				password: '',
				showreg: false
			}
		},
		computed: {
			userInfo () {
				return this.$store.state.userInfo
			}
		},
		methods: {
			// 登录注册
			logReg () {
				let params = {
					phone: this.phone,
					password: this.password
				}
				this.$store.dispatch('getUserInfo',params)
			},
			tologin () {
				this.showreg = false
				this.show = true
			},
			doLogin () {
				this.showreg = false
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
			border-bottom: 2px solid #f00;
			// border-image: linear-gradient(to right,#660404,#B72525,#660404);
			border-image: linear-gradient(to right,#660404, #B72525,#660404) 20 20;
			
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
				
				.login-box {
					display: flex;
					align-items: center;
					
					.login-icon {
						width: 10px;
						height: 10px;
						margin-left: 10px;
					}
					
					&:hover {
						cursor: pointer;
					}
					
					.header-box {
						width: 25px;
						height: 25px;
						background-color: rgba(46,46,48);
						border-radius: 50px;
						
						.user-head {
							width: 100%;
							height: 100%;
							border-radius: 50px;
						}
					}
					
					.user-name {
						color: #a5a7a8;
						font-size: 12px;
						margin-left: 10px;
						
						&:hover {
							cursor: pointer;
						}
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
			height: calc(100% - 133px);
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
			height: 73px;
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
		
		.login-modal {
			width: 100%;
			padding-top: 35px;
			
			.login-form {
				padding: 0 45px;
				
				&>img {
					width: 260px;
					height: 85px;
					margin: 0 auto;
					margin-bottom: 30px;
				}
			}
			
			.login-phone,
			.login-pwd {
				width: 100%;
				height: 40px;
				display: flex;
				border: 1px solid #e5e5e5;
				
				&>div {
					width: 85px;
					height: 100%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					font-size: 12px;
					
					&>img {
						width: 20px;
						height: 20px;
					}
					
					&>img:last-child {
						width: 12px;
						height: 12px;
					}
				}
				
				&>input {
					outline: none;
					width: calc(100% - 85px);
					border: none;
					border-left: 1px solid #e5e5e5;
					padding: 0 10px;
				}
			}
			
			.login-phone {
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
			}
			
			.login-pwd {
				border-top: none;
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
				
				&>div {
					width: 30px;
					
					&>img {
						width: 20px !important;
						height: 20px !important;
					}
				}
				
				&>input {
					width: calc(100% - 90px);
					border-left: none;
					padding: 5;
				}
				
				&>span {
					color: #b3b3b3;
					font-size: 12px;
					line-height: 40px;
					
					&:hover {
						cursor: pointer;
					}
				}
			}
			
			.auto-login {
				display: flex;
				align-items: center;
				margin-top: 10px;
				
				&>span {
					font-size: 12px;
					color: #666;
					margin-left: 10px;
				}
			}
			
			.register-tip {
				font-size: 12px;
				color: #9F9F9F;
				margin-top: 10px;
			}
			
			.login-btn {
				margin-top: 10px;
				width: 100%;
				background-color: #EA4848;
				color: #fff;
				border-radius: 8px;
				text-align: center;
				padding: 10px 0;
				letter-spacing: 5px;
				margin-bottom: 10px;
				
				&:hover {
					background-color: #C72E2E;
					cursor: pointer;
				}
			}
			
			.to-register {
				text-align: center;
				text-decoration: underline;
				font-size: 14px;
				margin-bottom: 20px;
				
				&:hover {
					cursor: pointer;
				}
			}
			
			.other-login-way {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 12px;
				color: #666;
				margin: 65px 0 15px 0;
				
				.divider-left {
					flex: 1;
					height: 0;
					border-top: 1px solid #666;
					border-image: linear-gradient(to right, #fff, #DCDCDC) 20 20;
				}
				
				.divider-right {
					flex: 1;
					height: 0;
					border-top: 1px solid #666;
					border-image: linear-gradient(to left, #fff, #DCDCDC) 20 20;
				}
			}
			
			.login-way {
				display: flex;
				justify-content: space-around;
				
				.way {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					
					&>div:first-child {
						width: 40px;
						height: 40px;
						border: 1px solid #CDCDCD;
						border-radius: 50px;
						display: flex;
						justify-content: center;
						align-items: center;
						
						&>img {
							width: 25px;
							height: 25px;
						}
					}
					
					&>div:last-child {
						color: #999;
						font-size: 12px;
						margin-top: 5px;
					}
					
					&:hover {
						cursor: pointer;
					}
				}
				
				.way {
					&:first-child:hover {
						&>div:first-child {
							background: url(../assets/wechart_hover.png) no-repeat center;
							background-size:25px 25px;
							background-color: #67B633;
						}
					}
					
					&:first-child>div:first-child {
						background: url(../assets/wechart.png) no-repeat center;
						background-size:25px 25px;
						
						&>img {
							width: 25px;
							height: 25px;
						}
					}
					
					&:nth-child(2):hover {
						&>div:first-child {
							background: url(../assets/qq_hover.png) no-repeat center;
							background-size:25px 25px;
							background-color: #34A0DF;
						}
					}
					
					&:nth-child(2)>div:first-child {
						background: url(../assets/qq.png) no-repeat center;
						background-size:25px 25px;
						
						&>img {
							width: 25px;
							height: 25px;
						}
					}
					
					&:nth-child(3):hover {
						&>div:first-child {
							background: url(../assets/blog_hover.png) no-repeat center;
							background-size:25px 25px;
							background-color: #EA4848;
						}
					}
					
					&:nth-child(3)>div:first-child {
						background: url(../assets/blog.png) no-repeat center;
						background-size:25px 25px;
						
						&>img {
							width: 25px;
							height: 25px;
						}
					}
					&:last-child:hover {
						&>div:first-child {
							background: url(../assets/yi_hover.png) no-repeat center;
							background-size: 40px 40px;
							background-color: #EA4848;
						}
					}
					
					&:last-child>div:first-child {
						background: url(../assets/yi.png) no-repeat center;
						background-size: 40px 40px;
					}
				}
			}
			
			.cloud-clause {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 30px;
				
				&>label {
					display: flex;
					align-items: center;
					
					&>input {
						margin-right: 5px;
					} 
					
					&>span {
						color: #9F9F9F;
						font-size: 12px;
					}
				}
				
				.clause {
					font-size: 12px;
					color: #507DAF;
					
					&:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
