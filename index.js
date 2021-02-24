var myVar = setInterval(() => {
  let parent = document.querySelector('.page_hero-talents_items');
  let children = parent.children;
  let changeItem = children[0];
  parent.removeChild(changeItem);
  parent.appendChild(changeItem);
}, 3000);
