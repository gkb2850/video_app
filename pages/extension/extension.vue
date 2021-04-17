<template>
	<view class="extension_container">
		<canvas class="canvas_box" canvas-id="myCanvas" id="myCanvas" :style="{width: windowWidth + 'px',height: windowHeight + 'px'}"></canvas>
		<view class="header_box">
			<image class="img_f" src="@/static/images/tuiguang_daqiu.png" mode=""></image>
			<image class="img_s" src="@/static/images/tuiguang_txt_icon.png" mode=""></image>
		</view>
		<view class="extension_code_box">
			<view class="code_title">
				<view class="txt" @click="createCanvas">已推广100人</view>
			</view>
			<view class="code_box">
				<view class="code_txt">我的要邀请码： 4582825</view>
				<image class="code_img" src="@/static/images/code_img.jpg" mode=""></image>
				<view class="explain_txt">免广告至：2021-4-13 16:45</view>
			</view>
			<view class="footer_btn" @click="invitationPeopleNow">立即邀请</view>
		</view>
		<view class="extension_desc_box">
			<view class="item_desc_box">
				<view class="title_txt">推广说明</view>
				<view class="content_box">
					<view class="txt">每成功推广1人，送5天免广告，奖励无限叠加～</view>
					<view class="txt">累计成功推广3人，送7天免广告～</view>
					<view class="txt">累计成功推广5人，送10天免广告～</view>
					<view class="txt">累计成功推广10人，送30天免广告～</view>
					<view class="txt">累计成功推广30人，送终身免广告特权～</view>
				</view>
				<image class="bg_img_f" src="@/static/images/tuiguang_zuoqiu.png" mode=""></image>
			</view>
			<view class="item_desc_box">
				<view class="title_txt">如何才算推广成功</view>
				<view class="content_box">
					<view class="txt">分享给未安装过的用户，对方下载后启动应用并登录成功即可，对方必须在不同的设备上进行登录。</view>
				</view>
			</view>
			<view class="item_desc_box">
				<view class="title_txt">推广链接打不开？</view>
				<view class="content_box">
					<view class="txt">微信或QQ等第三方内置浏览器会自动屏蔽，推荐使用自带浏览器打开～</view>
				</view>
				<image class="bg_img_s" src="@/static/images/tuiguang_youqiu.png" mode=""></image>
			</view>
		</view>
		<view class="share_mask_box"  @touchmove.stop.prevent="moveStop" @click="hideShareBox" v-if="shareBoxShow">
			<view class="share_int_box">
				<view class="title_txt" @click.stop="noCloseShareBox">分享到</view>
				<view class="share_target" @click.stop="noCloseShareBox">
					<view class="item_btn">
						<image src="@/static/images/share_wechat_icon.png" mode=""></image>
						<view class="txt">微信</view>
					</view>
					<view class="item_btn">
						<image src="@/static/images/share_wechat_pyq_icon.png" mode=""></image>
						<view class="txt">朋友圈</view>
					</view>
					<view class="item_btn" @click.stop="copyShareUrl">
						<image src="@/static/images/share_url_icon.png" mode=""></image>
						<view class="txt">复制链接</view>
					</view>
					<view class="item_btn" @click="saveSharePic">
						<image src="@/static/images/share_picture_icon.png" mode=""></image>
						<view class="txt">保存相册</view>
					</view>
				</view>
				<view class="footer_btn_txt">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowWidth: 750,
				windowHeight: 1334,
				drawingNow: false, //是否正在画画
				shareBoxShow: false, //分享弹窗标识
			}
		},
		onShow() {
			
		},
		methods: {
			backImgUrl(src) {
				let that = this
				return new Promise((resolve, reject) => {
					uni.getImageInfo({
					    src,
					    success: (res) => {
							let url = ''
							// #ifdef MP-WEIXIN 
								url = '../../' + res.path
							//#endif
							// #ifndef MP-WEIXIN
								url = res.path
							//#endif
							resolve(url)
							console.log(url)
					    },
						fail: (err) => {
							reject(-1)
							that.$message.hideLoading()
							that.$message.message('图片生成失败')
							that.drawingNow = false
						}
					});
				})
			},
			async createCanvas() {
				if (!uni.saveImageToPhotosAlbum()) {
					this.$message.message('网页暂不支持保存至相册')
					return
				}
				if (this.drawingNow) {
					console.log('正在绘制')
					return
				}
				this.drawingNow = true
				let that = this
				this.$message.loading('正在绘制')
				let bgUrl = await this.backImgUrl('../../static/images/canvas_bg.png')
				let logoUrl = await this.backImgUrl('../../static/images/canvas_logo.png')
				let wnUrl = await this.backImgUrl('../../static/images/canvas_wn.png')
				let coverUrl = await this.backImgUrl('../../static/images/canvas_page.png')
				let botUrl = await this.backImgUrl('../../static/images/canvas_bg_bot.png')
				let codeUrl = await this.backImgUrl('../../static/images/code_img.jpg')
				const ctx = uni.createCanvasContext('myCanvas')
				ctx.drawImage(bgUrl, 0, 0, this.windowWidth, this.windowHeight)
				ctx.drawImage(logoUrl, 507, 42, 208, 54)
				ctx.drawImage(wnUrl, 0, 128, 644, 136)
				ctx.drawImage(coverUrl, 72, 321, 606, 1013)
				ctx.drawImage(botUrl, 0, 1019, this.windowWidth, 315)
				ctx.drawImage(codeUrl, 439, 1077, 184, 184)
				ctx.save();//保存
				ctx.draw(false, () => {
					uni.canvasToTempFilePath({
						x: 0,
						y: 0,
						width: that.windowWidth,    // 截取的画布的宽
						height: that.windowHeight,   // 截取的画布的高
						destWidth: that.windowWidth / 2,	// 保存成的画布宽度
						destHeight: that.windowHeight / 2,	// 保存成的画布高度
						canvasId: 'myCanvas',
						success: (res) => {
							// 在H5平台下，tempFilePath 为 base64
							this.$message.hideLoading()
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function () {
									console.log('save success');
									that.$message.message('已保存至相册')
								},
								fail: function () {
									that.$message.message('保存失败，请重试')
								}
							});
							this.drawingNow = false
						},
						fail: (err) => {
							console.log(err)
							this.$message.hideLoading()
							this.$message.message('图片生成失败')
							this.drawingNow = false
						}
					})
				})//绘制
			},
			moveStop() {
				
			},
			saveSharePic() {
				this.createCanvas()
			},
			invitationPeopleNow() {
				uni.hideTabBar()
				this.shareBoxShow = true
			},
			hideShareBox() {
				this.shareBoxShow = false
				uni.showTabBar()
			},
			noCloseShareBox() {
				
			},
			copyShareUrl() {
				this.$message.message('已复制，快去粘贴去朋友吧')
				this.shareBoxShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
.extension_container {
	background: linear-gradient(180deg, #2E6EE2 0%, #70A0F8 100%);
	.canvas_box {
		position: fixed;
		left: 9999px;
		top: 9999px;
	}
	.header_box {
		position: relative;
		.img_f {
			width: 750rpx;
			height: 920rpx;
			display: block;
		}
		.img_s {
			width: 414rpx;
			height: 296rpx;
			position: absolute;
			left: 48rpx;
			top: 57rpx;
		}
	}
	.extension_code_box {
		width: 658rpx;
		padding: 90rpx 0 50rpx;
		background: #FFFFFF;
		border-radius: 12rpx;
		margin: -461rpx auto 0;
		position: relative;
		.code_title {
			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-50%, -50%);
			background: #2E6EE2;
			width: 365rpx;
			height: 94rpx;
			border: 1px solid #DFDFDF;
			border-radius: 4rpx;
			.txt {
				width: 308rpx;
				height: 94rpx;
				position: absolute;
				left: 50%;
				top: -20rpx;
				transform: translateX(-50%);
				background: #2E6EE2;
				border: 1px solid #DFDFDF;
				text-align: center;
				height: 94rpx;
				font-size: 42rpx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: #FFFFFF;
				line-height: 94rpx;
				border-radius: 4rpx;
			}
		}
		.code_box {
			width: 528rpx;
			margin: 0 auto 32rpx;
			border: 14rpx solid #84A5EC;
			border-radius: 32rpx;
			padding: 16rpx 0 38rpx;
			.code_txt {
				height: 45rpx;
				font-size: 32rpx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #333333;
				line-height: 45rpx;
				text-align: center;
				margin-bottom: 12rpx;
			}
			.code_img {
				width: 330rpx;
				height: 330rpx;
				display: block;
				margin: 0 auto 12rpx;
			}
			.explain_txt {
				height: 30rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #666666;
				line-height: 30rpx;
				text-align: center;
			}
		}
		.footer_btn {
			width: 606rpx;
			height: 88rpx;
			border-radius: 44rpx;
			background: #F89621;
			text-align: center;
			height: 88rpx;
			font-size: 38rpx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 88rpx;
			margin: 0 auto;
		}
	}
	.extension_desc_box {
		margin-top: 91rpx;
		padding-bottom: 64rpx;
		.item_desc_box {
			background: #FFFFFF;
			width: 658rpx;
			margin: 77rpx auto 0;
			border-radius: 12rpx;
			position: relative;
			padding: 95rpx 28rpx 60rpx;
			box-sizing: border-box;
			.title_txt {
				padding: 0 70rpx;
				position: absolute;
				left: 50%;
				top: 0;
				transform: translate(-50%, -50%);
				background: #2E6EE2;
				border-radius: 8rpx;
				height: 92rpx;
				font-size: 34rpx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 92rpx;
			}
			.title_txt::after {
				content: '';
				position: absolute;
				left: 34rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 14rpx;
				height: 14rpx;
				background: #FFFFFF;
				border-radius: 50%;
			}
			.title_txt::before {
				content: '';
				position: absolute;
				right: 34rpx;
				top: 50%;
				transform: translateY(-50%);
				width: 14rpx;
				height: 14rpx;
				background: #FFFFFF;
				border-radius: 50%;
			}
			.bg_img_f {
				position: absolute;
				left: -46rpx;
				bottom: -100rpx;
				width: 149rpx;
				height: 149rpx;
			}
			.bg_img_s {
				position: absolute;
				right: -46rpx;
				bottom: -31rpx;
				width: 83rpx;
				height: 123rpx;
			}
			.content_box {
				.txt {
					font-size: 28rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #214A94;
					line-height: 40rpx;
					margin-bottom: 12rpx;
				}
				.txt:last-child {
					margin-bottom: 0;
				}
			}
		}
		.item_desc_box:first-child{
			margin-top: 0;
		}
	}
	.share_mask_box {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		.share_int_box {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			background: #FFFFFF;
			.title_txt {
				height: 37rpx;
				font-size: 26rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 37rpx;
				text-align: center;
				padding: 21rpx 0 17rpx;
			}
			.share_target {
				padding: 0 70rpx 72rpx 70rpx;
				display: flex;
				justify-content: space-between;
				.item_btn {
					image {
						width: 130rpx;
						height: 130rpx;
						margin-bottom: 4rpx;
					}
					.txt {
						height: 37rpx;
						font-size: 26rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 37rpx;
						text-align: center;
						width: 130rpx;
					}
				}
			}
			.footer_btn_txt {
				border-top: 2rpx solid #F7F7F7;
				height: 86rpx;
				font-size: 30rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 86rpx;
				text-align: center;
			}
		}
	}
}
</style>
