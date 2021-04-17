//所有接口
import { httpRequest as request } from './request.js'

export const getIndexBannerFeach = (data) => request('get', '/api/v1/index/banner', data)//首页banner图
export const getIndexClassifyFeach = (data) => request('get', '/api/v1/index/type', data)//首页分类
export const getIndexVideoFeach = (data) => request('get', '/api/v1/index/index', data)//首页视频
export const getVideoMoreFeach = (data) => request('get', '/api/v1/index/more', data)//首页视频-更多
export const getVideoInfoFeach = (data) => request('get', '/api/v1/video/' + data)//视频详情
export const getVideoRelevantRecFeach = (data) => request('get', '/api/v1/videorelevantrecommend', data)//视频详情-相关推荐
export const getVideoMoreRecFeach = (data) => request('get', '/api/v1/videomorerecommend', data)//视频详情-更多推荐
//片库
export const getfilmLabelListFeach = (data) => request('get', '/api/v1/videofilmlibraryconfig', data)//片库筛选项配置
export const getfilmListFeach = (data) => request('get', '/api/v1/videofilmlibrary', data)//片库视频列表
//排行榜
export const getfilmRankListFeach = (data) => request('get', '/api/v1/videorankinglist', data)//视频排行榜列表