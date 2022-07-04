// search
document.querySelector(".header__search").addEventListener("click", function() {
    document.querySelector(".header-form").classList.add("header-form__active");
    this.classList.add("active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header-form");
  
    if (!target.closest(".header__container")) {
    form.classList.remove("header-form__active");
      form.querySelector("input").value = "";
      document.querySelector(".header__search").classList.remove("active")
    }
  })

//   burger

document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".burger").classList.add("burger-active");
  })
  document.querySelector(".burger__btn").addEventListener("click", function() {
    document.querySelector(".burger").classList.remove("burger-active");
  })
// burger

  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector("body").classList.add("body-burger");
  })
  document.querySelector(".burger__btn").addEventListener("click", function() {
    document.querySelector("body").classList.remove("body-burger");
  })

// form 

new JustValidate('.about__form', {
    rules: {
        },
        mail: {
            required: true,
            email: true
        }
    }
)

