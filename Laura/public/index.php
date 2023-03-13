<?php
require __DIR__ . '/../app/src/app.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gylė - tapyti rankų darbo gaminiai</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=PT+Sans&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>
    <link rel="stylesheet" href="../app/css/normalize.css">  
    <link rel="stylesheet" href="../app/css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" defer></script>
    <script src="js/custom.js" defer></script>
</head>
<body>
    <header class="site-header">
        <div class="header-container flex-container">
            <div class="logo">
                <a href="http://www.gyle.lt" target="_blank">
                    <img src="../app/image/gylelogo.png" alt="Gylė logotipas">
                 </a>
            </div>
        <nav class="header-nav">
            <ul class="flex-container">
                <li><a href="https://www.facebook.com/tase.medziagine" target="_blank"><i class="bi bi-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="bi bi-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                <li><a href="#" target="_blank"><i class="bi bi-rss"></i></a></li>
            </ul>
        </nav>
        </div>
    </header>
    <nav class="content-nav">
        <div class="content-nav-container flex-container">
             <ul class="flex-container">
                <li><a href="#">Pradžia</a></li>
                <li><a href="#">Gaminiai</a></li>
                <li><a href="#">Nuotraukos</a></li>
                <li><a href="#">Apie mus</a></li>
                <li><a href="#">Bendraukime</a></li>
             </ul>
        </div>
        <div class="search">
            <input type="search" class="search-bar" placeholder="Paieška">
            <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></button>
        </div>  
    </nav>
    <div class="center">
        <div class="center-container">
            <h1>SVEIKINAME UŽSUKUS Į GYLĖS NAMUS!</h1> 
            <p>Čia Jūsų laukia jaukūs, tekstilės meistro sukurti, dailininko palytėti rankų darbo gaminiai.</p>  
        </div>
    </div>
    <section class="services">
        <div class="container">
            <div class="section-heading">
            <h2>Gaminame rankines, pagalvėles, mažus proginius paveikslėlius</h2>
            <p>Rankų darbo siūtiems ir tapytiems gaminiams naudojame tekstilinius audinius</p>
            </div>
        </div>
        <div class="section-content flex-container">
            <div class="service">
                 <a href="#" target="_blank"><img src="../app/image/tasyte.jpg" alt="tašytė"></a>
                 <h3>Tašytės</h3>
                 <p>Medžiaginės, rankų darbo, tapytos rankinės</p>
            </div>
            <div class="service">
                <a href="#" target="_blank"><img src="../app/image/pagalve.jpg" alt="pagalve"></a>
                <h3>Pagalviukai</h3>
                <p>Rankų darbo, tapytos dekoratyvinės pagalvėlės</p>  
            </div>
            <div class="service">
                <a href="#" target="_blank"><img src="../app/image/paveikslas.jpg" alt="paveikslas"></a>
                <h3>Paveiksliukai</h3>
                <p>Tapyti proginiai paveikslėliai</p>  
            </div>
        </div>
        <section class="gallery">
			<div class="gallery-container">
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/zuvisbig.jpg">
						<img src="../app/image/tasytezuvis.jpg" alt="Nuotrauka">
					</a>
				</div>
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/tasyte2big.jpg">
						<img src="../app/image/tasyte2.jpg" alt="Nuotrauka">
					</a>
				</div>
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/zirafabig.jpg">
						<img src="../app/image/pagalvezirafa.jpg" alt="Nuotrauka">
					</a>
				</div>
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/suobig.jpg">
						<img src="../app/image/pagalvesuo.jpg" alt="Nuotrauka">
					</a>
				</div>
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/justmariedbig.jpg">
						<img src="../app/image/pavjustmaried.jpg" alt="Nuotrauka">
					</a>
				</div>
				<div class="col">
					<a data-fancybox="gallery1" href="../app/image/vestuvesbig.jpg">
						<img src="../app/image/pavvestuves.jpg" alt="Nuotrauka">
					</a>
				</div>	
                <div class="col">
					<a data-fancybox="gallery1" href="../app/image/kaukoletasyte.jpg">
						<img src="../app/image/kaukolesamall.jpg" alt="Nuotrauka">
					</a>
				</div>	
                <div class="col">
					<a data-fancybox="gallery1" href="../app/image/dramblysbig.jpg">
						<img src="../app/image/dramblyssmall.jpg" alt="Nuotrauka">
					</a>
				</div>	
                <div class="col">
					<a data-fancybox="gallery1" href="../app/image/madebig.jpg">
						<img src="../app/image/madesmall.jpg" alt="Nuotrauka">
					</a>
				</div>	
                <div class="col">
					<a data-fancybox="gallery1" href="../app/image/damosbig.jpg">
						<img src="../app/image/damossmall.jpg" alt="Nuotrauka">
					</a>
				</div>	
			</div>
		</section>
    <section class="about">
        <div class="container">
        <h2>APIE MUS</h2>
        <p>GyLės namuose tvarkomės dviese. Džiaugiamės laiko patikrinta draugyste ir dešimtmetį perkopusiu bendru kūrybiniu darbu. GyLės namai sujungė mūsų patirtį – vienos saviveiklinį meną siūti, kitos profesionalų gebėjimą piešti. Mūsų kūriniuose susipynusi dailė ir meistrystė lėmė jų išskirtinumą ir populiarumą tarp savitumą mėgstančių žmonių. Prisijunkite prie GyLės namų lankytojų, išsirinkite širdžiai mielą kūrinį, būkite ypatingi!</p>
        </div>
    </section>
     <section class="contact">
        <div class="container">
            <div class="heading">
                <h2>BENDRAUKIME</h2>
                <p>Patiko mūsų gaminukai? Norite su mumis susisiekti, užpildykite žemiau esančią formą, pabendrausime!</p>
            </div>
            <div class="section-content">
                <form class="contact-form" action="index.php" method="post">
                    <div class="input-row">
                        <input type="text" name="vardas" placeholder="Jūsų vardas*" required autofocus>
                        <input type="email" name="email" placeholder="Jūsų el. paštas*" required>
                    </div>
                    <textarea name="message" rows="8" placeholder="Jūsų laiškas" required></textarea>
                    <input type="submit" class="btn btn-form" name="submit">
                </form>
                </div>
            </div>
        </div>
    </section>
    <footer>
    <div class="container">
        <p>&copy; <?php echo date('Y');?> Visos teisės saugomos</p>
        <a href="tel:+37065582669">+370 000 11111</a>
    </div>
</footer>

</body>
</html>