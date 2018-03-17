var Stack = function() {
    this._storage =[]
    this.add = function(value){
      this._storage.push(value);
      return value;
    };
    this.remove = function() {
      return this._storage.pop();
    };
  };
