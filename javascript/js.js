let bioBtn = document.getElementById("bio-btn");
let bioContent = document.getElementById('bio-content');
let bioContainer = document.getElementById('bio');

let bioBtnArrow = document.getElementById("bio-btn-arrow");

bioBtn.addEventListener('click', function (){
    if(!bioBtn.classList.contains('bio-btn-open')){
        bioBtn.classList.add('bio-btn-open');

        bioContent.classList.remove('bio-closed');
        bioContent.classList.add('bio-open');

        bioContainer.classList.remove('bio-card-closed');
        bioContainer.classList.add('bio-card-open');

        bioBtnArrow.setAttribute("d", "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 " +
            ".753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z");
    } else if (bioBtn.classList.contains('bio-btn-open')) {
        bioBtn.classList.remove('bio-btn-open');

        bioContent.classList.add('bio-closed');
        bioContent.classList.remove('bio-open');

        bioContainer.classList.remove('bio-card-open');
        bioContainer.classList.add('bio-card-closed');

        bioBtnArrow.setAttribute("d" , "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 ." +
            "753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z");
    }
});