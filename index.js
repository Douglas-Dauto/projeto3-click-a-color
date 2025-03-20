(function () {
    const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
    const btn = document.getElementById("btn");
    const yourColor = document.getElementsByClassName('color')[0];
    let oldValue = null;
    
    btn.addEventListener('click', () => {
        let random = null;
        let value = null;

        generateValue();

        if(oldValue !== null) {
            while (oldValue === value) {
                generateValue();
            }
        }

        function generateValue() {
            random = Math.random() * 4;
            value = colors[random <= .5 ? Math.floor(random) : Math.ceil(random)];
        }

        document.body.style.backgroundColor = value;
        yourColor.innerHTML = value;
        oldValue = value;
    });
})();