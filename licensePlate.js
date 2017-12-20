class licensePlate {

    static DEFAULTS = {
        box: '',
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
        onPress: (value, e) => {
            console.log(value);
        },
        done: (value, e) => {
            console.log(value);
        }
    };

    /* 构造函数 */
    constructor(options) {
        Object.assign(this, {...licensePlate.DEFAULTS, ...options});
        this.Init();
        console.log(this);
    }

    Init() {
        if ($('body').find('.block-license-plate-keyboard.' + this.className).length === 0) this.createDom();

    }

    createDom() {
        $('.block-license-plate-keyboard.' + this.className).remove();
        this.box = $('<div style="display: none;"></div>').addClass('block-license-plate-keyboard ' + this.className);
        $('body').append(this.box);
        this.step = 0;
        this.value = [];

        this.openStep();

        this.box.bind('click', (e) => {
            if (e.target.tagName === 'TEXT') {
                this.value[this.step] = e.target.innerText;
                this.onPress(this.value, e);
                if (this.step === this.level.length - 1) this.done(this.value, e);
                this.next();
            }
            if (e.target.className === 'license-delete') {
                this.value[this.step] = '';
                this.onPress(this.value, e);
                this.prev();
            }
            return false;
        });

        return this;

    }

    openStep() {
        let html = '<span class="license-delete">X</span><ul class="license-list">';

        // 步数安全判定
        if (this.step > this.level.length - 1) this.step = this.level.length - 1;
        if (this.step < 0) this.step = 0;

        if (typeof this.level[this.step] === 'number') this.level[this.step] = this.level[this.level[this.step]];
        this.level[this.step].forEach((v) => {
            html += '<li>';
            v.split(',').forEach((vv) => {
                vv === '' ? html += '<i></i>' : html += '<text>' + vv + '</text>';
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

}

