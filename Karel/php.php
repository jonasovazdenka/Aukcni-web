<?php
require "app/init.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <main>
        <div>
            <form>
                <h1>Žůžový Kája ♥</h1>
                <fieldset>
                    <legend>Příkazy</legend>
                    <textarea rows="10"><?php echo $_POST ['commands'] ?></textarea>
                    <button>Proveď</button>
                </fieldset>
            </form>
            <div>
                <table>
                    <?php
                    require "app/gene-table.php";
                    ?>
                </table>
            </div>
        </div>
    </main>
</body>

</html>
