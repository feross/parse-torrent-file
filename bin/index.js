var ArgumentParser = require('argparse').ArgumentParser

var packageInfo = require('../package')
var parseTorrentFile = require('../')

var argparser = new ArgumentParser({
  addHelp: true,
  description: packageInfo.description,
  version: packageInfo.version
})

var subcommands = argparser.addSubparsers({
  dest: 'subcommand'
})

subcommands.addParser('decode', {
  description: 'Read a torrent from STDIN and print out the parsed JSON',
  addHelp: true
})

subcommands.addParser('encode', {
  description: 'Read JSON from STDIN and print the torrent file to STDOUT',
  addHelp: true
})

var argv = argparser.parseArgs()
var buffer = []

process.stdin.on('readable', function () {
  var chunk = process.stdin.read()
  if (chunk) buffer.push(chunk)
})

process.stdin.on('end', function () {
  var torrent
  buffer = Buffer.concat(buffer)
  if (buffer.length === 0) {
    process.exit(1)
  }
  switch (argv.subcommand) {
    case 'decode':
      try {
        torrent = parseTorrentFile.decode(buffer)
      } catch (err) {
        console.error(err.message)
        process.exit(1)
      }
      console.log(JSON.stringify(torrent))
      break
    case 'encode':
      try {
        torrent = parseTorrentFile.encode(JSON.parse(buffer.toString()))
      } catch (err) {
        console.error(err.message)
        process.exit(1)
      }
      process.stdout.write(torrent)
  }
})
