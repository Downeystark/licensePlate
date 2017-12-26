/*
 * author: downeyin
 * version: 1.1.0
 * git: https://github.com/Downeystark/licensePlate.git
 */
class licensePlate {

    static DEFAULTS = {
        box: '',
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
    };

    /* 构造函数 */
    constructor(options) {
        Object.assign(this, {...licensePlate.DEFAULTS, ...options});
        this.Init();
        // console.log(this);
    }

    Init() {
        if ($('body').find('.block-license-plate-keyboard.' + this.className).length === 0) this.createDom();

    }

    createDom() {
        $('.block-license-plate-keyboard.' + this.className).remove();
        this.box = $('<div style="display: none;"></div>').addClass('block-license-plate-keyboard ' + this.className);
        $('body').append(this.box);
        this.step = this.step !== 0 ? this.step : 0;
        this.value = this.value.length !== 0 ? this.value : [];

        this.openStep();

        this.box.bind('click', (e) => {
            if (e.target.className === 'license-key') {
                this.value[this.step] = e.target.innerText;
                this.onPress(this.value, e);
                if (this.step === this.level.length - 1) this.done(this.value, e);
                this.next();
            } else if (e.target.className === 'license-delete') {
                if (this.value[this.step] === '' || this.value[this.step] === undefined) this.prev();
                this.value[this.step] = '';
                this.onPress(this.value, e);
            } else if (e.target.className === 'license-btn-hide') {
                this.hide();
            }
            return false;
        });
        return this;
    }

    openStep() {
        let html = '<p class="license-info"><span class="license-title">' + this.title + '</span><span class="license-btn-hide"></span></p><ul class="license-list">';

        // 步数安全判定
        if (this.step > this.level.length - 1) this.step = this.level.length - 1;
        if (this.step < 0) this.step = 0;

        if (typeof this.level[this.step] === 'number') this.level[this.step] = this.level[this.level[this.step]];
        this.level[this.step].forEach((v) => {
            html += '<li>';
            v.split(',').forEach((vv) => {
                vv === '' ? html += '<i></i>' : (vv === 'delete' ? html += '<i class="license-delete-unit"></i><span class="license-delete"></span>' : html += '<text class="license-key">' + vv + '</text>');
            });
            html += '</li>';
        });
        html += '</ul>';
        this.box.html(html);
        return this;
    }

    show() {
        this.box.slideDown();
        return this;
    }

    hide() {
        this.box.slideUp();
        return this;
    }

    next() {
        this.step++;
        this.openStep();
    }

    prev() {
        this.step--;
        this.openStep();
        return this;
    }

    go(step = 0) {
        this.step = step;
        this.openStep();
        return this;
    }

    remove() {
        return this.box.remove();
    }

}

