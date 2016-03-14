var parseTorrentFile = require('../')
var test = require('tape')
var fixtures = require('webtorrent-fixtures')

var expectedAnnounce = [
  'http://tracker.example.com/announce'
]

test('dedupe announce list', function (t) {
  t.deepEqual(parseTorrentFile(fixtures.leavesDuplicateTracker.torrent).announce, expectedAnnounce)
  t.end()
})
