"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercício 1
var User =
/*#__PURE__*/
function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(email, pw) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, pw));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var admin = new Admin("luan@luandev.com.br", "123");
var user = new User("user@luandev.com.br", "321"); // console.log(user.isAdmin()); false
// console.log(admin.isAdmin()); true
// Exercício 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
var filtro = usuarios.filter(function (usuario) {
  return usuario.idade > 18 && usuario.empresa === "Rocketseat";
});
var encontrar = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
var calc = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
}); // Exercício 3

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; // console.log(mostraUsuario(nome, idade), mostraUsuario(nome));


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // Exercício 4


var empresa = {
  nomeEmp: 'Rocketseat',
  enderecoEmp: {
    cidadeEmp: 'Rio do Sul',
    estadoEmp: 'SC'
  }
};
var nomeEmp = empresa.nomeEmp,
    _empresa$enderecoEmp = empresa.enderecoEmp,
    cidadeEmp = _empresa$enderecoEmp.cidadeEmp,
    estadoEmp = _empresa$enderecoEmp.estadoEmp;

function showNameAndAge(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
} // console.log(showNameAndAge({nome: "Luan", idade: 19}));
// Exercício 5


var arr_nums = [1, 2, 3, 4, 5, 6];
var firstEl = arr_nums[0],
    restEls = arr_nums.slice(1); // console.log(firstEl, restEls);

function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (tot, next) {
    return tot + next;
  });
} // console.log(sum(10, 20, 30, 5));


var userDefault = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var u1 = _objectSpread({}, userDefault, {
  nome: 'Gabriel'
});

var u2 = _objectSpread({}, userDefault, {
  endereco: _objectSpread({}, userDefault.endereco, {
    cidade: 'Lontras'
  })
}); // console.log(u1, u2);
// Exercício 6
// console.log(`O usuário ${nome} possuí ${idade} anos.`);
// Exercício 7


var shortSyntaxObj = {
  nome: nome,
  idade: idade,
  cidade: "Guarulhos" // console.log(shortSyntaxObj);

};
