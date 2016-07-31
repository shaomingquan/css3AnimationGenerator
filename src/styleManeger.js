/**
 * Created by shaomingquan on 16/7/30.
 */
(function (W) {

    function SM (dom) {
        this.dom = dom;
        this.transformObj = {
            opacity: 1
        };
    }
    SM.prototype.gt = function (attr) {
        return parseInt(this.transformObj[attr]);
    }

    SM.prototype.gtObj = function () {
        return this.transformObj;
    }

    SM.prototype.sts = function () {
        var transformStyleString = this.getTransformString(this.transformObj);
        ['mozTransfrom', 'webkitTransform', 'transform'].forEach(function (attr) {
            this.dom.style[attr] = transformStyleString;
        }.bind(this));

        this.dom.style.opacity = this.transformObj.opacity;
    }

    //Set Transform
    SM.prototype.st = function (attr, value) {
        this.transformObj[attr] = value;
        this.sts();
    }

    SM.prototype.stObj = function (obj) {
        this.transformObj = obj
        this.sts();
    }

    SM.prototype.getTransformString = function (transformObj) {
        return Object.keys(transformObj).filter(function(key) {
            return key !== 'opacity';
        }).map(function (key) {
            return `${key}(${this.transformObj[key]}${getTransformUnit(key)})`;
        }.bind(this)).join(' ');
    }

    function getTransformUnit (attr) {
        return ({
            translateX:'px',
            translateY:'px',
            translateZ:'px',
            rotate:'deg',
            rotateX:'deg',
            rotateY:'deg',
            rotateZ:'deg',
            scaleX:'',
            scaleY:'',
            scaleZ:'',
            skewX: 'deg',
            skewY: 'deg',
            skewZ: 'deg',
        })[attr];
    }

    function StyleManeger (dom, obj) {
        if(!dom.SM) {
            dom.SM = new SM(dom);
        }

        if(obj) {
            dom.SM.stObj(obj);
        }

        return dom.SM;
    }

    W.StyleManeger = StyleManeger;
})(window)