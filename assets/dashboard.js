/* Buildless subject navigation. Each card opens an independent graph. */
(() => {
 'use strict';
 const search=document.getElementById('subject-search'),sort=document.getElementById('sort'),cards=[...document.querySelectorAll('.subject-card')],groups=[...document.querySelectorAll('.subject-group')],nav=[...document.querySelectorAll('[data-branch]')];
 let branch='all';const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 function update(){
  const q=normalize(search.value.trim());let count=0;
  for(const card of cards){card.hidden=!((branch==='all'||card.dataset.category===branch)&&q.split(/[^a-z0-9]+/).filter(Boolean).every(term=>normalize(card.dataset.search).split(/[^a-z0-9]+/).some(word=>word.startsWith(term))));if(!card.hidden)count++;}
  for(const group of groups){const grid=group.querySelector('.subject-grid');const list=[...grid.children];list.sort(sort.value==='alphabetical'?(a,b)=>a.dataset.title.localeCompare(b.dataset.title):(a,b)=>+a.dataset.order-+b.dataset.order);grid.append(...list);const n=list.filter(c=>!c.hidden).length;group.hidden=n===0;group.querySelector('.group-count').textContent=n+' subject'+(n===1?'':'s');}
  document.getElementById('result-count').textContent=count+' of '+cards.length+' subjects';document.getElementById('empty').hidden=count!==0;
  document.getElementById('clear').hidden=!q&&branch==='all';for(const link of nav)link.setAttribute('aria-current',String(link.dataset.branch===branch));
 }
 for(const link of nav)link.addEventListener('click',event=>{event.preventDefault();branch=link.dataset.branch;update();});
 function clear(){branch='all';search.value='';sort.value='curriculum';update();}
 search.addEventListener('input',update);sort.addEventListener('change',update);document.getElementById('clear').onclick=clear;document.getElementById('empty-clear').onclick=clear;
 update();
})();
