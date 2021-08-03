const app = getApp();

Page({
  data: {
    carList: ['', '', '', '', '', '', '', '新能源'],
    carValue: [],
    carIndex: 0,
    carCard: '',
    query: {}
  },
  onLoad(query) {
    console.log(query)
    this.setData({
      query
    });
    if (query.carNo) {
      this.setCarList(query.carNo.split(''));

      this.setData({
        carCard: query.carNo,
      })
    }
  },
  // 是否车牌号真正判断
  isCarCard(carCard) {
    return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(
      carCard
    )
  },
  // 打开车牌号输入键盘
  onOpenKeyBord(e) {
    this.licensePlates.openKeyBord(e.target.dataset.step);
    this.data.carIndex = e.target.dataset.step;
    this.setData({
      carIndex: this.data.carIndex,
    });
  },
  // 初始化车牌
  setCarList(arr) {
    this.data.carList = ['', '', '', '', '', '', '', '新能源'];
    for (let i in arr) {
      this.data.carList[i] = arr[i];
    }
    if (this.data.carList[this.data.carList.length - 1] === '') this.data.carList[this.data.carList.length - 1] = '新能源';
    this.setData({
      carValue: arr,
      carList: this.data.carList,
    });
  },
  // 车牌号输入
  onInputAfter(props) {
    this.setCarList(props.value);

    this.setData({
      carList: this.data.carList,
      carCard: props.value.join(''),
      carIndex: props.step,
    });
  }

});
