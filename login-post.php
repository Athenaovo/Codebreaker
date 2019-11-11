<?php
require __DIR__ . '/lib/cb.inc.php';
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/26
 * Time: 3:37
 */
if($_POST['name']!=null) {
    $name = $_POST['name'];
    header("location: codebreaker.php?name=".$name);
    exit;
}
else{
    header("location: index.php?e");
    exit;
}