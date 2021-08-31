<template>
	<div class="cld-modal" :style="cldStyle" v-show="show">
		<div class="modal-top">
			<div :class="'title' + (showTitle ? ' show-tilte' : ' hide-title')" @click="toLogin">< 返回登录</div>
			<img src="../assets/close_modal.png" alt="" @click="closeModal">
		</div>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		model: {
			prop: 'show',
			event: 'change'
		},
		props: {
			width: {
				type: [Number,String],
				default: 100
			},
			height: {
				type: [Number,String],
				default: 100
			},
			show: {
				type: Boolean,
				default: false
			},
			showTitle: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				
			}
		},
		computed: {
			cldStyle () {
				let obj = {}
				obj.width = this.width + 'px'
				obj.height = this.height + 'px'
				return obj
			}
		},
		methods: {
			closeModal () {
				this.$emit('change',false)
			},
			toLogin () {
				this.$emit('toLogin')
			}
		}
	}
</script>

<style lang="less" scoped>
	.cld-modal {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 9;
		transform: translate(-50%,-50%);
		background-color: #fff;
		box-shadow: 0px 0px 20px #7f7f7f;
		
		.modal-top {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			
			.title {
				font-size: 12px;
				color: #666;
			}
			
			.show-tilte {
				
				&:hover {
					cursor: pointer;
				}
			}
			
			.hide-title {
				opacity: 0;
			}
			
			&>img {
				width: 20px;
				height: 20px;
				
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
</style>
