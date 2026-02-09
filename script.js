let currentPhoto = 1;

function goToPage(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + n).classList.add('active');
}

function askSure() {
  document.getElementById('sureText').innerText = "Are you sure? 😏";
}

function openBouquet() {
  const bouquet = document.getElementById("bouquet");
  bouquet.style.opacity = "1";
  bouquet.style.top = "0px";
  setTimeout(() => {
    document.getElementById("bouquetText").style.display = "block";
  }, 1000);
}

function openGift(n) {
  document.getElementById("gift" + n).style.display = "block";
  if (n === 1) loadPhoto();
}

function loadPhoto() {
  document.getElementById("slider").src = `photos/photo${currentPhoto}.jpg`;
  document.getElementById("song").src = `music/${currentPhoto}.mp3`;

  if (currentPhoto === 6) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("endBtn").style.display = "inline";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("endBtn").style.display = "none";
  }
}

function nextPhoto() {
  currentPhoto++;
  loadPhoto();
}

function closeGift() {
  document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  currentPhoto = 1;
}