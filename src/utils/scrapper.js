const request = require('request');
const tableToJson = require('tabletojson').Tabletojson;
const xray = require('x-ray')();

module.exports.getSite = function getSite(url) {
    return new Promise(function(resolve, reject) {
        request.get(url, function(err, response, body) {
            if (err) {
                return reject(err);
            }
            if (response.statusCode >= 400) {
                return reject(new Error('An error occurred!'));
            }
            xray(body, ['table@html'])(function (err, tableListInHtml) {
                if (err) {
                    return reject(err);
                }
                resolve(tableListInHtml.map(function(table) {
                    return tableToJson.convert('<table>' + table + '</table>')[0];
                }));
            });
        })
    });
};
