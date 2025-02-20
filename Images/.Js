let isFollowing = false;

function toggleFollow() {
  const followBtn = document.getElementById("follow-btn");
  isFollowing = !isFollowing;
  followBtn.textContent = isFollowing ? "Unfollow" : "Follow";
}

function sendMessage() {
  alert("You have sent a message to Jessica Potter!");
}