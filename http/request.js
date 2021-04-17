const baseUrl = 'http://video-child-api.gdjunyuekj.com';
const httpRequest = (method, url, data) => {
	let token = "";
	uni.getStorage({
		key: 'token',
		success: function(ress) {
			token = ress.data
		}
	});
	let httpDefaultOpts = {
		url: baseUrl + url,
		data: data,
		method: method,
		header: method === 'get' ? {
			// 'Token': token,
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			// 'Token': token,
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				console.log(res)
				resolve(res[1].data)
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};
export {
	httpRequest,
	baseUrl
}