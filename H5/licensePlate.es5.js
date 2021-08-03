'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * author: downeyin
 * version: 1.1.0
 * git: https://github.com/Downeystark/licensePlate.git
 */
var licensePlate = function () {

    /* 构造函数 */
    function licensePlate(options) {
        _classCallCheck(this, licensePlate);

        _extends(this, _extends({}, licensePlate.DEFAULTS, options));
        this.Init();
        // console.log(this);
    }

    _createClass(licensePlate, [{
        key: 'Init',
        value: function Init() {
            if ($('body').find('.block-license-plate-keyboard.' + this.className).length === 0) this.createDom();
        }
    }, {
        key: 'createDom',
        value: function createDom() {
            var _this = this;

            $('.block-license-plate-keyboard.' + this.className).remove();
            this.box = $('<div style="display: none;"></div>').addClass('block-license-plate-keyboard ' + this.className);
            $('body').append(this.box);
            this.step = this.step !== 0 ? this.step : 0;
            this.value = this.value.length !== 0 ? this.value : [];

            this.openStep();

            this.box.bind('click', function (e) {
                if (e.target.className === 'license-key') {
                    _this.value[_this.step] = e.target.innerText;
                    _this.onPress(_this.value, e);
                    if (_this.step === _this.level.length - 1) _this.done(_this.value, e);
                    _this.next();
                } else if (e.target.className === 'license-delete') {
                    if (_this.value[_this.step] === '' || _this.value[_this.step] === undefined) _this.prev();
                    _this.value[_this.step] = '';
                    _this.onPress(_this.value, e);
                } else if (e.target.className === 'license-btn-hide') {
                    _this.hide();
                }
                return false;
            });
            return this;
        }
    }, {
        key: 'openStep',
        value: function openStep() {
            var html = '<p class="license-info"><span class="license-title">' + this.title + '</span><span class="license-btn-hide"></span></p><ul class="license-list">';

            // 步数安全判定
            if (this.step > this.level.length - 1) this.step = this.level.length - 1;
            if (this.step < 0) this.step = 0;

            if (typeof this.level[this.step] === 'number') this.level[this.step] = this.level[this.level[this.step]];
            this.level[this.step].forEach(function (v) {
                html += '<li>';
                v.split(',').forEach(function (vv) {
                    vv === '' ? html += '<i></i>' : vv === 'delete' ? html += '<i class="license-delete-unit"></i><span class="license-delete"></span>' : html += '<text class="license-key">' + vv + '</text>';
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
            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.box.slideUp();
            return this;
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
            return this;
        }
    }, {
        key: 'go',
        value: function go() {
            var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.step = step;
            this.openStep();
            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            return this.box.remove();
        }
    }]);

    return licensePlate;
}();

licensePlate.DEFAULTS = {
    box: '',
    title: '',
    className: 'license-plate-keyboard-default',
    level: [['京,津,冀,鲁,晋,蒙,辽,吉,黑,沪', '苏,浙,皖,闽,赣,豫,鄂,湘,粤,桂', ',渝,川,贵,云,藏,陕,甘,青,', ',,琼,新,港,澳,台,宁,delete'], ['Q,W,E,R,T,Y,U,I,O,P', 'A,S,D,F,G,H,J,K,L,Z', 'X,C,V,B,N,M,,,delete'], ['1,2,3,4,5,6,7,8,9,0', 'Q,W,E,R,T,Y,U,P,A,S', 'D,F,G,H,J,K,L,Z,X,C', 'V,B,N,M,,,,,delete'], 2, 2, 2, ['1,2,3,4,5,6,7,8,9,0', 'Q,W,E,R,T,Y,U,P,A,S', 'D,F,G,H,J,K,L,Z,X,C', 'V,B,N,M,,,学,领,delete']],
    value: [],
    // isOpen: true,
    step: 0,
    onPress: function onPress(value, e) {
        // console.log(value);
    },
    done: function done(value, e) {
        // console.log(value);
    }
};
