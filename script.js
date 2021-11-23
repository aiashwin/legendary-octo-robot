class Note{
    constructor(){
        this.flag = true
        this.noteText = 'Coming Soon'
    }

    update(){
        if (this.flag) { this.noteText = 'Coming Soon _'} 
        else {this.noteText = 'Coming Soon'}
        this.flag = !this.flag
    }
}

var note = new Note()
var noteElement = document.getElementById('note');


function animate() {
    note.update()
    noteElement.textContent = note.noteText
}

setInterval(animate, 1000 / 2)