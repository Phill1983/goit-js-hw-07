const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  // Отримуємо заголовок
  const title = category.querySelector("h2");
    const titleText = title.textContent;
    
  // Підрахунок елементів списку
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${itemsCount}`);
});
