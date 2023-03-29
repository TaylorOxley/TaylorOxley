<script>
		const carousel = document.querySelector('.carousel');
		let isDown = false;
		let startX;
		let scrollLeft;

		carousel.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - carousel.offsetLeft;
			scrollLeft = carousel.scrollLeft;
			carousel.classList.add('active');
		});

		carousel.addEventListener('mouseleave', () => {
			isDown = false;
			carousel.classList.remove('active');
		});

		carousel.addEventListener('mouseup', () => {
			isDown = false;
			carousel.classList.remove('active');
		});

		carousel.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - carousel.offset

            <script>
  page('/', function() {
    // code to execute when the user navigates to the home page
  });
  
  page('/women', function() {
    // code to execute when the user navigates to the women page
  });

  page('*', function() {
  // code to execute when the user navigates to an undefined URL
});

page();

  
  page();
</script>