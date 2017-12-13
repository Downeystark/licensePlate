# licensePlate
车牌号模拟键盘输入器

### 安装: git clone https://github.com/Downeystark/licensePlate.git

## [API](#API)

[`creat`](#creat)

[`show`](#show)

[`hide`](#hide)

[`go`](#go)

[`remove`](#remove)

[`params`](#params)

<a name="creat" />
创建一个新的键盘

```js
var licensePlates = new licensePlate();
```
<a name="show" />
显示键盘

```js
licensePlates.show();
```
<a name="hide" />
关闭键盘

```js
licensePlates.hide();
```
<a name="go" />
跳转至键盘第几步

```js
/**
* param number i: 第几步
*/
licensePlates.go(i);
```
<a name="remove" />
移除键盘

```js
licensePlates.remove();
```

<a name="params" />
参数调用

```js
className: 'license-plate-keyboard-default',
level: [
    [
        '京,津,翼,鲁,晋,蒙,辽,吉,黑,沪',
        '苏,浙,皖,闽,赣,豫,鄂,湘,粤,桂',
        ',渝,川,贵,云,藏,陜,甘,青,',
        ',,琼,新,港,澳,台,宁,,'
    ],
    [
        'Q,W,E,R,T,Y,U,I,O,P',
        'A,S,D,F,G,H,J,K,L,Z',
        'X,C,V,B,N,M,,,,'
    ],
    [
        '1,2,3,4,5,6,7,8,9,0',
        'Q,W,E,R,T,Y,U,P,A,S',
        'D,F,G,H,J,K,L,Z,X,C',
        'V,B,N,M,,,,,,'
    ],
    2,
    2,
    2,
    [
        '1,2,3,4,5,6,7,8,9,0',
        'Q,W,E,R,T,Y,U,P,A,S',
        'D,F,G,H,J,K,L,Z,X,C',
        'V,B,N,M,,,学,领,,'
    ],

],
value: [],
isOpen: true,
step: 0,
onPress: (value) => {
    console.log(value);
},
done: (value) => {
    console.log(value);
}
```


### 

- 支持链式 
- 支持多个键盘同时存在
- ES6转ES5
- Less转css

## 版本更新
- 1.0.0 版本完善基本框架键盘，支持多个键盘及链式方法
