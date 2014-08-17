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
