class EventObservers {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
            document.querySelector(
            ".sub-div"
            ).innerHTML = `Thanks for Subscribing to ${fn.name}`;

            setTimeout(function () {
            document.querySelector(".sub-div").innerHTML = ``;
            }, 3000);
    }

    unsubscribe(fn) {

      //Filter the list whatever matches the callback func, if nothing matches, it stays in the list.
      //the filter will create a new list of obervers.

        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
            return item;
            }
        });
        document.querySelector(
            ".sub-div"
        ).innerHTML = `You are now Unsubscribed to ${fn.name}`;

        setTimeout(function () {
            setTimeout(function () {
            document.querySelector(".sub-div").innerHTML = ``;
            }, 1000);
            document.querySelector(".get-mills").innerHTML = ``;
        }, 5000);
    }

    fire() {
        this.observers.forEach(function (item) {
          item.call();
        });
    }

}

const click = new EventObservers();

//event listeners

document.querySelector(".sub-btn").addEventListener("click", function () {
  click.subscribe(getMilliseconds);
});

document.querySelector(".unsub-btn").addEventListener("click", function () {
  click.unsubscribe(getMilliseconds);
});

document.querySelector(".sub-s-btn").addEventListener("click", function () {
  click.subscribe(getSecs);
});

document.querySelector(".unsub-s-btn").addEventListener("click", function () {
  click.unsubscribe(getSecs);
});

document.querySelector(".fire-btn").addEventListener("click", function () {
  click.fire();
});

//click handlers

//UTC
const getMilliseconds = function () {
  document.querySelector(
    ".get-mills"
  ).innerHTML = `Current Time: <b>${new Date().toUTCString()}</b>`;
};

//Seconds
const getSecs = function () {
  document.querySelector(
    ".get-secs"
  ).innerHTML = `Current Secs: <b>${new Date().getSeconds()}</b>`;
};
