---
title: docker
---
# docker

#### docker常用命令

```shell
 docker ps # 查看当前正在运行的容器
 docker ps -a # 查看所有容器的状态
 docker start/stop id/name # 启动/停止某个容器
 docker attach id # 进入某个容器(使用exit退出后容器也跟着停止运行)
 docker exec -ti id # 启动一个伪终端以交互式的方式进入某个容器（使用exit退出后容器不停止运行）
 docker images # 查看本地镜像
 docker rm id/name # 删除某个容器
 docker rmi id/name # 删除某个镜像
 docker run --name test -ti ubuntu /bin/bash  # 复制ubuntu容器并且重命名为test且运行，然后以伪终端交互式方式进入容器，运行bash
 docker build -t soar/centos:7.1 # 通过当前目录下的Dockerfile创建一个名为soar/centos:7.1的镜像
 docker run -d -p 2222:22 --name test soar/centos:7.1  # 以镜像soar/centos:7.1创建名为test的容器，并以后台模式运行，并做端口映射到宿主机2222端口，P参数重启容器宿主机端口会发生改变
```

### docker 三要素

- 仓库

  > 放了一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候从仓储中拉下来就可以了

- 镜像

  > image 文件生成的容器实例，本身也是一个文件， 称为镜像文件

- 容器

  > 一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器

### 安装docker

- CentOs 7.X 安装

  - 首选查看linux的版本 执行 `cat /etc/redhat-release`命令

  - ```shell
    [root]# cat /etc/redhat-release
    CentOS Linux release 7.6.1810 (Core)
    ```

  - yum 安装

    - yum -y install gcc
    - yum -y install gcc- c++

  - 卸载旧版本

    - ```shell
      yum remove docker \
                        docker-client \
                        docker-client-latest \
                        docker-common \
                        docker-latest \
                        docker-latest-logrotate \
                        docker-logrotate \
                        docker-engine
      ```

  - 安装docker 依赖包

    - ```
      yum install -y yum-utils \
        device-mapper-persistent-data \
        lvm2
      ```

  - 修改下载源(设置yum源) 也可以使用国内的阿里云源

    - ```shell
      yum-config-manager \
          --add-repo \
          https://download.docker.com/linux/centos/docker-ce.repo
      ```

  - 更新yum软件包索引

    - ```shell
      yum makecache fast
      ```

  - 安装docker

    - ```shell
      yum -y install docker-ce
      ```

  - 启动docker

    - ```shell
      systemctl start docker
      ```

  - 检测是否安装成功

    - ```shell
      docekr version
      ```

  - 修改centos7 的镜像地址（镜像加速配置）

    - /etc/docker/daemon.json  (如果没有这个文件就创建这个文件)

    - ```json
      {
        "registry-mirrors": ["https://t4pbff1n.mirror.aliyuncs.com"] // 阿里云或网易云加速镜像地址
      }
      ```

    - systemctl daemon-reload  重新加载daemon

    - systemctl restart docker  重启 docker

    - 检测是否加速成功

    - ```shell
      ps -ef|grep docker|grep -v grep
      ```

  - 卸载docker

    - systemctl stop docker  停止docker
    - yum -y remove docker-ce 卸载docker
    - rm -rf /var/lib/docker 删除镜像文件