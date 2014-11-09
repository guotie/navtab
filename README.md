navtab
======

a nav-tab example for learn react

# build issues

watchify -o js/bundle.js -v -d .

当使用watchify编译项目时，watchify依赖package.json的配置，必须配置

	  "browserify": {
	    "transform": [
	      "reactify",
	      "envify"
	    ]
  	},

否则，watchify不会把jsx文件编译成js文件，也就无法执行。
