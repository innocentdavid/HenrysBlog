var els = ``;

results.forEach(item => {
  var el = `
    <div class="item">
      <div class="item-image"><img src="${item.imageUrl}" alt="${item.title}'s image" /></div>
      <div class="item-title">${item.title}</div>
      <div class="item-description">
        <p>${item.description}... <a href="/single.html?id=${item.id}">read more</a></p>
      </div>
    </div>
  `;
  els += el;
});

document.querySelector('.items').innerHTML=els;