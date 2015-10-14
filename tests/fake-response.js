module.exports = {
  statusCode:404,
  body:{},
  status: function status(code) {
    this.statusCode = code;
    return this;
  },
  json: function status(data) {
    this.body = data;
    return this;
  }
};