let calculator = {
  firstNumb: 0,
  secondNumb: 0,
  read: function(a, b) {
    this.firstNumb = a;
    this.secondNumb = b;
  },
  sum: function() {
    return this.firstNumb + this.secondNumb;
  },
  mul: function() {
    return this.firstNumb * this.secondNumb;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
