<?php
$size = 10;
$field = [];
require "app/karel.php";
$karel = new karel();

$commands = filter_input(INPUT_POST, 'commands');
if(!empty($commands)){
    $commands = explode("\n", $commands);
    foreach($commands as $command) {
        $tmp = explode(" ", $command);
        $cmd = $tmp[0];
        $prm = intval($tmp[1] ?? 1);
        switch($cmd){
            case "k";
                $karel->step($prm);
            break;
            case "v";
                $karel->turnLeft($prm);
            break;
            default;
        }
    }
}
