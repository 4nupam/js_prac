var btn = document.querySelectorAll('.inner_button');
var divs = document.querySelectorAll('.inner_div');

btn.forEach(t => {
    t.addEventListener('click', () => {
        const targetId = t.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);

        btn.forEach(button => button.classList.remove('active'));
        divs.forEach(content => content.classList.remove('active'));

        t.classList.add('active');
        targetDiv.classList.add('active');
    });
});


