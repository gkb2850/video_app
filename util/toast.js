const message = (title) => {
	uni.showToast({
	    title,
	    duration: 1500,
		icon: 'none'
	});
}

const success = (title) => {
	uni.showToast({
	    title,
	    duration: 1500,
		icon: 'success'
	});
}

const error = (title) => {
	uni.showToast({
	    title,
	    duration: 1500,
		image: '@/static/images/del_radiou_icon.png'
	});
}

const loading = (txt) => {
	uni.showLoading({
	    title: txt
	});
}

const hideLoading = () => {
	uni.hideLoading();
}

export default {
	message,
	loading,
	hideLoading,
	success,
	error
}