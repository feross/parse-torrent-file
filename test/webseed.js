var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('parse url-list for webseed support', function (t) {
  var torrent = parseTorrentFile(fixtures.leavesUrlList.torrent)
  t.deepEqual(torrent.urlList, [ 'http://www2.hn.psu.edu/faculty/jmanis/whitman/leaves-of-grass6x9.pdf' ])
  t.end()
})

test('encode url-list for webseed support', function (t) {
  var parsedTorrent = parseTorrentFile(fixtures.leavesUrlList.torrent)
  var buf = parseTorrentFile.encode(parsedTorrent)
  var doubleParsedTorrent = parseTorrentFile(buf)
  t.deepEqual(doubleParsedTorrent.urlList, [ 'http://www2.hn.psu.edu/faculty/jmanis/whitman/leaves-of-grass6x9.pdf' ])
  t.end()
})
