var express = require('express');
var router = express.Router();


var story = []
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  story.push(req.body.scene);
  res.render('index',{title: 'woot', story: story});
});

module.exports = router;
