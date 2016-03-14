var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('parse empty url-list', function (t) {
  var torrent = parseTorrentFile(fixtures.leavesEmptyUrlList.torrent)
  t.deepEqual(torrent.urlList, [])
  t.end()
})
