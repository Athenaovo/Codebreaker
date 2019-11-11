<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/26
 * Time: 6:38
 */

namespace Code;


class loginView
{

    public function present()
    {
        $html = <<<HTML
<form id="signin" method="post" action ="login-post.php">
  <fieldset>
    <p><img src="images/banner.png" width="521" height="346" alt="Codebreaker Banner"></p>
    <p>Welcome to Codebreaker!</p>
    <p><label for="name">Your Name: </label>
      <input type="text" name="name" id="name"></p>
HTML;
        if (isset($_GET['e'])) {
            $html .= '<p class="gripe">Please enter a name!</p>';
        }
        $html .= <<<HTML

    <p><input type="submit" value="Start Game"></p>
  </fieldset>
</form>
HTML;

        return $html;
    }
}