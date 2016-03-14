var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

test('parse torrent with empty announce-list', function (t) {
  t.deepEquals(parseTorrentFile(fixtures.leavesEmptyAnnounceList.torrent).announce, ['udp://tracker.publicbt.com:80/announce'])
  t.end()
})
