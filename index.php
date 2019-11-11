<?php
require 'lib/cb.inc.php';
$view = new Code\loginView();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<!--    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="site.con.js"></script>-->
  <meta charset="UTF-8">
  <title>Codebreaker Signin</title>
  <link href="codebreaker.css" type="text/css" rel="stylesheet"/>
<!--    <script>
        $(document).ready(function() {
            new Stars("form");
        });
    </script>-->
</head>
<body>
<?php
echo $view->present();

?>

</body>
</html>