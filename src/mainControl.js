/**
 * Created by shaomingquan on 16/7/31.
 */
(function (W) {

    function mergeInterval (frames, stageFrame) {

    }

    function assembleToCss(frames, options) {

    }

    function runAnim (item, cssText) {
        
    }

    function runHandler (stageWork, stageFrame, options) {
        return function () {
            var frames = [];
            var workItems = stageWork.querySelectorAll('.work-item-dragable')
            workItems.forEach(function (itemTrans) {
                frames.push(StyleManeger(itemTrans).gtObj());
            });
            //calculate interval and percatage of per frame
            mergeInterval(frames, stageFrame);
            //make frame arr to css text
            var cssText = assembleToCss(frames, options);
            //go go go
            runAnim(workItems[0], cssText);
        }
    }

    function MainControl (stageWork, stageSetting, stageFrame) {
        var runBtn = stageSetting.querySelector('.setting-go');
        var timeFunction = stageSetting.querySelector('.setting-go');
        E(runBtn, 'click', runHandler(stageWork, stageFrame, {timeFunction}));
    }

    W.MainControl = MainControl;

})(window)