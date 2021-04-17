<template>
	<view class="nav_header_container">
		<view class="nav_left_box">
			<image class="index_left_icon" src="@/static/images/logo_left_icon.png" mode=""></image>
		</view>
			<view class="search_box">
				<input type="text" value="" placeholder="猪猪侠第8季" />
				<image src="@/static/images/search_icon.png" mode=""></image>
			</view>
			<view class="nav_right_box">
				<image class="nav_bar_r_icon" src="@/static/images/cache_icon.png" mode=""></image>
				<image class="nav_bar_r_icon" src="@/static/images/history_icon.png" mode=""></image>
			</view>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
	.nav_header_container {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 18rpx 0;
		.nav_left_box {
			.index_left_icon {
				width: 88rpx;
				height: 58rpx;
				display: block;
				margin-right: 34rpx;
			}
		}
		.search_box {
			position: relative;
			background: linear-gradient(90deg, #F3F3F3 0%, #F8F8F8 100%);
			height: 60rpx;
			border-radius: 30rpx;
			margin-right: 34rpx;
			padding: 0 86rpx 0 24rpx;
			box-sizing: border-box;
			flex: 1;
			overflow: hidden;
			input {
				width: 100%;
				height: 100%;
				line-height: 60rpx;
				outline: none;
				border: none;
				font-size: 24rpx;
				font-weight: 500;
				color: #666666;
			}
			image {
				position: absolute;
				right: 24rpx;
				top: 50%;
				width: 38rpx;
				height: 38rpx;
				transform: translateY(-50%);
			}
		}
		.nav_right_box {
			display: inline-flex;
			align-items: center;
			height: 60rpx;
			.nav_bar_r_icon {
				width: 38rpx;
				height: 38rpx;
				display: block;
			}
			.nav_bar_r_icon:first-child {
				margin-right: 28rpx;
			}
			.nav_bar_r_icon:last-child {
				margin-right: 24rpx;
			}
		}
	}
</style>
