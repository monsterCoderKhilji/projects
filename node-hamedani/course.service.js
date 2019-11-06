const fs = require('fs')

listCourses = () => {
    return JSON.parse(fs.readFileSync('courses.json').toString());
}

findCourseById = (id) => {

    const result = JSON.parse(fs.readFileSync('courses.json').toString()).find(c => c.id === id);
    let response = {};
    if (result) {
        response.status = 200;
        response.data = result;
    } else {
        response.status = 404;
        response.data = 'No matches found for course with id ' + id;
    }
    return response;
}

addCourse = (name) => {
    const load = JSON.parse(fs.readFileSync('courses.json').toString());
    let response = {};
    if (load.find(c => c.course === name)) {
        response.status = 400;
        response.data = 'Course already exists';
    } else {
        let course = {
            id: load.length + 1,
            course: name
        };

        try {
            load.push(course);
            fs.writeFileSync('courses.json', JSON.stringify(load));
            response.status = 200;
            response.data = 'Course ' + course.course + ' added with id ' + course.id;
        } catch (e) {
            response.status = 500;
            response.data = 'Internal Server Error';
        }
    }
    return response;
}

module.exports = {
    listCourses: listCourses,
    findCourseById: findCourseById,
    addCourse: addCourse
};