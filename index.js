$(function() {
  var score = 0;
  var point = 1;

  function scoreup() {
    $(".score").text(score += point)//スコアカウント
  }
  function gameover() {
    console.log("over")
    $(".p-start").text("GAME OVER");
    $(".p-start").remove();
    $(".start").toggleClass("remove");
    $(".start").toggleClass("start");//ゲームオーバー処理
  }
  function gameclear() {
    console.log("clear")
    $(".p-start").text("GAME CLEAR");
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
  $(".p-start").click(function() {
    $(".start").toggleClass("remove");
    var point = setInterval(scoreup, 1);
  });
  $(".buy").click(function() {
    result()
    console.log("good")
  })
}())
