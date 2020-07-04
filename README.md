# Hexo Butterfly Snippets

从`VSCode-Hexo-Next-Snippets`fork来的。

原作是和`Hexo-Next`这个主题配套的，我进行了一些简单的修改，现在和`Hexo Butterfly`这个主题配套。

视频介绍：https://www.bilibili.com/video/BV1nf4y1179b/

## 用法

### 自动补全

The code suggestion will be on when the `>` character is typed.

### 功能

- `>default`: Insert Default.
- `>primary`: Insert Primary.
- `primary-no-icon`: Insert Primary No-Icon.
- `>success`: Insert Success.
- `>info`: Insert Info.
- `>warning`: Insert Warning.
- `>danger`: Insert Danger.
- `>mermaid`: Insert Mermaid.
- `>tabs`: Insert Tabs.
- `>tabs_tensorflow`: Insert Tabs TensorFlow.

### 自定义功能
修改`/snippets/markdown.json`，然后重新打包。

## 安装

没有在Visual Code上架，因为上架要开发者账号，但是可以自己手动打包安装。

如果不愿意打包，可以下载`hexo-butterfly-snippets-1.0.0.vsix`，然后手动安装。

> https://github.com/KakaWanYifan/VSCode-Hexo-Butterfly-Snippets/blob/master/hexo-butterfly-snippets-1.0.0.vsix

## 打包

首先需要插件`vsce`
```
npm i vsce -g
```
打包，在项目的根目录
```
vsce package
```

## 要求

With VSCode Verson no lower than `1.41.0`

## LICENSE

MIT LICENSE.