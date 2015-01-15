require([
    '$api/models',
    'libs/js/cover-example',
    'libs/js/share-buttons'
], function (models, coverExample, buttonExample) {
    coverExample.doCoverForAlbum();
    coverExample.doCoverForAlbum1();
    coverExample.doCoverForAlbum2();
    coverExample.doCoverForAlbum3();
    coverExample.doCoverForAlbum4();
    coverExample.doCoverForAlbum5();
    coverExample.doCoverForAlbum6();
    coverExample.doCoverForAlbum7();

    buttonExample.doShareButtonForArtist();
    buttonExample.doSubscribeButton();

    buttonExample.doShareButtonForArtist1();
    buttonExample.doSubscribeButton1();

    buttonExample.doShareButtonForArtist2();
    buttonExample.doSubscribeButton2();

    buttonExample.doShareButtonForArtist3();
    buttonExample.doSubscribeButton3();

    buttonExample.doShareButtonForArtist4();
    buttonExample.doSubscribeButton4();

    buttonExample.doShareButtonForArtist5();
    buttonExample.doSubscribeButton5();

    buttonExample.doShareButtonForArtist6();
    buttonExample.doSubscribeButton6();

    buttonExample.doShareButtonForArtist7();
    buttonExample.doSubscribeButton7();

});
