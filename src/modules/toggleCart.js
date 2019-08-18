export default function toggleCart() {
  const btnCart = document.getElementById("cart");
  const modalCart = document.querySelector(".cart");
  const btnClose = document.querySelector(".cart-close");

  btnCart.addEventListener("click", () => {
    modalCart.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  btnClose.addEventListener("click", () => {
    modalCart.style.display = "none";
    document.body.style.overflow = "";
  });

  modalCart.addEventListener("click", function (e) {
    if (this === e.target) {
      modalCart.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}