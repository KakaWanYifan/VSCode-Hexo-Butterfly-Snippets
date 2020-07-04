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

- `>default`: Insert Default.
- `>primary`: Insert Primary.
- `>primary-no-icon`: Insert Primary No-Icon.
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