import { ChoseItemModel } from "../models/ChoseItem.js";
import { getAllNavTabs, getAllTabPanes } from "../utils/callData.js";

getAllNavTabs();
getAllTabPanes();

export const renderNavPill = (navPills) => {
  let innerHtml = "";
  navPills.map((nav, index) => {
    return (innerHtml += `
        <li class="nav-item">
        <a class="nav-link ${index === 0 ? "active" : ""}" id="${
      nav.tabName
    }" data-toggle="pill" href="#${
      nav.type
    }" role="tab" aria-controls="pills-home" aria-selected="true">${
      nav.showName
    }</a>
      </li>
        `);
  });
  document.querySelector("#pills-tab").innerHTML = innerHtml;
};

export const renderTabPane = (tabPanes) => {
  //   get all id
  let ids = [];
  tabPanes.forEach((element) => {
    if (ids.findIndex((item) => item === element.type) === -1) {
      ids.push(element.type);
    }
  });
  let innerHTML = "";
  ids.map((id, index) => {
    return (innerHTML += `
    <div class=" ${
      id === "topclothes" ? "tab-pane fade show active" : "tab-pane fade"
    }" id="${id}" role="tabpanel" aria-labelledby="pills-home-tab-${index}">
       <div class="row" style="width: 100%; height:100%">
       ${renderCard(tabPanes, id)}
       </div>
    </div>`);
  });

  document.querySelector("#pills-tabContent").innerHTML = innerHTML;
};

const renderCard = (tabPanes, id) => {
  let inner = "";
  tabPanes.map((item) => {
    if (item.type === id) {
      return (inner += `
        <div class="card col-3 pb-0" style="height:50%">
        <img src="${item.imgSrc_jpg}" style="height:187px; object-fit:cover" class="img-fluid" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <button class="try-cloth btn btn-primary" onclick="tryCloth('${item.type}', '${item.imgSrc_png}')">Thử đồ</button>
        </div>
      </div>`);
    }
  });
  return inner;
};

let chosenItemArray = [];
const tryCloth = (type, img) => {
  const index = chosenItemArray.findIndex((choose) => choose.type === type);
  const item = new ChoseItemModel(type, img);

  if (index === -1) {
    chosenItemArray.push(item);
  } else {
    chosenItemArray.splice(index, 1, item);
  }

  renderChoosenItem(chosenItemArray);
};

window.tryCloth = tryCloth;

const renderChoosenItem = (array) => {
  console.log(array);
  array.forEach((item) => {
    switch (item.type) {
      case "topclothes":
        document.querySelector(
          ".bikinitop"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;
        break;
      case "botclothes":
        document.querySelector(
          ".bikinibottom"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;

        break;

      case "shoes":
        document.querySelector(
          ".feet"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;

        break;
      case "handbags":
        document.querySelector(
          ".handbag"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;

        break;
      case "necklaces":
        document.querySelector(
          ".necklace"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;

        break;
      case "hairstyle":
        document.querySelector(
          ".hairstyle"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;
        break;
      default:
        document.querySelector(
          ".background"
        ).innerHTML = ` <img src="${item.img}" alt="${item.type}">`;

        break;
    }
  });
};
