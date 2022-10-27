export function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args);
    }, delay)
    }
};

export function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs = null;

    const timeoutFunction = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunction, delay)
      }
    }
    
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }

      cb(...args)
      shouldWait = true;
      
      setTimeout(timeoutFunction, delay)
    }
  };