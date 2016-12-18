import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

export default class Disque extends React.Component {


	componentDidMount() {

		var disqus_config = function () {
			this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		(function() { // DON'T EDIT BELOW THIS LINE
			var d = document, s = d.createElement('script');
			s.src = '//vizjust-tw.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();

	}

	render() {
		return (
			<div id="disqus-container">
				<div id="disqus_thread">
				</div>
				<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
			</div>
			

		)
	}
	
}