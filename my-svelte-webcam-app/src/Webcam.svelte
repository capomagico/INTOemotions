<script>
    let videoElement;
  
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };
  
    onMount(() => {
      startWebcam();
    });
  </script>
  
  <style>
    .webcam-box {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 aspect ratio */
    }
    
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  
  <div class="webcam-box">
    <video bind:this={videoElement} autoplay playsinline></video>
  </div>
