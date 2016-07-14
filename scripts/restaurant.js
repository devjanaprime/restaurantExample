// array for all tables in restaurant
var tables=[];

var createTable = function(){
  console.log('in createTable');
  // get user input
  var tableName = document.getElementById('nameIn').value;
  var tableCapacity = document.getElementById('capacityIn').value;
  // table object for new table
  var newTable = {
    'name': tableName,
    'capacity': tableCapacity,
    'status': 'empty'
  }
  // push new obejct into tables array
  tables.push( newTable );
  console.log( 'added table: ' + newTable.name );
  // update output
  listTables();
}

var cycleStatus = function( index ){
  console.log( 'in cycleStatus: ' + index );
  // move table status to next status
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
    default:
      tables[index].status = 'empty';
  }
  // show tables on DOM
  listTables();
}


var listTables = function(){
  console.log( "in listTables" );
  // target our output div
  document.getElementById('output').innerHTML = '';
  // loop through the tables array and display each table
  for( i=0; i< tables.length; i++ ){
    // line is a string of the line of HTML we'll create for the table
    // ex: TABLENAME - capacity: 6, status: [empty]
    // note status is a button that, when clicked runs cycleStatus for this table
    var line = tables[i].name + " - capacity: " + tables[i].capacity + ', status: <button onClick="cycleStatus(' + i + ')">' + tables[i].status + "</button>";
    // add line to output div
    document.getElementById('output').innerHTML += '<p>' + line + '</p>';
  }
}
