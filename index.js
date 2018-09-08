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
