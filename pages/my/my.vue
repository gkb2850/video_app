<template>
	<view class="my_container">
		<view class="user_top_box">
			<image class="bg_user_img" src="@/static/images/my_user_bg.png" mode=""></image>
			<view class="user_info_box">
				<view class="user_avatar">
					<image class="avatar_img" src="@/static/images/user_avatar.png" mode=""></image>
					<view class="txt_box">
						<view class="txt_f">立即登录</view>
						<view class="txt_s">登录查看更多有趣的剧片</view>
					</view>
				</view>
				<view class="r_btn">
					<image class="img_btn" src="@/static/images/jiantou_right.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main_box">
			<view class="operate_btn_box">
				<view class="item_btn">
					<image src="@/static/images/gk_history_icon.png" mode=""></image>
					<view class="txt">观看历史</view>
				</view>
				<view class="item_btn">
					<image src="@/static/images/hc_download_icon.png" mode=""></image>
					<view class="txt">缓存管理</view>
				</view>
				<view class="item_btn">
					<image src="@/static/images/zj_video_icon.png" mode=""></image>
					<view class="txt">我的追剧</view>
				</view>
				<view class="item_btn">
					<image src="@/static/images/tg_history_icon.png" mode=""></image>
					<view class="txt">推广记录</view>
				</view>
			</view>
			<view class="ad_box">
				<view class="txt_line">
					<view class="l_txt">免广告特权</view>
					<view class="r_txt">免广告特权至2021-02-23 10:10:10</view>
				</view>
				<view class="ad_img_box">
					<image class="z_img" src="@/static/images/gg_banner_icon.png" mode=""></image>
					<view class="btn_img">
						<image src="@/static/images/button_radiou.png" mode=""></image>
						<view class="txt">GO</view>
					</view>
				</view>
			</view>
			<view class="list_line_box">
				<view class="title_txt">常用功能</view>
				<view class="line_all_box">
					<view class="item_line">
						<view class="l_box">
							<image src="@/static/images/love_icon.png" mode=""></image>
							<view class="txt">动态圈子</view>
						</view>
						<image class="right_btn" src="@/static/images/jiantou_right.png" mode=""></image>
					</view>
					<view class="item_line">
						<view class="l_box">
							<image src="@/static/images/set_icon.png" mode=""></image>
							<view class="txt">我的设置</view>
						</view>
						<image class="right_btn" src="@/static/images/jiantou_right.png" mode=""></image>
					</view>
					<view class="item_line">
						<view class="l_box">
							<image src="@/static/images/people_icon.png" mode=""></image>
							<view class="txt">关于我们</view>
						</view>
						<image class="right_btn" src="@/static/images/jiantou_right.png" mode=""></image>
					</view>
				</view>
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
.my_container {
	.user_top_box {
		width: 750rpx;
		height: 330rpx;
		position: relative;
		.bg_user_img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		.user_info_box {
			padding: 136rpx 34rpx 0 55rpx;
			display: flex;
			align-items: center;
			.user_avatar {
				flex: 1;
				overflow: hidden;
				display: flex;
				align-items: center;
				.avatar_img {
					width: 124rpx;
					height: 124rpx;
					margin-right: 20rpx;
				}
				.txt_box {
					.txt_f {
						height: 42rpx;
						font-size: 30rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 4rpx;
					}
					.txt_s {
						height: 33rpx;
						font-size: 24rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #333333;
						line-height: 33rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
			.r_btn {
				padding: 20rpx 0 20rpx 20rpx;
				.img_btn {
					width: 13rpx;
					height: 24rpx;
					display: block;
				}
			}
		}
	}
	.main_box {
		background: #fff;
		position: relative;
		padding-top: 209rpx;
		.operate_btn_box {
			width: 702rpx;
			box-shadow: 0px 2px 4px 0px rgba(233, 233, 233, 0.5);
			border-radius: 12rpx;
			margin: 0 auto;
			display: flex;
			position: absolute;
			left: 50%;
			top: -22rpx;
			background: #FFFFFF;
			transform: translateX(-50%);
			.item_btn {
				padding: 32rpx 0 24rpx;
				flex: 1;
				image {
					width: 88rpx;
					height: 88rpx;
					margin: 0 auto 6rpx;
					display: block;
				}
				.txt {
					height: 40rpx;
					font-size: 28rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #555555;
					line-height: 40rpx;
					width: 100%;
					text-align: center;
				}
			}
		}
		.ad_box {
			padding: 0 24rpx;
			box-sizing: border-box;
			.txt_line {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 26rpx;
				.l_txt {
					height: 55rpx;
					font-size: 38rpx;
					font-family: SourceHanSerifCN-Medium, SourceHanSerifCN;
					font-weight: 500;
					color: #333333;
					line-height: 55rpx;
				}
				.r_txt {
					height: 30rpx;
					font-size: 22rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #999999;
					line-height: 30rpx;
				}
			}
			.ad_img_box {
				margin-bottom: 44rpx;
				position: relative;
				.z_img {
					width: 100%;
					height: 130rpx;
					display: block;
				}
				.btn_img {
					position: absolute;
					right: 37rpx;
					top: 26rpx;
					width: 82rpx;
					height: 82rpx;
					image {
						width: 100%;
						height: 100%;
						display: block;
					}
					.txt {
						width: 82rpx;
						height: 82rpx;
						font-size: 32rpx;
						font-family: Futura-Bold, Futura;
						font-weight: bold;
						color: #F34E42;
						line-height: 82rpx;
						text-shadow: 1rpx 3rpx 5rpx #699FFF;
						text-align: center;
						position: absolute;
						left: 0;
						top: 0;
					}
				}
			}
		}
		.list_line_box {
			padding: 0 45rpx 0 24rpx;
			box-sizing: border-box;
			.title_txt {
				height: 55rpx;
				font-size: 38rpx;
				font-family: SourceHanSerifCN-Medium, SourceHanSerifCN;
				font-weight: 500;
				color: #333333;
				line-height: 55rpx;
			}
			.line_all_box {
				.item_line {
					height: 113rpx;
					display: flex;
					align-items: center;
					border-bottom: 2rpx solid #F7F7F7;
					.l_box {
						flex: 1;
						overflow: hidden;
						display: flex;
						align-items: center;
						height: 100%;
						image {
							width: 38rpx;
							height: 38rpx;
							margin-right: 20rpx;
						}
						.txt {
							height: 45rpx;
							font-size: 32rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #434343;
							line-height: 45rpx;
						}
					}
					.right_btn {
						width: 13rpx;
						height: 24rpx;
					}
				}
				.item_line:last-child {
					border-bottom: 0;
				}
			}
		}
	}
}
</style>
