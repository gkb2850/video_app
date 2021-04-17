<template>
	<view class="content">
		<navBar></navBar>
		<view class="main_content">
			<view class="top_nav_label">
					<view :class="{label_txt: true, active: classifyIndex === index }" @click="selectClassifyIndex(index)" v-for="(item, index) in classifyDatasList" :key="index">{{item.name}}</view>
			</view>
			<view class="carousel_box">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				    <swiper-item v-for="(item, index) in bannerDataList" :key="index">
						<image class="carousel_img" :src=" baseUrl + item.pictureUrl" mode=""></image>
				    </swiper-item>
				</swiper>
			</view>
			<view class="film_box">
				<view class="item_film_box" v-for="(item, index) in videoDataList" :key="index">
					<view class="title_line_box">
						<view class="l_box">
							<view class="txt">{{item.name}}</view>
						</view>
						<view class="r_box" @click="toSeeMoreVideo(item)">
							<view class="txt">更多</view>
							<image src="@/static/images/jiantou_right.png" mode=""></image>
						</view>
					</view>
					<view class="film_pp">
						<view class="item_film_info" v-for="(items, indexs) in item.videoList" :key="indexs">
							<filmImgBox :video-data="items"></filmImgBox>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue'
	import filmImgBox from '@/components/filmImgBox/index.vue'
	export default {
		components: {
			navBar,
			filmImgBox
		},
		data() {
			return {
				title: 'Hello',
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				classifyDatasList: [], //分类
				classifyIndex: 0, //分类索引
				bannerDataList: [], //轮播图数据
				videoDataList: [] ,//视频数据
				baseUrl: '', //域名前缀
			}
		},
		onLoad() {
			this.baseUrl = this.baseUrlHeader
		},
		onShow() {
			this.getClassifyList()
			this.getBannerList()
		},
		onReady() {
			
		},
		methods: {
			getBannerList() {
				let obj = {
					typeId: this.classifyIndex
				}
				this.$ajax.getIndexBannerFeach(obj).then(res => {
					let arr = []
					if (res.data && res.data.length) {
						res.data.some((i, oi) => {
							arr.push(i)
							return oi > 8
						})
					}
					this.bannerDataList = arr
				}).catch(err => {
					this.$message.error(err.msg)
				})
			},
			getClassifyList() {
				this.$ajax.getIndexClassifyFeach().then(res => {
					this.classifyDatasList = res.data
					this.getVideoList()
				}).catch(err => {
					console.log(err)
					this.$message.error(err.msg)
				})
			},
			selectClassifyIndex(num) {
				this.classifyIndex = num
				this.getBannerList()
				this.getVideoList()
			},
			async getVideoList() {
				let obj = {
					typeId: this.classifyDatasList[this.classifyIndex].id,
					limit: 6
				}
				let { data } = await this.$ajax.getIndexVideoFeach(obj)
				console.log(data.list)
				this.videoDataList = data.list
			},
			toSeeMoreVideo(row) {
				console.log(row)
				uni.navigateTo({
				    url: '/pages/videoMoreList/videoMoreList?typeId=' + this.classifyDatasList[this.classifyIndex].id + '&columnId=' + row.id
				});
			}
		}
	}
</script>

<style lang="scss">
	.main_content {
		box-sizing: border-box;
		padding: 0 24rpx;
		.top_nav_label {
			margin: 10rpx 0 28rpx;
			display: flex;
			justify-content: center;
			.label_txt {
				height: 50rpx;
				font-size: 36rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 50rpx;
				margin-right: 32rpx;
				margin-bottom: 6rpx;
				position: relative;
			}
			.label_txt:last-child {
				margin-right: 0;
			}
			.label_txt.active {
				font-weight: 600;
			}
			.label_txt.active::after {
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translate(-50%, 6rpx);
				width: 20rpx;
				height: 6rpx;
				border-radius: 50%;
				background: linear-gradient(270deg, #5BA7F3 0%, #2E6EE2 100%);
				content: '';
			}
		}
		.carousel_box {
			width: 100%;
			.swiper {
				width: 100%;
				height: 374rpx;
				border-radius: 10rpx;
				overflow: hidden;
				.carousel_img {
					width: 100%;
					height: 374rpx;
					display: block;
					border-radius: 10rpx;
					overflow: hidden;
				}
			}
		}
		.film_box {
			.item_film_box {
				margin-top: 48rpx;
				.title_line_box {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 48rpx;
					.l_box {
						.txt {
							padding-left: 13rpx;
							position: relative;
							height: 48rpx;
							font-size: 34rpx;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #222222;
							line-height: 48rpx;
						}
						.txt::after {
							content: '';
							position: absolute;
							left: -12rpx;
							top: 50%;
							width: 5rpx;
							height: 26rpx;
							transform: translateY(-50%);
							background: linear-gradient(360deg, #5BA7F3 0%, #2E6EE2 100%);
							border-radius: 3rpx;
						}
					}
					.r_box {
						display: inline-flex;
						height: 48rpx;
						align-items: center;
						padding: 0 12rpx;
						background: #F5F5F5;
						border-radius: 4rpx;
						.txt {
							height: 40rpx;
							font-size: 28rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #999999;
							line-height: 40rpx;
						}
						image {
							width: 13rpx;
							height: 24rpx;
							margin-left: 9rpx;
						}
					}
				}
				.film_pp {
					display: flex;
					flex-wrap: wrap;
					.item_film_info {
						margin-top: 38rpx;
						margin-right: 20rpx;
						width: 221rpx;
						.zs_box {
							margin-bottom: 18rpx;
							position: relative;
							.film_cover {
								width: 221rpx;
								height: 294rpx;
								display: block;
								border-radius: 8rpx;
							}
							.film_footer {
								position: absolute;
								left: 0;
								bottom: 10rpx;
								width: 100%;
								height: 30rpx;
								display: flex;
								padding: 0 8rpx;
								justify-content: space-between;
								box-sizing: border-box;
								.l_txt {
									height: 30rpx;
									font-size: 22rpx;
									font-family: PingFang-SC-Medium, PingFang-SC;
									font-weight: 500;
									color: #FFFFFF;
									line-height: 30rpx;
									flex: 1;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
								.r_txt {
									height: 30rpx;
									font-size: 22rpx;
									font-family: PingFang-SC-Medium, PingFang-SC;
									font-weight: 500;
									color: #F34E42;
									line-height: 30rpx;
									flex: 1;
									overflow: hidden;
									text-align: right;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
							}
						}
						.name {
							height: 84rpx;
							font-size: 30rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #222222;
							line-height: 42rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
						}
					}
					.item_film_info:nth-child(3n) {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
