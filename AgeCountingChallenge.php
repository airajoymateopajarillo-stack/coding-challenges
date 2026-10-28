
<?php

// __define-ocg__ and __define-pcb__: Count ages greater than or equal to 50.
$url = "https://coderbyte.com/api/challenges/json/age-counting";

$response = file_get_contents($url);
$varOcg = json_decode($response, true);
$varFiltersCg = 0;

preg_match_all('/age=(\d+)/', $varOcg["data"], $varPcb);

foreach ($varPcb[1] as $age) {
    if ((int)$age >= 50) {
        $varFiltersCg++;
    }
}

echo $varFiltersCg;

?>




