(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{201:function(n,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"docker-安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" docker 安装nginx")]),n._v(" "),t("ol",[t("li",[n._v("在docker hub上搜索nginx")]),n._v(" "),t("li",[n._v("拉去官方镜像")]),n._v(" "),t("li",[n._v("查看镜像")]),n._v(" "),t("li",[n._v("配置挂载文件并且运行nginx")]),n._v(" "),t("li",[n._v("停止容器 "),t("code",[n._v("docker stop 容器name or id")])]),n._v(" "),t("li",[n._v("启动或重启容器 "),t("code",[n._v("docker start name or id docker restart name or id")])]),n._v(" "),t("li",[n._v("删除容器 "),t("code",[n._v("删除容器之前需要先停止容器 docker rm name or id")])]),n._v(" "),t("li",[n._v("查看容器运行状态 "),t("code",[n._v("docker ps -a")])])]),n._v(" "),t("h3",{attrs:{id:"nginx-配置https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置https","aria-hidden":"true"}},[n._v("#")]),n._v(" nginx 配置https")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("server {\n\tlisten 443;\n\tserver_name erull.cn;\n\tssl on;\n\tssl_certificate   /etc/nginx/cert/erull.pem;\n\tssl_certificate_key  /etc/nginx/cert/erull.key;\n\tssl_session_timeout 5m;\n\tssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n\tssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n\tssl_prefer_server_ciphers on;\n\n    location / {\n        root   /usr/share/nginx/html/;\n        index  index.html;\n        # autoindex  on;\n    }\n}\n server{\n\tlisten 80;\n\tserver_name erull.cn;\n\trewrite ^/(.*)$ https://erull.cn:443/$1 permanent;\n}\n")])])]),t("h3",{attrs:{id:"在hub上搜索nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在hub上搜索nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" 在hub上搜索nginx")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("docker search nginx\n")])])]),t("h3",{attrs:{id:"拉去nginx镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉去nginx镜像","aria-hidden":"true"}},[n._v("#")]),n._v(" 拉去nginx镜像")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("docker pull nginx # 一般拉取stars最多的镜像\n")])])]),t("h3",{attrs:{id:"查看镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看镜像","aria-hidden":"true"}},[n._v("#")]),n._v(" 查看镜像")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("docker images\n")])])]),t("h3",{attrs:{id:"配置挂载文件并且运行nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置挂载文件并且运行nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" 配置挂载文件并且运行nginx")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("首先在宿主机上创建nginx目录用来存放后面相关的配置文件")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("mkdir -p ~/nginx/www ~/nginx/logs ~/nginx/conf ~/nginx/conf.d\n# ~/nginx/www 相当于nginx的html目录用来存放静态文件的\n# ~/nginx/logs nginx的日志文件\n#  ~/nginx/conf ~/nginx/conf.d nginx的配置文件\n")])])])]),n._v(" "),t("li",[t("p",[n._v("记得要拷贝一份nginx.conf 到 conf目录，拷贝一份default.conf 到 conf.d目录下")]),n._v(" "),t("ul",[t("li",[n._v("nginx.conf 文件是Nginx的总配置文件")])]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('# nginx.conf\nuser  nginx; # 运行用户，默认是nginx，可以不进行设置\nworker_processes  1; #Nginx进程，一般设置和cpu核数一样\n\nerror_log  /var/log/nginx/error.log warn; #错误日志存放位置\npid        /var/run/nginx.pid; #进程pid存放位置\n\n\nevents {\n    worker_connections  1024; #单个后台进程的最大并发数\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types; #文件扩展名和类型映射表\n    default_type  application/octet-stream; #默认的文件类型\n\t\t#设置日志模式\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main; #nginx访问日志的存放位置\n\n    sendfile        on; #是否开启高效传输模式 on开启 off关闭\n    #tcp_nopush     on; #减少网络报文段的数量\n\n    keepalive_timeout  65; #保持连接的时间，也叫超时时间\n\n    #gzip  on; #开启gzip压缩模式\n\n    include /etc/nginx/conf.d/*.conf; #包含的子配置项的位置和文件\n}\n')])])]),t("ul",[t("li",[n._v("default.conf")])]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("server {\n    listen       80;  #配置监听端口\n    server_name  localhost;  # 配置域名\n\n    #charset koi8-r;\n    #access_log  /var/log/nginx/log/host.access.log  main;\n\n    location / {\n        #  root   /data/nginx/html;\n        root   /usr/share/nginx/html; #服务默认启动目录\n        index  index.html index.htm;  #默认访问文件\n        autoindex  on;\n        # deny   123.1.41.23; # 禁止访问的ip 还可以设置ip段 123.1.1.12/100  12-100\n        # allow  123.14.1.4;  # 允许访问的ip\n\t    # try_files $uri /index/index/page.html;\n        #try_files $uri /index/map/page.html;\n    }\n    #location =/img {  # 配置页面的访问权限  `=` 精确匹配符号\n    #   allow all;  # 允许所有的ip访问\n    #}\n    #location =/admin {\n    #    deny all; # 禁止所有的ip访问\n    #}\n    #location ~\\.php$ { # 禁止以php结尾的文件访问\n    #   deny all;\n    #}\n\n    #error_page  404              /404.html;   # 配置404页面\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;  #错误状态码的显示页面，配置后需要重启\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n    # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n    #\n    #location ~ \\.php$ {\n    #    proxy_pass   http://127.0.0.1;\n    #}\n\n    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n    #\n    #location ~ \\.php$ {\n    #    root           html;\n    #    fastcgi_pass   127.0.0.1:9000;\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #}\n\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #    deny  all;\n    #}\n}\n")])])])]),n._v(" "),t("li",[t("p",[n._v("运行nginx")])])]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" docker run -d -p 80:80 --restart=always --name nginx80 -v ~/nginx/www:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v ~/nginx/logs:/var/log/nginx nginx\n\n # 命令说明\n # -d 后台运行nginx\n # -p 80:80： 将容器的 80 端口映射到主机的 80端口\n # --restart=always 当docker重启的时候会自动启动容器\n # --name nginx80：将容器命名为 nginx80。（别名的意思）\n # -v ~/nginx/www:/usr/share/nginx/html：将我们自己创建的 www 目录挂载到容器的 /usr/share/nginx/html。\n # -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf：将我们自己创建的 nginx.conf 挂载到容器的 /etc/nginx/nginx.conf。\n # -v ~/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf 将我们自己创建的 default.conf 挂载到容器的 /etc/nginx/conf.d/default.conf。\n # -v ~/nginx/logs:/var/log/nginx：将我们自己创建的 logs 挂载到容器的 /var/log/nginx。\n")])])]),t("h3",{attrs:{id:"补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充","aria-hidden":"true"}},[n._v("#")]),n._v(" 补充")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("docker run -d -p 80:80 --name nginx80 -v ~/nginx/www:/usr/share/nginx -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/conf.d:/etc/nginx/conf.d -v ~/nginx/logs:/var/log/nginx nginx\n\n# -v ~/nginx/conf.d:/etc/nginx/conf.d 本来是将default.conf映射到容器里边的 但是后来配置二级路由的时候发现使用多个 *.conf的配置文件的方式去配置路由不生效 查了下原因才发现启动容器的时候只映射了default.conf 没有映射其他的配置文件\n\n# -v ~/nginx/www:/usr/share/nginx 映射到和html同级的目录 用不同的目录区分不同二级域名下的文件\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);