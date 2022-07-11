const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

var data = {};

results.filter(item => {
  if(item.id == params.id){
    data = item
  }
})


var el = `
  <div class="mainImage"><img src="${data?.imageUrl}" alt="" /></div>
  <div class="title">${data?.title}</div>
  <div class="author">writing by ${data?.author?.name}</div>
  <div class="body">${data?.body}</div>
`
document.querySelector('.singlePage').innerHTML=el