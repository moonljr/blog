---
title: docker 安装nginx
---
## docker 安装nginx

1. 在docker hub上搜索nginx
2. 拉去官方镜像
3. 查看镜像
4. 配置挂载文件并且运行nginx
5. 停止容器 `docker stop 容器name or id`
6. 启动或重启容器 `docker start name or id  docker restart name or id`
7. 删除容器 `删除容器之前需要先停止容器 docker rm name or id `
8. 查看容器运行状态 `docker ps -a`


### nginx 配置https
```shell
server {
	listen 443;
	server_name erull.cn;
	ssl on;
	ssl_certificate   /etc/nginx/cert/erull.pem;
	ssl_certificate_key  /etc/nginx/cert/erull.key;
	ssl_session_timeout 5m;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
	ssl_prefer_server_ciphers on;

    location / {
        root   /usr/share/nginx/html/;
        index  index.html;
        # autoindex  on;
    }
}
 server{
	listen 80;
	server_name erull.cn;
	rewrite ^/(.*)$ https://erull.cn:443/$1 permanent;
}
```


### 在hub上搜索nginx

```shell
docker search nginx
```

### 拉去nginx镜像

```shell
docker pull nginx # 一般拉取stars最多的镜像
```

### 查看镜像

```shell
docker images
```

### 配置挂载文件并且运行nginx

- 首先在宿主机上创建nginx目录用来存放后面相关的配置文件

  ```shell
  mkdir -p ~/nginx/www ~/nginx/logs ~/nginx/conf ~/nginx/conf.d
  # ~/nginx/www 相当于nginx的html目录用来存放静态文件的
  # ~/nginx/logs nginx的日志文件
  #  ~/nginx/conf ~/nginx/conf.d nginx的配置文件
  ```

- 记得要拷贝一份nginx.conf 到 conf目录，拷贝一份default.conf 到 conf.d目录下

  - nginx.conf 文件是Nginx的总配置文件

  ```shell
  # nginx.conf
  user  nginx; # 运行用户，默认是nginx，可以不进行设置
  worker_processes  1; #Nginx进程，一般设置和cpu核数一样

  error_log  /var/log/nginx/error.log warn; #错误日志存放位置
  pid        /var/run/nginx.pid; #进程pid存放位置


  events {
      worker_connections  1024; #单个后台进程的最大并发数
  }


  http {
      include       /etc/nginx/mime.types; #文件扩展名和类型映射表
      default_type  application/octet-stream; #默认的文件类型
  		#设置日志模式
      log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';

      access_log  /var/log/nginx/access.log  main; #nginx访问日志的存放位置

      sendfile        on; #是否开启高效传输模式 on开启 off关闭
      #tcp_nopush     on; #减少网络报文段的数量

      keepalive_timeout  65; #保持连接的时间，也叫超时时间

      #gzip  on; #开启gzip压缩模式

      include /etc/nginx/conf.d/*.conf; #包含的子配置项的位置和文件
  }
  ```

  - default.conf

  ```shell
  server {
      listen       80;  #配置监听端口
      server_name  localhost;  # 配置域名

      #charset koi8-r;
      #access_log  /var/log/nginx/log/host.access.log  main;

      location / {
          #  root   /data/nginx/html;
          root   /usr/share/nginx/html; #服务默认启动目录
          index  index.html index.htm;  #默认访问文件
          autoindex  on;
          # deny   123.1.41.23; # 禁止访问的ip 还可以设置ip段 123.1.1.12/100  12-100
          # allow  123.14.1.4;  # 允许访问的ip
  	    # try_files $uri /index/index/page.html;
          #try_files $uri /index/map/page.html;
      }
      #location =/img {  # 配置页面的访问权限  `=` 精确匹配符号
      #   allow all;  # 允许所有的ip访问
      #}
      #location =/admin {
      #    deny all; # 禁止所有的ip访问
      #}
      #location ~\.php$ { # 禁止以php结尾的文件访问
      #   deny all;
      #}

      #error_page  404              /404.html;   # 配置404页面

      # redirect server error pages to the static page /50x.html
      #
      error_page   500 502 503 504  /50x.html;  #错误状态码的显示页面，配置后需要重启
      location = /50x.html {
          root   /usr/share/nginx/html;
      }

      # proxy the PHP scripts to Apache listening on 127.0.0.1:80
      #
      #location ~ \.php$ {
      #    proxy_pass   http://127.0.0.1;
      #}

      # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
      #
      #location ~ \.php$ {
      #    root           html;
      #    fastcgi_pass   127.0.0.1:9000;
      #    fastcgi_index  index.php;
      #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
      #    include        fastcgi_params;
      #}

      # deny access to .htaccess files, if Apache's document root
      # concurs with nginx's one
      #
      #location ~ /\.ht {
      #    deny  all;
      #}
  }
  ```

- 运行nginx

```shell
 docker run -d -p 80:80 --restart=always --name nginx80 -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v ~/nginx/logs:/var/log/nginx nginx

 # 命令说明
 # -d 后台运行nginx
 # -p 80:80： 将容器的 80 端口映射到主机的 80端口
 # --restart=always 当docker重启的时候会自动启动容器
 # --name nginx80：将容器命名为 nginx80。（别名的意思）
 # -v ~/nginx/www:/usr/share/nginx/html：将我们自己创建的 www 目录挂载到容器的 /usr/share/nginx/html。
 # -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf：将我们自己创建的 nginx.conf 挂载到容器的 /etc/nginx/nginx.conf。
 # -v ~/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf 将我们自己创建的 default.conf 挂载到容器的 /etc/nginx/conf.d/default.conf。
 # -v ~/nginx/logs:/var/log/nginx：将我们自己创建的 logs 挂载到容器的 /var/log/nginx。
```

### 补充
```shell
docker run -d -p 80:80 --name nginx80 -v ~/nginx/www:/usr/share/nginx -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/conf.d:/etc/nginx/conf.d -v ~/nginx/logs:/var/log/nginx nginx

# -v ~/nginx/conf.d:/etc/nginx/conf.d 本来是将default.conf映射到容器里边的 但是后来配置二级路由的时候发现使用多个 *.conf的配置文件的方式去配置路由不生效 查了下原因才发现启动容器的时候只映射了default.conf 没有映射其他的配置文件

# -v ~/nginx/www:/usr/share/nginx 映射到和html同级的目录 用不同的目录区分不同二级域名下的文件
```

