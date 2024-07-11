<script>
	import { onMount } from 'svelte';
  
	let video;
  
	async function startWebcam() {
	  video = document.querySelector('video');
	  try {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true });
		video.srcObject = stream;
	  } catch (err) {
		console.error('Error accessing webcam:', err);
	  }
	}
  
	onMount(() => {
	  startWebcam();
	});
  </script>
  
  <style>
	.webcam-container {
	  position: relative;
	  width: 100%;
	  padding-top: 56.25%; /* 16:9 Aspect Ratio */
	}
  
	video {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	}
  </style>
  
  <div class="webcam-container">
	<video autoplay playsinline></video>
  </div>
  