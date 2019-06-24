
{*********************************************************
Multi line comment block with credits block
  @ author:         bg@example.com
  @ maintainer:     support@example.com
  @ para:           var that sets block style
  @ css:            the style output
**********************************************************}

<html>
    <head>
        <title>{$title}</title>
        <link rel="stylesheet" href="/source/styles/common.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>

        {include file='./parts/header/index.tpl'}

        <hr>

        {include file=$page}

        <hr>

        {include file='./parts/footer/index.tpl'}

        <script src="/source/scripts/common.min.js"></script>
    </body>
</html>
