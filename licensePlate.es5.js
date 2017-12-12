'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var licensePlate = function () {

    /* 构造函数 */
    function licensePlate(options) {
        _classCallCheck(this, licensePlate);

        _extends(this, _extends({}, licensePlate.DEFAULTS, options));
        this.Init();
        console.log(this);
    }

    _createClass(licensePlate, [{
        key: 'Init',
        value: function Init() {
            if ($('body').find('.block-license-plate-keyboard').length === 0) this.createDom();
        }
    }, {
        key: 'createDom',
        value: function createDom() {
            var _this = this;

            $('.block-license-plate-keyboard').remove();
            $('body').append(this.box[0]);
            this.step = 0;
            this.value = [];

            this.openStep();

            this.box.bind('click', function (e) {
                console.log(e);
                if (e.target.tagName === 'TEXT') {
                    _this.value[_this.step] = e.target.innerText;
                    _this.onPress(_this.value);
                    if (_this.step === _this.level.length - 1) _this.done(_this.value);
                    _this.next();
                }
                if (e.target.className === 'license-delete') {
                    _this.value[_this.step] = '';
                    _this.onPress(_this.value);
                    _this.prev();
                }
            });

            return this;
        }
    }, {
        key: 'openStep',
        value: function openStep() {
            var html = '<span class="license-delete">X</span><ul class="license-list">';

            // 步数安全判定
            if (this.step > this.level.length - 1) this.step = this.level.length - 1;
            if (this.step < 0) this.step = 0;

            if (typeof this.level[this.step] === 'number') this.level[this.step] = this.level[this.level[this.step]];
            this.level[this.step].forEach(function (v) {
                html += '<li>';
                v.split(',').forEach(function (vv) {
                    vv === '' ? html += '<i></i>' : html += '<text>' + vv + '</text>';
                });
                html += '</li>';
            });
            html += '</ul>';
            this.box.html(html);
            return this;
        }
    }, {
        key: 'show',
        value: function show() {
            this.box.slideDown();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.box.slideUp();
        }
    }, {
        key: 'next',
        value: function next() {
            this.step++;
            this.openStep();
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.step--;
            this.openStep();
        }
    }]);

    return licensePlate;
}();

licensePlate.DEFAULTS = {
    box: $('<div class="block-license-plate-keyboard"></div>'),
    level: [['京,津,翼,鲁,晋,蒙,辽,吉,黑,沪', '苏,浙,皖,闽,赣,豫,鄂,湘,粤,桂', ',渝,川,贵,云,藏,陜,甘,青,', ',,琼,新,港,澳,台,宁,,'], ['Q,W,E,R,T,Y,U,I,O,P', 'A,S,D,F,G,H,J,K,L,Z', 'X,C,V,B,N,M,,,,'], ['1,2,3,4,5,6,7,8,9,0', 'Q,W,E,R,T,Y,U,P,A,S', 'D,F,G,H,J,K,L,Z,X,C', 'V,B,N,M,,,,,,'], 2, 2, 2, ['1,2,3,4,5,6,7,8,9,0', 'Q,W,E,R,T,Y,U,P,A,S', 'D,F,G,H,J,K,L,Z,X,C', 'V,B,N,M,,,学,领,,']],
    value: [],
    isOpen: true,
    step: 0,
    onPress: function onPress(value) {
        console.log(value);
    },
    done: function done(value) {
        console.log(value);
    }
};
