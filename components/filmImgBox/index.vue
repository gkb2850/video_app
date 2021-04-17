<template>
	<view class="film_conponents_index">
		<view class="zs_box" @click="toSeeVideoInfo">
			<image class="film_cover" :src=" baseUrl + videoData.vodPicThumb" mode=""></image>
			<view class="film_footer">
				<view class="l_txt">共{{videoData.vodTotal}}集</view>
				<view class="r_txt">{{videoData.vodScore}}分</view>
			</view>
		</view>
		<view class="name">{{videoData.vodName}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			videoData: {
				type: Object,
				default: () => {}
			}
		},
		data () {
			return {
				baseUrl: '', //域名前缀
			}
		},
		created() {
			this.baseUrl = this.baseUrlHeader
		},
		methods: {
			toSeeVideoInfo() {
				let that = this
				uni.navigateTo({
					url: '/pages/videoInfo/videoInfo?videoId=' + that.videoData.id + '&typeId=' + that.videoData.typeId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.film_conponents_index {
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
</style>
