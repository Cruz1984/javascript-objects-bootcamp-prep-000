var playlist = {};
var playlist = newObject();
var playlist = {artistnames: "songtitles"};
var playlist = newObject({ artistnames:'songtitles' })
var playlist = { artistnames:'songtitles', songtitles: 'songtitles' }
var playlist = { artistnames: 'songtitles', artist: 'songtitles'}
var playlist = { [artistnames]:'songnames' }
playlist.artistnames // 'songnames'
playlist['artistnames'] // 'songnames'
playlist[artistnames] // 'songnames'
playlist.artistnames // undefines
var playlist = {artistnames: 'songtitles'}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {obj[key]} = value
Object.assign({}, {artist: 'names' })
Object.assign({song:})
function updateObjectWithKeyAndValue(obj, key, value){
return Object.assign({}, obj, {[key]: value })}
updateObjectWithKeyAndValue(playlist, 'artist', 'song')
function updateObjectWithObject(targetsObject,updatesobject) {returnObject.assign({},targetobject,updateobject)}
playlist.nameartist = ["nameartist", "songnames"];