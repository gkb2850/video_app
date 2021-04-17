<template>
	<view class="register_container">
		<view class="register_from_box">
			<view class="title_txt">未注册的手机号验证后默认登录</view>
			<view class="input_box">
				<view class="item_input">
					<image class="l_icon" src="@/static/images/phone_icon.png" mode=""></image>
					<input type="text" value="" placeholder="请输入手机号" />
					<image class="del_icon" src="@/static/images/del_radiou_icon.png" mode=""></image>
				</view>
				<view class="item_input">
					<image class="l_icon" src="@/static/images/anquan_icon.png" mode=""></image>
					<input type="text" value="" placeholder="请输入验证码" />
					<view class="code_btn">获取验证码</view>
				</view>
			</view>
			<view class="xy_box">
				<image class="check_icon" src="@/static/images/check_f_icon.png" mode=""></image>
				<view class="txt_box">
					<text class="p_txt">我已阅读并同意</text>
					<text class="l_txt">《用户服务协议》</text>
					<text class="p_txt">和</text>
					<text class="l_txt">《隐私政策》</text>
				</view>
			</view>
			<view class="footer_btn">登录/注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.register_container {
	padding: 0 35rpx;
	box-sizing: border-box;
	.register_from_box {
		padding-top: 130rpx;
		.title_txt {
			height: 53rpx;
			font-size: 38rpx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #282828;
			line-height: 53rpx;
			letter-spacing: 1rpx;
		}
		.input_box {
			padding-top: 34rpx;
			.item_input {
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #F7F7F7;
				position: relative;
				.l_icon {
					width: 26rpx;
					height: 40rpx;
					margin-right: 25rpx;
				}
				input {
					flex: 1;
					overflow: hidden;
					background: transparent;
					outline: none;
					height: 62rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #CCCCCC;
					line-height: 62rpx;
					padding: 24rpx 0;
				}
				.code_btn {
					margin-left: 20rpx;
					width: 195rpx;
					height: 70rpx;
					background: rgba(46, 110, 226, 0.1);
					border-radius: 4rpx;
					height: 70rpx;
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #2E6EE2;
					line-height: 70rpx;
					text-align: center;
				}
				.del_icon {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 30rpx;
					height: 30rpx;
					border-top: 20rpx solid transparent;
					border-bottom: 20rpx solid transparent;
					border-left: 20rpx solid transparent;
				}
			}
		}
		.xy_box {
			padding-top: 50rpx;
			display: flex;
			.check_icon {
				width: 36rpx;
				height: 36rpx;
				margin-right: 12rpx;
				display: block;
			}
			.txt_box {
				flex: 1;
				overflow: hidden;
				.p_txt {
					font-size: 24rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #666666;
					line-height: 36rpx;
					letter-spacing: 1rpx;
				}
				.l_txt {
					font-size: 24rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #2E6EE2;
					line-height: 36rpx;
					letter-spacing: 1rpx;
				}
			}
		}
		.footer_btn {
			margin: 70rpx auto;
			width: 680rpx;
			height: 88rpx;
			text-align: center;
			background: rgba(46, 110, 226, 0.4);
			border-radius: 8rpx;
			font-size: 34rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
		}
	}
}
</style>
