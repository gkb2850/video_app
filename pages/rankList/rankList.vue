<template>
	<view class="rankList_container">
		<view class="header_box">
			<view class="bg_img_box">
				<view></view>
				<image v-if="rankFilmList.length" :src="baseUrl + rankFilmList[0].vodPicThumb" mode=""></image>
			</view>
			<view class="title_txt_line">{{typeName}}</view>
			<view class="plot_desc_box">
				<view class="l_box">
					<view class="f_txt">{{typeName}}</view>
					<view class="s_txt">好片上榜</view>
					<view class="footer_line">
						<image src="@/static/images/plot_hot.png" mode=""></image>
						<view class="">最新好剧等你来</view>
					</view>
				</view>
				<view class="r_box">
					<image class="img_box" v-if="rankFilmList.length" :src="baseUrl + rankFilmList[0].vodPicThumb" mode=""></image>
				</view>
			</view>
		</view>
		<view class="main_box">
			<view class="nav_box">
				<view class="nav_label">
					<view :class="{item_label: true, active: typeId === item.id}" v-for="(item, index) in classifyData" :key="index" @click="seeDiffClassifyFilm(item)">{{item.name}}</view>
				</view>
				<view class="type_box">
					<view class="date_txt">{{arraySelect[sortIndex]}}</view>
					<image src="@/static/images/sanjiao_bottom.png" mode=""></image>
					<view class="date_select_box">
						<picker class="picker_box" :range="arraySelect" mode="selector" @change="selectDateType">
						</picker>
					</view>
				</view>
			</view>
			<view class="slice_list_box">
				<view class="item_slice" v-for="(item, index) in rankFilmList" :key="index">
					<view class="slice_left_box">
						<image class="slice_img" :src="baseUrl + item.vodPicThumb" mode=""></image>
						<view class="rank_num">{{index + 1}}</view>
					</view>
					<view class="txt_slice_box">
						<view class="desc_box">
							<view class="video_name">{{item.vodName}}</view>
							<view class="label_txt">
								<text v-for="(items, indexs) in item.tags" :key="indexs">{{ indexs === item.tags.length - 1 ? items.name : items.name + '/'}}</text>
							</view>
							<view class="people_name">{{item.vodActor ? item.vodActor : '哒哒/滴滴/哈哈'}}</view>
						</view>
						<view class="pf_box">
							<view class="num_txt">{{item.vodScore}}分</view>
						</view>
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
				arraySelect: ['日排行','周排行','月排行'],
				sortIndex: 0,
				classifyData: [],//分类数据
				rankFilmList: [], //视频数据
				loadingMoreStatus: true, //是否可以加载更多
				pageIndex: 1, //页码
				pageSize: 10, //每页大小
				typeId: '', //分类id
				sort: 1, //排序
				typeName: '', //分类名称
				baseUrl: '', //域名前缀
			}
		},
		onLoad() {
			this.baseUrl = this.baseUrlHeader
		},
		onShow() {
			this.getVideoClassify()
		},
		onReachBottom() {
			this.loadingMoreNow()
		},
		methods: {
			selectDateType(e) {
				this.sortIndex = e.detail.value
				this.sort = e.detail.value + 1
				this.pageIndex = 1
				this.getFilmRankList()
			},
			async getFilmRankList() {
				this.$message.loading()
				let obj = {
					pageSize: this.pageSize,
					pageIndex: this.pageIndex,
					typeId: this.typeId,
					sort: this.sort
				}
				let { data } = await this.$ajax.getfilmRankListFeach(obj)
				this.$message.hideLoading()
				if (this.pageIndex === 1) {
					this.rankFilmList = data.list
				} else {
					this.rankFilmList = [...this.rankFilmList, ...data.list]
				}
				this.loadingMoreStatus = data.count > (this.pageIndex * this.pageSize)
			},
			async getVideoClassify() {
				let { data } = await this.$ajax.getIndexClassifyFeach()
				this.classifyData = data
				this.typeId = data[0].id
				this.typeName = data[0].name
				this.getFilmRankList()
			},
			loadingMoreNow() {
				if (this.loadingMoreStatus) {
					this.pageIndex = this.pageIndex + 1
					this.getFilmRankList()
				} else {
					this.$message.message('已经加载完了')
				}
			},
			seeDiffClassifyFilm(item) {
				this.typeId = item.id
				this.typeName = item.name
				this.pageIndex = 1
				this.getFilmRankList()
			}
		}
	}
</script>

<style lang="scss" scoped>
.rankList_container {
	.header_box {
		height: 406rpx;
		width: 100%;
		position: relative;
		.bg_img_box {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			image {
				width: 100%;
				height: 100%;
				display: block;
				filter: blur(40rpx);
			}
			view {
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #323232 100%);
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
		.title_txt_line {
			padding: 24rpx 0 38rpx;
			height: 50rpx;
			font-size: 36rpx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 50rpx;
			text-align: center;
		}
		.plot_desc_box {
			display: flex;
			padding: 0 31rpx 0 24rpx;
			box-sizing: border-box;
			.l_box {
				flex: 1;
				overflow: hidden;
				.f_txt {
					height: 56rpx;
					font-size: 40rpx;
					font-family: PingFang-SC-Bold, PingFang-SC;
					font-weight: bold;
					color: #FFFFFF;
					line-height: 56rpx;
					width: 100%;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					margin-bottom: 8rpx;
				}
				.s_txt {
					height: 37rpx;
					font-size: 26rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 37rpx;
					width: 100%;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					margin-bottom: 39rpx;
				}
				.footer_line {
					display: flex;
					view {
						height: 40rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 40rpx;
					}
					image {
						width: 38rpx;
						height: 38rpx;
						margin-right: 8rpx;
					}
				}
			}
			.r_box {
				.img_box {
					width: 164rpx;
					height: 220rpx;
					border-radius: 8rpx;
				}
			}
		}
	}
	.main_box {
		background: #FFFFFF;
		border-radius: 16rpx 16rpx 0 0;
		margin-top: -6rpx;
		.nav_box {
			border-bottom: 2rpx solid #F0F0F0;
			padding: 24rpx 24rpx 30rpx;
			display: flex;
			justify-content: space-between;
			.nav_label {
				display: inline-flex;
				.item_label {
					height: 50rpx;
					font-size: 36rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #696969;
					line-height: 50rpx;
					margin-right: 32rpx;
					position: relative;
				}
				.item_label:last-child {
					margin-right: 0;
				}
				.item_label.active {
					font-weight: 600;
					color: #333333;
				}
				.item_label.active::after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: -6rpx;
					width: 20rpx;
					height: 6rpx;
					background: linear-gradient(270deg, #5BA7F3 0%, #2E6EE2 100%);
					border-radius: 3rpx;
					transform: translate(-50%);
				}
			}
			.type_box {
				display: inline-flex;
				height: 50rpx;
				align-items: center;
				padding: 0 8rpx;
				background: #E1ECFF;
				border-radius: 4rpx;
				position: relative;
				.date_txt {
					height: 40rpx;
					font-size: 28rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #2E6EE2;
					line-height: 40rpx;
				}
				image {
					width: 28rpx;
					height: 28rpx;
					margin-left: 2rpx;
				}
				.date_select_box {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					.picker_box {
						width: 100%;
						height: 100%;
						display: block;
						opacity: 0;
						filter: opacity(0);
					}
				}
			}
		}
		.slice_list_box {
			padding: 0 24rpx 36rpx;
			box-sizing: border-box;
			.item_slice {
				margin-top: 36rpx;
				display: flex;
				.slice_left_box {
					position: relative;
					.slice_img {
						width: 142rpx;
						height: 190rpx;
						border-radius: 6rpx;
						display: block;
					}
					.rank_num {
						position: absolute;
						left: 0;
						top: 0;
						width: 44rpx;
						height: 40rpx;
						border-radius: 6rpx 0 10rpx 0;
						background: linear-gradient(270deg, #FCE6C8 0%, #FABD96 100%);
						height: 40rpx;
						font-size: 26rpx;
						font-family: PingFang-SC-Bold, PingFang-SC;
						font-weight: bold;
						color: #FFFFFF;
						line-height: 40rpx;
						text-align: center;
					}
				}
				.txt_slice_box {
					flex: 1;
					overflow: hidden;
					display: flex;
					padding: 8rpx 8rpx 12rpx 21rpx;
					box-sizing: border-box;
					box-shadow: 2rpx 2rpx 8rpx 1rpx rgba(215, 215, 215, 0.5);
					border-radius: 12rpx;
					.desc_box {
						flex: 1;
						overflow: hidden;
						margin-right: 31rpx;
						.video_name {
							margin-top: 4rpx;
							height: 45rpx;
							font-size: 32rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #222222;
							line-height: 45rpx;
							margin-bottom: 12rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							width: 100%;
						}
						.label_txt {
							height: 40rpx;
							font-size: 28rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #999999;
							line-height: 40rpx;
							margin-bottom: 8rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							width: 100%;
						}
						.people_name {
							height: 37rpx;
							font-size: 26rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #999999;
							line-height: 37rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							width: 100%;
						}
					}
					.pf_box {
						.num_txt {
							width: 82rpx;
							height: 34rpx;
							background: rgba(243, 78, 66, 0.08);
							border-radius: 17rpx;
							height: 30rpx;
							font-size: 22rpx;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #F34E42;
							line-height: 30rpx;
							text-align: center;
						}
					}
				}
			}
		}
	}
}
</style>
