/**
 * Created by iii-user on 2017/5/20.
 */
var kevinLayer= cc.Layer.extend({
    ctor:function(){
        this._super();
        var size =cc.winSize;

        var colorLayer=new cc.LayerColor(
            cc.color(255,255,0),
            320,66
        );
        colorLayer.x=size.width/2;
        colorLayer.y=size.height/2;
        colorLayer.ignoreAnchorPointForPosition(false);
        this.addChild(colorLayer);
        var mylabel = new cc.LabelTTF("My Game","Arial",48,cc.size(320,66),
            cc.TEXT_ALIGNMENT_CENTER,
            cc.VERTICAL_TEXT_ALIGNMENT_CENTER
        );
        mylabel.x=size.width/2;
        mylabel.y=size.height/2;
        mylabel.setColor(cc.color(0,0,255)),
        this.addChild(mylabel);
        return true;
    },
});
var kevinScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        cc.log("a");
        cc.warn("a");
        cc.error("a");
    },
    onEnter:function () {
        cc.log("b");
        var layer = new kevinLayer();
        this.addChild(layer);
    }
});