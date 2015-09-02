<?php
$dir = 'localtheme/';

$phpVersion = explode('.', PHP_VERSION);

// Select folders and remove restricted files/folders
$files = array_diff(glob( '*' ), array('.', '..', 'index.php', 'localtheme', 'README.md', 'robots.txt'));

// Create associative array with dateformat and folders name
foreach ($files as $key => $file) {
	$list[] = array('file' => utf8_encode($file), 'date' => @date("d/m/Y", filemtime($file)), 'date_format' => @date("Y-m-d G:i:s", filemtime($file)) );
}

$list = json_encode($list);
?>

<html ng-app="ltApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
	<title>LocalTheme</title>
	<meta name="description" content="LocalTheme is a beautiful and useful theme for localhost.">
	<meta name="author" content="Victor Camargo - contato@victorcamargo.com.br">
	<meta name="keywords" content="LocalTheme">
	<meta name="language" content="pt-br">
	<meta name="revisit-after" content="1 days">
	<meta name="document-classification" content="Internet Services">
	<meta name="document-rights" content="Public">
	<meta name="document-rating" content="General">
	<meta name="document-state" content="Dynamic">
	<meta name="Page-Topic" content="List all projects">
	<meta name="robots" content="INDEX, FOLLOW">
	<meta http-equiv="Content-Language" content="PT-BR">
	<meta http-equiv="cleartype" content="on">
	<link rel="shortcut icon" href="<?php echo $dir ?>assets/img/favicon.ico">

	<link rel="stylesheet" href="<?php echo $dir ?>assets/css/bootstrap.min.css">

</head>
<body style="display: none;" ng-controller="ProjectListCtrl" ng-init="byDate=true">
	<header>
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-md-3">
					<div class="logo"><span>L</span>ocal<span>T</span>heme</div>
				</div>
				<div class="col-sm-3 hidden-xs">
					<ul class="info">
						<li>PHP: <span><?php echo $phpVersion[0] . '.' . $phpVersion[1]; ?></span></li>
						<li>MySQL: <span><?php echo mysql_get_client_info(); ?></span></li>
						<li>Apache: <span><?php echo apache_get_version(); ?></span></li>
					</ul>
				</div>
				<div class="col-sm-5 col-md-6">
					<div class="buttons">
						<span>ORDENAR POR: </span>
						<button type="button" ng-class="(byName) ? 'active' : '' " ng-click="reverse=false;order('file', false);byName=true;byDate=false;">NOME</button>
						<button type="button" ng-class="(byDate) ? 'active' : '' " ng-click="reverse=!reverse;order('date_format', reverse);byName=false;byDate=true;">DATA</button>
						<a href="/phpmyadmin" target="_blank" class="phpMyAdmin">phpMyAdmin</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="search">
						<input type="text" id="search" placeholder="Buscar projeto" ng-model="search">
						<p class="hidden-xs">Total: <span class="total">{{projetos.length}}</span></p>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<nav class="list">
						<a ng-repeat="projeto in (filteredItems = (projetos | filter: search))" href="{{projeto.file}}" ng-class="($index == 0) ? 'active' : '' ; ">
							<p>{{projeto.file}}</p>
							<span>{{projeto.date}}</span>
						</a>
					</nav>
					<div class="line"></div>
					<div class="development">
						Copyright © 2015 <a href="https://github.com/victorcamargo" target="_blank">Victor Camargo</a>. All rights reserved.
						<a href="https://github.com/VictorCamargo/LocalTheme" target="_blank">GitHub</a> Project.<br>
						LocalTheme - 3
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript">
		var list = <?php echo $list; ?>;
	</script>
	<script src="<?php echo $dir ?>assets/js/jquery-1.10.2.min.js"></script>
	<script src="<?php echo $dir ?>assets/js/angular.min.js"></script>
	<script src="<?php echo $dir ?>assets/js/modernizr-2.6.2-min.js"></script>
	<script src="<?php echo $dir ?>assets/js/app.js"></script>
	<!-- <script src="//192.168.25.160:35001/livereload.js"></script> -->
</body>
</html>
