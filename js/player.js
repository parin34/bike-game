class Player {

    constructor() {
        this.name = null;
        this.distance = 0;
        this.rank = 0;
        this.index = null;
        this.xPos = 0
    }
    getCount() {
        database.ref("playerCount").on("value", (data) => {
            playerCount = data.val()
        })
    }
    update() {
        var playerRef = "players/player" + this.index
        database.ref(playerRef).set({

            name: this.name,
            distance: this.distance,
            rank: this.rank,
            xPos :this.xPos
        })

    }
    static updatebikeAtEnd() {
        database.ref("/").update({
            bikeAtEnd: bikeAtEnd + 1
        })
        this.rank +=1
    }
    getbikeAtEnd() {
        database.ref("bikeAtEnd").on("value", (data) => {
            bikeAtEnd = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    static getPlayerinfo() {

        database.ref("players").on("value", (data) => {
            allPlayers = data.val()
        })
    }

   

   
}