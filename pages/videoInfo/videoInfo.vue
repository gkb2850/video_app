<template>
	<view class="videoInfo_container">
		<view class="video_play_box">
			<video class="videoBox" id="myVideo" :src="videoSrc"></video>
		</view>
		<view class="video_main_box">
			<view class="video_desc">
				<view class="top_box">
					<view class="l_box">
						<view class="video_n">{{videoInfoData.vodName}}</view>
						<view class="score_n">{{videoInfoData.vodScoreAll}}分</view>
					</view>
					<view class="r_box">
						<text>简介</text>
						<image src="@/static/images/arrow_right_icon.png" mode=""></image>
					</view>
				</view>
				<view class="second_other_box">
					<text class="txt">更新至25集</text>
					<text class="txt">共{{videoInfoData.vodTotal}}集</text>
					<text class="line"></text>
					<text class="txt">{{videoInfoData.vodYear}}</text>
					<text class="txt">/{{videoInfoData.vodArea}}</text>
					<text class="txt" v-for="(item, index) in videoInfoData.tags">/{{item.name}}</text>
				</view>
				<view class="button_box">
					<view class="l_but">
						<image src="@/static/images/small_logo_icon.png" mode=""></image>
						<text>SEAN52125</text>
					</view>
					<view class="r_but">
						<image src="@/static/images/video_noLove_icon.png" mode=""></image>
						<image src="@/static/images/video_share_icon.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="video_line_download">
				<view class="item_download_box" v-for="(item, index) in setNumVideoData" :key="index">
					<view class="title_line_box">
						<view class="line_l_box">
							<text>{{item.groupName}}</text>
							<image src="@/static/images/download_icon.png" mode=""></image>
						</view>
						<view class="line_r_box">
							<text>更新至16集</text>
							<image src="@/static/images/arrow_right_icon.png" mode=""></image>
						</view>
					</view>
					<view class="setNumber_box">
						<scroll-view class="scroll_view_box" scroll-x="true">
						     <view class="scroll_view_item" v-for="(items, indexs) in item.vodPlayUrl" :key="indexs">{{indexs + 1}}</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="role_line_box">
				<view class="title_name">演员</view>
				<view class="role_list_box">
					<scroll-view class="scroll_view_box" scroll-x="true">
					     <view class="scroll_view_item" v-for="(item, index) in videoInfoData.videoRoles" :key="index">
							<image class="role_avatar" :src="baseUrl + item.pic" mode=""></image>
							<view class="role_name">{{item.name}}</view>
						 </view>
					</scroll-view>
				</view>
			</view>
			<view class="relevant_recommend_box">
				<view class="title_name">相关推荐</view>
				<view class="recommend_video_list">
					<view class="item_rec" v-for="(item, index) in relevantVideoData" :key="index">
						<view class="l_box">
							<image class="cover_img" :src="baseUrl + item.vodPicThumb" mode=""></image>
							<text>{{item.vodDuration}}</text>
						</view>
						<view class="r_box">
							<view class="desc_txt">{{item.vodBlurb}}</view>
							<view class="footer_box">
								<text class="txt">SEAN52125</text>
								<text class="line"></text>
								<text class="txt">{{item.vodHits}}次播放</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="more_recommend_box">
				<view class="title_name">更多推荐</view>
				<view class="row_list_box">
					<scroll-view class="scroll_view_box" scroll-x="true">
					     <view class="scroll_view_item" v-for="(item, index) in moreVideoData" :key="index">
							<view class="cover_box">
								<image :src="baseUrl + item.vodPicThumb" mode=""></image>
								<text>8.9</text>
							</view>
							<view class="video_name">{{item.vodName}}</view>
							<view class="update_num">更新至第8集</view>
						 </view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoId: '', //视频id
				typeId: '', //分类id
				videoInfoData: {}, //视频详情
				relevantVideoData: [],//相关推荐
				moreVideoData: [],//更多推荐
				setNumVideoData: [], //视频集数数据
				videoSrc: '', //视频连接
				baseUrl: '', //域名前缀
			}
		},
		onLoad(option) {
			if (option.videoId) {
				this.videoId = option.videoId
				this.typeId = option.typeId
			}
			this.baseUrl = this.baseUrlHeader
		},
		onShow() {
			this.getVideoInfo()
			this.getVideoRelevant()
			this.getVideoMore()
		},
		methods: {
			async getVideoInfo() {
				let { data } = await this.$ajax.getVideoInfoFeach(this.videoId)
				console.log(data)
				this.videoInfoData = data
				let vodDownServerGroup = data.vodDownServerGroup.split('$$$')
				let vodPlayFrom = data.vodPlayFrom.split('$$$')
				let vodPlayServer = data.vodPlayServer.split('$$$')
				let vodPlayUrl = data.vodPlayUrl.split('$$$')
				let arr = []
				if (vodDownServerGroup.length) {
					vodDownServerGroup.forEach(i => {
						let obj = {
							groupName: i,
							vodPlayServer: vodPlayServer,
							vodPlayUrl: vodPlayUrl
						}
						arr.push(obj)
					})
				}
				if (arr.length && vodPlayUrl.length) {
					let str = arr[0].vodPlayUrl[0]
					if (str.length) {
						let num = str.indexOf('http://')
						str = str.slice(num)
						this.videoSrc = str
					}
					console.log(this.videoSrc)
				}
				this.setNumVideoData = arr
			},
			async getVideoRelevant() {
				let obj = {
					size: 20,
					typeId: ''
				}
				let { data } = await this.$ajax.getVideoRelevantRecFeach(obj)
				console.log(data)
				this.relevantVideoData = data
			},
			async getVideoMore() {
				let obj = {
					size: 20
				}
				let { data } = await this.$ajax.getVideoMoreRecFeach(obj)
				console.log(data)
				this.moreVideoData = data
			}
		}
	}
</script>

<style lang="scss" scoped>
.videoInfo_container {
	.video_play_box {
		height: 421rpx;
		position: relative;
		.videoBox {
			width: 100%;
			height: 100%;
		}
	}
	.video_main_box {
		.video_desc {
			padding: 28rpx 24rpx;
			box-sizing: border-box;
			border-bottom: 2rpx solid #F0F0F0;
			.top_box {
				display: flex;
				justify-content: space-between;
				margin-bottom: 12rpx;
				.l_box {
					display: inline-flex;
					.video_n{
						height: 45rpx;
						font-size: 32rpx;
						font-family: PingFang-SC-Bold, PingFang-SC;
						font-weight: bold;
						color: #333333;
						line-height: 45rpx;
						margin-right: 40rpx;
					}
					.score_n {
						height: 45rpx;
						font-size: 32rpx;
						font-family: PingFang-SC-Bold, PingFang-SC;
						font-weight: bold;
						color: #FF4848;
						line-height: 45rpx;
					}
				}
				.r_box {
					display: inline-flex;
					height: 45rpx;
					align-items: center;
					text {
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
						margin-left: 11rpx;
					}
				}
			}
			.second_other_box {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				margin-bottom: 32rpx;
				.txt {
					height: 33rpx;
					font-size: 24rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #666666;
					line-height: 33rpx;
					margin-right: 12rpx;
				}
				.line {
					width: 2rpx;
					height: 20rpx;
					margin-right: 12rpx;
					background: #C9C9C9;
				}
			}
			.button_box {
				display: flex;
				justify-content: space-between;
				.l_but {
					display: inline-flex;
					align-items: center;
					height: 42rpx;
					image {
						width: 24rpx;
						height: 24rpx;
						margin-right: 10rpx;
					}
					text {
						height: 33rpx;
						font-size: 24rpx;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #777777;
						line-height: 33rpx;
					}
				}
				.r_but {
					display: inline-flex;
					image {
						width: 42rpx;
						height: 42rpx;
						margin-right: 36rpx;
					}
					image:last-child {
						margin-right: 0;
					}
				}
			}
		}
		.video_line_download {
			padding: 32rpx 24rpx;
			box-sizing: border-box;
			.item_download_box {
				margin-bottom: 32rpx;
				.title_line_box {
					display: flex;
					justify-content: space-between;
					.line_l_box {
						display: inline-flex;
						align-items: center;
						height: 53rpx;
						text {
							height: 53rpx;
							font-size: 38rpx;
							font-family: PingFang-SC-Bold, PingFang-SC;
							font-weight: bold;
							color: #333333;
							line-height: 53rpx;
							margin-right: 34rpx;
						}
						image {
							width: 42rpx;
							height: 42rpx;
						}
					}
					.line_r_box {
						display: inline-flex;
						height: 53rpx;
						align-items: center;
						text {
							height: 33rpx;
							font-size: 24rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #999999;
							line-height: 33rpx;
							margin-right: 19rpx;
						}
						image {
							width: 13rpx;
							height: 24rpx;
						}
					}
				}
				.setNumber_box {
					.scroll_view_box {
						white-space: nowrap;
						.scroll_view_item {
							width: 116rpx;
							background: #FFFFFF;
							box-shadow: 1rpx 4rpx 16rpx 7rpx rgba(238, 236, 236, 0.5);
							border-radius: 4rpx;
							height: 116rpx;
							font-size: 32rpx;
							font-family: PingFang-SC-Bold, PingFang-SC;
							font-weight: bold;
							color: #2E6EE2;
							line-height: 116rpx;
							text-align: center;
							display: inline-block;
							margin: 28rpx 30rpx 32rpx 0;
						}
					}
				}
			}
			.item_download_box:last-child {
				margin-bottom: 0;
			}
		}
		.role_line_box {
			padding: 0 24rpx 32rpx;
			box-sizing: border-box;
			.title_name {
				height: 53rpx;
				font-size: 38rpx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: #333333;
				line-height: 53rpx;
				margin-bottom: 28rpx;
			}
			.role_list_box {
				.scroll_view_box {
					white-space: nowrap;
					.scroll_view_item {
						display: inline-block;
						.role_avatar {
							width: 90rpx;
							height: 90rpx;
							display: block;
							margin: 0 40rpx 12rpx 0;
						}
						.role_name {
							width: 90rpx;
							height: 40rpx;
							font-size: 28rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #333333;
							line-height: 40rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: center;
						}
					}
				}
			}
		}
		.relevant_recommend_box {
			padding: 0 24rpx 32rpx;
			box-sizing: border-box;
			.title_name {
				height: 53rpx;
				font-size: 38rpx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: #333333;
				line-height: 53rpx;
				padding-bottom: 28rpx;
			}
			.recommend_video_list {
				.item_rec {
					margin-bottom: 24rpx;
					display: flex;
					.l_box {
						position: relative;
						image {
							width: 245rpx;
							height: 138rpx;
							display: block;
							border-radius: 8rpx;
						}
						text {
							height: 30rpx;
							font-size: 22rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #FFFFFF;
							line-height: 30rpx;
							position: absolute;
							left: 0;
							bottom: 13rpx;
						}
					}
					.r_box {
						flex: 1;
						overflow: hidden;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 20rpx;
						.desc_txt {
							height: 84rpx;
							font-size: 30rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #222222;
							line-height: 42rpx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.footer_box {
							display: flex;
							flex-wrap: wrap;
							align-items: center;
							margin-bottom: 8rpx;
							.txt {
								height: 30rpx;
								font-size: 22rpx;
								font-family: PingFang-SC-Medium, PingFang-SC;
								font-weight: 500;
								color: #999999;
								line-height: 30rpx;
								margin-right: 22rpx;
							}
							.line {
								width: 2rpx;
								height: 20rpx;
								background: #999999;
								margin-right: 22rpx;
							}
						}
					}
				}
				.item_rec:last-child {
					margin-bottom: 0;
				}
			}
		}
		.more_recommend_box {
			padding: 0 24rpx 32rpx;
			box-sizing: border-box;
			.title_name {
				height: 53rpx;
				font-size: 38rpx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: #333333;
				line-height: 53rpx;
				margin-bottom: 28rpx;
			}
			.row_list_box {
				.scroll_view_box {
					white-space: nowrap;
					.scroll_view_item {
						display: inline-block;
						margin-right: 20rpx;
						.cover_box {
							position: relative;
							margin-bottom: 20rpx;
							image {
								width: 218rpx;
								height: 290rpx;
								border-radius: 8rpx;
								display: block;
							}
							text {
								position: absolute;
								left: 0;
								top: 0;
								border-radius: 0rpx 25rpx 0rpx 8rpx;
								width: 75rpx;
								height: 37rpx;
								font-size: 26rpx;
								font-family: PingFang-SC-Medium, PingFang-SC;
								font-weight: 500;
								color: #FFFFFF;
								line-height: 37rpx;
								background: linear-gradient(270edg, #515151 100%, #2B2F35 100%);
							}
						}
						.video_name {
							width: 218rpx;
							height: 42rpx;
							font-size: 30rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #222222;
							line-height: 42rpx;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
						.update_num {
							width: 218rpx;
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #999999;
							line-height: 37rpx;
							padding-top: 12rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
}
</style>
