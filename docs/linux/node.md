---
title: linux 安装 node
---
## linux 上安装node

1. 去官网下载匹配的文件(下载linux版本的)

> 英文网址：https://nodejs.org/en/download/
>
> 通过  uname -a  命令查看到我的Linux系统位数是64位（备注：x86_64表示64位系统， i686 i386表示32位系统）

2. 下载下来的tar文件上传到服务器并且解压，然后通过建立软连接变为全局；

3. 上传服务器可以是自己任意路径，目前我的放置路径为  cd /user/local/

4. 解压上传（解压后的文件我这边将名字改为了nodejs，这个地方自己随意，只要在建立软连接的时候写正确就可以）

   ​    ① tar -xvf   node-v6.10.0-linux-x64.tar.xz

   ​    ② mv node-v6.10.0-linux-x64  nodejs

   ​    ③确认一下nodejs下bin目录是否有node 和npm文件，如果有执行软连接，如果没有重新下载执行上边步骤；

5. 建立软连接，变为全局

   ```shell
   ln -s /user/local/nodejs/bin/npm /usr/local/bin/

   ln -s /user/local/nodejs/bin/node /usr/local/bin/

   ```

6. 最后一步检验nodejs是否已变为全局

   ```shell
   node --version
   ```

