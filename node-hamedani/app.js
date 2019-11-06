const express = require('express');

const app = express();
const service = require('./course.service');

app.use(express.json());

app.get('/api/courses', (req, res) => {
    res.send(service.listCourses());
});

app.get('/api/courses/:id', (req, res) => {

    var response = service.findCourseById(parseInt(req.params.id));
    res.status(response.status).send(response.data);
});

app.post('/api/courses', (req, res) => {
    var response = service.addCourse(req.body.name);
    res.status(response.status).send(response.data);
})


app.listen(3000, () => {
    console.log('Server started at 3000');
})