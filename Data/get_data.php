<?php
  $data = $_POST['test'];
  
  $file = 'testlog.txt';
  file_put_contents($file, $data . "\r\n", FILE_APPEND | LOCK_EX);
  
?>
