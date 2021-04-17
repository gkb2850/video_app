<template>
	<view class="myCache_container">
		<view class="cache_list_box">
			<view class="item_cache">
				<view class="checkout_box" v-if="false">
					<image class="cache_checkout" src="@/static/images/check_f_icon.png" mode=""></image>
				</view>
				<view class="cache_content">
					<view class="cache_img_box">
						<image class="cache_cover" src="@/static/images/youName.jpg" mode=""></image>
					</view>
					<view class="cache_txt_box">
						<view class="txt_name">正在下载</view>
						<view class="film_name">你的名字 第01集</view>
						<view class="film_number">1.6G</view>
						<view class="progress_bar">
							<view class="int_bar"></view>
						</view>
						<view class="cache_number">正在缓存： 8%</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cache_total_txt">已经到底啦</view>
		<view class="footer_operate_btn">
			<view class="all_btn">全选</view>
			<view class="line"></view>
			<view class="del_btn">删除(10)</view>
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
.myCache_container {
	padding-bottom: 97rpx;
	.cache_list_box {
		padding: 0 24rpx;
		box-sizing: border-box;
		.item_cache {
			padding-top: 31rpx;
			display: flex;
			align-items: center;
			.checkout_box {
				margin-right: 6rpx;
				display: flex;
				align-items: center;
				height: 100%;
				.cache_checkout {
					width: 38rpx;
					height: 38rpx;
				}
			}
			.cache_content {
				flex: 1;
				overflow: hidden;
				display: flex;
				.cache_img_box {
					position: relative;
					.cache_cover {
						width: 218rpx;
						height: 290rpx;
						margin-right: 23rpx;
					}
				}
				.cache_txt_box {
					flex: 1;
					overflow: hidden;
					.txt_name {
						height: 45rpx;
						font-size: 32rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #000000;
						line-height: 45rpx;
						margin-bottom: 20rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.film_name {
						height: 40rpx;
						font-size: 28rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #333333;
						line-height: 40rpx;
						margin-bottom: 20rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.film_number {
						height: 40rpx;
						font-size: 28rpx;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #666666;
						line-height: 40rpx;
						margin-bottom: 32rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.progress_bar {
						height: 3rpx;
						background: #F0F0F0;
						border-radius: 1rpx;
						position: relative;
						margin-bottom: 49rpx;
						.int_bar {
							position: absolute;
							left: 0;
							top: 0;
							height: 3rpx;
							background: #2E6EE2;
							border-radius: 1rpx;
							width: 20rpx;
						}
					}
					.cache_number {
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #666666;
						line-height: 42rpx;
					}
				}
			}
		}
	}
	.cache_total_txt {
		height: 40rpx;
		font-size: 26rpx;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #999999;
		line-height: 40rpx;
		position: relative;
		margin: 69rpx auto;
		text-align: center;
	}
	.cache_total_txt::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 30rpx;
		height: 2rpx;
		background: #999999;
		transform: translate(-130rpx, -50%);
	}
	.cache_total_txt::before {
		content: "";
		position: absolute;
		top: 50%;
		right: 50%;
		width: 30rpx;
		height: 2rpx;
		background: #999999;
		transform: translate(130rpx, -50%);
	}
	.footer_operate_btn {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 97rpx;
		background: #FFFFFF;
		box-shadow: 0px 1px 6px 0px rgba(92, 92, 92, 0.5);
		display: flex;
		align-items: center;
		.all_btn {
			flex: 1;
			overflow: hidden;
			text-align: center;
			height: 97rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #333333;
			line-height: 97rpx;
		}
		.line {
			width: 2rpx;
			height: 70rpx;
			background: #EFEFEF;
		}
		.del_btn {
			flex: 1;
			overflow: hidden;
			height: 97rpx;
			font-size: 30rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #F95959;
			line-height: 97rpx;
			text-align: center;
		}
	}
}
</style>
