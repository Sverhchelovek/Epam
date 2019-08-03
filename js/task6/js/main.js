// window.onload = function() {


// }

// let renderProjects = () => {
//     for (let i = 0; i < projects.length; i++) {
//         let card  = document.createElement('div');
//             card.innerHTML = `
//                         <div class="card__photo photo">
                            
//                         </div>
//                         <div class="card__text">
//                             <div class="price">
//                                 <span class="price--orange"> </span><br>
//                             </div>
//                             <div class="adress">
//                                 <span class="district"></span>
//                                 <p class="location"> Продажа в Киеве, </p>
//                             </div>
//                             <a href="" class="button button__details">Details</a>
//                         </div>
//                         <ul class="card__description">
//                             <li>
//                                 <span>Код: </span><span class="code"></span>
//                             </li>
//                             <li>
//                                 <span>Тип: </span><span class="type"></span>
//                             </li>
//                             <li>
//                                 <span>Комната: </span><span class="room"></span>
//                             </li>
//                             <li>
//                                 <span>Площа кв.м.: </span><span class="square"></span>
//                             </li>
//                             <li>
//                                 <span>Поверх: </span><span class="floor"></span>
//                             </li>
//                         </ul>
//                 `;

//             card.classList.add('card');
//             cards.appendChild(card);
//             let photo = document.querySelectorAll('.photo');
//             photo[i].style.backgroundImage = projects[i].photo

//             let price = document.querySelectorAll('.price--orange');
//             price[i].innerText = `$ ${projects[i].price} `;

//             let location = document.querySelectorAll('.location');
//             location[i].innerText = projects[i].location;

//             let district = document.querySelectorAll('.district');
//             district[i].innerHTML = ` Продажа квартиры в Киеве, <br> ${projects[i].district}`;

//             let code = document.querySelectorAll('.code');
//             code[i].innerText = projects[i].code;

//             let type = document.querySelectorAll('.type');
//             type[i].innerText = projects[i].type;

//             let room = document.querySelectorAll('.room');
//             room[i].innerText = projects[i].room;

//             let square = document.querySelectorAll('.square');
//             square[i].innerText = projects[i].square;

//             let floor = document.querySelectorAll('.floor');
//             floor[i].innerText = projects[i].floor;
//     }
// };

// renderProjects();

//   function addElement() {

//     // создаем новый элемент div
//     // и добавляем в него немного контента

//     var newDiv = document.createElement("div");
//         newDiv.innerHTML = "<h1>Привет!</h1>";

//     // добавляем только что созданый элемент в дерево DOM

//     my_div = document.getElementById("org_div1");
//     document.body.insertBefore(newDiv, my_div);
//   }

//   addElement();



// let a = JSON.parse(data);

// let json = require('/Users/Documents/workspace/test.json');



function load() {
    var mydata = JSON.parse(data);
    alert(mydata[0].tag);
}
