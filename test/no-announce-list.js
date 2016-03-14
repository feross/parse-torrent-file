var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('parse torrent with no announce-list', function (t) {
  t.deepEquals(parseTorrentFile(fixtures.bitloveIntro.torrent), fixtures.bitloveIntro.parsedTorrent)
  t.end()
})
