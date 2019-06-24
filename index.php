<?php

require_once __DIR__ . '/vendor/autoload.php';

$smarty              = new Smarty();
$smartyDirsThemePath = __DIR__ . '/source/';

$smarty ->setTemplateDir($smartyDirsThemePath . 'templates')
        ->setCompileDir( $smartyDirsThemePath . 'templates_c')
        ->setCacheDir(   $smartyDirsThemePath . 'cache')
        ->setConfigDir(  $smartyDirsThemePath . 'config');

//** раскомментируйте следующую строку для отображения отладочной консоли
// $smarty->debugging = true;


$url                = "http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
$urlParse           = parse_url($url);
$urlPath            = $urlParse['path'];
$urlPathExplode     = explode('/', $urlPath);
$urlPageLevel0Name  = $urlPathExplode[1];


switch ($urlPageLevel0Name) {
    case 'about':
        $pageDirName = 'about';
        break;
    default:
        $pageDirName = 'home';
        break;
}

// global vars
$smarty->assign('name', 'Alex');

require_once __DIR__ . '/source/templates/page/' . $pageDirName . '/index.php';

$smarty->display('entrypoint.tpl');
