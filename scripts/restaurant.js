var debug = false;
var tables=[];

var createTable = function(){
  if( debug ) console.log('in createTable');
  var tableName = document.getElementById('nameIn').value;
  var tableCapacity = document.getElementById('capacityIn').value;

  var newTable = {
    'name': tableName,
    'capacity': tableCapacity,
    'status': 'empty'
  }

  tables.push( newTable );
  if( debug ) console.log( 'added table: ' + newTable.name );
  listTables();
}

var cycleStatus = function( index ){
  if( debug ) console.log( 'in cycleStatus: ' + index );
  switch( tables[index].status ){
    case  'empty':
        tables[index].status = 'seated';
        break;
    case  'seated':
        tables[index].status = 'served';
        break;
    case  'served':
        tables[index].status = 'dirty';
        break;
    case  'dirty':
        tables[index].status = 'empty';
        break;
    default:
      tables[index].status = 'empty';
  }
  listTables();
}


var listTables = function(){
  if( debug ) console.log( "in listTables" );
  document.getElementById('output').innerHTML = '';
  for( i=0; i< tables.length; i++ ){
    var line = tables[i].name + " - capacity: " + tables[i].capacity + ', status: <button onClick="cycleStatus(' + i + ')">' + tables[i].status + "</button>";
    document.getElementById('output').innerHTML += '<p>' + line + '</p>';
  }
}

var updateStatus = function(){
  if( debug ) console.log( 'in updateStatus' );
    var tableName = document.getElementById('statusNameIn').value;
    var statusIn = document.getElementById('statusIn').value;

    for( i=0; i< tables.length; i++ ){
      if( tables[i].name == tableName ){
        tables[i].status = statusIn;
        listTables();
        return;
      }
    }
    alert( "No table found with that name!");
}
