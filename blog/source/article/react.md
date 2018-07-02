# react- 极客时间

- 传统web UI 开发 应用程序状态分散难以追踪和维护
- react 始终整体刷新页面

## flux 架构

- 单向数据流
- 是 react 解决关于数据模型的思路
- 不需要关心细节就可以把 store 连接到 view 上
- redux 是 fulx 架构的衍生项目（状态管理框架）

## 以组件方式考虑 UI 的构建 

## 创建一个简单的组件

- 受控组件： 表单元素状态由使用者维护
- 非受控组件： 表单元素状态由 DOM 自身维护

需要考虑：
1. 创建静态 UI
2. 考虑组件的状态组成
3. 考虑组件 

## 何时创建组件

- 每个组件只做一件事
- 如果组件变得复杂，那么应该拆分成小组件；可以提高性能，组件过大所有状态都要刷新。

## 数据状态管理： DRY 原则

1. 能计算得到的状态就不要单独存储
2. 组件尽量无状态，所需数据通过 props 获取（可以使组件性能更优，并且提高可重用性 

## JSX： 语法糖

- 在 js 中直接写 html 标记。
- jsx 的本质：动态创建组件的语法糖 

```js
const name ="stanny";
const element = <h1>Hello,{name}</h1>;// 这里实际返回的是 html 结点
//等同于：
const name = "stanny";
const element = React.createElement(
    'h1',
    null,
    'Hello',
    name
);
```

- 延展属性

```js
const props = {firstName:"Stanely",lastName:"Stanny"};
const greeting = <Greeting {...props} />;、
```

## 组件命名约定

1. React 认为小写的 tag 是原生 DOM 节点， 如'div'
2. 自定义的组件以大写字母开头
3. 属性语法？

## react 生命周期

可以分成三个阶段

1. 创建时
2. 更新时
3. 卸载时

1. render 阶段
2. pre-commit 阶段（更新 dom 结点称之为 commit）： 在此节点可以读取 DOM
3. commit 阶段： 