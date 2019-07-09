---
title: npm
---

## npm常用命令

### 查看全局安装过的包
`npm list -g --depth 0`

### 设置npm镜像

`npm config set registry https://registry.npm.taobao.org --global  `
`npm config set disturl https://npm.taobao.org/dist --global `
### 查看npm镜像
`npm config get registry`


## nrm是切换npm源很简单方便的工具，跟其他工具一样，第一步进行全局安装：

　　`npm install nrm -g `

nrm 几条常用的命令：

`nrm ls `//查看可选的源列表:

`npm ---- https:``//registry.npmjs.org/`

`cnpm --- http:``//r.cnpmjs.org/`

`* taobao - https:``//registry.npm.taobao.org/`



`nrm test`//查看每个源的响应时间(仅做参考)：

`npm ---- 758ms`

`cnpm --- 212ms`

`* taobao - 105ms`


`nrm use taobao`//切换源(前面*号表示正在使用的源)


`nrm add`//添加源

``nrm del     `//删除源

　用nrm use切换源后，查看是否切换成功，可以使用nrm ls查看

```
npm init 在此目录生成package.json文件，可以添加-y | --yes 参数则默认所有配置为默认yes

npm install <package> -g 全局安装

npm install --production 安装dependencies，不包含devDependencies


npm install packagename --save 或 -S

--save、-S参数意思是把模块的版本信息保存到dependencies（生产环境依赖）中，即你的package.json文件的dependencies字段中；

npm install packagename --save-dev 或 -D

--save-dev 、 -D参数意思是吧模块版本信息保存到devDependencies（开发环境依赖）中，即你的package.json文件的devDependencies字段中；

npm install <package> 默认使用–save 参数，如果不想保存到package.json中，可以添加--no-save参数；还可以指定–save-dev 或 -g参数

npm uninstall <package> 卸载依赖包， 默认使用–save参数，即从package.json中移除

npm ls [-g] [--depth=0] 查看当前目录或全局的依赖包，可指定层级为0

npm outdated 查看当前过期依赖，其中current显示当前安装版本，latest显示依赖包的最新版本，wanted显示我们可以升级到可以不破坏当前代码的版本

npm root -g 查看全局安装地址

npm update <package> 升级依赖包版本

npm ll[la] [--depth=0] 查看依赖包信息

npm list <package>查看依赖的当前版本

npm search <string> 查找包含该字符串的依赖包

npm view <package> [field] [--json]列出依赖信息，包括历史版本，可以指定field来查看某个具体信息，比如（versions) 可以添加–json参数输出全部结果

npm home <package> 在浏览器端查看项目（项目主页）

npm repo <package> 浏览器端打开项目地址（GitHub）

npm docs <packge> 查看项目文档

npm bugs <packge> 查看项目bug

npm prune 移除当前不在package.json中但是存在node_modules中的依赖
```


```
npm install packagename --save-optional 或 -O

--save-optional 、 -O参数意思是把模块安装到optionalDependencies（可选环境依赖）中，即你的package.json文件的optionalDependencies字段中。（本人菜鸟一枚，一直也没理解这个，不过看到了就记录一下吧，万一哪天用到了，说不准就懂了......）

```

```
npm install packagename -g 或 --global
```

安装全局的模块（不加参数的时候默认安装本地模块）

```
npm list 或 npm ll 或 npm la 或 npm ls

查看所有已经安装的模块 `ll` 、 `ls` 、 `la` 三个命令意思都一样 但是列表的展示方式不一样 喜欢用哪个就看个人喜好了,不懂的同学可以每个都去试下。
```



```
npm uninstall packagename [options]

卸载已经安装的模块，后面的options参数意思与安装时候的意思一样,与这个命令相同的还有`npm remove `、`npm rm`、`npm r` 、 `npm un` 、 `npm unlink` 这几个命令功能和`npm uninstall`基本一样，个人觉得没什么区别。

```



```
npm outdated
```
这个命令会列出所有已经过时了的模块，对于已经过时了的模块可以使用下面的命令去更新
```
npm update [-g]
```

更新已经安装的模块(或全局的模块)

```
npm help '命令'
```

查看某条命令的详细帮助

```
npm root
```

查看命令的绝对路径

```
npm config
```

设置npm命令的配置路径，这个命令一般用于设置代理，毕竟大部分都是国外的模块，不过个人还是比较喜欢用`cnpm` 这个命令是用的淘宝的镜像，用法与npm一样，速度还可以。

除去以上的这些命令外，经常还能见到一些`npm start`、`npm deploy`、 `npm build`等等之类的命令，这些一般都是在package.json 中自定义的一些启动、重启、停止服务之类的命令。可以在package.json文件的scripts字段里自定义。例如：

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack-dev-server main.js,
    "deploy": "set NODE_ENV=production"
  }
```

### npm命令选项

| 选项       | 说明                                                         | 示例（部分以express为例）                                    |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| search     | 在存储库中查找模块包                                         | `npm search express`                                         |
| install    | 使用在存储库或本地位置上的一个package.json文件来安装包       | `npm install`  `npm install express`  `npm install express@0.1.1`  `npm install express@latest`  `npm install ../tModule.tgz` |
| install -g | 在全局可访问的位置安装一个包                                 | `npm install express -g`                                     |
| uninstall  | 卸载一个模块                                                 | `npm uninstall express`                                      |
| remove     | 删除一个模块                                                 |                                                              |
| pack       | 把在一个package.json文件中定义的模块封装成.tgz文件           | `npm pack`                                                   |
| view       | 显示模块的详细信息                                           | `npm view express`                                           |
| publish    | 把在一个package.json文件中定义的模块发布到注册表             | `npm publish`                                                |
| unpublish  | 取消发布您已发布到注册表的一个模块（在某些情况下，还需使用 `--force` 选项） | `npm unpublish myModule`                                     |
| owner      | 允许您在存储库中添加、删除包和列出包的所有者                 | `npm add <username> myModule`  `npm rm <username> myModule`  `npm ls myModule` |
| whoami     | （根据指定注册表模块）打印用户名                             | `npm whoami`                                                 |
| adduser    | 将用户信息添加到当前的开发环境                               | `npm adduser`                                                |
| login      | 等同于adduser                                                | `npm login`                                                  |
| logout     | 将用户信息从当前的开发环境中清除                             | `npm logout`                                                 |
| init       | 初始化Node包的信息，会创建package.json文件                   | `npm init`                                                   |



