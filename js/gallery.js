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
      let oldCurrent = document.querySelector("#gallery-thumbs > div.current");
      if (oldCurrent !== null) {
        oldCurrent.classList.remove("current");
      }
      this.parentNode.classList.toggle("current");
    });
  });

  // first select
  thumbnails[0].click();
}
