<?php @include "db.php"; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <!-- GOOGLE FONTS -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">
        <!-- STYLE -->
        <link rel="stylesheet" href="dist/app.css">
        <title>PHP Dischi</title>
    </head>
    <body>
        <header>
            <h1>PHP DISCHI</h1>
        </header>

        <main>
            <div class="container">
                <div class="box-card">
                    <?php foreach ($dischi as $disco) { ?>
                        <div class="card">
                            <img src="<?php echo $disco["poster"] ?> " alt="<?php $disco["title"] ?>">
                            <p> <?php echo $disco["title"] ?> </p>
                            <p> <?php echo $disco["author"] ?> </p>
                            <p> <?php echo $disco["genre"] ?> </p>
                            <p> <?php echo $disco["year"] ?> </p>
                        </div>
                        <?php
                    } ?>
                </div>
            </div>
        </main>

    </body>
</html>
