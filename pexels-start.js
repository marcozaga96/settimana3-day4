const pexelsImage = function () {
  fetch("https://api.pexels.com/v1/search?query=panorama", {
    headers: {
      Authorization: "0tCaN3WKKmb2Re63tCAZDyfJgyqFq211ZaizmG51p0yPKLnLeaQLNnBC",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((images) => {
      console.log(images);
      images.photos.forEach((image) => {
        console.log(image);
        const imageCol = `
        <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${image.src.medium}"
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${image.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
        const imageRow = document.getElementById("imageRow");
        imageRow.innerHTML += imageCol;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const changeImages1 = document.getElementById("changeImages1");
const changeImages2 = document.getElementById("changeImages2");

const btnImage = function () {
  fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
      Authorization: "0tCaN3WKKmb2Re63tCAZDyfJgyqFq211ZaizmG51p0yPKLnLeaQLNnBC",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((images) => {
      console.log(images);
      images.photos.forEach((image) => {
        console.log(image);
        const imageCol = `
          <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src="${image.src.medium}"
                    class="bd-placeholder-img card-img-top"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Lorem Ipsum</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">${image.id}</small>
                    </div>
                  </div>
                </div>
              </div>`;
        const imageRow = document.getElementById("imageRow");
        imageRow.innerHTML += imageCol;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
changeImages1.addEventListener("click", pexelsImage);
changeImages2.addEventListener("click", btnImage);

// const hide = document.getElementsByClassName("btn");
// const imageCol = document.getElementsByClassName("col-md-4");
// const canc = function () {
//   imageCol.classList.add("d-none");
// };
// hide.addEventListener("click", canc);
