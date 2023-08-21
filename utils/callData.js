import { renderNavPill, renderTabPane } from "../controllers/main.js";

export const getAllNavTabs = async () => {
  try {
    const response = await fetch("../data/Data.json");
    const { navPills } = await response.json();
    renderNavPill(navPills);
  } catch (error) {
    console.log(error);
  }
};

export const getAllTabPanes = async () => {
  try {
    const response = await fetch("../data/Data.json");
    const { tabPanes } = await response.json();
    renderTabPane(tabPanes);
  } catch (error) {
    console.log(error);
  }
};
