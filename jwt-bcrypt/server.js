const jwt = require('jsonwebtoken');

const token = jwt.sign({ email: 'sample@email.com'}, 'privateKey');
console.log('token: ',token);

try{
  const result = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE1MjQxMTAyMDV9.cE_7Xmj2OTvxQmmwZL56XYSOYEzM_8MZjO3iczxFrBc','secret');
  console.log('result: ', result);
}
catch(ex){
  console.log('--------------------exception: ', ex);
}
