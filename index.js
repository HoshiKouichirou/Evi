$(function() {
  var score = 0;
  var point = 1;
  var index = 0;
  var enemy = 0;
  function scoreup() {
    $(".score").text(score += point)//スコアカウント
  }
  function gamestart() {
    for (var i = 0; i < 10; i++) {
      if (i < 5) {
        $(".enemies").append("<div class='enemy-left " + i + " '></div>")
      }
      else {
        $(".enemies").append("<div class='enemy-right " + i + " '></div>")
      }
    }
  }
  function enemymotion() {
    var enemyselector = 0
    //Math.floor(Math.random() * Math.floor(10))
    if (enemyselector < 5) {
      $("."+ enemyselector +"").toggleClass("left");
    }
    else {
      $("."+ enemyselector +"").toggleClass("right");
    }

  }
  function enemyposition() {
    var enemyarray = [
      $(".0").position(),
      $(".1").position(),
      $(".2").position(),
      $(".3").position(),
      $(".4").position(),
      $(".5").position(),
      $(".6").position(),
      $(".7").position(),
      $(".8").position(),
      $(".9").position()
    ]
    for (var n = 0; n < 10; n++) {
      let pos = enemyarray[n]
      enemyhit(pos);
    }
    // console.log(enemy0);
  }
  function enemyhit(enemyX) {
    // console.log('~~~')
    console.log(enemyX)
    var enemyoutX = enemyX.left;
    var hitboxoutY = hitboxY + 160;
    var enemyX = enemyX.left + 50;
    var hitboxY = $(".hitbox").position().left;

    // console.log('enemyX',Math.floor(enemyX));
    // console.log('enemyY',enemyY);
    if(hitboxY <= Math.floor(enemyX) &&  hitboxoutY >= enemyoutX){
      console.log("hit")
    }

  }
  function gameover() {
    console.log("over")
    $(".p-start").text("GAME OVER");
    $(".restart").toggleClass("remove");
    $(".p-start").toggleClass("p-start");
    $(".start").toggleClass("remove");
    $(".start").toggleClass("start");//ゲームオーバー処理
  }
  function gameclear() {
    console.log("clear")
    $(".p-start").text("GAME CLEAR");
    $(".restart").toggleClass("remove");
    $(".p-start").toggleClass("p-start");
    $(".start").toggleClass("remove");
    $(".start").toggleClass("start");//ゲームクリア処理
  }
  function result() {//ゲームリザルト
    console.log("re")
    clearInterval(point);
    if(score > 600000){
      gameclear()
    }
    else {
      gameover()
    }
  }
  // function restart() {
  //   score = 0
  //   index = 0
  //   $(".play").toggleClass("start");
  //   $(".p-play").toggleClass("p-start");
  //   $(".restart").toggleClass("remove");　後回し
  //   $(".p-play").text("START");
  //
  // }
  // $(".restart").click(function() {
  //   restart()
  //   console.log("hi")
  // })
  $(".p-start").click(function() {
    if (index === 0) {
      index = 1;
      $(".start").toggleClass("remove");
      var point = setInterval(scoreup, 1);
      var depot = setInterval(enemymotion, 5000);
      // setInterval(enemyhit(enemy0), 1)
      setInterval(enemyposition, 1000.0 / 60.0);
      gamestart();
    }
  });
  $(".buy").click(function() {
    result()
    console.log("good")
  })
  $(".hide").click(function() {

  })
}())



var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );
