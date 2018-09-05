$(function() {
  var point = 1;
  var score = 0;
  function scoreup() {
    $(".score").text(score += point)//スコアカウント
  }
  function gameover() {
    console.log("over")
    $(".p-start").text("GAME OVER")
    $(".start").toggleClass("remove");//ゲームオーバー処理
  }
  function gameclear() {
    console.log("clear")
    $(".p-start").text("GAME CLEAR")
    $(".start").toggleClass("remove");//ゲームクリア処理
  }
  function result() {//ゲームリザルト
    console.log("re")
    clearInterval(point);
    if(point < 600000){
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
