module.exports = {
  log: function (foo) {
    console.log(foo[0]);
  },

  format_date: function (date) {
    return date.toLocaleTimeString();
  },
};
