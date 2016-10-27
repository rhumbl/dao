/* requires and exposes the separate components of the app */

var dao = window.dao || {};

//dao = require('./src/dao.js');
dao = require('./dist/dao.js');

// make dao available globally
window.dao = dao;
global.dao = dao;

export default dao
module.exports = dao;
