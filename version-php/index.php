<?php @include "../db.php"; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <!-- GOOGLE FONTS -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">
        <!-- JQUERY -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- Include Handlebars from a CDN -->
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <!-- STYLE -->
        <link rel="stylesheet" href="../dist/app.css">
        <title>PHP Dischi</title>
    </head>
    <body>
        <header>
            <h1>PHP DISCHI</h1>
        </header>

        <main>
            <div class="container">

                <div class="filter">
                    <select id="filter-genre">
                        <option value="">-- ALL --</option>
                        <?php foreach ($genres as $genre) { ?>
                            <option value="<?php echo $genre ?>">
                                <?php echo $genre ?>
                            </option>
                            <?php
                        } ?>
                    </select>
                </div>

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

        <script id="box-template" type="text/x-handlebars-template">
            <div class="card">
                <img src=" {{ poster }} " alt="{{ title }}">
                <p>{{ title }}</p>
                <p>{{ author }}</p>
                <p>{{ genre }}</p>
                <p>{{ year }}</p>
            </div>
        </script>



        <script src="../dist/app.js" charset="utf-8"></script>

    </body>
</html>
