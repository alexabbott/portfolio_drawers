			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 25, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.TorusKnotGeometry( 10, 3, 16, 100 );
			var material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
			var cube = new THREE.Mesh( geometry, material );

			scene.add( cube );

			camera.position.z = 35;

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render(scene, camera);
			};

			

			window.addEventListener( 'resize', function () {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight )
			}, false );


			render();