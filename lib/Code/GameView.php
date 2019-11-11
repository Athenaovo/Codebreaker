<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/26
 * Time: 6:56
 */

namespace Code;


class GameView
{
    public function head(){
        $html = <<<HTML
  <meta charset="UTF-8">
  <link href="codebreaker.css" type="text/css" rel="stylesheet"/>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="site.con.js"></script>
  <title>Codebreaker</title>
HTML;
        $codes = new Codes();
        $code = $codes->getCode();
        $encode = $code['encoded'];
        $text = $code['plaintext'];
        $decode = json_encode($code['decode']);

        $html.= <<<HTML
<script>
$(document).ready(function() {
    new Code("form","$text","$encode", $decode );
});
</script> 
HTML;
        return $html;

    }
    public function present(){
        $name = $_GET['name'];
        $hidden = '<input type="hidden" name="id" value="' . $name . '">';
        $html = <<<HTML
<form id="gameform" method="post" action="game-post.php">
$hidden
  <fieldset>
    <h1>
HTML;

    $html .= $name. <<<HTML
's Codebreaker</h1>
    <h2>Encoded:</h2>
    <p class="code" id ="encode"></p>
    <h2>Decoded:</h2>
    <p class="code" id ="decode"></p>
    <table class="game" id="game">

    </table>
    <p class="end" id="end"></p>
    <p class="gripe" id="err"></p>
    <p><input type="button" name="shuffle" id="swap" value="Swap/Shuffle">
      <input type="submit" name="giveup" id="giveup" value="Give Up!">
      <input type="submit" name="newgame" id="newgame" value="New Game">
    </p>

    <p><input type="submit" name="exit" id ="exit" value="Exit"></p>
  </fieldset>
</form>
<p class="solution" id="solution"></p>"
HTML;

        return $html;
    }

}