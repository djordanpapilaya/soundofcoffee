require([
  '$api/models',
  '$views/list#List'
], function(models, List) {
  'use strict';

  var doPlaylistForAlbum = function() {
    var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:38SWFBJSOgSfZgWZJVXYRX');
    var list = List.forAlbum(album, {minItemsForScroll: 5});
    document.getElementById('playlistContainer').appendChild(list.node);
      list.init();
  };

    var doPlaylistForAlbum1 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:4rd41878peuuyp7Yik2K3x');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer1').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum2 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:29ZMAZJTei14IHEXalYuVj');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer2').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum3 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:0PLeUzvkh1UDCurYkFt9bb');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer3').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum4 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:3HTEZ02lta3ozqkNY6LRJC');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer4').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum5 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:0CYX9VDIUCFFG1DPsGoyWH');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer5').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum6 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:2tW5CPrvIbhKzv5uoJaUzu');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer6').appendChild(list.node);
        list.init();
    };

    var doPlaylistForAlbum7 = function() {
        var album = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:1KFBBieZdKDSOI6nbglrXa');
        var list = List.forAlbum(album, {minItemsForScroll: 5});
        document.getElementById('playlistContainer7').appendChild(list.node);
        list.init();
    };
    doPlaylistForAlbum();
    doPlaylistForAlbum1();
    doPlaylistForAlbum2();
    doPlaylistForAlbum3();
    doPlaylistForAlbum4();
    doPlaylistForAlbum5();
    doPlaylistForAlbum6();
    doPlaylistForAlbum7();
});

require(['$views/throbber#Throbber'], function(Throbber) {

    var tracks = document.getElementById('playlistContainer');
    var throbber = Throbber.forElement(tracks);
    // (wait for tracks to load and render)
    throbber.hide();

});
