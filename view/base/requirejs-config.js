/* see http://devdocs.magento.com/guides/v2.0/javascript-dev-guide/javascript/requirejs_concept.html */
/* add custom error handler to 'require' object */
var config = {};
require.onError = function issue12428ErrorHandler(e) {
    console.error("RequireJS Error (issue 12428)", e);
}