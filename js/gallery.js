function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // main image set
      let mainImage = document.querySelector("#gallery-photo > img");
      mainImage.setAttribute("src", this.dataset.largeVersion);
      mainImage.setAttribute("alt", this.getAttribute("alt"));

      // description set
      document.querySelector("#gallery-info > p").innerHTML = this.getAttribute(
        "data-description"
      );

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
