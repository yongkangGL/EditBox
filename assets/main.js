cc.Class({
    extends: cc.Component,

    properties: {

    },

    toggleFullscreen()
    {
        if (cc.screen.fullScreen()) {
            cc.screen.exitFullScreen();
        }
        else {
            cc.screen.requestFullScreen();
        }
    }

    // update (dt) {},
});
