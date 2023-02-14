///module export
const RequestClassHandler = (app, db) => {
  app.post("/request", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;

    console.log("bloodgroup : " + blood_group+" units:"+unit);
    //query
    const sqlInsert =
      "INSERT INTO  user_request(blood_group,unit) VALUES (?,?)";
    //
            db.query(sqlInsert, [blood_group, unit], (err, result) => {
              if (err) {
                console.log("**ERROR ACCEPTING REQUEST!" + err);
              } else {
                res.send({
                  message: "REQUEST ACCEPETED COLLECT IT FROM THE BLOOD BANK",
                });
              }
            });
         
    
  });
};

export default RequestClassHandler;