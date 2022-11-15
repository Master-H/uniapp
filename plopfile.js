/**
 * @file plop执行入口文件
 * @author huangxingyuan@baidu.com
 * @date 2021-11-08
 */

const fn = require('./scripts/add');

module.exports = function (plop) {
    plop.setGenerator('fn', fn);
};
