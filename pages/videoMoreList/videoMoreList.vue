<template>
	<view class="videoMoreList_container">
		<view class="video_list_box">
			<view class="item_video" v-for="(item, index) in videoList" :key="index">
				<view class="video_content">
					<view class="video_img_box">
						<image class="video_cover" :src=" baseUrl + item.vodPicThumb" mode=""></image>
						<view class="grade_num">{{item.vodScore}}</view>
					</view>
					<view class="video_txt_box">
						<view class="video_name">{{item.vodName}}</view>
						<view class="label_type">{{item.tag ? item.tag : '现代/动漫/爱情'}}</view>
						<view class="role_name">{{item.vodActor ? item.vodActor : '哒哒/滴滴/悠悠'}}</view>
						<view class="footer_box">
							<view class="all_js">全{{item.vodTotal}}集</view>
							<view class="play_again">播放</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="video_total_txt" v-if="!loadMoreState">已经到底啦</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageIndex: 1,
				pageSize: 5,
				typeId: '',//分类id
				columnId: '', //栏目id
				videoList: [] ,//视频列表
				loadMoreState: true, //是否可以加载更多
				baseUrl: '',//域名前缀
			}
		},
		onLoad(option) {
			console.log(option)
			if (option.typeId) {
				this.typeId = option.typeId
				this.columnId = option.columnId
			}
			this.baseUrl = this.baseUrlHeader
		},
		onShow() {
			this.getVideoMore()
		},
		onReachBottom() {
			console.log('到底了')
			this.loadingMore()
		},
		methods: {
			async getVideoMore() {
				this.$message.loading()
				let obj = {
					typeId: this.typeId,
					pageIndex: this.pageIndex,
					pageSize: this.pageSize,
					columnId: this.columnId
				}
				let { data } = await this.$ajax.getVideoMoreFeach(obj)
				console.log(data)
				this.$message.hideLoading()
				if (this.pageIndex === 1) {
					this.videoList = data.list
				} else {
					this.videoList = [...this.videoList, ...data.list]
				}
				this.loadMoreState = data.count > (this.pageIndex * this.pageSize)
			},
			loadingMore() {
				if (this.loadMoreState) {//可以加载更多
					this.pageIndex = this.pageIndex + 1
					this.getVideoMore()
				} else {
					this.$message.message('已经加载完了')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.videoMoreList_container {
	overflow: hidden;
	.video_list_box {
		padding: 0 24rpx;
		box-sizing: border-box;
		.item_video {
			padding-top: 42rpx;
			display: flex;
			align-items: center;
			.video_content {
				flex: 1;
				overflow: hidden;
				display: flex;
				.video_img_box {
					position: relative;
					.video_cover {
						width: 218rpx;
						height: 290rpx;
						margin-right: 23rpx;
						border-radius: 12rpx;
					}
					.grade_num {
						position: absolute;
						left: 0;
						top: 0;
						width: 75rpx;
						height: 48rpx;
						text-align: center;
						font-size: 26rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 48rpx;
						background: linear-gradient(270deg, #515151 0%, #2B2F35 100%);
						border-radius: 12rpx 0 18rpx 0;
					}
				}
				.video_txt_box {
					flex: 1;
					overflow: hidden;
					.video_name {
						height: 45rpx;
						font-size: 32rpx;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #222222;
						line-height: 45rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 20rpx;
					}
					.label_type {
						height: 40rpx;
						font-size: 28rpx;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #666666;
						line-height: 40rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 23rpx;
					}
					.role_name {
						height: 70rpx;
						font-size: 26rpx;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #666666;
						line-height: 35rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 55rpx;
						display: -webkit-box;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
					.footer_box {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.all_js {
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #666666;
							line-height: 42rpx;
						}
						.play_again {
							width: 96rpx;
							border-radius: 4rpx;
							height: 44rpx;
							background: #2E6EE2;
							font-size: 28rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 44rpx;
							text-align: center;
						}
					}
				}
			}
		}
	}
	.video_total_txt {
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
	.video_total_txt::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 30rpx;
		height: 2rpx;
		background: #999999;
		transform: translate(-130rpx, -50%);
	}
	.video_total_txt::before {
		content: "";
		position: absolute;
		top: 50%;
		right: 50%;
		width: 30rpx;
		height: 2rpx;
		background: #999999;
		transform: translate(130rpx, -50%);
	}
}
</style>
