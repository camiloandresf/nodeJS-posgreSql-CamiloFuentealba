"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsersbyId = exports.updateUsersbyId = exports.createUser = exports.getUsersbyId = exports.getUsers = void 0;
const database_1 = require("../database");
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('Internal Server error');
    }
});
exports.getUsersbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json('user not exists');
    }
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, username } = req.body;
        const response = yield database_1.pool.query('INSERT INTO users (name,age,username) VALUES($1, $2, $3)', [name, age, username]);
        return res.status(200).json({
            message: 'User created Successfully'
        });
    }
    catch (e) {
        return res.status(500).json('Internal Server error');
    }
});
exports.updateUsersbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        const { name, age, username } = req.body;
        console.log(name, age, username);
        const response = yield database_1.pool.query('UPDATE users SET name= $1 , age= $2, username = $3 WHERE id = $4', [name, age, username, id]);
        console.log(response);
        return res.status(200).json('User ' + id + ' update Successfully');
    }
    catch (e) {
        return res.status(500).json('user not exists');
    }
});
exports.deleteUsersbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).json('User ' + id + ' deleted Successfully');
    }
    catch (e) {
        return res.status(500).json('user not exists');
    }
});
