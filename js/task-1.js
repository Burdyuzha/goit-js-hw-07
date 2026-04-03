const categories = document.getElementById("categories");
const categoriesArr = categories.querySelectorAll("li.item");
const categoriesAmount = categoriesArr.length;
console.log(`Number of category: ${categoriesAmount}`);
categoriesArr.forEach(item => {
  const title = item.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const categoryLength = item.querySelectorAll("li").length;
  console.log(`Elements: ${categoryLength}`);
});

