function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (typeof this.marks === 'undefined') {
        return;
    }

    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (typeof this.marks !== 'undefined' && this.marks.length > 0) {
        let marksSum = 0;

        for (let mark of this.marks) {
            marksSum += mark;
        }

        let marksAvrg = marksSum / this.marks.length

        return marksAvrg;
        
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}