const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

function headers(mountainList) {
  Object.keys(mountainList[0]).map(function(each) {
    return <td> {each} </td>
  })
}

function mountains(mountainList) {
  <tr> {headers(mountainList)} </tr>
  mountainList.map(function(oneMountiain) {
    <tr> {oneMountain.map(function(element) {
        return <td> {element} </td>
      })} </tr>
  })
}

ReactDOM.render(
  <table> {mountains(MOUNTAINS)} </table>,
  document.getElementById('root')
);
