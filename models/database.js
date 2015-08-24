var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5434/poller';

var client = new pg.Client(connectionString);
client.connect();
client.query('CREATE TABLE polls(pk_guid text PRIMARY KEY, question_name text not null)');


var query = client.query('CREATE TABLE options(pk_option SERIAL, GUID text not null, option_name text not null, PRIMARY KEY(pk_option))');
    query.on('end', function() { client.end(); });
