// your code here
arrayAdditionalMethods={};

arrayAdditionalMethods.first=function(){
  return this[0];
}
arrayAdditionalMethods.last=function(){
  return this[this.length -1 ]
}
_.extend(Array,arrayAdditionalMethods);
