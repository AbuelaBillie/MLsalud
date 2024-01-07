document.addEventListener('scroll', function () {
    const conocenosElement = document.querySelector('.conocenos');
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    // Ajusta el valor según sea necesario
    if (scrollPosition > 700) {
      conocenosElement.style.animationPlayState = 'running';
    }
  });