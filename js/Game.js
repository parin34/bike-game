class Game {

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val()
        })

    }
    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    start() {

        if (gameState === 0) {
            player = new Player()
            player.getCount();
            form = new Form()
            form.display();
        }
        b1 = createSprite(440, 3250);
        b1.addImage("b1", bike1)
        b2 = createSprite(300, 3290);
        b2.addImage("b2", bike2)
        b3 = createSprite(450, 3290);
        b3.addImage("b3", bike3)
        bike = [b1, b2, b3]
        passedFinish = false;
    }

    play() {

        form.Hide();

        Player.getPlayerinfo();
        player.getbikeAtEnd();

        if (allPlayers != undefined) {
            var index = 0;
            background(groundimage)
            image(backimage, 150, -displayHeight * 3.9, displayWidth, displayHeight * 5);

            var index = 0;
            var x = 180;
            var y;

            for (var plr in allPlayers) {

                index = index + 1;
                x = x + 400;
                y = displayHeight - allPlayers[plr].distance;
                bike[index - 1].x = x;
                bike[index - 1].y = y;

                if (index === player.index) {
                    fill("red");
                    camera.position.x = displayWidth / 2
                    camera.position.y = bike[index - 1].y;
                }
                else {
                    fill("blue")
                }
                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name, bike[index - 1].x + 10, bike[index - 1].y - 100);

            }
        }

        if (player.distance < 500) {
            if (keyIsDown(38) && player.index !== null) {
                yVel = yVel + 0.9;
                if (keyIsDown(37)) {
                    xVel = xVel - 0.2;
                }
                if (keyIsDown(39)) {
                    xVel += 0.2;
                }
            } else if (keyIsDown(38) && yVel > 0 && player.index !== null) {
                yVel = yVel - 0.1;
                xVel = xVel * 0.9;
            } else {
                yVel *= 0.985;
                xVel *= 0.985;
            }
        } else if (passedFinish === false) {
            yVel *= 0.7;
            xVel *= 0.7;
            Player.updatebikeAtEnd();
            player.rank = bikeAtEnd;

            player.update();
            passedFinish = true;
        } else {
            yVel *= 0.8;
            xVel *= 0.8;
        }

        //move the car
        player.distance += yVel;
        yVel *= 0.98;
        player.xPos += xVel;
        xVel *= 0.985;
        player.update();
        //display sprites
        drawSprites();
    }






}
