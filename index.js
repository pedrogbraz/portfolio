const $hamburger = document.querySelector(".hamburger input");

$hamburger.addEventListener("change", () => {

    if ($hamburger.checked) {
        document.querySelector(".navbar .links").classList.add("show");
    } else {
        document.querySelector(".navbar .links").classList.remove("show");
    }

});

const botao1 = document.querySelector("#botao1");

botao1.addEventListener("click", function() {
  document.querySelector(".navbar .links").classList.remove("show");
});

botao2.addEventListener("click", function() {
  document.querySelector(".navbar .links").classList.remove("show");
});

botao3.addEventListener("click", function() {
  document.querySelector(".navbar .links").classList.remove("show");
});

botao4.addEventListener("click", function() {
  document.querySelector(".navbar .links").classList.remove("show");
});

botao5.addEventListener("click", function() {
  document.querySelector(".navbar .links").classList.remove("show");
});

const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

/**
 * @param {int} endX:
 * @param {int} endY: 
 * @param {int} duration:
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

const textArray = ["Front End Development", "Estudante", "Software Engineer"];
    let textIndex = 0; 

    function typeWriter() {
        const text = textArray[textIndex];
        const typingSpeed = 100; 
        const deleteSpeed = 50; 

        let charIndex = 0;

        const typingInterval = setInterval(() => {
            document.getElementById("typing-text").textContent += text.charAt(charIndex);
            charIndex++;
            if (charIndex === text.length) {
                clearInterval(typingInterval);
                setTimeout(deleteText, 500);
            }
        }, typingSpeed);

        function deleteText() {
            const deletingInterval = setInterval(() => {
                const currentText = document.getElementById("typing-text").textContent;
                document.getElementById("typing-text").textContent = currentText.slice(0, -1);
                if (currentText.length === 0) {
                    clearInterval(deletingInterval);
                    textIndex = (textIndex + 1) % textArray.length;
                    setTimeout(typeWriter, 250);
                }
            }, deleteSpeed);
        }
    }
    typeWriter();
