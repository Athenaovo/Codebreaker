<?php
require 'lib/cb.inc.php';

$view = new Code\GameView();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    echo $view->head();
    ?>
</head>
<body>
<?php
echo $view->present();
?>
</body>
</html>