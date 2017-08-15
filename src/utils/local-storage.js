const ls = {

  getItems: function () {
    let string = window.localStorage.getItem('boozeList');
    if (string) {
      return JSON.parse(string);
    } else {
      return [];
    }
  },

  setItems(items) {
    window.localStorage.setItem('boozeList', JSON.stringify(items));
  },

  addBooze(booze) {
    let items = this.getItems();
    let newList;
    if (this.getItems().indexOf(booze) > -1) {
      newList = [...items];
    } else {
      newList = [booze, ...items];
    }
    this.setItems(newList);
  }
}

export const getItems = function () {
  return ls.getItems.call(ls);
}

export const addBooze = function (booze) {
  ls.addBooze.call(ls, booze);
};
