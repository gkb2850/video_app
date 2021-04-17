<template>
	<view class="login_container">
		<image class="page_bg" src="@/static/images/login_bg.png" mode=""></image>
		<image class="close_page" src="@/static/images/del_icon.png" mode=""></image>
		<view class="logo_box">
			<image class="logo" src="@/static/images/logo.png" mode=""></image>
			<view class="logo_txt">看剧星球</view>
			<view class="login_btn_box">
				<view class="number_self">本机号码一键登录</view>
				<view class="number_other">其他号码登录</view>
			</view>
		</view>
		<view class="footer_box">
			<image class="check_box" src="@/static/images/check_icon.png" mode=""></image>
			<view class="agreement_box">
				<view class="txt">我已阅读并同意</view>
				<view class="a_txt">《中国移动认证服务条款》</view>
				<view class="txt">和</view>
				<view class="a_txt">《用户协议》</view>
				<view class="txt">、</view>
				<view class="a_txt">《隐私政策》</view>
			</view>
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
.login_container {
	position: fixed;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	.page_bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.close_page {
		position: absolute;
		right: 35rpx;
		top: 71rpx;
		width: 28rpx;
		height: 28rpx;
		z-index: 6;
	}
	.logo_box {
		padding-top: 218rpx;
		position: relative;
		z-index: 2;
		.logo {
			width: 150rpx;
			height: 150rpx;
			display: block;
			margin: 0 auto;
		}
		.logo_txt {
			padding-top: 12rpx;
			height: 53rpx;
			font-size: 38rpx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 53rpx;
			text-align: center;
		}
		.login_btn_box {
			.number_self {
				width: 538rpx;
				height: 88rpx;
				border-radius: 44rpx;
				margin: 225rpx auto 32rpx;
				text-align: center;
				font-size: 32rpx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 88rpx;
				background: #2E6EE2;
			}
			.number_other {
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 45rpx;
				text-align: center;
			}
		}
	}
	.footer_box {
		position: absolute;
		left: 0;
		bottom: 46rpx;
		width: 100%;
		padding: 0 52rpx;
		display: flex;
		box-sizing: border-box;
		.check_box {
			width: 36rpx;
			height: 36rpx;
			margin-right: 12rpx;
		}
		.agreement_box {
			flex: 1;
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			.txt {
				font-size: 24rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 33rpx;
				letter-spacing: 1rpx;
			}
			.a_txt {
				font-size: 24rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
				line-height: 33rpx;
				letter-spacing: 1rpx;
				color: #2E6EE2;
			}
		}
	}
}
</style>
