<?php $dir = 'localtheme/'; ?>
<!doctype html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Easy Localhost</title>
	<meta name="description" content="">
	<meta name="author" content="Raddar Online">
	<meta name="keywords" content="">
	<meta name="language" content="pt-br">
	<meta http-equiv="Content-Language" content="PT-BR">
	<meta name="revisit-after" content="1 days">
	<meta name="document-classification" content="Internet Services">
	<meta name="document-rights" content="Public">
	<meta name="document-rating" content="General">
	<meta name="document-state" content="Dynamic">
	<meta name="Page-Topic" content="Assunto principal da página">
	<meta name="robots" content="INDEX, FOLLOW">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
	<meta http-equiv="cleartype" content="on">

	<!-- CSS-->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet/less" href="<?= $dir ?>less/bootstrap.less">
	<link rel="stylesheet/less" href="<?= $dir ?>less/responsive.less">
	<link rel="shortcut icon" href="<?= $dir ?>favicon.ico">

	<!-- MAIN JS -->
	<script src="<?= $dir ?>js/libs/less-1.3.3.min.js"></script>
	<script src="<?= $dir ?>js/libs/modernizr-2.6.2-min.js"></script>

</head>
<body>
	<header>
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span3">
					<img class="logo" src="<?= $dir ?>img/logo.png">
				</div>
				<div class="span5">
					<div class="search">
						<input type="text" id="search" placeholder="Search">
						<br><p>Total projects: <span class="total"></span></p>
					</div>
				</div>
				<div class="span4 buttons">
					<button type="button" class="orderByName">ORDER BY <strong>NAME</strong></button>
					<button type="button" class="orderByDate active">ORDER BY <strong>DATA</strong></button>
				</div>
			</div>
		</div>
	</header>
	<br>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<nav>
					<?php
					$files = glob( '*' );
					$exclude_files = array('.', '..', 'index.php', 'localtheme');
					if (!in_array($files, $exclude_files)) {
						array_multisort(
							array_map( 'filemtime', $files ),
							SORT_NUMERIC,
							SORT_DESC,
							$files
							);
					}
					$i = -1;
					foreach($files as $file){
						if (!in_array($file, $exclude_files)) {
							echo '<a href='.$file.' rel='.$i.' >'.'<p>'.$file.'</p>';
							if (file_exists($file)) {
								echo '<span>'. date ("d/m/Y", filemtime($file)) .'</span>';
							}
							echo '</a>';
						}
						$i++;
					}
					?>
				</nav>
				<div class="line"></div>
				<div class="development">Copyright © 2013 <span>Victor Camargo</span>. All rights reserved. </div>
			</div>
		</div>
	</div>
	<script src="<?= $dir ?>js/libs/jquery-1.9.1.min.js"></script>
	<script src="<?= $dir ?>js/script.js"></script>
	<script src="<?= $dir ?>js/plugins/fastlivefilter/jquery.fastLiveFilter.js"></script>
	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>