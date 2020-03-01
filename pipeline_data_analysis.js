//Javascript: script which fetches the latest average from the batch data.
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "192.168.8.109",
  port: 3306,
  user: "pi",
  password: "raspberry",
  database: "test"
});

con.connect((err) => {
  if (err) {
    curr_data = [0, 0, 0, 0]
    return
  }
});

var curr_data = [0, 0, 0, 0];

function get_recent() {
  con.query("SELECT * FROM (SELECT * FROM app_sensors ORDER BY id DESC LIMIT 3)Var1 ORDER BY device_id ASC;", function (err, recent_data) {
    var indices = [0,0,0];
    for (var key in recent_data) {
      if(recent_data[key]['type'] == 'Humidity')
        indices[0] = key;
      if(recent_data[key]['type'] == 'Pressure')
        indices[1] = key;
      if(recent_data[key]['type'] == 'Temperature')
        indices[2] = key;
    }
    curr_data = [recent_data[indices[0]]['avg'], recent_data[indices[1]]['avg'], recent_data[indices[2]]['avg'], recent_data[2]['create_time']];
    console.log(curr_data);
  });
}

setInterval(
  () => get_recent(),
  10000
);
