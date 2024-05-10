body, html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    overflow-x: hidden;
    cursor: none;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

header {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

header:hover {
    background-color: rgba(0, 0, 0, 0.3);
}

header::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
    transform: rotate(45deg);
    z-index: -1;
    opacity: 0;
    animation: headerGlow 3s ease-in-out infinite;
}

@keyframes headerGlow {
    0% {
        opacity: 0;
        transform: rotate(45deg) scale(0.8);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) scale(1.2);
    }
}

h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    opacity: 0;
    animation: fadeInDown 1s ease-in-out forwards;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transform: translateX(-50px);
    animation: fadeInLeft 1s ease-in-out forwards;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.scroll-down {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    animation: fadeInUp 1s ease-in-out forwards;
    animation-delay: 1s;
    z-index: 1000;
}

.scroll-circle {
    width: 40px;
    height: 40px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: scrollCircle 2s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.scroll-arrow {
    color: white;
    font-size: 24px;
    animation: scrollArrow 2s ease-in-out infinite;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate(-50%, 20px);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}

@keyframes scrollCircle {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

@keyframes scrollArrow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}

section {
    margin: 40px 0;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    position: relative;
    overflow: hidden;
}

section::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
}

section:hover::before {
    opacity: 1;
}

section.active {
    opacity: 1;
    transform: translateY(0);
}

.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.skill {
    background-color: rgba(255, 255, 255, 0.8);
    color: #2575fc;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 700;
    opacity: 0;
    transform: translateY(20px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
}

.skill:hover {
    background-color: #2575fc;
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.skill:nth-child(1) {
    transition-delay: 0.1s;
}

.skill:nth-child(2) {
    transition-delay: 0.2s;
}

.skill:nth-child(3) {
    transition-delay: 0.3s;
}

.skill:nth-child(4) {
    transition-delay: 0.4s;
}

section.active .skill {
    opacity: 1;
    transform: translateY(0);
}

.certificate-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
    perspective: 1000px;
}

.certificate {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 0;
    transform: rotateY(30deg) translateY(50px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    cursor: pointer;
}

.certificate:nth-child(1) {
    transition-delay: 0.1s;
}

.certificate:nth-child(2) {
    transition-delay: 0.2s;
}

.certificate:nth-child(3) {
    transition-delay: 0.3s;
}

.certificate:nth-child(4) {
    transition-delay: 0.4s;
}

section.active .certificate {
    opacity: 1;
    transform: rotateY(0) translateY(0);
}

.certificate img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease-in-out;
}

.certificate:hover img {
    transform: scale(1.1);
    cursor: pointer;
}

.certificate-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
}

.certificate:hover .certificate-overlay {
    opacity: 1;
    cursor: pointer;
}

.certificate-text {
    color: white;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 20px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

#certificate-preview-modal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.5s ease;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.modal-content {
    background-color: white;
    padding: 30px;
    width: 90%;
    max-width: 800px;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.8);
    transform: translateY(0);
    transition: transform 0.5s ease-out;
    position: relative;
}

.modal.show {
    display: flex;
    opacity: 1;
}

.modal-content.show {
    transform: translateY(0);
}

#certificate-preview-image {
    max-width: 100%;
    max-height: 80vh;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

#certificate-preview-image.show {
    opacity: 1;
    transform: scale(1);
}

.close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 28px;
    cursor: pointer;
    color: #aaa;
    transition: color 0.3s ease, transform 0.3s ease;
}

.close:hover {
    color: #333;
    transform: rotate(90deg);
}

form {
    display: grid;
    gap: 20px;
}

form input,
form textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #2575fc;
    font-size: 16px;
    font-weight: 700;
    transition: box-shadow 0.3s ease-in-out;
    cursor: none;
}

form input:focus,
form textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 117, 252, 0.5);
    cursor: none;
}

button {
    background-color: #2575fc;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
    background-color: #1c5ed8;
    transform: translateY(-2px);
    cursor: none;
}

#interactive-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff4081;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#interactive-link:hover {
    background-color: #ff0058;
    transform: translateY(-2px);
    cursor: none;
}

#interactive-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9998;
}

#interactive-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: none;
    position: relative;
    z-index: 9999;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#interactive-content.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

#typing-effect {
    font-size: 24px;
    color: #2575fc;
    margin-bottom: 20px;
}

#secret-message {
font-size: 18px;
color: #ff4081;
opacity: 0;
transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
transition-delay: 1s;
}

#interactive-content.active #secret-message {
opacity: 1;
transform: translateY(0);
}

#close-button {
margin-top: 20px;
}

footer {
text-align: center;
padding: 20px;
background: rgba(255, 255, 255, 0.1);
border-radius: 10px;
margin-top: 40px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-icons {
display: flex;
justify-content: center;
gap: 20px;
margin-top: 20px;
position: relative;
z-index: 1;
}

.icon {
color: white;
font-size: 24px;
transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
opacity: 0;
transform: translateY(20px);
transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.icon:nth-child(1) {
transition-delay: 0.1s;
}

.icon:nth-child(2) {
transition-delay: 0.2s;
}

.icon:nth-child(3) {
transition-delay: 0.3s;
}

.icon:nth-child(4) {
transition-delay: 0.4s;
}

.icon:nth-child(5) {
transition-delay: 0.5s;
}

header.active .icon {
opacity: 1;
transform: translateY(0);
}

.icon:hover {
color: #ff4081;
transform: scale(1.2);
text-shadow: 0 0 10px rgba(255, 64, 129, 0.8);
cursor: none;
}

.timeline-container {
position: relative;
padding: 40px 0;
}

.timeline-block {
position: relative;
margin-bottom: 40px;
opacity: 0;
transform: translateX(-50px);
transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.timeline-block:nth-child(odd) {
transform: translateX(50px);
}

.timeline-block:nth-child(1) {
transition-delay: 0.1s;
}

.timeline-block:nth-child(2) {
transition-delay: 0.2s;
}

section.active .timeline-block {
opacity: 1;
transform: translateX(0);
}

.timeline-block::before {
content: "";
position: absolute;
top: 0;
left: -30px;
width: 2px;
height: 100%;
background-color: white;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.timeline-block::after {
content: "";
position: absolute;
top: 0;
left: -34px;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #2575fc;
box-shadow: 0 0 10px rgba(37, 117, 252, 0.8);
}

.timeline-date {
font-size: 18px;
font-weight: 700;
color: #ff4081;
margin-bottom: 10px;
text-shadow: 0 0 10px rgba(255, 64, 129, 0.8);
}

.timeline-block::before {
content: "";
position: absolute;
top: 0;
left: -34px;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: #2575fc;
border: 2px solid white;
box-shadow: 0 0 0 4px rgba(37, 117, 252, 0.2), 0 0 10px rgba(37, 117, 252, 0.8);
animation: pulseEffect 2s infinite;
}

@keyframes pulseEffect {
0% {
transform: scale(0.8);
opacity: 0.7;
}
50% {
transform: scale(1.2);
opacity: 1;
}
100% {
transform: scale(0.8);
opacity: 0.7;
}
}

.timeline-block:nth-child(odd)::before {
background-color: #ff4081;
box-shadow: 0 0 0 4px rgba(255, 64, 129, 0.2), 0 0 10px rgba(255, 64, 129, 0.8);
}

.timeline-block:last-child::after {
content: "";
position: absolute;
bottom: 0;
left: -32px;
width: 6px;
height: calc(100% - 10px);
background-color: white;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

#game-modal {
display: none;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 100000;
opacity: 0;
transition: opacity 0.5s ease;
justify-content: center;
align-items: center;
}

.modal-content {
background-color: white;
padding: 30px;
width: 90%;
max-width: 500px;
border-radius: 20px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.8);
transform: translateY(-30px);
transition: transform 0.5s ease-out;
position: relative;
}

.modal.show {
display: flex;
opacity: 1;
}

.modal-content.show {
transform: translateY(0);
}

.input-area {
display: flex;
justify-content: space-between;
margin-top: 20px;
cursor: none;
}

.input-area input {
width: 70%;
padding: 10px;
border: 2px solid #007BFF;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
cursor: none;
}

.input-area button {
width: 25%;
background-color: #007BFF;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
transition: background-color 0.3s ease, transform 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 123, 255, 0.4);
cursor: none;
}

#decrypted-message {
margin-top: 20px;
color: #007BFF;
text-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
}

.input-area button:hover {
background-color: #0056b3;
transform: translateY(-2px);
box-shadow: 0 6px 8px rgba(0, 123, 255, 0.6);
cursor: none;
}

.close {
position: absolute;
top: 15px;
right: 15px;
font-size: 28px;
cursor: pointer;
color: #aaa;
transition: color 0.3s ease, transform 0.3s ease;
}

.close:hover {
color: #333;
transform: rotate(90deg);
cursor: none;
}

.game-link {
position: relative;
transition: transform 0.3s ease;
}

.game-link:hover {
transform: scale(1.2);
cursor: none;
}

.game-link::after {
content: 'Decrypt the hidden game!';
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
padding: 6px 10px;
background-color: #007BFF;
color: white;
border-radius: 4px;
opacity: 0;
transition: opacity 0.2s ease;
white-space: nowrap;
pointer-events: none;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
cursor: none;
}

.game-link:hover::after {
opacity: 1;
cursor: none;
}

#modal-confetti-canvas {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 10;
}

#confetti-canvas {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
z-index: 9999;
}

.party-mode {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 9998;
pointer-events: none;
opacity: 0;
transition: opacity 0.5s ease;
}

.party-mode.active {
opacity: 1;
}

.party-light {
position: absolute;
bottom: 0;
width: 200px;
height: 200px;
background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
pointer-events: none;
opacity: 0;
transition: opacity 0.5s ease;
}

.party-light.left {
left: 0;
transform: translateX(-50%) rotate(45deg);
}

.party-light.right {
right: 0;
transform: translateX(50%) rotate(-45deg);
}

.party-mode.active .party-light {
opacity: 1;
}

@keyframes slideInFromSide {
0% {
transform: translateX(-100%);
opacity: 0;
}
100% {
transform: translateX(0);
opacity: 1;
}
}

.icon.github {
animation-delay: 1.2s;
}

.icon.linkedin {
animation-delay: 1.4s;
}

.icon.twitter {
animation-delay: 1.6s;
}

.icon.secret-game {
animation-delay: 1.8s;
}

#translator-link {
position: fixed;
top: 20px;
left: 20px;
background-color: #007BFF;
color: white;
border: none;
padding: 10px;
border-radius: 50%;
font-size: 20px;
cursor: pointer;
z-index: 1000;
transition: transform 0.3s ease, box-shadow 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 123, 255, 0.4);
}

#translator-link:hover {
transform: scale(1.2);
box-shadow: 0 6px 8px rgba(0, 123, 255, 0.6);
cursor: none;
}

.translate-animation {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(to bottom, black 50%, white 50%);
z-index: 9999;
pointer-events: none;
opacity: 0;
cursor: none;
transition: opacity 0.5s ease;
}

.translate-animation.active {
opacity: 1;
}

.translate-animation::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(to bottom, black 50%, white 50%);
transform: scaleY(0);
transform-origin: top;
transition: transform 0.5s ease;
}

.translate-animation.active::before {
transform: scaleY(1);
}

.custom-cursor {
position: fixed;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.2);
pointer-events: none;
z-index: 9999;
transition: transform 0.3s ease;
transform: translate(-50%, -50%);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border: 2px solid rgba(255, 255, 255, 0.2);
}

.custom-cursor.hover {
transform: translate(-50%, -50%) scale(1.8);
background-color: rgba(255, 255, 255, 0.4);
cursor: none;
}

.custom-cursor.click {
transform: translate(-50%, -50%) scale(0.6);
background-color: rgba(255, 255, 255, 0.6);
}

.custom-cursor.certificate-hover {
transform: translate(-50%, -50%) scale(2);
background-color: rgba(255, 255, 255, 0.6);
cursor: none;
}

.custom-cursor.input-hover {
transform: translate(-50%, -50%) scale(1.8);
background-color: rgba(255, 255, 255, 0.4);
border-style: dashed;
animation: cursorTyping 1s infinite;
cursor: none;
}

@keyframes cursorTyping {
0%, 100% {
border-color: rgba(255, 255, 255, 0.4);
}
50% {
border-color: rgba(255, 255, 255, 0.8);
}
}

a, button, input, textarea {
cursor: none;
}

.modal-content.shake {
animation: shake 0.5s;
}

@keyframes shake {
0%, 100% {
transform: translateX(0);
}
10%, 30%, 50%, 70%, 90% {
transform: translateX(-10px);
}
20%, 40%, 60%, 80% {
transform: translateX(10px);
}
}

h2 span {
display: inline-block;
opacity: 0;
transform: translateY(20px);
animation: fadeInOut 1s ease-in-out forwards;
}

h2 span:nth-child(1) {
animation-delay: 0.1s;
}

h2 span:nth-child(2) {
animation-delay: 0.2s;
}

h2 span:nth-child(3) {
animation-delay: 0.3s;
}

h2 span:nth-child(4) {
animation-delay: 0.4s;
}

h2 span:nth-child(5) {
animation-delay: 0.5s;
}

h2 span:nth-child(6) {
animation-delay: 0.6s;
}

h2 span:nth-child(7) {
animation-delay: 0.7s;
}

h2 span:nth-child(8) {
animation-delay: 0.8s;
}

h2 span:nth-child(9) {
animation-delay: 0.9s;
}

h2 span:nth-child(10) {
animation-delay: 1s;
}

@keyframes fadeInOut {
0% {
opacity: 0;
transform: translateY(20px);
}
20%, 80% {
opacity: 1;
transform: translateY(0);
}
100% {
opacity: 0;
transform: translateY(-20px);
}
}

.modal-content.shake {
animation: shake 0.5s;
}

@keyframes shake {
0%, 100% {
transform: translateX(0);
}
10%, 30%, 50%, 70%, 90% {
transform: translateX(-10px);
}
20%, 40%, 60%, 80% {
transform: translateX(10px);
}
}

.scroll-down {
position: fixed;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
opacity: 0;
animation: fadeInUp 1s ease-in-out forwards;
animation-delay: 1s;
z-index: 1000;
}

.scroll-circle {
width: 40px;
height: 40px;
border: 2px solid white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
animation: scrollCircle 2s ease-in-out infinite;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.scroll-arrow {
color: white;
font-size: 24px;
animation: scrollArrow 2s ease-in-out infinite;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

@keyframes fadeInUp {
0% {
opacity: 0;
transform: translate(-50%, 20px);
}
100% {
opacity: 1;
transform: translate(-50%, 0);
}
}

@keyframes scrollCircle {
0%, 100% {
transform: scale(1);
}
50% {
transform: scale(1.2);
}
}

@keyframes scrollArrow {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(10px);
}
}
