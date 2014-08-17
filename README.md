# Social Media Share Plugin
======================

A simple and easy to use Social Media Share Plugin. 

## DEMO
--------

[Social Media Share plugin](http://demos.nitishkumarsingh.com/share-plugin/).


## HOW TO USE
---------------

#### HTML 

 ```
 	<div class="nks-wrap">
		<div class="nks-container">
			<a href="put your url here" class="nks-btn nks-facebook" title="Facebook" data-nks-name="Facebook"></a>

			<a href="put your url here" class="nks-btn nks-google" title="Google+" data-nks-name="Google"></a>

			<a href="put your url here" class="nks-btn nks-linkedin" title="Linkedin" data-nks-name="Linkedin"></a>

			<a href="put your url here" class="nks-btn nks-twitter" title="Twitter" data-nks-name="Twitter" 
			data-nks-title="put your page title"></a>

			<a href="put your url here" class="nks-btn nks-tumblr" title="Tumblr" data-nks-name="Tumblr" data-nks-title="put your page title"></a>
		</div>
	</div>

 ```

#### CSS

  Add this in css file.

 ```
 	
	.nks-btn {
		display: inline-block;
		margin: 0px 5px 5px 0;
		width: 50px;
		height: 50px;
		padding: 3px;
		background-image: url('nks-social.png');
		border-radius: 10px;
	}
	.nks-facebook{
		background-position: 778px -2px;
		background-color: #3B5976;
	}
	.nks-facebook:hover{ 
		background-color: #4e69a2;
	}
	.nks-google {
		background-position: 660px -2px;
		background-color: #E74C3C;
	}
	.nks-google:hover {
		background-color: #e95d4f;
	}
	.nks-linkedin {
		background-position: 598px -4px;
		background-color: #007FB1;
	}
	.nks-linkedin:hover {
		background-color:#198bb8;
	}
	.nks-twitter {
		background-position: 300px -2px;
		background-color: #00ACED;
	}
	.nks-twitter:hover {
		background-color: #19b4ee;
	}
	.nks-tumblr {
		background-position: 355px -2px;
		background-color: #2C4762;
	}
	.nks-tumblr:hover {
		background-color: #415971;
	}

 ```

####  JS 

Add this in js file.	
 
 ```
 var social  = document.getElementsByClassName("nks-container")[0];
if(social) {
	social.onclick = function (event, data) {
	event.preventDefault();

		if(event.target.dataset.nksName) {
			var data = {
				    name: event.target.dataset.nksName,
				    title: event.target.dataset.nksTitle,
				    href: event.target.href

			}, shareUrl, title;

			if (data['name'] == 'Facebook') {
				shareUrl = "http://www.facebook.com/sharer.php?u=" + data['href'];		
			} else if (data['name'] == 'Google') {
				shareUrl = "https://plus.google.com/share?url=" + data['href'];		
			} else if (data['name'] == 'Linkedin') {
				shareUrl = "http://www.linkedin.com/shareArticle?mini=true&url=" + data['href'];	
			} else if (data['name'] == 'Twitter') {
				title = data['title'] ? data['title'] : "";
				shareUrl = "http://twitter.com/share?url=" + data['href'] + '&text=' + title;	
			} else if (data['name'] == 'Tumblr') {
				title = data['title'] ? data['title'] : "";
				shareUrl = "https://www.tumblr.com/share?v=3&u=" + encodeURIComponent(data['href']) + '&t=' + title;	 		
			}	 

			var width  = 575,
			    height = 400,
			    left   = (window.innerWidth  - width)  / 2,
			    top    = (window.innerHeight - height) / 2,
			    opts   = 'status=1' +
			             ',width='  + width  +
			             ',height=' + height +
			             ',top='    + top    +
			             ',left='   + left;
		
			window.open(shareUrl, 'NKS', opts);
		}
	}

}

 ```

####  Facebook Meta tags 

 Add this meta tag into head section.	
 
 ```
    <meta property="og:title" content="Page Title"/>    
    <meta property="og:image" content="Image Url"/> // Which image you want show on share
    <meta property="og:url" content="Page URL" />
    <meta property="og:description" content="Page Content" />
 ```

####  Google+ Meta tags 

 Add this meta tag into head section.	
 
 ```
    <meta itemprop="name" content="Page Title">
	<meta itemprop="description" content="Page Content">
	<meta itemprop="image" content="Image Url"/> // Which image you want show on share
 ```
