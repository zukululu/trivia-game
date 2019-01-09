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
  question: 'Question 1',
  answer: 'hello1',
  choices: ['hello1', 'hello2', 'hello3', 'hello4', 'hello5']
}, {
  question: 'Question 2',
  answer: 'hello2',
  choices: ['hello1', 'hello2', 'hello3', 'hello4', 'hello5']
}, {
  question: 'Question 3',
  answer: 'hello3',
  choices: ['hello1', 'hello2', 'hello3', 'hello4', 'hello5']
}, {
  question: 'Question 4',
  answer: 'hello4',
  choices: ['hello1', 'hello2', 'hello3', 'hello4', 'hello5']
}, {
  question: 'Question 5',
  answer: 'hello5',
  choices: ['hello1', 'hello2', 'hello3', 'hello4', 'hello5']
}];
var discardQuestions = [];
var btn = document.querySelector('#click-me');
var check = document.querySelector('.check-answer');
var user = document.querySelectorAll('.answer');
var timer = document.querySelector('.counter');
check.addEventListener('click', checkAnswer);
btn.addEventListener('click', nextQuestion);
var correctAnswer = '';
var userAnswer = '';
var points = 0;
var timeLeft = 10;
document.querySelector('button.check-answer').style.visibility = 'hidden';
user.forEach(function (obj) {
  return obj.addEventListener('click', pickAnswer);
});
var countdownTimer = setInterval(countdown, 1000);

function pickAnswer() {
  userAnswer = event.target.innerHTML;
}

function checkAnswer() {
  if (userAnswer === correctAnswer) {
    points++;
    console.log('+1');
  } else {
    console.log('WRONG');
  }

  user.forEach(function (obj) {
    obj.disabled = true;
  });
  check.disabled = true;
  btn.disabled = false;
}

function countdown() {
  if (timeLeft === 0) {
    clearTimeout(countdownTimer);
    var theQuestion = document.querySelector('.question-box');
    theQuestion.innerHTML = "<h1>You lose!</h1>";
    check.disabled = true; //disables check answer button

    btn.disabled = true; //disables this button

    user.forEach(function (obj) //disables choices
    {
      obj.disabled = true;
    });
    timer.style.visibility = 'hidden';
  } else {
    timer.innerHTML = "".concat(timeLeft, " seconds remaining!");
    timeLeft--;
  }
}

function nextQuestion() {
  document.querySelector('button.check-answer').style.visibility = 'initial';
  var randomQuestion = getRandomQuestion(questions); //gets question

  correctAnswer = randomQuestion.answer;
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

  if (discardQuestions.length >= 5) //ends the quiz
    {
      var _theQuestion = document.querySelector('.question-box');

      _theQuestion.innerHTML = "<h1>You've completed the quiz!</h1>";
      check.disabled = true; //disables check answer button

      btn.disabled = true; //disables this button

      user.forEach(function (obj) //disables choices
      {
        obj.disabled = true;
      });
      return; //ends function
    }

  user.forEach(function (obj) {
    //enables all buttons
    obj.disabled = false;
  });
  timeLeft = 60;
  btn.disabled = true; //disables this button

  check.disabled = false; //enables check answer button

  generateChoices(); //creates 5 answer choices

  console.log(discardQuestions);

  function getRandomQuestion(arr) {
    var randomQuestion = Math.floor(Math.random() * 5);
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
      // let newButton = document.createElement('button')                    //create button
      // newButton.className = 'answer'                                      //give button class of .answer
      // newButton.addEventListener('click', pickAnswer)                     //allow button to change user's answer
      user[i].innerHTML = randomQuestion.choices[i]; //change button's innerhtml to choice
      // const box = document.querySelector('.question-box')                 //select which element to place it inside
      // box.appendChild(newButton)                                          //append button to element
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54680" + '/');

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