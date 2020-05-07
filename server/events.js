const express = require('express');

function createRouter(db) {
  const router = express.Router();


  // the routes are defined here
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO registration ( username, email, password) VALUES (?,?,?)',
      [ req.body.username, req.body.email, req.body.password],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/event', function (req, res, next) {
    db.query(
      'SELECT  username, email, password FROM registration WHERE email=? ORDER BY date LIMIT 10 OFFSET ?',
      [ 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/event/:userid', function (req, res, next) {
    db.query(
      'UPDATE registration SET username=?, email=?, password=? WHERE userid=? ',
      [req.body.username, req.body.email, req.body.password, req.params.userid],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.delete('/event/:userid', function (req, res, next) {
    db.query(
      'DELETE FROM registration WHERE userid=? ',
      [req.params.userid],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;