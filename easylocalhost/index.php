<?php $dir = 'easylocalhost/'; ?>
<?php
function ob_html_compress($buf){
	return str_replace(array("\n","\r","\t"),'',$buf);
}
ob_start("ob_html_compress");
?>
<!DOCTYPE HTML>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
	<title>Easy Localhost</title>
	<meta name="description" content="A beautiful and useful theme for localhost.">
	<meta name="author" content="Victor Camargo - contato@victorcamargo.com.br">
	<meta name="keywords" content="Easy Localhost, easylocalhost">
	<meta name="language" content="pt-br">
	<meta name="revisit-after" content="1 days">
	<meta name="document-classification" content="Internet Services">
	<meta name="document-rights" content="Public">
	<meta name="document-rating" content="General">
	<meta name="document-state" content="Dynamic">
	<meta name="Page-Topic" content="List all projects.">
	<meta name="robots" content="INDEX, FOLLOW">
	<meta http-equiv="Content-Language" content="PT-BR">
	<meta http-equiv="cleartype" content="on">

	<!-- CSS-->
	<link rel="stylesheet" href="<?= $dir ?>css/bootstrap.css">
	<link rel="shortcut icon" href="<?= $dir ?>favicon.ico">
	
	<script src="<?= $dir ?>js/modernizr-2.6.2-min.js"></script>

</head>
<body>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<img class="logo img-responsive" src="<?= $dir ?>img/logo.png">
				</div>
				<div class="col-sm-4 col-md-5">
					<div class="search">
						<input type="text" id="search" placeholder="Search">
						<br><p>Total projects: <span class="total"></span></p>
					</div>
				</div>
				<div class="col-sm-5 col-md-4">
					<div class="buttons">
						<button type="button" class="orderByName">ORDER BY <strong>NAME</strong></button>
						<button type="button" class="orderByDate active">ORDER BY <strong>DATA</strong></button>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<nav>
					<?php
					$files = glob( '*' );
					$exclude_files = array('.', '..', 'index.php', 'easylocalhost');
					if (!in_array($files, $exclude_files)) {
						array_multisort(
							array_map( 'filemtime', $files ),
							SORT_NUMERIC,
							SORT_DESC,
							$files
							);
					}
					$i = -1;
					foreach ($files as $file) {
						if (!in_array($file, $exclude_files)) {
							echo '<a href='.$file.' rel='.$i.' >'.'<p>'.utf8_encode($file).'</p>';
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
				<div class="development">
					Copyright © 2013 <a href="http://www.victorcamargo.com.br" target="_blank">Victor Camargo</a>. All rights reserved. 
					<a href="https://github.com/VictorCamargo/Easy-Localhost" target="_blank">GitHub</a> Project.<br>
					Easy Localhost v2.0.0
				</div>
			</div>
		</div>
	</div>
	<script src="<?= $dir ?>js/jquery-1.10.2.min.js"></script>
	<script src="<?= $dir ?>js/script.min.js"></script>
	<script src="<?= $dir ?>js/plugins/fastlivefilter/jquery.fastLiveFilter.js"></script>
</body>
</html>
<?php
ob_end_flush();
?>