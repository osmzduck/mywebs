body, html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    color: #333;
}

header {
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    font-size: 48px;
    margin-bottom: 10px;
    opacity: 0;
    animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.scroll-down {
    position: relative;
    margin: 20px auto;
    width: 40px;
    height: 40px;
    cursor: pointer;
    animation: bounce 2s infinite;
}

.scroll-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 50%;
    animation: circleScale 2s infinite;
}

.scroll-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

@keyframes circleScale {
    0%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}

section {
    margin: 20px 0;
    padding: 20px;
    border-left: 5px solid #007BFF;
    transition: all 0.5s ease;
}

section:hover {
    background: rgba(0, 123, 255, 0.1);
}

.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.skill {
    background-color: #007BFF;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.skill:hover {
    transform: scale(1.1);
}

.certificate-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.certificate {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
}

.certificate:hover {
    transform: scale(1.05);
}

.certificate img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.certificate-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.certificate:hover .certificate-overlay {
    opacity: 1;
}

.certificate-text {
    text-align: center;
    padding: 10px;
}

#certificate-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

#certificate-preview img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}

.close-preview {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #007BFF;
    transition: border-color 0.3s ease;
}

form input:focus, form textarea:focus {
    border-color: #0056b3;
    outline: none;
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

#interactive-link {
    display: inline-block;
    padding: 5px 10px;
    background-color: #ff4081;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
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
}

#typing-effect {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

#secret-message {
    font-size: 18px;
    color: #ff4081;
    opacity: 0;
    transition: opacity 0.5s ease;
}

#close-button {
    margin-top: 20px;
}

footer {
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.header-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.icon {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #ff4081;
}

h1 span {
    display: inline-block;
    animation: bounce 0.5s ease-in-out forwards;
    opacity: 0;
}

@keyframes bounce {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    60% {
        transform: translateY(20px);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.container.shake {
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

#background-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#cursor-trail {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}

.cursor-particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: cursorParticleAnimation 1s ease-out;
}

@keyframes cursorParticleAnimation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

.section-reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
}

.section-reveal.active {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    header {
        padding: 10px;
    }

    section {
        padding: 10px;
    }

    .certificate {
        width: 100%;
        height: auto;
    }

    #certificate-preview img {
        max-width: 100%;
        max-height: 100%;
    }
}

