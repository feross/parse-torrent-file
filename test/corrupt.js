var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('exception thrown when torrent file is missing `name` field', function (t) {
  t.throws(function () {
    parseTorrentFile(fixtures.corrupt.torrent)
  })
  t.end()
})
