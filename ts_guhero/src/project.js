window.__require=function e(t,o,n){function c(r,a){if(!o[r]){if(!t[r]){var l=r.split("/");if(l=l[l.length-1],!t[l]){var s="function"==typeof __require&&__require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+r+"'")}r=l}var u=o[r]={exports:{}};t[r][0].call(u.exports,function(e){return c(t[r][1][e]||e)},u,u.exports,e,t,o,n)}return o[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<n.length;r++)c(n[r]);return c}({SpriteFrameAni:[function(e,t,o){"use strict";cc._RF.push(t,"bc697JnAQ5H4La+hiYbRB1i","SpriteFrameAni");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bigImg=null,t}return n(t,e),t.prototype.onLoad=function(){},t.prototype.playAni=function(e,t,o,n){var c=this;this.stopAni(),this.node.getComponent(cc.Sprite).spriteFrame=this.bigImg.getSpriteFrame(e+0);for(var i=[],r=function(t){i.push(cc.delayTime(o)),i.push(cc.callFunc(function(){c.node.getComponent(cc.Sprite).spriteFrame=c.bigImg.getSpriteFrame(e+t)}))},a=0;a<t;a++)r(a);n?this.node.runAction(cc.repeatForever(cc.sequence(i))):this.node.runAction(cc.sequence(i))},t.prototype.stopAni=function(){this.node.stopAllActions()},t.prototype.start=function(){},c([a(cc.SpriteAtlas)],t.prototype,"bigImg",void 0),t=c([r],t)}(cc.Component);o.default=l,cc._RF.pop()},{}],contact:[function(e,t,o){"use strict";cc._RF.push(t,"5fa19IORyFPFY+exc5dS6U4","contact");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=(i.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.onBeginContact=function(e,t,o){0==t.tag&&0==o.tag&&this.contactFunction(t,o)},t.prototype.onEndContact=function(e,t,o){},t.prototype.onPreSolve=function(e,t,o){},t.prototype.onPostSolve=function(e,t,o){},t.prototype.contactFunction=function(e,t){this.callBack&&this.callBack(e,t)},t.prototype.contactCallBack=function(e){this.callBack=e},t.prototype.start=function(){},t=c([r],t)}(cc.Component));o.default=a,cc._RF.pop()},{}],enemy:[function(e,t,o){"use strict";cc._RF.push(t,"d70ecUpiHhIPLkr6cocV1tY","enemy");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.columnNode=null,t.column=null,t.enemyGunImg=null,t.enemyBulletImg=null,t.enemyHeroImg=null,t.enemyDieParticle=null,t}return n(t,e),t.prototype.onLoad=function(){this.winSize=cc.winSize,this.enemyHeroImg.active=!1,this.enemyGunImg.active=!1,console.log(this.enemyDieParticle)},t.prototype.enemyAni=function(){this.enemyHeroImg.getComponent("SpriteFrameAni").playAni("enemy",3,.1,!0)},t.prototype.setColumnHeight=function(){var e=Math.floor(-250*Math.random())-100;this.column.setPosition(cc.v2(this.winSize.width/2+100,e))},t.prototype.comeOnAni=function(){var e=this;this.setColumnHeight();var t=Math.floor(Math.random()*(this.winSize.width/4));console.log("enemy come"),this.column.runAction(cc.sequence(cc.moveTo(1,cc.v2(t,this.column.position.y)),cc.callFunc(function(){e.enemyHeroImg.active=!0,e.enemyGunImg.active=!0,e.enemyAni()},this)))},t.prototype.enemyMove=function(){var e=this;this.enemyHeroImg.active=!1,this.enemyGunImg.active=!1,this.column.runAction(cc.sequence(cc.moveTo(1,cc.v2(-this.winSize.width/2-100,this.column.position.y)),cc.callFunc(function(){e.callBack&&e.callBack()})))},t.prototype.finishCallBack=function(e){this.callBack=e},t.prototype.enemyDie=function(){this.enemyDieParticle.node.active=!0,this.enemyDieParticle.stopSystem(),this.enemyDieParticle.resetSystem(),this.enemyGunImg.active=!1,this.enemyHeroImg.active=!1},t.prototype.enemyBulletWorldPos=function(){return this.column.convertToWorldSpaceAR(cc.v2(this.enemyGunImg.position))},t.prototype.setGunAngle=function(e){this.enemyGunImg.angle=e},t.prototype.gunAni=function(e){var t=this,o=this.enemyBulletImg.position;this.enemyBulletImg.runAction(cc.sequence(cc.moveTo(.3,cc.v2(e,0)),cc.callFunc(function(){t.hitHeroCallback&&t.hitHeroCallback(),t.enemyBulletImg.position=o})))},t.prototype.hitHeroCallBack=function(e){this.hitHeroCallback=e},t.prototype.start=function(){},c([a(cc.Node)],t.prototype,"columnNode",void 0),c([a(cc.Node)],t.prototype,"column",void 0),c([a(cc.Node)],t.prototype,"enemyGunImg",void 0),c([a(cc.Node)],t.prototype,"enemyBulletImg",void 0),c([a(cc.Node)],t.prototype,"enemyHeroImg",void 0),c([a(cc.ParticleSystem)],t.prototype,"enemyDieParticle",void 0),t=c([r],t)}(cc.Component);o.default=l,cc._RF.pop()},{}],play:[function(e,t,o){"use strict";cc._RF.push(t,"25de8LhNQJPvIKri3MZ7BKU","play");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=i.property,l=e("./utils"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bgImg=null,t.sunImg=null,t.moonImg=null,t.floorParent=null,t.farHouseImg0=null,t.farHouseImg1=null,t.nearHouseImg0=null,t.nearHouseImg1=null,t.farFloorImg0=null,t.farFloorImg1=null,t.nearFloorImg0=null,t.nearFloorImg1=null,t.scoreText=null,t.heroNode=null,t.shootLineImg=null,t.myBulletImg=null,t.myHeroImg=null,t.myGunImg=null,t.shieldImg=null,t.bloodBar=null,t.heroDieParticle=null,t.myBulletPrefab=[],t.enemyPrefab=null,t.endLayer=null,t.bestScoreText=null,t.allScoreText=null,t}return n(t,e),t.prototype.onLoad=function(){this.winSize=cc.winSize,this.canShooting=!0,this.canContact=!0,this.curScore=0,this.heroBloodValue=100,this.isLineUp=!0,cc.director.getPhysicsManager().enabled=!0,cc.director.getPhysicsManager().debugDrawFlags=0,cc.director.getPhysicsManager().gravity=cc.v2(0,-640),this.randStyle=Math.floor(100*Math.random())%3,cc.sys.localStorage.setItem("gunHeroBgStyle",this.randStyle),this.heroType=parseInt(cc.sys.localStorage.getItem("heroType"))||0,l.default.setImgTexture("image/line"+this.heroType,this.shootLineImg),l.default.setImgTexture("image/gun"+this.heroType,this.myGunImg),l.default.setImgTexture("background/bgImg"+this.randStyle,this.bgImg),2==this.randStyle?(this.sunImg.active=!1,this.moonImg.active=!0):(this.moonImg.active=!1,this.sunImg.active=!0,l.default.setImgTexture("image/sun"+this.randStyle,this.sunImg)),l.default.setImgTexture("image/house"+this.randStyle,this.farHouseImg0),l.default.setImgTexture("image/house"+this.randStyle,this.farHouseImg1),l.default.setImgTexture("image/houshSmall"+this.randStyle,this.nearHouseImg0),l.default.setImgTexture("image/houshSmall"+this.randStyle,this.nearHouseImg1),l.default.setImgTexture("image/floor"+this.randStyle,this.farFloorImg0),l.default.setImgTexture("image/floor"+this.randStyle,this.farFloorImg1),l.default.setImgTexture("image/gameFloor"+this.randStyle,this.nearFloorImg0),l.default.setImgTexture("image/gameFloor"+this.randStyle,this.nearFloorImg1),this.nearFloorImg0.zIndex=5,this.nearFloorImg1.zIndex=5,this.scoreText.string="0",this.yunAnimation(),this.shieldImg.getComponent("SpriteFrameAni").playAni("shield",4,.1,!0),this.myHeroAni(!1),this.createEnemy(),this.node.on(cc.Node.EventType.TOUCH_START,this.onEventStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onEventMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onEventEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onEventCancel,this)},t.prototype.createEnemy=function(){var e=this,t=cc.instantiate(this.enemyPrefab);t.setPosition(cc.v2(0,-110)),t.parent=this.floorParent,this.enemyNode=t.getComponent("enemy"),this.enemyNode.comeOnAni(),this.enemyNode.finishCallBack(function(){e.canContact=!0,e.canShooting=!0,t.removeFromParent(),t=null,e.createEnemy()}),this.enemyNode.hitHeroCallBack(function(){e.heroBloodValue=e.heroBloodValue-25,e.heroBloodValue<=0?(l.default.playSound("sound/heroDie",!1),e.heroBloodValue=0,e.myHeroDie(),e.gameOver()):(l.default.playSound("sound/enemyDie",!1),e.setBloodValue(),e.myGunImg.angle=0,e.canShooting=!0,e.canContact=!0)})},t.prototype.setBloodValue=function(){var e=this.heroBloodValue/100;this.shieldImg.opacity=Math.floor(255*e),this.bloodBar.progress=e},t.prototype.gameOver=function(){var e=this;this.node.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){e.endLayer.active=!0;var t=parseInt(cc.sys.localStorage.getItem("gunBestScore"))||0;e.curScore>t?(e.bestScoreText.string=e.curScore+"",cc.sys.localStorage.setItem("gunBestScore",e.curScore)):e.bestScoreText.string=t+"",e.allScoreText.string=e.curScore+""})))},t.prototype.yunAnimation=function(){for(var e=this,t=-this.winSize.width/2,o=function(){var o=Math.floor(100*Math.random())%3,c=Math.random()*(1*n.winSize.height/6)+1*n.winSize.height/4;t=t+150*Math.random()+150;var i=new cc.Node,r=i.addComponent(cc.Sprite);i.parent=n.floorParent,i.setPosition(cc.v2(t,c)),l.default.setImgTexture("image/yun"+n.randStyle+"_"+o,r),i.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1,cc.v2(-20,0)),cc.callFunc(function(){i.position.x<-e.winSize.width/2-100&&i.setPosition(cc.v2(e.winSize.width/2+100,i.position.y))}))))},n=this;t<this.winSize.width/2;)o()},t.prototype.myHeroAni=function(e){var t;t=this.myHeroImg.getComponent("SpriteFrameAni"),e?t.playAni("heroRun"+this.heroType+"_",5,.06,!0):t.playAni("heroWait"+this.heroType+"_",3,.1,!0)},t.prototype.myHeroScaleAni=function(){this.heroNode.runAction(cc.sequence(cc.scaleTo(1,1.1),cc.scaleTo(1,1)))},t.prototype.myHeroDie=function(){this.heroDieParticle.node.active=!0,this.heroDieParticle.stopSystem(),this.heroDieParticle.resetSystem(),this.heroNode.active=!1},t.prototype.gameByAni=function(){var e=this,t=this.farHouseImg0.width;this.farHouseImg0.runAction(cc.sequence(cc.moveBy(2,cc.v2(-200,0)),cc.delayTime(.1),cc.callFunc(function(){e.farHouseImg0.position.x<=-t-e.winSize.width/2&&(e.farHouseImg0.position=cc.v2(e.farHouseImg1.position.x+t,e.farHouseImg0.position.y)),e.myHeroAni(!1)}))),this.farHouseImg1.runAction(cc.sequence(cc.moveBy(2,cc.v2(-200,0)),cc.delayTime(.1),cc.callFunc(function(){e.farHouseImg1.position.x<=-t-e.winSize.width/2&&(e.farHouseImg1.position=cc.v2(e.farHouseImg0.position.x+t,e.farHouseImg1.position.y))})));var o=this.nearHouseImg0.width;this.nearHouseImg0.runAction(cc.sequence(cc.moveBy(2,cc.v2(-300,0)),cc.delayTime(.1),cc.callFunc(function(){e.nearHouseImg0.position.x<=-o-e.winSize.width/2&&(e.nearHouseImg0.position=cc.v2(e.nearHouseImg1.position.x+o,e.nearHouseImg0.position.y))}))),this.nearHouseImg1.runAction(cc.sequence(cc.moveBy(2,cc.v2(-300,0)),cc.delayTime(.1),cc.callFunc(function(){e.nearHouseImg1.position.x<=-o-e.winSize.width/2&&(e.nearHouseImg1.position=cc.v2(e.nearHouseImg0.position.x+o,e.nearHouseImg1.position.y))})));var n=this.farFloorImg0.width;this.farFloorImg0.runAction(cc.sequence(cc.moveBy(2,cc.v2(-400,0)),cc.delayTime(.1),cc.callFunc(function(){e.farFloorImg0.position.x<=-n-e.winSize.width/2&&(e.farFloorImg0.position=cc.v2(e.farFloorImg1.position.x+n,e.farFloorImg0.position.y))}))),this.farFloorImg1.runAction(cc.sequence(cc.moveBy(2,cc.v2(-400,0)),cc.delayTime(.1),cc.callFunc(function(){e.farFloorImg1.position.x<=-n-e.winSize.width/2&&(e.farFloorImg1.position=cc.v2(e.farFloorImg0.position.x+n,e.farFloorImg1.position.y))})));for(var c=this.nearFloorImg0.width,i=function(t){r.nearFloorImg0.runAction(cc.sequence(cc.delayTime(.02*t),cc.callFunc(function(){t%9==0&&l.default.playSound("sound/walk",!1);var o=e.nearFloorImg0.position.x-4;e.nearFloorImg0.position=cc.v2(o,e.nearFloorImg0.position.y);var n=e.nearFloorImg1.position.x-4;e.nearFloorImg1.position=cc.v2(n,e.nearFloorImg1.position.y),o<=-c-e.winSize.width/2&&(e.nearFloorImg0.position=cc.v2(e.nearFloorImg1.position.x+c,e.nearFloorImg0.position.y)),n<=-c-e.winSize.width/2&&(e.nearFloorImg1.position=cc.v2(e.nearFloorImg0.position.x+c,e.nearFloorImg1.position.y))})))},r=this,a=0;a<100;a++)i(a)},t.prototype.start=function(){},t.prototype.onEventStart=function(){this.canShooting&&this.updateGunAngle()},t.prototype.updateGunAngle=function(){this.shootLineImg.active=!0,this.curAngle=0,this.gunSchedule=function(){this.isLineUp?(this.curAngle+=1,this.curAngle>=90&&(this.isLineUp=!1)):(this.curAngle-=1,this.curAngle<=0&&(this.isLineUp=!0)),this.myGunImg.angle=this.curAngle},this.schedule(this.gunSchedule,.03)},t.prototype.stopGunAngle=function(){this.unschedule(this.gunSchedule),this.shootLineImg.active=!1},t.prototype.onEventMove=function(){},t.prototype.onEventEnd=function(e){if(this.canShooting){l.default.playSound("sound/heroBullet",!1),this.canShooting=!1,this.stopGunAngle(),this.setBulletBody();var t=5e3;1==this.heroType&&(t=7e3);var o=t*Math.tan(Math.abs(this.curAngle)*(Math.PI/180));this.bulletNode.getComponent(cc.RigidBody).applyForceToCenter(cc.v2(t,o),!1);var n=this.bulletNode.position,c=n;this.bulletFun=function(){var e=(n=this.bulletNode.position).x-c.x,t=0,o=0;n.y<c.y?(t=n.y-c.y,o=180*Math.atan2(t,e)/Math.PI):(t=c.y=n.y,o=-1*Math.atan2(t,e)*180/Math.PI),c=n,this.bulletNode.angle=o},this.schedule(this.bulletFun,.1)}},t.prototype.setBulletBody=function(){var e=this;this.bulletNode=cc.instantiate(this.myBulletPrefab[this.heroType]),this.bulletNode.parent=this.myGunImg,this.bulletNode.position=this.myBulletImg.position,this.bulletNode.getComponent("contact").contactCallBack(function(t,o){if(e.canContact){l.default.playSound("sound/openFire",!1),e.canContact=!1,e.unschedule(e.bulletFun);var n=t.node.group,c=o.node.group;("heroBullet"==n&&"floor"==c||"floor"==n&&"heroBullet"==c)&&e.node.runAction(cc.sequence(cc.delayTime(.5),cc.callFunc(function(){e.bulletNode.removeFromParent(),e.bulletNode=null,e.enemyOpenFire()}))),("heroBullet"==n&&"column"==c||"column"==n&&"heroBullet"==c)&&e.node.runAction(cc.sequence(cc.delayTime(.5),cc.callFunc(function(){e.bulletNode.removeFromParent(),e.bulletNode=null,e.enemyOpenFire()}))),("heroBullet"==n&&"enemy"==c||"enemy"==n&&"heroBullet"==c)&&(e.enemyNode.enemyDie(),e.node.runAction(cc.sequence(cc.delayTime(.5),cc.callFunc(function(){e.bulletNode.removeFromParent(),e.bulletNode=null,e.updateScore(),e.myHeroAni(!0),e.myHeroScaleAni(),e.gameByAni(),e.enemyNode.enemyMove()}))))}})},t.prototype.enemyOpenFire=function(){var e=this.enemyNode.enemyBulletWorldPos(),t=this.myHeroImg.parent.convertToWorldSpaceAR(cc.v2(this.myHeroImg.position.x,this.myHeroImg.position.y+30)),o=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y),c=180*Math.atan2(n,o)/Math.PI;this.enemyNode.setGunAngle(c);var i=Math.sqrt(Math.pow(o,2)+Math.pow(n,2));this.enemyNode.gunAni(i),l.default.playSound("sound/enemyBullet",!1)},t.prototype.updateScore=function(){this.curScore+=1,this.scoreText.string=this.curScore+"",l.default.playSound("sound/addScore",!1)},t.prototype.onEventCancel=function(e){this.onEventEnd(e)},t.prototype.exitCallBack=function(){l.default.playSound("sound/click",!1),cc.director.preloadScene("start",function(){cc.director.loadScene("start")})},t.prototype.refreshCallback=function(){l.default.playSound("sound/click",!1),cc.director.preloadScene("play",function(){cc.director.loadScene("play")})},c([a(cc.Node)],t.prototype,"bgImg",void 0),c([a(cc.Node)],t.prototype,"sunImg",void 0),c([a(cc.Node)],t.prototype,"moonImg",void 0),c([a(cc.Node)],t.prototype,"floorParent",void 0),c([a(cc.Node)],t.prototype,"farHouseImg0",void 0),c([a(cc.Node)],t.prototype,"farHouseImg1",void 0),c([a(cc.Node)],t.prototype,"nearHouseImg0",void 0),c([a(cc.Node)],t.prototype,"nearHouseImg1",void 0),c([a(cc.Node)],t.prototype,"farFloorImg0",void 0),c([a(cc.Node)],t.prototype,"farFloorImg1",void 0),c([a(cc.Node)],t.prototype,"nearFloorImg0",void 0),c([a(cc.Node)],t.prototype,"nearFloorImg1",void 0),c([a(cc.Label)],t.prototype,"scoreText",void 0),c([a(cc.Node)],t.prototype,"heroNode",void 0),c([a(cc.Node)],t.prototype,"shootLineImg",void 0),c([a(cc.Node)],t.prototype,"myBulletImg",void 0),c([a(cc.Node)],t.prototype,"myHeroImg",void 0),c([a(cc.Node)],t.prototype,"myGunImg",void 0),c([a(cc.Node)],t.prototype,"shieldImg",void 0),c([a(cc.ProgressBar)],t.prototype,"bloodBar",void 0),c([a(cc.ParticleSystem)],t.prototype,"heroDieParticle",void 0),c([a([cc.Prefab])],t.prototype,"myBulletPrefab",void 0),c([a(cc.Prefab)],t.prototype,"enemyPrefab",void 0),c([a(cc.Node)],t.prototype,"endLayer",void 0),c([a(cc.Label)],t.prototype,"bestScoreText",void 0),c([a(cc.Label)],t.prototype,"allScoreText",void 0),t=c([r],t)}(cc.Component);o.default=s,cc._RF.pop()},{"./utils":"utils"}],start:[function(e,t,o){"use strict";cc._RF.push(t,"09b9eAGUHpABaRIFimKjTN+","start");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),c=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=i.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.heroBtns=[],t}return n(t,e),t.prototype.playSound=function(e,t){cc.loader.loadRes(e,cc.AudioClip,function(e,o){e||cc.audioEngine.playEffect(o,t)})},t.prototype.selectHeroBtnClick=function(e,t){this.playSound("sound/select",!1);for(var o=parseInt(t),n=0;n<this.heroBtns.length;n++){var c=this.heroBtns[n];n!=o?c.interactable=!0:(c.interactable=!1,cc.sys.localStorage.setItem("heroType",o))}},t.prototype.startBtnClick=function(){this.playSound("sound/click",!1),cc.director.preloadScene("play",function(){cc.director.loadScene("play")})},t.prototype.onLoad=function(){for(var e=parseInt(cc.sys.localStorage.getItem("heroType")||0),t=0;t<this.heroBtns.length;t++){var o=this.heroBtns[t];o.interactable=t!=e}},t.prototype.start=function(){},c([a([cc.Button])],t.prototype,"heroBtns",void 0),t=c([r],t)}(cc.Component);o.default=l,cc._RF.pop()},{}],utils:[function(e,t,o){"use strict";cc._RF.push(t,"55993blmyFD7pEaWZ/BAvM/","utils"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){}return e.setImgTexture=function(e,t){cc.loader.loadRes(e,cc.SpriteFrame,function(e,o){e?cc.error(e.message||e):t.getComponent(cc.Sprite).spriteFrame=o}.bind(this))},e.playSound=function(e,t){cc.loader.loadRes(e,cc.AudioClip,function(e,o){if(!e)cc.audioEngine.playEffect(o,t)})},e}();o.default=n,cc._RF.pop()},{}]},{},["SpriteFrameAni","contact","enemy","play","start","utils"]);