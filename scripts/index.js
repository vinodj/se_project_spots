// Edit Profile Elements
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

// New Post Elements
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Event Handler for the Edit Profile Button Click
editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

// Event Handler for the Edit Profile Button Close Click
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// Event Handler for the New Post Button Click
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

// Event Handler for the New Post Button Close Click
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
