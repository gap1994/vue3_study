# vue3_study

### 学习vue3,适配手机端

自己看官网文档学习
[vue3](https://cli.vuejs.org/zh/)、[vite](https://cn.vitejs.dev/)、[vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)

#### 简单的安装一下环境
1. 安装node.js(版本 >= 12.0.0)
2. 打开cmd，运行`npm install -g @vue/cli`安装vue，验证`vue --version`
3. `npm init @vitejs/app`，拉取官网模板，选vue，vue-ts的模板，随便起个名字
4. `npm install`，接下来初始化
5. `npm run dev`，跑起来吧

# Vue 3 + Typescript + Vite + vant

首先要搭建vue3 + ts + vite的框架，直接使用官网的框架，然后整合vant
 
## 官网建议编辑器

使用[VSCode](https://code.visualstudio.com/)作为编辑器
vue插件用[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
确定设置开启了`vetur.experimental.templateInterpolationService`

### 如果使用 `<script setup>`

官网建议说，[`<script setup>`](https://github.com/vuejs/rfcs/pull/227)这个特性要用[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
这个插件替换Vetur（而且要禁用Vetur），才能支持这个语法。

## TS中对`.vue`引用的类型支持

由于ts无法处理`.vue`的引用，因此，通常都会被默认填充为vue组件。
如果不关心模板外的组件属性还好，不然的话就只能按下面的处理方法来了

### 如果使用了 Vetur

1. 安装 `@vuedx/typescript-plugin-vue`并添加到`tsconfig.json`的[plugins](https://www.typescriptlang.org/tsconfig#plugins)中
2. 删除`src/shims-vue.d.ts`（如果你不需要模块详情）
3. 打开命令面板
4. 设置ts版本为当前工作区版本
