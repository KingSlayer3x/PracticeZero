let Title = 'Elzero devs';
let Description = 'Elzero Web School';
let Date = '28/11';

let mark = `
    <div class= "card">
        <h3>${Title}</h3>
        <p>${Description}</p>
        <span>${Date}</span>
    </div>
`

let R = mark.repeat(4);
document.write(R);
