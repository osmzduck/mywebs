// Scroll down arrow animation
const scrollArrow = document.querySelector('.scroll-arrow');
const scrollCircle = document.querySelector('.scroll-circle');
scrollArrow.addEventListener('click', () => {
window.scroll
y({ top: window.
nnerHeight,
be
avio
window.addEventListener('scroll', () => {
if (window.scrollY >
) { scrollCircle.style.
pacity =
0; } else { scrollC
r
le.s
// Reveal sections on scroll
const sections = document.querySelectorAll('.section-reveal');
function revealSection(entries, observer) {
entries.forEach(entry
> { if (entry.isInt
rsecting) { entry.target.
l
ssL
st
const sectionObserver = new IntersectionObserver(revealSection, {
root: n
ll, thresho
d: 0
sections.forEach(section => {
sectionObserver.observe(secti
n);
// Certificate gallery preview
const certificateImages = document.querySelectorAll('.certificate img');
const certificatePreview = document.getElementById('certificate-preview');
const previewImage = certificatePreview.querySelector('img');
const closePreviewBtn = certificatePreview.querySelector('.close-preview');
certificateImages.forEach(image => {
image.addEventListener('click', ()
> { const imgSrc = image.getAttri
ute('src'); previewImage.setAttri
ute('src', imgSrc); certificatePre
iew
styl
closePreviewBtn.addEventListener('click', () => {
certificatePreview.style.display = 'no
e';
// Background particles animation
particlesJS('background-particles', {
particle
: {
number:

value: 50,
dens
t
:

enable:
ru
,
value_
rea: 800

} },

color: {

v
lu
: '#ffffff
},
shape:
{
type: 'c
rcle',
stroke:



width:
,
color
'#0000
0'
},
polygon: {



b_sides: 5
}
},
opacity: {
value: 0
5,

rand
m: false,
a
im: {
enable: fal
e,
speed: 1,
opa
ity_min: 0
1,
sync: fal
e
}


}, si
e: { val
e: 3,
ra
dom: true,
anim:


enable: fa
se,

speed: 4
,

s
ze_min: 0.1,

ync: false


}
},
line_l
nked: {
enab
e: true,

d
stance: 150,
col
r:
'#fffff
',
pa
ity: 0.4,
wid
h


}, mo
e: {
// Cursor trail effect
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;
let speed = 0.1;
function animate() {
let distX = mouseX - tra
lX; let distY = mouseY -
trailY; trailX += di
tX * speed; trailY +
distY * speed; cursorTrail.style.l
ft = trailX + 'px'; cursorTrail.st
le.top = trailY + 'px'; req
es
document.addEventListener('mousemove', (event) => {
mouseX = event.pa
eX; mouseY = even
.pag
animate();
// Confetti animation
const confettiSettings = {
target: 'confetti-canv
s', m
x: 100,
size: 1,
animate: true, props: ['circle', 'square',
triangle', 'line'], colors: [[165, 104, 246], [230, 61, 135], [0, 199,
228], [253
214, 126]],
clock: 25, rotate:
true, width: window.inn
rWidth, height: wi
dow.innerHeig
t,
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
// Interactive secret message
const interactiveLink = document.getElementById('interactive-link');
const interactiveOverlay = document.getElementById('interactive-overlay');
const interactiveContent = document.getElementById('interactive-content');
const typingEffect = document.getElementById('typing-effect');
const secretMessage = document.getElementById('secret-message');
const closeButton = document.getElementById('close-button');
const message = "Congratulations on finding the secret message! Keep exploring and unlocking new possibilities. The future is yours to shape.";
let index = 0;
let typingSpeed = 50;
function typeMessage() {
if (index < message.lengt
) { typingEffect.innerHTML += message.ch
rAt(inde
); index++; setTimeou
(typeMes
age, typingSpeed); } else { secretMessage.inner
TML = "You've unlo
k
d
interactiveLink.addEventListener('click', () => {
interactiveOverlay.style.display = 'blo
k'; interactiveContent.style.display =
block'; setTimeout(typeMes
age,
closeButton.addEventListener('click', () => {
interactiveOverlay.style.display = 'no
e'; interactiveContent.style.display =
'none'; typingEffect.inn
rHTML = ''; secretMessage
innerHTML
'';
// Secret game modal
const gameModal = document.getElementById('game-modal');
const decryptionKey = document.getElementById('decryption-key');
const decryptedMessage = document.getElementById('decrypted-message');
const modalConfettiCanvas = document.getElementById('modal-confetti-canvas');
const modalConfettiSettings = {
target: 'modal-confetti-canv
s', m
x: 100,
size: 1,
animate: true, props: ['circle', 'square',
triangle', 'line'], colors: [[165, 104, 246], [230, 61, 135], [0, 199,
228], [253
214, 126]],
clock: 25, rotate: true, wid
h: modalConfettiCanvas.offsetWidth, h
ight: modalConfettiCan
as.offsetHeig
t,
const modalConfetti = new ConfettiGenerator(modalConfettiSettings);
function openGameModal() {
gameModal.style.display = 'blo
k'
function closeGameModal() {
gameModal.style.display = 'no
e'; decryptionKey.val
e = ''; decryptedMessage.textC
ntent = ''; modalC
nf
function decryptMessage() {
const encryptedMessage = "Uif tfdsfu up tvddftt jt dpotjtufodz.";
const key = parseInt(decryptionKey.value);
    
    if (isNaN(key) || key < 1 || key > 25) {
    decryptedMessage.textContent = "Invalid decryption key. Please enter a number between 1 and 25.";
    return;
}

let decryptedText = '';
for (let i = 0; i < encryptedMessage.length; i++) {
    let charCode = encryptedMessage.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 - key + 26) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
        charCode = ((charCode - 97 - key + 26) % 26) + 97;
    }
    decryptedText += String.fromCharCode(charCode);
}

decryptedMessage.textContent = decryptedText;
modalConfetti.render();
