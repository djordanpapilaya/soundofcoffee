require([
    '$api/models',
    '$views/buttons'
], function(models, buttons) {
    'use strict';

    var doShareButtonForArtist = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:38SWFBJSOgSfZgWZJVXYRX');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton').appendChild(share.node);
    };
    var doSubscribeButton = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:38SWFBJSOgSfZgWZJVXYRX');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton').appendChild(subscribe.node);
    };

    var doShareButtonForArtist1 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:4rd41878peuuyp7Yik2K3x');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton1').appendChild(share.node);
    };
    var doSubscribeButton1 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:4rd41878peuuyp7Yik2K3x');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton1').appendChild(subscribe.node);
    };

    var doShareButtonForArtist2 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:29ZMAZJTei14IHEXalYuVj');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton2').appendChild(share.node);
    };
    var doSubscribeButton2 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:29ZMAZJTei14IHEXalYuVj');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton2').appendChild(subscribe.node);
    };

    var doShareButtonForArtist3 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:0PLeUzvkh1UDCurYkFt9bb');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton3').appendChild(share.node);
    };
    var doSubscribeButton3 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:0PLeUzvkh1UDCurYkFt9bb');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton3').appendChild(subscribe.node);
    };

    var doShareButtonForArtist4 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:3HTEZ02lta3ozqkNY6LRJC');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton4').appendChild(share.node);
    };
    var doSubscribeButton4 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:3HTEZ02lta3ozqkNY6LRJC');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton4').appendChild(subscribe.node);
    };

    var doShareButtonForArtist5 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:0CYX9VDIUCFFG1DPsGoyWH');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton5').appendChild(share.node);
    };
    var doSubscribeButton5 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:0CYX9VDIUCFFG1DPsGoyWH');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton5').appendChild(subscribe.node);
    };

    var doShareButtonForArtist6 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:2tW5CPrvIbhKzv5uoJaUzu');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton6').appendChild(share.node);
    };
    var doSubscribeButton6 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:2tW5CPrvIbhKzv5uoJaUzu');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton6').appendChild(subscribe.node);
    };

    var doShareButtonForArtist7 = function() {
        var artist = models.Artist.fromURI('spotify:user:soundofcoffee:playlist:1KFBBieZdKDSOI6nbglrXa');
        var share = buttons.ShareButton.forArtist(artist);
        document.getElementById('shareButton7').appendChild(share.node);
    };
    var doSubscribeButton7 = function(){
        var playlist = models.Playlist.fromURI('spotify:user:soundofcoffee:playlist:1KFBBieZdKDSOI6nbglrXa');
        var subscribe = buttons.SubscribeButton.forPlaylist(playlist);
        document.getElementById('subscribeButton7').appendChild(subscribe.node);
    };

    exports.doShareButtonForArtist = doShareButtonForArtist;
    exports.doSubscribeButton = doSubscribeButton;

    exports.doShareButtonForArtist1 = doShareButtonForArtist1;
    exports.doSubscribeButton1 = doSubscribeButton1;

    exports.doShareButtonForArtist2 = doShareButtonForArtist2;
    exports.doSubscribeButton2 = doSubscribeButton2;

    exports.doShareButtonForArtist3 = doShareButtonForArtist3;
    exports.doSubscribeButton3 = doSubscribeButton3;

    exports.doShareButtonForArtist4 = doShareButtonForArtist4;
    exports.doSubscribeButton4 = doSubscribeButton4;

    exports.doShareButtonForArtist5 = doShareButtonForArtist5;
    exports.doSubscribeButton5 = doSubscribeButton5;

    exports.doShareButtonForArtist6 = doShareButtonForArtist6;
    exports.doSubscribeButton6 = doSubscribeButton6;

    exports.doShareButtonForArtist7 = doShareButtonForArtist7;
    exports.doSubscribeButton7 = doSubscribeButton7;
});