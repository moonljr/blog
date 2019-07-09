---
title: Git
---

### 查看用户代码行数
```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

#### 查看当前git设置的用户名和邮箱
```shell
git config user.name
git config user.email
```



#### 全局设置用户名和email：

```basic
$ git config --global user.name author # 将用户名设为author

$ git config --global user.email author@corpmail.com # 将用户邮箱设为author@corpmail.com
```

#### 设置单个项目/文件内的用户名和email 在命令行环境，进入Git项目所在目录，执行下面的命令：

```basic
$ git config　user.name nickname#将用户名设为nickname

$ git config　user.email nickname@gmail.com
```

#### 查看.git 配置文件

```basic
// Git的全局配置文件是存放在"~/.gitconfig"（用户目录下的.gitconfig）文件中：

$ cat ~/.gitconfig | head -3 [user] name = author email = author@corpmail.com

// 而项目配置文件是存放在Git项目所在目录的".git/config"文件中，这里也像上面一样用cat、head命令查看一下：

$ cat .git/config | head -3 [user] name = nickname email = nickname@gmail.com

如果大家对于Git熟悉后，可以直修改”~/.gitconfig”,”.git/config”这两个文件进行配置。
```

#### 在git使用过程中有时会遇到修改了.gitignore文件，修改了之后发现，不能起作用，这是因为git存在缓存问题，所以做一下步骤即可：

```basic
git rm -r --cached .
git add .
git commit -m "update gitignore"
```



#### `git init` 初始化一个 git 仓库

```bash
git init
```

#### `git clone` 从服务器上克隆一个仓库到本地

```bash
git clone git@github.com:veedrin/horseshoe.git
```

这里要说明的是，`clone`操作并不是将整个仓库下载下来，而是只下载`.git`目录。因为关于git的一切秘密都在这个目录里面，只要有了它，git就能复原到仓库的任意版本。



#### 工作区(working directory)

工作区，又叫工作目录，就是不包括`.git`目录的项目根目录。我们要在这个目录下进行手头的工作，它就是版本管理的素材库。你甚至可以称任何与工作有关的目录为工作区，只不过没有`.git`目录git是不认的。

#### 暂存区(stage或者index)

`stage`在英文中除了有`舞台、阶段`之意外，还有作为动词的`准备、筹划`之意，所谓的暂存区就是一个为提交到版本库做准备的地方。

那它为什么又被称作`index`呢？因为暂存区在物理上仅仅是`.git`目录下的`index`二进制文件。它就是一个索引文件，将工作区中的文件和暂存区中的备份一一对应起来。

`stage`是表意的，`index`是表形的。

你可以把暂存区理解为一个猪猪储钱罐。我们还是孩子的时候，手里有一毛钱就会丢进储钱罐里。等到储钱罐摇晃的声音变的浑厚时，或者我们有一个心愿急需用钱时，我们就砸开储钱罐，一次性花完。

类比到软件开发，每当我们写完一个小模块，就可以将它放入暂存区。等到一个完整的功能开发完，我们就可以从暂存区一次性提交到版本库里。

这样做的好处是明显的：

- 它可以实现更小颗粒度的撤销。
- 它可以实现批量提交到版本库。

另外，添加到暂存区其实包含两种操作。一种是将还未被git跟踪过的文件放入暂存区；一种是已经被git跟踪的文件，将有改动的内容放入暂存区。

#### `git add .` 将文件放入暂存区

```bash
git add .

git add README.md   // 将指定文件放入暂存区

git add src // 将指定目录放入暂存区
```



#### `git commit -m '提交说明'`  将文件提交到版本库中

```bash
git commit -m 'project init'
```

#### `git commit --amend`命令允许你修改最近的一次commit。

```bash
git commit --amend

然后执行
git add .
git commit -m '提交说明'
重新提交
```

#### `git status` 查看文件状态

```bash
git status
```

#### `git log --oneline`  查看提交历史。

```
git log --oneline

git log 查看当前仓库的详细提交历史（commit）
// commit 71948005382ff8e02dd8d5e8d2b4834428eece24
// Author: author <author@corpmail.com>
// Date: Thu Jan 20 12:58:05 2011 +0800
// Project init
```

#### `git branch dev` 创建dev分支

```bash
git branch dev
```

#### `git branch ` 查看本地仓库分支

```bash
git branch

// 同时查看本地分支和远端分支引用
git branch -a

// 查看每一个分支的最后一次提交
git branch -v
// 查看当前详细分支信息（可看到当前分支与对应的远程追踪分支）:
git branch -vv
// 查看当前远程仓库信息
git remote -vv

// 查看所有包含未合并工作的分支
git branch --no-merged

// 如果要查看哪些分支已经合并到当前分支，可以运行
git branch --merged
```

#### `git branch -D dev` 删除分支

```
git branch -D dev  // -D是--delete --force的缩写，你也可以写成-df
```

####  `git checkout` 签出(切换分支)

```
// 切换到HEAD  git checkout命令如果不带任何参数，默认会加上HEAD参数。而HEAD指针指向的就是当前commit。所以它并不会有任何签出动作。
git checkout HEAD

// 切换到commit
git checkout acb71fe

// 创建分支并切换

git checkout -b dev
```

#### `git merge` 合并分支

- 合并操作之前必须保证暂存区内没有待提交内容，否则git会阻止合并。这是因为合并之后，git会将合并后的版本覆盖暂存区。所以会有丢失工作成果的危险。
- 至于工作区有待添加到暂存区的内容，git倒不会阻止你。可能git觉得它不重要吧。
- 不过最好还是保持一个干净的工作区再执行合并操作

```
git merge dev   // git merge后跟合并客体，表示要将它合并进来。 当前master分支上 git merge dev  将dev分支合并到master上
```



#### `git stash` 储藏工作区和暂存区的内容

```bash
git stash
```

#### `git stash list`查看储藏列表

```
git stash list
```

#### `git stash apply --index ` 恢复储藏的内容

```
git stash apply --index  // 加一个参数--index就会让工作区的归工作区，让暂存区的归暂存区。
// git stash apply仅仅是恢复了最新的那一次储藏。

git stash apply stash@{1} // 指定储藏的名字，我们就可以恢复列表中的任意储藏了。
```

#### `git stash drop`  清理储藏列表

```
git stash drop stash@{1} // 清理指定储藏内容
```

#### `git stash pop` 同时恢复储藏和清理储藏。

```
git stash pop
```

#### `git push `   将版本库的内容推送到远程仓库

```bash
git push

git push origin test   将本地分支推送 远程仓库 这样远程仓库中也就创建了一个test分支

本地分支与远程分支关联起来
git push origin [本地分支名]:[远程分支名]

建立追踪关系，在现有分支和指定的远程分支之间
git branch --set-up-tream [branch] [remote-branch]

git push origin --delete dev 删除远程分支

git pull --rebase 避免自动合并

git push origin -d dev 删除远程分支
```

 #### GIT 分支

```
创建分支：git branch cheny
切换到分支：git checkout cheny
添加修改代码到缓存：git add .
提交：git commit -m "修改"
提交到分支：git push origin cheny/git push --set-upstream origin cheny
```

### GIT 标签管理

- 查看所有标签

```shell
git tag # 在控制台打印出当前仓库的所有标签
```

- 查看标签的详细信息

```shell
git show v1.0
```

- 创建标签

```shell
git tag -a v1.0 -m 'this is test version 1.0' # 创建附注标签时，参数a即annotated的缩写，指定标签类型，后附标签名。参数m指定标签说明，说明信息会保存在标签对象中。
```

- 给忘记创建标签的历史提交创建标签

```shell
# 首先查看历史提交的各commit_id
git log --oneline
# a808270 (HEAD -> master, tag: v1.0, test/master) 又新增了一行
# 599f2ba rrrr
# 05ca835 22222
# a5c6877 add an row
# cceb71d add test
# 0e51a5c first row
# 比如我要对第四次提交创建标签，在命令后面加上commit_id即可。
git tag -a v0.5 a5c6877 -m 'v0.5'
```

- 切换标签

```shell
# 与切换分支命令相同	 git checkout [tagname]
git checkout v0.1
```

- 将本地标签推送到远处分支

```shell
# 一次性推送全部尚未推送到远程的本地标签
git push origin --tags
# 推送某个标签到远程
git push origin v1.0
```

- 删除本地与远程分支标签

```shell
# 删除本地标签
git tag -d v0.8
# 删除远程分支标签
git push origin :refs/tags/v0.8
```

- 通过标签获取远程版本

```shell
git fetch origin tag V1.2  # 这样我们可以精准拉取指定的某一个版本.适用于运维同学部署指定版本.
```




