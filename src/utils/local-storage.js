const ls = {

  getItems: function (key) {
    let string = window.localStorage.getItem(key);
    if (string) {
      return JSON.parse(string);
    } else {
      return [];
    }
  },

  setItems(key, items) {
    window.localStorage.setItem(key, JSON.stringify(items));
  },

  addToList(key, booze) {
    const currentList = this.getItems(key);
    let newList;
    if (currentList.indexOf(booze) === -1) {
      newList = [booze, ...currentList];
    } else {
      newList = [booze];
    }
    this.setItems(key, newList);
  },

  removeFromList(key, item) {
    const currentList = this.getItems(key);
    const newList = currentList.filter(_item => (item !== _item));
    this.setItems(key, newList);
  }

}

export const getMyHistoryList = function () {
  return ls.getItems.call(ls, 'boozeList');
}

export const getMyPendingList = function () {
  return ls.getItems.call(ls, 'pendingList');
}

export const addBooze = function (booze) {
  ls.addToList.call(ls, 'boozeList', booze);
};

export const addToMyPendingList = function (booze) {
  ls.addToList.call(ls, 'pendingList', booze);
};

export const deletePreviousOrders = function () {
  ls.setItems.call(ls, 'boozeList', []);
};

export const resetPendingOrders = function () {
  ls.setItems.call(ls, 'pendingList', []);
}

export const removeFromMyPendingList = function (booze) {
  ls.removeFromList.call(ls, 'pendingList', booze);
};
