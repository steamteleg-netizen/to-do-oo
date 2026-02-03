document.getElementById("myForm").addEventListener('submit',
    function(a){
        a.preventDefault();
       
        let data = {
            name: document.getElementById("home").value
        }

       

        let jsonString = JSON.stringify(data, null, 2);
        document.getElementById('output').textContent = jsonString;

    }
);
localStorage.setItem('data', JSON.stringify(data));
let saved = JSON.parse(localStorage.getItem('data'));
console.log(saved.name);