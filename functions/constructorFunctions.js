/*Constructor Functions

-Constructor Functions can be thought of as a reuseable skeleton object
_We can add to the constructor functioins the same way we add to subjects
-dot notation 
-It is good practice to cap your constructor functions
*/

//Option1

let artist1 = {
    name: 'Queen',
    albums: 15,
    allMembersAlive: false
}

let artist2 = {
    name: 'Fleetwood Mac',
    albums: 18,
    allMembersAlive: false
}

let artist3 = {
    name: "Shinedown",
    albums: 14,
    allMembersAlive: true

}


// (1)    (2)             (3)
function Artist(name, albums, allMembersAlive) {
//  (4)  (5)    (6)
    this.name = name
    this.albums = albums
    this.allMembersAlieve = allMembersAlive
}


let artist = new Artist('Seether', 17, true)
console.log(artist);