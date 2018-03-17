var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        var index=hashFn(key, max)
        var bucket = this._storage[index];
        var tuple=[key,value];
        if(!bucket){
           bucket = [];
          this._storage[index]=bucket;

          bucket.push([key,value]);
        }else if (bucket) {
          for (var i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key){
              return;
            }

          }
        }
        else{
          bucket.push(tuple);
        }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
