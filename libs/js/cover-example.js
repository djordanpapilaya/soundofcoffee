require([
    '$api/models',
    '$views/image#Image'
], function (models, Image) {
    'use strict';

    var doCoverForAlbum = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:38SWFBJSOgSfZgWZJVXYRX';
        var image = Image.fromSource('libs/img/americano.jpg', {width: 200, height: 200, link: 'americano.html', player: true});
        document.getElementById('albumCoverContainer').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };

    var doCoverForAlbum1 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:4rd41878peuuyp7Yik2K3x';
        var image = Image.fromSource('libs/img/cappucino.jpg', {width: 200, height: 200, player: true, link: 'cappucino.html'});
        document.getElementById('albumCoverContainer1').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };
    var doCoverForAlbum2 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:29ZMAZJTei14IHEXalYuVj';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/espresso.jpg', {width: 200, height: 200, player: true, link: 'expresso.html'});
        document.getElementById('albumCoverContainer2').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };

    var doCoverForAlbum3 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:0PLeUzvkh1UDCurYkFt9bb';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/lattemachiatto.jpg', {width: 200, height: 200, player: true, link: 'macciato.html'});
        document.getElementById('albumCoverContainer3').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };

    var doCoverForAlbum4 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:3HTEZ02lta3ozqkNY6LRJC';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/frappucino.jpg', {width: 200, height: 200, player: true, link: 'frappucino.html'});
        document.getElementById('albumCoverContainer4').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };
    var doCoverForAlbum5 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:0CYX9VDIUCFFG1DPsGoyWH';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/icedcoffee.jpg', {width: 200, height: 200, player: true, link: 'iced.html'});
        document.getElementById('albumCoverContainer5').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };
    var doCoverForAlbum6 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:2tW5CPrvIbhKzv5uoJaUzu';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/irishcoffee.jpg', {width: 200, height: 200, player: true, link: 'irish.html'});
        document.getElementById('albumCoverContainer6').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };
    var doCoverForAlbum7 = function () {
        var albumUri = 'spotify:user:soundofcoffee:playlist:1KFBBieZdKDSOI6nbglrXa';
        var album = models.Album.fromURI(albumUri);
        var image = Image.fromSource('libs/img/mexicancoffee.jpg', {width: 200, height: 200, player: true, link: 'mexican.html'});
        document.getElementById('albumCoverContainer7').appendChild(image.node);
        image.setDraggable(false);
        image.setPlayer(true);
    };

    exports.doCoverForAlbum = doCoverForAlbum;
    exports.doCoverForAlbum1 = doCoverForAlbum1;
    exports.doCoverForAlbum2 = doCoverForAlbum2;
    exports.doCoverForAlbum3 = doCoverForAlbum3;
    exports.doCoverForAlbum4 = doCoverForAlbum4;
    exports.doCoverForAlbum5 = doCoverForAlbum5;
    exports.doCoverForAlbum6 = doCoverForAlbum6;
    exports.doCoverForAlbum7 = doCoverForAlbum7;
});
