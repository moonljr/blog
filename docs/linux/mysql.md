---
title: docker 安装 mysql
---
## docker安装mysql

mysql -uroot -p root

1. 拉去镜像

```shell
docker pull mysql
```

2. 创建挂载文件夹

```shell
mkdir -p ~/mysql/data ~/mysql/logs ~/mysql/conf
```

3. 部署mysql

```shell
docker run -p 3306:3306 --name mysql3306 -v ~/mysql/conf:/etc/mysql/conf.d -v ~/mysql/logs:/logs -v ~/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Pass1234. -d mysql
```

4. 通过navicat 连接数据库测试

> 连接测试的时候会报2045的错误  因为最新的mysql的密码加密方式与原来的加密方式不同 需要进到mysql里边去修改

5. 修改mysql加密方式

```shell
# 通过docker 进入到mysql容器里边
docker exec -it 容器ID /bin/bash
# 进入到mysql里边
mysql -uroot -p 密码
# 查询加密方式
mysql> select Host,User,plugin from mysql.user;
查询结果
+-----------+------------------+-----------------------+
| Host      | User             | plugin                |
+-----------+------------------+-----------------------+
| %         | root             | caching_sha2_password |
| %         | vuluser          | caching_sha2_password |
---------------------
查询结果如上，在老版本里，一般使用加密方式为mysql_native_password，因为认证方式改变导致的。
# 修改加密方式（将用户的加密方式改为mysql_native_password，密码为root。）
alter user 'root'@'%' identified with mysql_native_password by 'root';
# 执行命令flush privileges使权限配置项立即生效
mysql>flush privileges；
# 然后exit 退出容器 重新连接即可
```

