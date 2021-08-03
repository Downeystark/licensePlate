/**
 * @author: downey
 * @time: 2021-07-26 17:31:14
 * https://github.com/Downeystark/licensePlate
 */

Component({
  mixins: [],
  data: {
    isOpen: false,
  },
  props: {
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
  },
  async didMount() {
    this.$page.licensePlates = this;
  },
  methods: {
    // 打开键盘
    openKeyBord(step) {
      if (step !== undefined) this.go(step);
      this.setData({
        isOpen: true
      });
    },
    // 关闭键盘
    closeKeyBord() {
      this.props.onCloseBefore(this.props);
      this.setData({
        isOpen: false
      });
      this.props.onCloseAfter(this.props);
    },
    // 点击遮罩关闭键盘
    onClickModal() {
      if (this.props.closeOnClickModal) this.closeKeyBord();
    },
    // 输入事件
    onStep(e) {
      this.props.onInputBefore(this.props);
      this.props.value[this.props.step] = e.target.dataset.value;
      this.setData({
        value: this.props.value,
      });
      if (this.props.step === this.props.keyBord.length - 1) this.props.onDoneAfter(this.props);
      this.next();
      this.props.onInputAfter(this.props);
    },
    // 删除事件
    onDelete(e) {
      this.props.onInputBefore(this.props);
      if (this.props.value[this.props.step] === '' || this.props.value[this.props.step] === undefined) this.prev();
      this.props.value[this.props.step] = '';
      this.setData({
        value: this.props.value,
      });
      this.props.onInputAfter(this.props);
    },
    // 下一步
    next() {
      this.props.step++;
      this.openStep();
    },
    // 上一步
    prev() {
      this.props.step--;
      this.openStep();
    },
    // 跳转至第几步
    go(step = 0) {
      this.props.step = step;
      this.openStep();
    },
    openStep() {
      if (this.props.step > this.props.keyBord.length - 1) this.props.step = this.props.keyBord.length - 1;
      if (this.props.step < 0) this.props.step = 0;

      if (typeof this.props.keyBord[this.props.step] === 'number') this.props.keyBord[this.props.step] = this.props.keyBord[this.props.keyBord[this.props.step]];

      this.setData({
        step: this.props.step,
        keyBord: this.props.keyBord
      });
    },
  }
})