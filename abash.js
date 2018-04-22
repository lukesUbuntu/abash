"use strict";
exports.__esModule = true;
var abash = /** @class */ (function () {
    /**
     * constructor
     * @param cipher string
     * @param deciphers tring
     */
    function abash(cipher, decipher) {
        if (cipher.length != decipher.length) {
            throw new Error('cipher string & decipher string must be the same string length');
        }
        else {
            this.decipher_array = [];
            this.cipher_array = [];
            for (var i = 0, chr = void 0; i < cipher.length; i++) {
                var c = cipher.charAt(i);
                this.cipher_array.push(c);
            }
            for (var i = 0, chr = void 0; i < decipher.length; i++) {
                var c = decipher.charAt(i);
                this.decipher_array.push(c);
            }
        }
    }
    /**
     * decipher
     * @param encrypted string
     */
    abash.prototype.decipher = function (encrypted) {
        //only decrypt whats in our cipher
        var cipher = "";
        for (var i = 0, chr; i < encrypted.length; i++) {
            var char = encrypted.charAt(i);
            var dechar = this.decipher_array.indexOf(char);
            if (dechar > -1) {
                cipher += this.cipher_array[dechar];
            }
            else {
                cipher += char;
            }
        }
        return cipher;
    };
    return abash;
}());
exports.abash = abash;
