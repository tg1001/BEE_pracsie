const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./model/user');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

