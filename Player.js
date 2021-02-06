class Player {
  constructor(){
    this.index = null;
    this.Y = 0;
    this.name = null;
    this.rank=0;
    this.X=0
  
  }

getRank(){
  var rankRef=database.ref('carsAddEnd')
  rankRef.on("value",(data)=>{
    this.rank=data.val()
  })

}

static updateRank(rank){
  database.ref('/').update({
    carsAddEnd:rank
  })
}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      
      X:this.X,
      Y:this.Y
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
