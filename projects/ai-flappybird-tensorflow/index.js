/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: gameConfig, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameConfig", function() { return gameConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const gameConfig = {
    type: Phaser.AUTO,
    parent: 'flappy-container',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    banner: false
};
const config = {
    birdGravity: 500,
    birdFlapPower: 200
};


/***/ }),

/***/ "./src/helpers/AiGameAgent.ts":
/*!************************************!*\
  !*** ./src/helpers/AiGameAgent.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AiGameAgent; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");

class AiGameAgent {
    constructor(bird) {
        this.bird = bird;
    }
    createModel() {
        const NEURONS = 6;
        const hiddenLayer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["layers"].dense({
            units: NEURONS,
            inputShape: [2]
        });
        const outputLayer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["layers"].dense({
            units: 1,
        });
        this.birdModel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["sequential"]();
        this.birdModel.add(hiddenLayer);
        this.birdModel.add(outputLayer);
        this.birdModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    }
    predictResults(horizontalDistance, heightDistance) {
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => {
            var input = [horizontalDistance, heightDistance];
            var inputTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tensor2d"]([input]);
            var outputs = this.birdModel.predict(inputTensor);
            outputs.data().then(output => {
                if (output > 0.5) {
                    this.bird.jump();
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/helpers/Score.ts":
/*!******************************!*\
  !*** ./src/helpers/Score.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

const round = Math.round;
class Score extends phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].BitmapText {
    constructor(scene, x, y, font, text, size) {
        super(scene, x, y, font, text, size);
        this._score = 0;
        this._score = 0;
        this.setDepth(1);
    }
    addScore() {
        let scene = this.scene;
        ++this._score;
        scene.scoreSound.play();
        this.setText(this._score.toString());
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_BootScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/BootScene */ "./src/scenes/BootScene.ts");
/* harmony import */ var _scenes_PreloadScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/PreloadScene */ "./src/scenes/PreloadScene.ts");
/* harmony import */ var _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/MenuScene */ "./src/scenes/MenuScene.ts");
/* harmony import */ var _scenes_GameScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/GameScene */ "./src/scenes/GameScene.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/config.ts");






class App {
    constructor() {
        let game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"](_config__WEBPACK_IMPORTED_MODULE_5__["gameConfig"]);
        game.scene.add('Boot', _scenes_BootScene__WEBPACK_IMPORTED_MODULE_1__["default"], true);
        game.scene.add('Preload', _scenes_PreloadScene__WEBPACK_IMPORTED_MODULE_2__["default"]);
        game.scene.add('Menu', _scenes_MenuScene__WEBPACK_IMPORTED_MODULE_3__["default"]);
        game.scene.add('Game', _scenes_GameScene__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
}
new App();


/***/ }),

/***/ "./src/scenes/BootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class BootScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super({ key: 'Boot' });
    }
    preload() {
    }
    create() {
        this.scene.start('Preload');
    }
}


/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sprites_Pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprites/Pipes */ "./src/sprites/Pipes.ts");
/* harmony import */ var _helpers_Score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/Score */ "./src/helpers/Score.ts");
/* harmony import */ var _sprites_Groud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/Groud */ "./src/sprites/Groud.ts");
/* harmony import */ var _sprites_Bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sprites/Bird */ "./src/sprites/Bird.ts");
/* harmony import */ var _helpers_AiGameAgent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/AiGameAgent */ "./src/helpers/AiGameAgent.ts");






var generation = 0;
class GameScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super({ key: 'Game' });
        this.started = false;
        this.currentTarget = 0;
        this.changeTarget = true;
    }
    init() {
        this.scoreSound = this.sound.add('score_sound');
        this.hitPipeSound = this.sound.add('hit_pipe_sound');
        this.hitGroudSound = this.sound.add('hit_ground_sound');
        let config = this.sys.game.config;
        this.width = config.width;
        this.height = config.height;
        this.halfWidth = this.width / 2;
        this.halfHeight = this.height / 2;
        let { width, height, halfWidth, halfHeight } = this;
        this.background = this.add.tileSprite(halfWidth, halfHeight, width, height, 'background');
        this.ground = new _sprites_Groud__WEBPACK_IMPORTED_MODULE_3__["default"](this, halfWidth, height - 56, width, 112, 'ground');
        this.add.existing(this.ground);
        this.bird = new _sprites_Bird__WEBPACK_IMPORTED_MODULE_4__["default"](this, 50, 150, 'bird');
        this.physics.add.existing(this.bird, false);
        this.add.existing(this.bird);
        this.bird.anims.play('fly');
        this.gameAgent = new _helpers_AiGameAgent__WEBPACK_IMPORTED_MODULE_5__["default"](this.bird);
        this.gameAgent.createModel();
        this.currentTarget = 0;
        this.labelScore = new _helpers_Score__WEBPACK_IMPORTED_MODULE_2__["default"](this, 10, 10, 'flappyfont', '0', 36);
        this.add.existing(this.labelScore);
        this.labelGeneration = new _helpers_Score__WEBPACK_IMPORTED_MODULE_2__["default"](this, 300, 10, 'flappyfont', 'Generation: ' + generation, 36);
        this.add.existing(this.labelGeneration);
        this.startGame();
    }
    startGame() {
        this.input.keyboard.on('keydown_SPACE', this.bird.jump, this.bird);
        this.bird.setGrav();
        this.pipes = new _sprites_Pipes__WEBPACK_IMPORTED_MODULE_1__["default"](this.physics.world, this.physics.world.scene, { allowGravity: false });
        this.pipes.addRowOfPipes(this.height, 1);
        this.pipeGeneratorLoop = this.time.addEvent({
            delay: 3000,
            callback: this.pipes.addRowOfPipes,
            args: [this.height],
            callbackScope: this.pipes,
            loop: true
        });
        this.physics.add.existing(this.ground, true);
        this.physics.add.collider(this.bird, this.ground, this.hitGroud, null, this);
        this.physics.add.overlap(this.bird, this.pipes, this.hitPipe, null, this);
        this.started = true;
    }
    update(time, delta) {
        if (!this.started)
            return;
        if (this.background.active) {
            this.background.tilePositionX -= 10 * delta / 1000;
        }
        if (this.ground.active) {
            this.ground.updateGround(delta);
        }
        if (this.bird.active) {
            this.bird.updateBird(this);
        }
        var hole = 0;
        if (this.pipes.pipeGapsIndex.length == 6) {
            this.pipes.nextTarget = this.pipes.getChildren()[this.currentTarget];
            this.pipes.nextGapCordinates = hole = this.pipes.pipeGapsIndex[this.currentTarget];
            this.currentTarget = 0;
        }
        else if (this.changeTarget && this.pipes.nextTarget && (this.pipes.nextTarget.x + 64 - 24) < this.bird.x) {
            this.changeTarget = false;
            this.currentTarget = this.currentTarget + 6;
            this.pipes.nextTarget = this.pipes.getChildren()[this.currentTarget];
            this.pipes.nextGapCordinates = hole = this.pipes.pipeGapsIndex[this.currentTarget];
            var that = this;
            setTimeout(function () { that.changeTarget = true; }, 500);
        }
        var horizontalDistance = this.pipes.nextTarget.x;
        var heightDistance = this.bird.y - this.pipes.pipeGapsIndex[this.currentTarget];
        this.gameAgent.predictResults(horizontalDistance, heightDistance);
    }
    gameOver() {
        if (!this.started)
            return;
        this.labelGeneration.text = "Generation: " + (++generation);
        var horizontalDistance = this.pipes.nextTarget.x;
        var heightDistance = this.bird.y - this.pipes.nextGapCordinates;
        var reward = parseInt(this.labelScore.text) + (this.bird.x - this.pipes.nextTarget.x);
        this.bird.stopTween();
        this.restartGame();
    }
    restartGame() {
        this.scene.restart();
    }
    hitGroud() {
        if (!this.started)
            return;
        this.hitGroudSound.play();
        if (this.bird.active) {
            this.offBirdJump();
            this.stopGameObjects();
        }
        this.gameOver();
    }
    hitPipe() {
        if (!this.bird.active)
            return;
        this.hitPipeSound.play();
        this.offBirdJump();
        this.stopGameObjects();
        this.bird.headDroop();
        this.gameOver();
    }
    stopGameObjects() {
        this.background.setActive(false);
        this.ground.setActive(false);
        this.bird.setActive(false);
        this.time.removeAllEvents();
    }
    offBirdJump() {
        this.input.keyboard.off('keydown_SPACE', this.bird.jump, this.bird, false);
    }
}


/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class MenuScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super({ key: 'Menu' });
    }
    create() {
        let config = this.sys.game.config;
        let width = config.width;
        let height = config.height;
        this.background = this.add.tileSprite(width / 2, height / 2, width, height, 'background');
        this.ground = this.add.tileSprite(width / 2, height - 56, width, 112, 'ground');
        let titleGroup = this.add.group();
        let title = titleGroup.create(145, 100, 'title');
        this.bird = titleGroup.create(257, 100, 'bird');
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        this.bird.anims.play('fly');
        this.tweens.add({
            targets: titleGroup.getChildren(),
            y: '+=20',
            duration: 1000,
            yoyo: true,
            repeat: Number.MAX_VALUE
        });
        this.scene.start('Game');
    }
    update(time, delta) {
        this.background.tilePositionX -= 10 * delta / 1000;
        this.ground.tilePositionX -= 100 * delta / 1000;
    }
}


/***/ }),

/***/ "./src/scenes/PreloadScene.ts":
/*!************************************!*\
  !*** ./src/scenes/PreloadScene.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreloadScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class PreloadScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super({ key: 'Preload' });
    }
    init() {
        let config = this.sys.game.config;
        let width = config.width;
        let height = config.height;
        let loadingPic = this.add.image(width / 2, height / 2, 'loading');
        loadingPic.setSize(0, 19);
        this.load.on('progress', (value) => {
            loadingPic.setSize(value * 220, 19);
        });
    }
    preload() {
        let image = this.load.image.bind(this.load);
        let spritesheet = this.load.spritesheet.bind(this.load);
        let audio = this.load.audio.bind(this.load);
        this.load.setPath('src/assets/images/');
        image('background', 'background1.png');
        image('ground', 'ground.png');
        image('pipe', 'pipe.png');
        spritesheet('bird', 'bird.png', { frameWidth: 34, frameHeight: 24, endFrame: 2 });
        this.load.setPath('src/assets/fonts/');
        this.load.bitmapFont('flappyfont', 'flappyfont.png', 'flappyfont.xml');
        this.load.setPath('src/assets/audio/');
        audio('fly_sound', 'flap.wav');
        audio('score_sound', 'score.wav');
        audio('hit_pipe_sound', 'pipehit.wav');
        audio('hit_ground_sound', 'ouch.wav');
    }
    create() {
        this.scene.start('Menu');
    }
}


/***/ }),

/***/ "./src/sprites/Bird.ts":
/*!*****************************!*\
  !*** ./src/sprites/Bird.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bird; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");


class Bird extends phaser__WEBPACK_IMPORTED_MODULE_0__["Physics"].Arcade.Sprite {
    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey);
        this.flySound = scene.sound.add('fly_sound');
        this.setDepth(1);
    }
    updateBird(scene) {
        if (this.active === false)
            return;
        if (this.y > 200 && this.angle < 20) {
            this.angle += 1;
        }
        if (this.y < 0) {
            scene.hitPipe();
        }
    }
    jump() {
        let { birdFlapPower } = _config__WEBPACK_IMPORTED_MODULE_1__["config"];
        let flapPower = 0 - birdFlapPower;
        this.setVelocityY(flapPower);
        if (this.angle > -20) {
            this.stopTween();
            this.tween = this.scene.tweens.add({
                targets: this,
                angle: '-= 20',
                duration: 100
            });
        }
        this.flySound.play();
    }
    headDroop() {
        this.stopTween();
        this.tween = this.scene.tweens.add({
            targets: this,
            duration: 500,
            angle: 70
        });
    }
    stopTween() {
        if (this.tween) {
            this.tween.stop();
            this.tween = null;
        }
    }
    setGrav() {
        let { birdGravity } = _config__WEBPACK_IMPORTED_MODULE_1__["config"];
        this.body.gravity.y = birdGravity;
    }
}


/***/ }),

/***/ "./src/sprites/Groud.ts":
/*!******************************!*\
  !*** ./src/sprites/Groud.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ground; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class Ground extends phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].TileSprite {
    constructor(scene, x, y, width, height, texture) {
        super(scene, x, y, width, height, texture);
        this.setDepth(1);
    }
    updateGround(delta) {
        this.tilePositionX -= 100 * delta / 1000;
    }
}


/***/ }),

/***/ "./src/sprites/Pipe.ts":
/*!*****************************!*\
  !*** ./src/sprites/Pipe.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pipe; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);

class Pipe extends phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].Sprite {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.bird = scene.bird;
        this.score = scene.labelScore;
        this.frameNum = frame;
        if (frame === 0) {
            this.scoreAdded = false;
        }
    }
    preUpdate() {
        let x = this.x;
        if (this.y > 50) {
            return;
        }
        if (x < -54) {
            this.scoreAdded = false;
        }
        else if (!this.scoreAdded && this.frameNum == 0 && x + 28 + 17 < this.bird.x) {
            this.score.addScore();
            this.scoreAdded = true;
        }
    }
    setSpeed() {
        let pipeBody = this.body;
        pipeBody.setVelocityX(-100);
    }
}


/***/ }),

/***/ "./src/sprites/Pipes.ts":
/*!******************************!*\
  !*** ./src/sprites/Pipes.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pipes; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pipe */ "./src/sprites/Pipe.ts");


class Pipes extends phaser__WEBPACK_IMPORTED_MODULE_0__["Physics"].Arcade.Group {
    constructor(world, scene, config) {
        super(world, scene, config);
        this.pipeGapsIndex = [];
    }
    addOnePipe(x, y) {
        let pipe = new _Pipe__WEBPACK_IMPORTED_MODULE_1__["default"](this.scene, x, y, 'pipe', 0);
        this.add(pipe, true);
        pipe.setSpeed();
    }
    addRowOfPipes(h, startingPoint = 1) {
        var tilesNeeded = Math.ceil((h - 113) / 64);
        var min = 2;
        var max = tilesNeeded - 2;
        var hole = Math.floor(Math.random() * (max - min + 1) + min);
        for (var i = 1; i < tilesNeeded + 1; i++) {
            if (i != hole && i != hole + 1) {
                this.pipeGapsIndex.push(64 * hole);
                this.addOnePipe(this.scene.cameras.main.width / startingPoint, (i * 64) - 30);
            }
        }
    }
}


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=index.js.map