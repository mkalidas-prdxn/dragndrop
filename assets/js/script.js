var flag = 0;
//To start and stop the drag option
var txt = document.querySelector(".start");
txt.addEventListener('click', () => {
  if (flag == 0) {
    txt.innerHTML = "STOP";
    flag = 1;
  } else {
    txt.innerHTML = "START";
    flag = 0;
  }
  //drag and drop
  var dragable = document.querySelectorAll(".dragable");
  var container = document.querySelectorAll(".drop");
  var dragged;
  dragable.forEach(dragable => {
    dragable.addEventListener('dragstart', e => {
      dragged = e.target;
      dragable.classList.add('dragging')
    })

    dragable.addEventListener('dragend', () => {
      dragable.classList.remove('dragging')
    })
  })

  container.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
    })
    container.addEventListener('dragenter', e => {
      e.preventDefault();
      container.className += " hover";
    })
    container.addEventListener('dragleave', () => {
      container.classList.remove("hover");
    })

    container.addEventListener('drop', e => {
      e.preventDefault();
      container.classList.remove("hover");
      if (e.target.classList[1] == "drop" && flag == 1) {
        // if (flag == 1) {
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
        // }
      }
      console.log(flag);
      if (e.target.classList[0] == "dragable" && flag == 1) {
        // if (flag == 1) {
        dragged.parentNode.removeChild(dragged);
        e.target.parentNode.appendChild(dragged);
        // }
        // console.log("dragged", dragged)
      }
    })
  })
});

// code to add counter for each container
// code for high
var dynamicCounter = document.querySelector('main');
dynamicCounter.addEventListener('drop', () => {
  var countHigh = document.querySelector(".high").childElementCount;
  var nocountHigh = document.querySelector(".high-count");
  var total = document.querySelector(".totalHigh");
  if (countHigh < 2) {
    nocountHigh.className = "nocount high-count count";
  } else {
    nocountHigh.className = "high-count count";
    total.innerHTML = (countHigh - 1);
  }

  // code for medium
  var countMedium = document.querySelector(".medium").childElementCount;
  var nocountMedium = document.querySelector(".medium-count");
  var total = document.querySelector(".totalMedium");
  if (countMedium < 2) {
    nocountMedium.className = "nocount medium-count count";
  } else {
    nocountMedium.className = "medium-count count";
    total.innerHTML = (countMedium - 1);
  }

  // code for low
  var countLow = document.querySelector(".low").childElementCount;
  var nocountLow = document.querySelector(".low-count");
  var total = document.querySelector(".totalLow");
  if (countLow < 2) {
    nocountLow.className = "nocount low-count count";
  } else {
    nocountLow.className = "low-count count";
    total.innerHTML = (countLow - 1);
  }
})