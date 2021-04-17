<template>
	<view class="filmLibrary_container">
		<view class="header_nav_box">
			<view class="title_txt">片库</view>
			<image class="search_icon" src="@/static/images/search_icon.png" mode=""></image>
		</view>
		<view class="main_box">
			<view class="screen_film_box">
				<view class="screen_line_box">
					<view :class="{l_box: true, active: !filterParams.typeId}" @click="filterItemNow('typeId', undefined)">全部</view>
					<view class="r_box">
						<scroll-view scroll-x class="scroll_film_box">
						    <view :class="{scroll_view_item_H: true,  active: item.typeId === filterParams.typeId}" v-for="(item, index) in filterData.types" :key="index" @click="filterItemNow('typeId', item.typeId)">{{item.typeName}}</view>
						</scroll-view>
					</view>
				</view>
				<view class="screen_line_box">
					<view :class="{l_box: true, active: !filterParams.sort}" @click="filterItemNow('sort', undefined)">全部</view>
					<view class="r_box">
						<scroll-view scroll-x class="scroll_film_box">
						    <view :class="{scroll_view_item_H: true,  active: 1 === filterParams.sort}" @click="filterItemNow('sort', 1)">最新</view>
						    <view :class="{scroll_view_item_H: true,  active: 2 === filterParams.sort}" @click="filterItemNow('sort', 2)">最热</view>
						    <view :class="{scroll_view_item_H: true,  active: 3 === filterParams.sort}" @click="filterItemNow('sort', 3)">好评</view>
						</scroll-view>
					</view>
				</view>
				<view class="screen_line_box">
					<view :class="{l_box: true, active: !filterParams.region}" @click="filterItemNow('region', undefined)">全部</view>
					<view class="r_box">
						<scroll-view scroll-x class="scroll_film_box">
						    <view :class="{scroll_view_item_H: true,  active: item === filterParams.region}" v-for="(item, index) in filterData.region" :key="index" @click="filterItemNow('region', item)">{{item}}</view>
						</scroll-view>
					</view>
				</view>
				<view class="screen_line_box">
					<view :class="{l_box: true, active: !filterParams.year}" @click="filterItemNow('year', undefined)">全部</view>
					<view class="r_box">
						<scroll-view scroll-x class="scroll_film_box">
						    <view :class="{scroll_view_item_H: true,  active: item === filterParams.year}" v-for="(item, index) in filterData.year" @click="filterItemNow('year', item)">{{item}}</view>
						</scroll-view>
					</view>
				</view>
				<view class="screen_line_box">
					<view :class="{l_box: true, active: !filterParams.endState}" @click="filterItemNow('endState', undefined)">全部</view>
					<view class="r_box">
						<scroll-view scroll-x class="scroll_film_box">
						    <view :class="{scroll_view_item_H: true,  active: 1 === filterParams.endState}" @click="filterItemNow('endState', 1)">连载</view>
						    <view :class="{scroll_view_item_H: true,  active: 2 === filterParams.endState}" @click="filterItemNow('endState', 2)">完结</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="film_video_box">
				<view class="item_film" v-for="(item, index) in filmDataList" :key="index">
					<filmImgBox :video-data="item"></filmImgBox>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import filmImgBox from '@/components/filmImgBox/index.vue'
	export default {
		components: {
			filmImgBox
		},
		data() {
			return {
				filterData: {} ,//筛选项
				filmDataList: [] ,//片库列表
				pageSize: 12,//每页数量
				pageIndex: 1,//页码
				loadingMoreStatus: true, //是否可以加载更多
				filterParams: {
					typeId: undefined,
					sort: undefined,
					region: undefined,
					year: undefined,
					endState: undefined
				} //筛选项
			}
		},
		onShow() {
			this.getFilmLabel()
			this.getFilmList()
		},
		onReachBottom() {
			this.loadingMoreNow()
		},
		methods: {
			async getFilmLabel() {
				let { data } = await this.$ajax.getfilmLabelListFeach()
				console.log(data)
				this.filterData = data
			},
			async getFilmList() {
				this.$message.loading()
				let obj = {
					pageSize: this.pageSize,
					pageIndex: this.pageIndex,
					typeId: this.filterParams.typeId,
					sort: this.filterParams.sort,
					region: this.filterParams.region,
					year: this.filterParams.year,
					endState: this.filterParams.endState
				}
				let { data } = await this.$ajax.getfilmListFeach(obj)
				console.log(data)
				this.$message.hideLoading()
				if (this.pageIndex === 1) {
					this.filmDataList = data.list
				} else {
					this.filmDataList = [...this.filmDataList, ...data.list]
				}
				this.loadingMoreStatus = data.count > (this.pageIndex * this.pageSize)
			},
			loadingMoreNow() {
				if (this.loadingMoreStatus) {
					this.pageIndex = this.pageIndex + 1
					this.getFilmList()
				} else {
					this.$message.message('已经加载完了')
				}
			},
			filterItemNow(str, strs) {
				this.filterParams[str] = strs
				console.log(this.filterParams)
				this.pageIndex = 1
				this.getFilmList()
			}
		}
	}
</script>

<style lang="scss" scoped>
.filmLibrary_container {
	.header_nav_box {
		height: 50rpx;
		padding: 25rpx 0 17rpx;
		position: relative;
		.title_txt {
			width: 100%;
			text-align: center;
			height: 50rpx;
			font-size: 36rpx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: #222222;
			line-height: 50rpx;
		}
		.search_icon {
			position: absolute;
			top: 50%;
			right: 24rpx;
			width: 38rpx;
			height: 38rpx;
			transform: translateY(-50%);
		}
	}
	.main_box {
		padding: 38rpx 24rpx 0;
		box-sizing: border-box;
		.screen_film_box {
			.screen_line_box {
				margin-bottom: 30rpx;
				display: flex;
				.l_box {
					width: 100rpx;
					margin-right: 20rpx;
					height: 48rpx;
					font-size: 28rpx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: #666666;
					line-height: 48rpx;
					text-align: center;
				}
				.l_box.active {
					background: rgba(46, 110, 226, 0.1);
					border-radius: 3rpx;
					color: #2E6EE2;
				}
				.r_box {
					flex: 1;
					overflow: hidden;
					.scroll_film_box {
						white-space: nowrap;
						.scroll_view_item_H {
							display: inline-block;
							min-width: 100rpx;
							height: 48rpx;
							font-size: 28rpx;
							font-family: PingFang-SC-Regular, PingFang-SC;
							font-weight: 400;
							color: #666666;
							line-height: 40rpx;
							margin-right: 20rpx;
							text-align: center;
						}
						.scroll_view_item_H.active {
							background: rgba(46, 110, 226, 0.1);
							border-radius: 3rpx;
							color: #2E6EE2;
						}
					}
				}
			}
		}
		.film_video_box {
			display: flex;
			flex-wrap: wrap;
			.item_film {
				margin-right: 24rpx;
				width: 218rpx;
				margin-bottom: 40rpx;
			}
			.item_film:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
}
</style>
