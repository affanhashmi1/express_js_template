var express = require('express');
var router = express.Router();

// ========================================
// ========================================

var data = {
  rows: 3,
  cols: 3,
  fields: [
    { label: 'First Name', element: 'input', options: null, value_node: null },
    { label: 'Last Name', element: 'input', options: null, value_node: null },
    { label: 'Label Two', element: 'radio', options: 'Male', value_node: null },
    { label: 'Label Three', element: 'radio', options: 'Female', value_node: null },
    { label: 'Label Four', element: 'check', options: 'Graduate', value_node: null },
    { label: 'Label Five', element: 'check', options: 'Masters', value_node: null },
    { label: 'Label Six', element: 'textarea', options: null, value_node: null },
    { label: 'State', element: 'select', options: [ 'Select...', 'Balochistan', 'NWFP', 'Punjab', 'Sindh' ], value_node: null }
  ]
};

// ========================================
// ========================================

/* GET forms page. */
router.get('/', function(req, res, next) {
  res.render('forms', { title: 'Express - Forms', data: data });
});

module.exports = router;
