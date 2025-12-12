const subscribers = new Set();

export const cartUI = {
  open: () => {
    subscribers.forEach((fn) => fn(true));
  },

  close: () => {
    subscribers.forEach((fn) => fn(false));
  },

  subscribe: (fn) => {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  },
};
