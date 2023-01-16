const navList = document.querySelector("ul#categories");
const navItems = navList.children;
console.log("Number of categories:", navItems.length);

for (let i = 0; i < navItems.length; i += 1) {
  console.log("Category:", navItems[i].firstElementChild.textContent);
  console.log("Elements:", navItems[i].lastElementChild.children.length);
}