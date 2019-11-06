function square(x) {
    return x * x;
}

const asquare = (x) => x * x;
const event = {
    name: 'Birthday',
    attendees: ['Avishek'],
    guestlist() {
        this.attendees.push('Pankaj');
        this.attendees.push('Mahir');
        console.log(this.name);

        console.log('List of attendees is ');
        this.attendees.forEach(x => {
            console.log(x);
        });
    }

}



event.guestlist();
console.log(square(3));
console.log(asquare(3));