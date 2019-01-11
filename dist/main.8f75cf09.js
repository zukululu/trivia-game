// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../js/main.js":[function(require,module,exports) {
var questions = [{
  question: 'What year was Mario created?',
  answer: '1981',
  choices: [{
    choiceDesc: '1964',
    choiceImg: 'https://art.pixilart.com/5000fb0e1d2c04e.png'
  }, {
    choiceDesc: '1973',
    choiceImg: 'https://i.imgur.com/8nkj3Jm.gif'
  }, {
    choiceDesc: '1981',
    choiceImg: 'https://images-na.ssl-images-amazon.com/images/I/61uPeYjWZmL._SY550_.jpg'
  }, {
    choiceDesc: '1990',
    choiceImg: 'https://pngimage.net/wp-content/uploads/2018/06/mario-bros-pixel-png-6.png'
  }, {
    choiceDesc: '1952',
    choiceImg: 'https://ih0.redbubble.net/image.423157982.7742/flat,550x550,075,f.u6.jpg'
  }]
}, {
  question: "Who is Mario's brother?",
  answer: 'Luigi',
  choices: [{
    choiceDesc: 'Toad',
    choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png'
  }, {
    choiceDesc: 'Wario',
    choiceImg: 'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Wario.5fb367ea.png'
  }, {
    choiceDesc: 'Bowser',
    choiceImg: 'https://vignette.wikia.nocookie.net/mario/images/1/1e/Bowser_%28New_3ds_verison%29.png/revision/latest?cb=20180129223045'
  }, {
    choiceDesc: 'Shy Guy',
    choiceImg: 'https://www.mariowiki.com/images/thumb/7/70/ShyGuyCTTT_artwork.png/200px-ShyGuyCTTT_artwork.png'
  }, {
    choiceDesc: 'Luigi',
    choiceImg: 'https://vignette.wikia.nocookie.net/wii/images/d/d7/406px-Luigi_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20140121131452'
  }]
}, {
  question: "Who is Mario's first enemy?",
  answer: 'Donkey Kong',
  choices: [{
    choiceDesc: 'Donkey Kong',
    choiceImg: 'https://vignette.wikia.nocookie.net/fantendo/images/b/b5/SuperMarioParty_DonkeyKong.png/revision/latest?cb=20181005213911'
  }, {
    choiceDesc: 'Bowser',
    choiceImg: 'https://www.mariowiki.com/images/thumb/e/ea/SMO_Art_-_Bowser.png/240px-SMO_Art_-_Bowser.png'
  }, {
    choiceDesc: 'Boo',
    choiceImg: 'https://vignette.wikia.nocookie.net/nintendo/images/8/83/King_boo.png/revision/latest?cb=20150419133611&path-prefix=en'
  }, {
    choiceDesc: 'Chomper',
    choiceImg: 'https://www.mariowiki.com/images/thumb/a/a9/ChainChompMP8.png/300px-ChainChompMP8.png'
  }, {
    choiceDesc: 'Toad',
    choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png'
  }]
}, {
  question: "What was Mario's original name?",
  answer: 'Jumpman',
  choices: [{
    choiceDesc: 'Mario',
    choiceImg: 'https://i.pinimg.com/originals/02/ca/d8/02cad8a78f0dd73ddebb44abb7001da0.jpg'
  }, {
    choiceDesc: 'Jumpman',
    choiceImg: 'https://sg.fiverrcdn.com/photos/115852140/original/dbe5a04069060fdae78624a5e3746e8bf7fc705d.png?1534507584'
  }, {
    choiceDesc: 'Dario',
    choiceImg: 'https://ae01.alicdn.com/kf/HTB1CvRqOXXXXXbBaXXXq6xXFXXXs/Custom-Canvas-Art-Super-Mario-Poster-Super-Mario-Bros-Wall-Stickers-Mario-Wallpaper-Video-Game-Mural.jpg'
  }, {
    choiceDesc: 'Pewdiepie',
    choiceImg: 'https://vignette.wikia.nocookie.net/nintendo/images/d/d9/Mario_%28New_Super_Mario_Bros._2%29.png/revision/latest?cb=20120709145048&path-prefix=en'
  }, {
    choiceDesc: 'Mar.io',
    choiceImg: 'https://vignette.wikia.nocookie.net/central/images/6/63/Mario_Star.png/revision/latest?cb=20150823184403'
  }]
}, {
  question: "Where is Mario from?",
  answer: 'Brooklyn, New York',
  choices: [{
    choiceDesc: 'Italy',
    choiceImg: 'https://www.domondonart.com/wp-content/uploads/2016/06/VeniceItaly-restaurant-600x600.jpg'
  }, {
    choiceDesc: 'Mexico',
    choiceImg: 'https://ei.marketwatch.com/Multimedia/2017/07/12/Photos/ZH/MW-FQ172_mexico_20170712201825_ZH.jpg?uuid=c969d03c-6760-11e7-a0ec-9c8e992d421e'
  }, {
    choiceDesc: 'Brooklyn, New York',
    choiceImg: 'https://gotraveltipster.com/wp-content/uploads/2018/04/IMG_0300-web.jpg'
  }, {
    choiceDesc: 'Narnia',
    choiceImg: 'https://i.pinimg.com/originals/9e/e1/7d/9ee17d26c8d840c1ee9f57a18157a6de.jpg'
  }, {
    choiceDesc: 'Mushroom Kingdom',
    choiceImg: 'https://vignette.wikia.nocookie.net/everything-super-mario-odyssey/images/4/4b/Mushroom_kingdom_odyssey_3_by_banjo2015-dbt59q2.jpg/revision/latest?cb=20180112180041'
  }]
}, {
  question: 'How many games does Mario have?',
  answer: '200',
  choices: [{
    choiceDesc: '200',
    choiceImg: 'https://supermario.nintendo.com/assets/img/home/mario.png'
  }, {
    choiceDesc: '163',
    choiceImg: 'https://vignette.wikia.nocookie.net/mario/images/6/6d/Mario_SMS.png/revision/latest?cb=20111108005723'
  }, {
    choiceDesc: '96',
    choiceImg: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/mario/main.png'
  }, {
    choiceDesc: '224',
    choiceImg: 'https://vignette.wikia.nocookie.net/nintendo/images/f/f4/The_Mario_Bros..jpeg/revision/latest?cb=20140221224337&path-prefix=en'
  }, {
    choiceDesc: '77',
    choiceImg: 'https://media.nintendo.com/nintendo/bin/KwtKx21utodR6Cu106oF8CmhhxoWVgML/chO9W4Z7wpLuAkn9J0NHd6mGcfxar1vI.png'
  }]
}, {
  question: 'Who does Mario love?',
  answer: 'Princess Peach',
  choices: [{
    choiceDesc: 'Princess Daisy',
    choiceImg: 'https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_Daisy.5fb367ea.png'
  }, {
    choiceDesc: 'Rosalina',
    choiceImg: 'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/rosalina-mario-party-star-rush-1.46.jpg'
  }, {
    choiceDesc: 'Princess Peach',
    choiceImg: 'https://www.mariowiki.com/images/thumb/0/03/SuperMarioParty_Peach.png/180px-SuperMarioParty_Peach.png'
  }, {
    choiceDesc: 'Toadette',
    choiceImg: 'https://www.mariowiki.com/images/thumb/f/f1/Toadette_-_Mario_Party_10.png/220px-Toadette_-_Mario_Party_10.png'
  }, {
    choiceDesc: 'Yoshi',
    choiceImg: 'https://pbs.twimg.com/media/ByzYhGzIIAE94Dy.jpg'
  }]
}, {
  question: 'Who created Mario?',
  answer: 'Princess Peach',
  choices: [{
    choiceDesc: 'Shigeru Miyamoto',
    choiceImg: 'https://vignette.wikia.nocookie.net/mario/images/3/3b/Mario_Cast.png/revision/latest?cb=20140124005438'
  }, {
    choiceDesc: 'Masahiro Sakurai',
    choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg'
  }, {
    choiceDesc: 'Cowboy Tanaka',
    choiceImg: 'https://www.models-resource.com/resources/big_icons/24/23761.png'
  }, {
    choiceDesc: 'Bob Hoskins',
    choiceImg: 'https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/19806/default_ICON.png'
  }, {
    choiceDesc: 'JK Loling',
    choiceImg: 'https://vignette.wikia.nocookie.net/diceblock/images/b/bb/Mario_Party_Cast_2.png/revision/latest?cb=20131215014541&format=original'
  }]
}, {
  question: 'What game did Mario first appear in?',
  answer: 'Donkey Kong',
  choices: [{
    choiceDesc: 'Donkey Kong',
    choiceImg: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-05/25/10/campaign_images/buzzfeed-prod-web-03/this-picture-of-donkey-kong-without-hair-will-giv-2-4081-1527257545-4_dblbig.jpg'
  }, {
    choiceDesc: 'Super Mario 64',
    choiceImg: 'https://webgames.host/uploads/2017/06/super-mario-64.png'
  }, {
    choiceDesc: 'Super Mario Bros.',
    choiceImg: 'http://webgames.host/uploads/2016/09/super-mario-bros.png'
  }, {
    choiceDesc: 'Donkey Kong Junior',
    choiceImg: 'https://www.highscoresaves.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/d/k/dkjr_arcade_flyer_high_score_saves_1.png'
  }, {
    choiceDesc: 'Super Mario Land',
    choiceImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Supermariolandboxart.jpg/220px-Supermariolandboxart.jpg'
  }]
}, {
  question: 'Which of these abilities does Mario NOT have?',
  answer: 'Dragon form',
  choices: [{
    choiceDesc: 'Frog form',
    choiceImg: 'https://images-na.ssl-images-amazon.com/images/I/41tg9EEffxL._SL500_AC_SS350_.jpg'
  }, {
    choiceDesc: 'Dragon form',
    choiceImg: 'https://s3-us-east-2.amazonaws.com/hdragon-wp-assets/wp-content/uploads/2018/05/30113139/baby_dragon1.png'
  }, {
    choiceDesc: 'Tanooki',
    choiceImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tanuki_By_Iwanafish-_Cropped.jpg/220px-Tanuki_By_Iwanafish-_Cropped.jpg'
  }, {
    choiceDesc: 'Goomba',
    choiceImg: 'https://www.mariowiki.com/images/thumb/9/9c/Goomba_-_MarioPartyStarRush.png/200px-Goomba_-_MarioPartyStarRush.png'
  }, {
    choiceDesc: 'Metal',
    choiceImg: 'https://i.ebayimg.com/thumbs/images/g/jnMAAOSwLa9UVh~0/s-l225.jpg'
  }]
}];
var discardQuestions = [];
var characterSprite = document.querySelector('.mario');
var start = document.querySelector('.starter');
var btn = document.querySelector('.next-question');
var check = document.querySelector('.check-answer');
var user = document.querySelectorAll('.answer');
var timer = document.querySelector('.counter');
var walk = document.querySelector('.walkway');
var correctAnswer = '';
var userAnswer = '';
var timeLeft = 30;
var score = 0;
var countdownTimer;
start.addEventListener('click', startGame);
check.addEventListener('click', checkAnswer);
btn.addEventListener('click', nextQuestion);
check.style.visibility = 'hidden';
btn.style.visibility = 'hidden';
user.forEach(function (value) {
  return value.style.visibility = 'hidden';
});
user.forEach(function (obj) {
  obj.addEventListener('click', function pickAnswer() {
    userAnswer = event.target.innerHTML;
  });
});

function startGame() {
  // walk.classList.add = 'walking'
  // console.log(walk.classList)
  start.style.visibility = 'hidden'; // characterSprite.style.marginTop = '5px'
  // characterSprite.style.height = '100px'
  // characterSprite.style.width = '100px'
  // characterSprite.style.backgroundImage = `url('https://i.gifer.com/origin/ac/acf3abb6da430dd78cc99f925bb52d49_w200.gif')`

  countdownTimer = setInterval(countdown, 1000);
  btn.style.visibility = 'visible';
  btn.style.opacity = 0.5;
  nextQuestion();
}

function countdown() {
  if (timeLeft === 0) {
    var theQuestion = document.querySelector('.question-box');
    theQuestion.innerHTML = "<h1>You've completed the quiz!</h1><p class='score'>Your score is ".concat(score, "!</p>");
    clearTimeout(countdownTimer);
    timer.style.visibility = 'hidden';
    check.style.visbility = 'hidden'; //disables check answer button

    btn.style.visibility = 'hidden'; //disables this button

    user.forEach(function (value) {
      return value.style.visibility = 'hidden';
    }); //hides choices

    return; //ends function
  } else {
    timer.innerHTML = "<h1>Time left: ".concat(timeLeft, "</h1>");
    timeLeft--;
  }
}

function checkAnswer() {
  var theQuestion = document.querySelector('.question-box');

  if (userAnswer === correctAnswer) {
    theQuestion.innerHTML = "<h1>Correct!</h1>";
    score += timeLeft;
  } else {
    theQuestion.innerHTML = "<h1>WRONG!</h1>";
  }

  user.forEach(function (obj) {
    obj.style.opacity = 0.5;
    obj.disabled = true;
  });
  check.style.opacity = 0.5;
  btn.style.opacity = 1;
  check.disabled = true;
  btn.disabled = false;
}

function nextQuestion() {
  user.forEach(function (value) {
    value.style.visibility = 'visible';
    value.style.opacity = 1;
  });
  check.style.visibility = 'visible';
  check.style.opacity = 1;
  var randomQuestion = getRandomQuestion(questions); //gets question

  correctAnswer = randomQuestion.answer;
  generateChoices(); //creates 5 answer choices

  var questionIndex = questions.map(function (obj) //gets index of question
  {
    return obj.question;
  }).indexOf(randomQuestion.question);

  if (discardQuestions.includes(questionIndex) === true) {
    //checks to see if question has been asked already
    nextQuestion(); //if it has, run the function again
  }

  if (discardQuestions.includes(questionIndex) === false) {
    itemRemove(questions);
    var theQuestion = document.querySelector('.question-box'); //if it hasn't, run the rest: display the question

    theQuestion.innerHTML = randomQuestion.question;
  }

  if (discardQuestions.length >= questions.length) //ends the quiz
    {
      clearTimeout(countdownTimer);

      var _theQuestion = document.querySelector('.question-box');

      _theQuestion.innerHTML = "<h1>You've completed the quiz!</h1><p class='score'>Your score is ".concat(score, "!</p>");
      check.remove(); //disables check answer button

      btn.remove(); //disables this button

      timeLeft = 0;
      timer.remove();
      user.forEach(function (value) {
        return value.style.visibility = 'hidden';
      }); //hides choices

      return; //ends function
    }

  user.forEach(function (obj) {
    //enables all buttons
    obj.style.opacity = 1;
    obj.disabled = false;
  });
  userAnswer = '';
  btn.style.opacity = 0.5;
  check.style.opacity = 1;
  btn.disabled = true; //disables this button

  check.disabled = false; //enables check answer button

  function getRandomQuestion(arr) {
    var randomQuestion = Math.floor(Math.random() * questions.length);
    var question = questions[randomQuestion];
    return question;
  }

  function itemRemove(arr) {
    var discardIndex = questions.map(function (obj) {
      return obj.question;
    }).indexOf(randomQuestion.question);
    discardQuestions.push(discardIndex);
  }

  function generateChoices() {
    for (var i = 0; i < 5; i++) {
      user[i].innerHTML = randomQuestion.choices[i].choiceDesc; //change button's innerhtml to choice

      user[i].style.backgroundImage = "url(".concat(randomQuestion.choices[i].choiceImg, ")");
    }
  }
}
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52953" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/main.js"], null)
//# sourceMappingURL=/main.8f75cf09.map