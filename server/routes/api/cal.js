const Cal = require('../../models/Cal');// models에서 스키마를 가져옴

// REST ful API를 이용해 라우터 작성
module.exports = (app) =>{

  app.put('/api/cal/:input', (req, res, next) => {

    const cal = new Cal();

    cal.cal_res=`${req.params.input}`;

        cal.save()
          .then(() => res.json(cal))
          .catch((err) => next(err));

  });

  app.get('/api/cal', (req,res,next)=>{

    Cal.find()
    .exec()
    .then((cal)=> res.json(cal))
    .catch((err) => next(err));
  }); //이게 아마 데이터 베이스 값을 가져오는것같고

  app.delete('/api/cal/:id' , function(req,res,next){
    Cal.findOneAndRemove({_id: req.params.id})
    .exec()
    .then((cal) => res.json())
    .catch((err) => next(err));
  });


};
