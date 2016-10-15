/* requires and exposes the separate components of the app */

var dao = window.dao || {};

dao = require('./src/dao.js');

// make dao available globally
window.dao = dao;
global.dao = dao;

module.exports = dao;
