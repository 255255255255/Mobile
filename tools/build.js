({
	baseUrl: '../project', //tools目录相对于project目录的相对路径
	dir: '../project-built',
	modules: [
	{
	 name: 'js/views/enterjs/mainconfig'
	}

	],
	fileExclusionRegExp: /^(r|bulid)\.js$/,
	optimizeCss: 'standard', //压缩方式为标准
	removeCombined: true,//当压缩好后删除未压缩
	paths: {
		jquery:"js/libs/jquery",
		swiper: "js/plugs/swiper.min",
		diqu: 'js/views/js/diqu2',
		commonObj: "js/views/js/commonobj"
	}

})