<?php
require __DIR__ . '/lib/cb.inc.php';
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/26
 * Time: 7:47
 */
$name = $_POST["id"];
if(isset($_POST['exit'])) {
    header("location: index.php");
    exit;
}
if(isset($_POST['newgame'])){
    header("location: codebreaker.php?name=".$name);
}
if(isset($_POST['giveup'])){
    header("location: codebreaker.php?name=".$name);
}
/*if(isset($_POST['shuffle'])){
    $view  = new GameView();
    $form = $view->present();
    echo json_encode(array('ok' => true,'form' => $form));
}*/



