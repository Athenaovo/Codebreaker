<?php
require __DIR__ . "/../vendor/autoload.php";
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/26
 * Time: 3:38
 */

// Start the session system
session_start();
define("GAME_SESSION", "Code");
if(!isset($_SESSION["LOGIN_SESSION"])){
    $_SESSION["GAME_SESSION"] = new Code\Codebreaker();
}
$codebreaker = $_SESSION["GAME_SESSION"];