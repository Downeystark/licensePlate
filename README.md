# licensePlate
车牌号键盘/H5车牌号键盘/支付宝小程序车牌号键盘

### 安装: git clone https://github.com/Downeystark/licensePlate.git

## [H5-API](#H5-API)

[`creat`](#creat)

[`show`](#show)

[`hide`](#hide)

[`go`](#go)

[`remove`](#remove)

[`params`](#params)

创建一个新的键盘
```js
var licensePlates = new licensePlate();
```

显示键盘
```js
licensePlates.show();
```

关闭键盘
```js
licensePlates.hide();
```

跳转至键盘第几步
```js
/**
* param number i: 第几步
*/
licensePlates.go(i);
```

移除键盘
```js
licensePlates.remove();
```

参数调用
```js
  title: '',
  className: 'license-plate-keyboard-default',
  level: [
    [
      '京,津,冀,鲁,晋,蒙,辽,吉,黑,沪',
      '苏,浙,皖,闽,赣,豫,鄂,湘,粤,桂',
      ',渝,川,贵,云,藏,陕,甘,青,',
      ',,琼,新,港,澳,台,宁,delete'
    ],
    [
      'Q,W,E,R,T,Y,U,I,O,P',
      'A,S,D,F,G,H,J,K,L,Z',
      'X,C,V,B,N,M,,,delete'
    ],
    [
      '1,2,3,4,5,6,7,8,9,0',
      'Q,W,E,R,T,Y,U,P,A,S',
      'D,F,G,H,J,K,L,Z,X,C',
      'V,B,N,M,,,,,delete'
    ],
    2,
    2,
    2,
    [
      '1,2,3,4,5,6,7,8,9,0',
      'Q,W,E,R,T,Y,U,P,A,S',
      'D,F,G,H,J,K,L,Z,X,C',
      'V,B,N,M,,,学,领,delete'
    ],
  ],
  value: [],
  // isOpen: true,
  step: 0,
  onPress: (value, e) => {
    // console.log(value);
  },
  done: (value, e) => {
    // console.log(value);
  }
``` 

## [Alipay-API](#Alipay-API)

打开键盘
```
this.licensePlates.openKeyBord(0);
```

参数调用
```js
  title: '车牌号键盘',
  debug: false,
  className: 'license-plate-keyboard-default',
  keyBord: [
    [
      '京,津,冀,鲁,晋,蒙,辽,吉,黑,沪',
      '苏,浙,皖,闽,赣,豫,鄂,湘,粤,桂',
      ',渝,川,贵,云,藏,陕,甘,青,',
      ',,琼,新,港,澳,台,宁,delete'
    ],
    [
      'Q,W,E,R,T,Y,U,I,O,P',
      'A,S,D,F,G,H,J,K,L,Z',
      'X,C,V,B,N,M,,,delete'
    ],
    [
      '1,2,3,4,5,6,7,8,9,0',
      'Q,W,E,R,T,Y,U,P,A,S',
      'D,F,G,H,J,K,L,Z,X,C',
      'V,B,N,M,,,,,delete'
    ],
    2,
    2,
    2,
    [
      '1,2,3,4,5,6,7,8,9,0',
      'Q,W,E,R,T,Y,U,P,A,S',
      'D,F,G,H,J,K,L,Z,X,C',
      'V,B,N,M,,,,,,',
      '警,港,澳,使,挂,学,领,,delete'
    ],
    6,
  ],
  value: [],
  step: 0,
  mask: true,
  closeOnClickModal: true,
  // 车牌号键盘关闭前事件
  onCloseBefore: () => {
    console.log('车牌号键盘关闭前事件')
  },
  // 车牌号键盘关闭后事件
  onCloseAfter: () => {
    console.log('车牌号键盘关闭后事件')
  },
  // 车牌号输入前事件
  onInputBefore() {
    console.log('车牌号输入前事件');
  },
  // 车牌号输入后事件
  onInputAfter() {
    console.log('车牌号输入后事件');
  },
  // 车牌号全部输入后事件
  onDoneAfter() {
    console.log('车牌号全部输入后事件');
  },
``` 

### 

- 支持链式 
- 支持多个键盘同时存在
- ES6转ES5
- Less转css

## 版本更新
- 1.0.0 版本完善基本框架键盘，支持多个键盘及链式方法
- 1.1.0 版本更新新增键盘title，onPress/done回调按下键的dom对象，修复部分bug和优化部分代码
- 1.2.0 文件夹分区，新增支付宝小程序组件
