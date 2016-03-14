var bencode = require('bencode')
var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('parse single file torrent', function (t) {
  t.deepEquals(parseTorrentFile(fixtures.leaves.torrent), fixtures.leaves.parsedTorrent)
  t.end()
})

test('parse "torrent" from magnet metadata protocol', function (t) {
  t.deepEquals(parseTorrentFile(fixtures.leavesMagnet.torrent), fixtures.leavesMagnet.parsedTorrent)
  t.end()
})

test('parse multiple file torrent', function (t) {
  t.deepEquals(parseTorrentFile(fixtures.pride.torrent), fixtures.pride.parsedTorrent)
  t.end()
})

test('parse torrent from object', function (t) {
  var torrent = bencode.decode(fixtures.pride.torrent)
  t.deepEquals(parseTorrentFile(torrent), fixtures.pride.parsedTorrent)
  t.end()
})
