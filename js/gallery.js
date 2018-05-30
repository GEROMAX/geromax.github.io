function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Preload large images.
      new Image().src = thumbnail.dataset.largeVersion;

      // main image set
      let mainImage = document.querySelector("#gallery-photo > img");
      mainImage.setAttribute("src", this.dataset.largeVersion);
      mainImage.setAttribute("alt", this.getAttribute("alt"));

      // description set
      document.querySelector("#gallery-info > h3").innerHTML = this.dataset.title;
      document.querySelector("#gallery-info > p").innerHTML = this.dataset.description;

      // toggle current
      let currentClass = "current";
      let oldCurrent = document.querySelector(`#gallery-thumbs > div.${currentClass}`);
      if (oldCurrent !== null) {
        oldCurrent.classList.remove(currentClass);
      }
      this.parentNode.classList.toggle(currentClass);
    });
  });

  // first select
  thumbnails[0].click();
}
