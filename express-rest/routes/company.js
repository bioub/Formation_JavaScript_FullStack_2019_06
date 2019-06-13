const express = require('express');

const companyCtrl = require('../controllers/company');

const router = express.Router();

router.get('/',
  companyCtrl.list,
);

router.get('/:id',
  companyCtrl.show,
);

module.exports = router;
