$(function() {
  var score = 0,
      point = 1,
      index = 0,
      enemy = 0,
      hide = false,
      test = 0,
      enemyarray = [];

  function scoreup() {
    $(".score").text(Math.floor(score += point));//スコアカウント
    if(score <= 0){
      gameover();
    }
  }
  function gamestart() {

    $(".start").toggleClass("remove");
    var point = setInterval(scoreup, 1);
    var depot = setInterval(enemymotion, 3000);
    setInterval(enemyposition, 1)

    for (var i = 0; i < 10; i++) {
      if (i < 5) {
        $(".enemies").append("<div class='remove enemy-left " + i + " '></div>")
      }
      else {
        $(".enemies").append("<div class='remove enemy-right " + i + " '></div>")
      }
          $("."+ i).toggleClass("remove");
    }
  }
  function enemymotion() {
    var enemyselector = Math.floor(Math.random() * Math.floor(10));
    if (enemyselector < 5) {
      $("."+ enemyselector +"").addClass("left");
    }
    else {
      $("."+ enemyselector +"").addClass("right");
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
      enemyhit(pos, n);
      if (n < 5 && pos.left >= 825) {
        $("." + n).removeClass("left")
      }
      else if (n < 10 && pos.left <= -125){
        $("." + n).removeClass("right")
      }
    }
    return enemyarray
  }
  function enemyhit(enemyX, e) {
    var enemyoutX = enemyX.left;
    var enemyX = enemyX.left + 50;
    var hitboxY = $(".hitbox").position().left;
    var hitboxoutY = hitboxY + 160;
    if(hitboxY <= Math.floor(enemyX) &&  hitboxoutY >= enemyoutX && !hide){
      score -= 3
      console.log("hit");
    }
  }
$(window).keydown(function(e){
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 67:
    point = 0.1
    hide = true;
      break;
    default:

  }
})
$(window).keyup(function(e){
  switch (e.keyCode) {
    case 67:
    point = 1;
    hide = false;
      break;
      case 88:
        if(index === 1){
          result();
        }
        break;
      case 32:
      if(index === 0){
        index = 1;
        gamestart();
      }
        break;
    default:


  }
})

  function gameover() {
    console.log("over")
    $(".p-start").text(Math.floor(score - 10000)+ "円の損");
    $(".restart").toggleClass("remove");
    $(".p-start").toggleClass("p-start");
    $(".start").toggleClass("remove");
    $(".start").toggleClass("start");//ゲームオーバー処理
  }
  function gameclear() {
    console.log("clear")
    $(".p-start").text(Math.floor(score - 10000) + "円のおつり" );
    $(".restart").toggleClass("remove");
    $(".p-start").toggleClass("p-start");
    $(".start").toggleClass("remove");
    $(".start").toggleClass("start");//ゲームクリア処理
  }
  function result() {//ゲームリザルト
    console.log("re")
    clearInterval(point);
    $(".start-info").addClass("remove")
    $(".enemy-left").addClass("remove")
    $(".enemy-right").addClass("remove")
    if(score > 10000){
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
  // $(".p-start").click(function() {
  //   if (index === 0) {
  //     index = 1;
  //     $(".start").toggleClass("remove");
  //     var point = setInterval(scoreup, 1);
  //     var depot = setInterval(enemymotion, 3000);
  //     gamestart();
  //     setInterval(enemyposition, 1)
  //     console.log(enemyposition());
  //   }
  // });
  $(".buy").click(function() {
    result()
    console.log("good")
  })
  $(".hide").click(function() {

  })
}())



// var stats = new Stats();
// stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild( stats.dom );
//
// function animate() {
//
// 	stats.begin();
//
// 	// monitored code goes here
//
// 	stats.end();
//
// 	requestAnimationFrame( animate );
//
// }
//
// requestAnimationFrame( animate );
