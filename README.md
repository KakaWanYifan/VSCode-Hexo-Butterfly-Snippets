# Hexo Butterfly Snippets

从`VSCode-Hexo-Next-Snippets` fork来的。

原作是和`Hexo Next`这个主题配套的，我进行了一些简单的修改，现在和`Hexo Butterfly`这个主题配套。

视频介绍：https://www.bilibili.com/video/BV1nf4y1179b/

已在`Visual Code`上架了，搜索`Hexo Butterfly Snippets`。

已开源：https://github.com/KakaWanYifan/VSCode-Hexo-Butterfly-Snippets

## 用法

### 补全

敲入`>`，然后会有提示，自动补全。

### 功能

- `>default`: Insert Default Note.
- `>primary`: Insert Primary Note.
- `>primary-no-icon`: Insert Primary No-Icon Note.
- `>success`: Insert Success Note.
- `>info`: Insert Info Note.
- `>warning`: Insert Warning Note.
- `>danger`: Insert Danger Note.
- `>mermaid`: Insert Mermaid Note.
- `>tabs`: Insert Tabs Note.
- `>tabs_tensorflow`: Insert Tabs TensorFlow Note.
- `>tabs_java_python`: Insert Tabs Java-Python Note.
- `>python`：Insert Python formula
- `>java`：Insert Python formula

### 自定义功能
修改`/snippets/markdown.json`，然后重新打包。

## 安装
已在`Visual Code`上架了，搜索`Hexo Butterfly Snippets`。

## 打包

clone源代码，安装插件`vsce`。
```
npm i vsce -g
```
在根目录，输入命令打包。
```
vsce package
```

## 要求

`Visual Code`版本不低于 `1.41.0`

## LICENSE

MIT LICENSE.