body, html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    overflow-x: hidden;
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
    position: absolute;
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
}

.scroll-arrow {
    color: white;
    font-size: 24px;
    animation: scrollArrow 2s ease-in-out infinite;
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
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
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
}

.certificate {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
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
    transform: translateY(0);
}

.certificate img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease-in-out;
}

.certificate:hover img {
    transform: scale(1.1);
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
}

.certificate:hover .certificate-overlay {
    opacity: 1;
}

.certificate-text {
    color: white;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 20px;
}

#certificate-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#certificate-preview img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-preview {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 36px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.close-preview:hover {
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
}

form input:focus,
form textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 117, 252, 0.5);
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
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #1c5ed8;
}

#interactive-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff4081;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out;
}

#interactive-link:hover {
    background-color: #ff0058;
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
    max-width: 90%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
}

#interactive-content.active {
    opacity: 1;
    transform: translateY(-50%);
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
    transform: translateY(20px);
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
    transition: color 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
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

header.active .icon {
    opacity: 1;
    transform: translateY(0);
}

.icon:hover {
    color: #ff4081;
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
}

.timeline-date {
    font-size: 18px;
    font-weight: 700;
    color: #ff4081;
    margin-bottom: 10px;
}

.timeline-block::before {
    content: "";
    position: absolute;
    top: 0;
    left: -30px;
    width: 2px;
    height: 100%;
    background-color: white;
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
    border: 2px solid white;
    box-shadow: 0 0 0 4px rgba(37, 117, 252, 0.2);
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
    box-shadow: 0 0 0 4px rgba(255, 64, 129, 0.2);
}

.timeline-block:last-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -32px;
    width: 6px;
    height: calc(100% - 10px);
    background-color: white;
}

#game-modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.5s ease;
    justify-content: center;
    align-items: center;
}

.modal.show {
    opacity: 1;
}

.modal-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    position: relative;
    animation: slideIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-100px);
    }
    to {
        transform: translateY(0);
    }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
}

.input-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.input-area input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    flex-grow: 1;
}

.input-area button {
    padding: 10px 20px;
    background-color: #2575fc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.input-area button:hover {
    background-color: #1c5ed8;
}

#decrypted-message {
    margin-top: 20px;
    font-weight: bold;
    color: #2575fc;
    text-align: center;
}

#translator-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #2575fc;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    z-index: 999;
}

#translator-btn:hover {
    background-color: #1c5ed8;
}

.translate-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #2575fc 50%, white 50%);
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
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
    background: linear-gradient(to bottom, #2575fc 50%, white 50%);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
}

.translate-animation.active::before {
    transform: scaleY(1);
}

.modal-content.shake {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(-10px);
    }
    40% {
        transform: translateX(10px);
    }
    60% {
        transform: translateX(-10px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0);
    }
}

h2 span {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-in-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
