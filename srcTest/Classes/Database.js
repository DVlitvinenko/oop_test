"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database(url, port, username, password) {
        this._tables = [];
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
    }
    Database.prototype.createNewTables = function (table) {
        this._tables.push(table);
    };
    Object.defineProperty(Database.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    return Database;
}());
exports.default = Database;
