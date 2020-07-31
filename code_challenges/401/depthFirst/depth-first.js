const Graph = require ('../../../data-structures/graph.js');


function depthFirst (vertex){
  let newArr = [];
  newArr.push(vertex.value);
  let neighbors = this.getNeighbors(vertex);

  if(neighbors){
    neighbors.forEach( item => {
      if(!newArr.includes(item)){
        newArr.push( item.vertex.value );
        if(this.getNeighbors( item.vertex ) && !newArr.includes(item.vertex.value)){
          this.depthFirst(item, newArr);
        }
      }
    });
  }
  return newArr;
}


