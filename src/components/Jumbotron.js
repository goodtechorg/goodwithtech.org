import React from "react"

const Jumbotron = () => (
	<div class="jumbotron fortags">	
		<div class="d-flex h-100">
			<div class="col-md-4 align-self-center text-center h-100">
				<div class="d-flex align-items-center justify-content-center h-100">
					<h2 class="d-md-block d-none align-self-center">Explore →</h2>
				</div>
			</div>
			<div class="col-md-8 align-self-center text-center">
			{/* {{ range $name, $taxonomy := .Site.Taxonomies.causes }}
				<a href="{{ "/causes/" | relLangURL }}{{ $name | urlize }}">{{ $name }}</a>
			{{ end }} */}
			</div>
		</div>
	</div>
  );

export default Jumbotron;