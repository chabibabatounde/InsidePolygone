let polygoneJson = '[{"lat":41.393294288784894,"lng":8.778076171875002},{"lat":42.85985981506279,"lng":8.074951171875002},{"lat":43.31718491566705,"lng":9.261474609375002},{"lat":43.14909399920127,"lng":9.920654296875002},{"lat":41.66470503009207,"lng":10.590820312500002},{"lat":41.48389104267175,"lng":9.404296875000002},{"lat":41.335575973123916,"lng":8.745117187500002}]';
let polygon = JSON.parse(polygoneJson);

console.log(isInside(polygon, {lat:42.619484, lng:9.495679}));

console.log(isInside(polygon, {lat:36.184712, lng:-1.662190}));