'use strict';

const levelsArr = [];
/*
[x ] -> block
x == 0...5 -> hp
x == b -> bonus
*/

// LEVEL - 1
levelsArr.push([
/*  000 064 128 192 256 320 384 448 512 576 640 704 768 832 896 960 pixels */
/*   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | //_000 */
    '************************************************************',//_032
    '************************************************************',//_064
    '********[1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ]********',//_096
    '******[0 ][b ][0 ][0 ][b ][0 ][0 ][b ][0 ][0 ][b ][0 ]******',//_128
    '********[1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ]********',//_160
    '************************************************************',//_064
    '****[b ]********************************************[b ]****',//_096
    '**************[2 ][2 ][2 ][2 ][2 ][2 ][2 ][2 ]**************',//_128
    '************************************************************',//_160
    '************************************************************',//_096
    '************************************************************',//_128
    '************************************************************',//_160
    '************************************************************',//_096
    '************************************************************',//_128
]);

// LEVEL - 2
levelsArr.push([
/*  000 064 128 192 256 320 384 448 512 576 640 704 768 832 896 960 pixels */
/*   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   | //_000 */
    '************************************************************',//_032
    '**[0 ][1 ][2 ][2 ][b ][2 ][1 ][1 ][2 ][b ][2 ][2 ][1 ][0 ]**',//_064
    '****[1 ][2 ][3 ][4 ][5 ][4 ][b ][4 ][5 ][4 ][3 ][2 ][1 ]****',//_096
    '******[0 ][0 ][b ][0 ][b ][0 ][0 ][b ][0 ][b ][0 ][0 ]******',//_128
    '********[1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ][1 ]********',//_160
    '**********[1 ][2 ][3 ][4 ][5 ][5 ][4 ][3 ][2 ][1 ]**********',//_064
    '************[2 ][b ][2 ][b ][2 ][b ][2 ][b ][2 ]************',//_096
    '**************[2 ][2 ][2 ][2 ][2 ][2 ][2 ][2 ]**************',//_128
    '****************[1 ][1 ][1 ][1 ][1 ][1 ][1 ]****************',//_160
    '****[5 ][5 ]******[0 ][0 ][0 ][0 ][0 ][0 ]******[5 ][5 ]****',//_096
    '**[5 ][b ][5 ]********************************[5 ][b ][5 ]**',//_128
    '****[5 ][5 ]************************************[5 ][5 ]****',//_160
    '************************************************************',//_096
    '************************************************************',//_128
]);

function fillCanvas() {
    let level = levelsArr[currentLevel];
    let stepX = 16, stepY = 32;
    for (let yy = 0; yy < level.length; yy++) {
        for (let xx = 0; xx < level[yy].length; xx++) {
            if (level[yy][xx] === '[') {
                if (level[yy][xx + 1] === 'b')
                    // BonusBrick extends Brick (imageName, x, y, frameWidth, frameHeight, hp)
                    bricksArr.push( new BonusBrick('block-bonus-64x32-64f.png', xx * stepX, yy * stepY, 64, 32, 0) );
                else {
                    let hp = +level[yy][xx + 1];
                    if (hp >= 0 && hp < 6)
                        // Brick extends Sprite (imageName, x, y, frameWidth, frameHeight, hp)
                        bricksArr.push( new Brick('block-64x32-6f.png', xx * stepX, yy * stepY, 64, 32, hp) );
                }
            }
        }
    }
    // Platform extends Sprite (imageName, x, y)
    platform = new Platform('platform.png', Math.floor(vw / 2) - 96, vh - 64);
    // Ball extends Sprite (imageName, x, y)
    ballsArr.push( new Ball('ball.png', Math.floor(vw / 2) - 16, vh - 128) );
    // Background extends Sprite (imageName, x, y)
    let bgImagesArr = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];
    let bgImageNumber = Math.floor(Math.random() * bgImagesArr.length);
    background = new Background(bgImagesArr[bgImageNumber], 0, 0);
    ballsPower = 1;
    isGamePlay = true;
}