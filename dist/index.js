'use strict';

function _typeof(obj) {
	'@babel/helpers - typeof';
	return (
		(_typeof =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (obj) {
						return typeof obj;
				  }
				: function (obj) {
						return obj &&
							'function' == typeof Symbol &&
							obj.constructor === Symbol &&
							obj !== Symbol.prototype
							? 'symbol'
							: typeof obj;
				  }),
		_typeof(obj)
	);
}
var _express = _interopRequireDefault(require('express'));
var _index = _interopRequireDefault(require('./routes/index.js'));
var _connectMongo = _interopRequireDefault(require('connect-mongo'));
var _index2 = _interopRequireWildcard(require('./config/index.js'));
var _expressSession = _interopRequireDefault(require('express-session'));
var _passport = _interopRequireDefault(require('passport'));
var _auth = require('./services/auth.js');
var _database = require('./db/database.js');
var _cluster = _interopRequireDefault(require('cluster'));
var _os = _interopRequireDefault(require('os'));
var _index3 = require('./logs/index.js');
var _path = _interopRequireDefault(require('path'));
var _cors = _interopRequireDefault(require('cors'));
var _http = _interopRequireDefault(require('http'));
var _socket = require('socket.io');
var _mensajes = require('./controller/mensajes.js');
var _factory = require('./persistencia/daos/factory.js');
var _info = require('./docs/info.js');
var _swaggerUiExpress = _interopRequireDefault(require('swagger-ui-express'));
var _swaggerJsdoc = _interopRequireDefault(require('swagger-jsdoc'));
function _getRequireWildcardCache(nodeInterop) {
	if (typeof WeakMap !== 'function') return null;
	var cacheBabelInterop = new WeakMap();
	var cacheNodeInterop = new WeakMap();
	return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
		return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	})(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
	if (!nodeInterop && obj && obj.__esModule) {
		return obj;
	}
	if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
		return { default: obj };
	}
	var cache = _getRequireWildcardCache(nodeInterop);
	if (cache && cache.has(obj)) {
		return cache.get(obj);
	}
	var newObj = {};
	var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	for (var key in obj) {
		if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
			if (desc && (desc.get || desc.set)) {
				Object.defineProperty(newObj, key, desc);
			} else {
				newObj[key] = obj[key];
			}
		}
	}
	newObj['default'] = obj;
	if (cache) {
		cache.set(obj, newObj);
	}
	return newObj;
}
function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}
function _regeneratorRuntime() {
	'use strict';
	/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
		function _regeneratorRuntime() {
			return exports;
		};
	var exports = {},
		Op = Object.prototype,
		hasOwn = Op.hasOwnProperty,
		defineProperty =
			Object.defineProperty ||
			function (obj, key, desc) {
				obj[key] = desc.value;
			},
		$Symbol = 'function' == typeof Symbol ? Symbol : {},
		iteratorSymbol = $Symbol.iterator || '@@iterator',
		asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
		toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
	function define(obj, key, value) {
		return (
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}),
			obj[key]
		);
	}
	try {
		define({}, '');
	} catch (err) {
		define = function define(obj, key, value) {
			return (obj[key] = value);
		};
	}
	function wrap(innerFn, outerFn, self, tryLocsList) {
		var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
			generator = Object.create(protoGenerator.prototype),
			context = new Context(tryLocsList || []);
		return (
			defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }),
			generator
		);
	}
	function tryCatch(fn, obj, arg) {
		try {
			return { type: 'normal', arg: fn.call(obj, arg) };
		} catch (err) {
			return { type: 'throw', arg: err };
		}
	}
	exports.wrap = wrap;
	var ContinueSentinel = {};
	function Generator() {}
	function GeneratorFunction() {}
	function GeneratorFunctionPrototype() {}
	var IteratorPrototype = {};
	define(IteratorPrototype, iteratorSymbol, function () {
		return this;
	});
	var getProto = Object.getPrototypeOf,
		NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	NativeIteratorPrototype &&
		NativeIteratorPrototype !== Op &&
		hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
		(IteratorPrototype = NativeIteratorPrototype);
	var Gp =
		(GeneratorFunctionPrototype.prototype =
		Generator.prototype =
			Object.create(IteratorPrototype));
	function defineIteratorMethods(prototype) {
		['next', 'throw', 'return'].forEach(function (method) {
			define(prototype, method, function (arg) {
				return this._invoke(method, arg);
			});
		});
	}
	function AsyncIterator(generator, PromiseImpl) {
		function invoke(method, arg, resolve, reject) {
			var record = tryCatch(generator[method], generator, arg);
			if ('throw' !== record.type) {
				var result = record.arg,
					value = result.value;
				return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
					? PromiseImpl.resolve(value.__await).then(
							function (value) {
								invoke('next', value, resolve, reject);
							},
							function (err) {
								invoke('throw', err, resolve, reject);
							}
					  )
					: PromiseImpl.resolve(value).then(
							function (unwrapped) {
								(result.value = unwrapped), resolve(result);
							},
							function (error) {
								return invoke('throw', error, resolve, reject);
							}
					  );
			}
			reject(record.arg);
		}
		var previousPromise;
		defineProperty(this, '_invoke', {
			value: function value(method, arg) {
				function callInvokeWithMethodAndArg() {
					return new PromiseImpl(function (resolve, reject) {
						invoke(method, arg, resolve, reject);
					});
				}
				return (previousPromise = previousPromise
					? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
					: callInvokeWithMethodAndArg());
			}
		});
	}
	function makeInvokeMethod(innerFn, self, context) {
		var state = 'suspendedStart';
		return function (method, arg) {
			if ('executing' === state) throw new Error('Generator is already running');
			if ('completed' === state) {
				if ('throw' === method) throw arg;
				return doneResult();
			}
			for (context.method = method, context.arg = arg; ; ) {
				var delegate = context.delegate;
				if (delegate) {
					var delegateResult = maybeInvokeDelegate(delegate, context);
					if (delegateResult) {
						if (delegateResult === ContinueSentinel) continue;
						return delegateResult;
					}
				}
				if ('next' === context.method) context.sent = context._sent = context.arg;
				else if ('throw' === context.method) {
					if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
					context.dispatchException(context.arg);
				} else 'return' === context.method && context.abrupt('return', context.arg);
				state = 'executing';
				var record = tryCatch(innerFn, self, context);
				if ('normal' === record.type) {
					if (
						((state = context.done ? 'completed' : 'suspendedYield'),
						record.arg === ContinueSentinel)
					)
						continue;
					return { value: record.arg, done: context.done };
				}
				'throw' === record.type &&
					((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
			}
		};
	}
	function maybeInvokeDelegate(delegate, context) {
		var method = delegate.iterator[context.method];
		if (undefined === method) {
			if (((context.delegate = null), 'throw' === context.method)) {
				if (
					delegate.iterator['return'] &&
					((context.method = 'return'),
					(context.arg = undefined),
					maybeInvokeDelegate(delegate, context),
					'throw' === context.method)
				)
					return ContinueSentinel;
				(context.method = 'throw'),
					(context.arg = new TypeError("The iterator does not provide a 'throw' method"));
			}
			return ContinueSentinel;
		}
		var record = tryCatch(method, delegate.iterator, context.arg);
		if ('throw' === record.type)
			return (
				(context.method = 'throw'),
				(context.arg = record.arg),
				(context.delegate = null),
				ContinueSentinel
			);
		var info = record.arg;
		return info
			? info.done
				? ((context[delegate.resultName] = info.value),
				  (context.next = delegate.nextLoc),
				  'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
				  (context.delegate = null),
				  ContinueSentinel)
				: info
			: ((context.method = 'throw'),
			  (context.arg = new TypeError('iterator result is not an object')),
			  (context.delegate = null),
			  ContinueSentinel);
	}
	function pushTryEntry(locs) {
		var entry = { tryLoc: locs[0] };
		1 in locs && (entry.catchLoc = locs[1]),
			2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
			this.tryEntries.push(entry);
	}
	function resetTryEntry(entry) {
		var record = entry.completion || {};
		(record.type = 'normal'), delete record.arg, (entry.completion = record);
	}
	function Context(tryLocsList) {
		(this.tryEntries = [{ tryLoc: 'root' }]),
			tryLocsList.forEach(pushTryEntry, this),
			this.reset(!0);
	}
	function values(iterable) {
		if (iterable) {
			var iteratorMethod = iterable[iteratorSymbol];
			if (iteratorMethod) return iteratorMethod.call(iterable);
			if ('function' == typeof iterable.next) return iterable;
			if (!isNaN(iterable.length)) {
				var i = -1,
					next = function next() {
						for (; ++i < iterable.length; ) {
							if (hasOwn.call(iterable, i))
								return (next.value = iterable[i]), (next.done = !1), next;
						}
						return (next.value = undefined), (next.done = !0), next;
					};
				return (next.next = next);
			}
		}
		return { next: doneResult };
	}
	function doneResult() {
		return { value: undefined, done: !0 };
	}
	return (
		(GeneratorFunction.prototype = GeneratorFunctionPrototype),
		defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
		defineProperty(GeneratorFunctionPrototype, 'constructor', {
			value: GeneratorFunction,
			configurable: !0
		}),
		(GeneratorFunction.displayName = define(
			GeneratorFunctionPrototype,
			toStringTagSymbol,
			'GeneratorFunction'
		)),
		(exports.isGeneratorFunction = function (genFun) {
			var ctor = 'function' == typeof genFun && genFun.constructor;
			return (
				!!ctor &&
				(ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name))
			);
		}),
		(exports.mark = function (genFun) {
			return (
				Object.setPrototypeOf
					? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
					: ((genFun.__proto__ = GeneratorFunctionPrototype),
					  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
				(genFun.prototype = Object.create(Gp)),
				genFun
			);
		}),
		(exports.awrap = function (arg) {
			return { __await: arg };
		}),
		defineIteratorMethods(AsyncIterator.prototype),
		define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
			return this;
		}),
		(exports.AsyncIterator = AsyncIterator),
		(exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
			void 0 === PromiseImpl && (PromiseImpl = Promise);
			var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
			return exports.isGeneratorFunction(outerFn)
				? iter
				: iter.next().then(function (result) {
						return result.done ? result.value : iter.next();
				  });
		}),
		defineIteratorMethods(Gp),
		define(Gp, toStringTagSymbol, 'Generator'),
		define(Gp, iteratorSymbol, function () {
			return this;
		}),
		define(Gp, 'toString', function () {
			return '[object Generator]';
		}),
		(exports.keys = function (val) {
			var object = Object(val),
				keys = [];
			for (var key in object) {
				keys.push(key);
			}
			return (
				keys.reverse(),
				function next() {
					for (; keys.length; ) {
						var key = keys.pop();
						if (key in object) return (next.value = key), (next.done = !1), next;
					}
					return (next.done = !0), next;
				}
			);
		}),
		(exports.values = values),
		(Context.prototype = {
			constructor: Context,
			reset: function reset(skipTempReset) {
				if (
					((this.prev = 0),
					(this.next = 0),
					(this.sent = this._sent = undefined),
					(this.done = !1),
					(this.delegate = null),
					(this.method = 'next'),
					(this.arg = undefined),
					this.tryEntries.forEach(resetTryEntry),
					!skipTempReset)
				)
					for (var name in this) {
						't' === name.charAt(0) &&
							hasOwn.call(this, name) &&
							!isNaN(+name.slice(1)) &&
							(this[name] = undefined);
					}
			},
			stop: function stop() {
				this.done = !0;
				var rootRecord = this.tryEntries[0].completion;
				if ('throw' === rootRecord.type) throw rootRecord.arg;
				return this.rval;
			},
			dispatchException: function dispatchException(exception) {
				if (this.done) throw exception;
				var context = this;
				function handle(loc, caught) {
					return (
						(record.type = 'throw'),
						(record.arg = exception),
						(context.next = loc),
						caught && ((context.method = 'next'), (context.arg = undefined)),
						!!caught
					);
				}
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i],
						record = entry.completion;
					if ('root' === entry.tryLoc) return handle('end');
					if (entry.tryLoc <= this.prev) {
						var hasCatch = hasOwn.call(entry, 'catchLoc'),
							hasFinally = hasOwn.call(entry, 'finallyLoc');
						if (hasCatch && hasFinally) {
							if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
							if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
						} else if (hasCatch) {
							if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
						} else {
							if (!hasFinally) throw new Error('try statement without catch or finally');
							if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
						}
					}
				}
			},
			abrupt: function abrupt(type, arg) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (
						entry.tryLoc <= this.prev &&
						hasOwn.call(entry, 'finallyLoc') &&
						this.prev < entry.finallyLoc
					) {
						var finallyEntry = entry;
						break;
					}
				}
				finallyEntry &&
					('break' === type || 'continue' === type) &&
					finallyEntry.tryLoc <= arg &&
					arg <= finallyEntry.finallyLoc &&
					(finallyEntry = null);
				var record = finallyEntry ? finallyEntry.completion : {};
				return (
					(record.type = type),
					(record.arg = arg),
					finallyEntry
						? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
						: this.complete(record)
				);
			},
			complete: function complete(record, afterLoc) {
				if ('throw' === record.type) throw record.arg;
				return (
					'break' === record.type || 'continue' === record.type
						? (this.next = record.arg)
						: 'return' === record.type
						? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
						: 'normal' === record.type && afterLoc && (this.next = afterLoc),
					ContinueSentinel
				);
			},
			finish: function finish(finallyLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.finallyLoc === finallyLoc)
						return (
							this.complete(entry.completion, entry.afterLoc),
							resetTryEntry(entry),
							ContinueSentinel
						);
				}
			},
			catch: function _catch(tryLoc) {
				for (var i = this.tryEntries.length - 1; i >= 0; --i) {
					var entry = this.tryEntries[i];
					if (entry.tryLoc === tryLoc) {
						var record = entry.completion;
						if ('throw' === record.type) {
							var thrown = record.arg;
							resetTryEntry(entry);
						}
						return thrown;
					}
				}
				throw new Error('illegal catch attempt');
			},
			delegateYield: function delegateYield(iterable, resultName, nextLoc) {
				return (
					(this.delegate = {
						iterator: values(iterable),
						resultName: resultName,
						nextLoc: nextLoc
					}),
					'next' === this.method && (this.arg = undefined),
					ContinueSentinel
				);
			}
		}),
		exports
	);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}
function _asyncToGenerator(fn) {
	return function () {
		var self = this,
			args = arguments;
		return new Promise(function (resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
			}
			_next(undefined);
		});
	};
}
var app = (0, _express['default'])();
var specs = (0, _swaggerJsdoc['default'])(_info.info);
var httpServer = _http['default'].createServer(app);
var io = new _socket.Server(httpServer);
app.set('socketio', io);
io.on(
	'connection',
	/*#__PURE__*/ (function () {
		var _ref = _asyncToGenerator(
			/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(socket) {
				return _regeneratorRuntime().wrap(function _callee2$(_context2) {
					while (1) {
						switch ((_context2.prev = _context2.next)) {
							case 0:
								console.log('Usuario con id: ', socket.id, ' se ha conectado');
								_context2.t0 = socket;
								_context2.next = 4;
								return (0, _mensajes.getAllControllerMsg)();
							case 4:
								_context2.t1 = _context2.sent;
								_context2.t0.emit.call(_context2.t0, 'messages', _context2.t1);
								socket.on(
									'new-message',
									/*#__PURE__*/ (function () {
										var _ref2 = _asyncToGenerator(
											/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(msg) {
												var response;
												return _regeneratorRuntime().wrap(function _callee$(_context) {
													while (1) {
														switch ((_context.prev = _context.next)) {
															case 0:
																_context.next = 2;
																return (0, _factory.saveMsg)(msg);
															case 2:
																response = _context.sent;
																return _context.abrupt('return', response);
															case 4:
															case 'end':
																return _context.stop();
														}
													}
												}, _callee);
											})
										);
										return function (_x2) {
											return _ref2.apply(this, arguments);
										};
									})()
								);
							case 7:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2);
			})
		);
		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})()
);
app.get(
	'/',
	/*#__PURE__*/ (function () {
		var _ref3 = _asyncToGenerator(
			/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(req, res, next) {
				var fileData;
				return _regeneratorRuntime().wrap(
					function _callee3$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.prev = 0;
									_context3.next = 3;
									return (0, _mensajes.getAllControllerMsg)();
								case 3:
									fileData = _context3.sent;
									//console.log(fileData);
									res.render('index', {
										fileData: fileData
									});
									_context3.next = 11;
									break;
								case 7:
									_context3.prev = 7;
									_context3.t0 = _context3['catch'](0);
									console.log(_context3.t0);
									next(_context3.t0);
								case 11:
								case 'end':
									return _context3.stop();
							}
						}
					},
					_callee3,
					null,
					[[0, 7]]
				);
			})
		);
		return function (_x3, _x4, _x5) {
			return _ref3.apply(this, arguments);
		};
	})()
);
app.post('/', _mensajes.saveMsgController);
var numsCPUs = _os['default'].cpus().length;
var puerto = _index2.args.puerto || 8080,
	modo = _index2.args.modo;
if (modo === 'cluster' && _cluster['default'].isPrimary) {
	_index3.infoLogger.info('Cantidad de nucleos del sistema: '.concat(numsCPUs));
	_index3.infoLogger.info('PID MASTER: '.concat(process.pid));
	_index3.warnLogger.warn('PID MASTER: '.concat(process.pid));
	_index3.errorLogger.error('PID MASTER: '.concat(process.pid));
	for (var i = 0; i < numsCPUs; i++) {
		_cluster['default'].fork();
	}
	_cluster['default'].on('exit', function (worker, code) {
		_index3.infoLogger.info('Worker '.concat(worker.process.pid, ' with code ').concat(code));
		_cluster['default'].fork();
	});
} else {
	(0, _database.initDb)();
	_index3.infoLogger.info('conenctado a la db');
	httpServer.listen(puerto, function () {
		_index3.infoLogger.info(
			' PID WORKER '
				.concat(process.pid, ' Servidor express escuchando en el puerto ')
				.concat(puerto)
		);
	});
	app.use(function (err, req, res, next) {
		var status = err.status || 500;
		var message = err.message || 'Internal Server Error';
		res.status(status).json({
			message: message
		});
	});
}

// tiempo de sesion
var ttlSeconds = 600;
var StoreOptions = {
	store: _connectMongo['default'].create({
		mongoUrl: _index2['default'].MONGO_ATLAS,
		autoRemove: 'Interval',
		autoRemoveInterval: 600,
		// tiempo que se borra la sesion
		crypto: {
			secret: _index2['default'].CRYPTO_SECRET //las info queda encriptada en la base
		}
	}),

	secret: _index2['default'].SECRET_STRING,
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: ttlSeconds * 1000
	}
};

const PORT = 8080;

app.use('/docs', _swaggerUiExpress['default'].serve, _swaggerUiExpress['default'].setup(specs));
app.use(_express['default']['static']('public'));
app.use((0, _expressSession['default'])(StoreOptions));
app.use(_passport['default'].initialize());
app.use(_passport['default'].session());
_passport['default'].use('login', _auth.loginFunc);
_passport['default'].use('signup', _auth.signUpFunc);
var viewsFolderPath = _path['default'].resolve(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', viewsFolderPath);
app.use(_express['default'].json());
app.use(
	_express['default'].urlencoded({
		extended: true
	})
);
app.use('/api', _index['default']);
