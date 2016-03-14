var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('encode', function (t) {
  var parsedTorrent = parseTorrentFile(fixtures.leaves.torrent)
  var buf = parseTorrentFile.encode(parsedTorrent)
  var doubleParsedTorrent = parseTorrentFile(buf)

  t.deepEqual(doubleParsedTorrent.infoBuffer, parsedTorrent.infoBuffer)
  t.equal(doubleParsedTorrent.created.getDate(), parsedTorrent.created.getDate())
  t.deepEqual(doubleParsedTorrent.announce, parsedTorrent.announce)

  t.end()
})
