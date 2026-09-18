document.addEventListener('DOMContentLoaded',()=>{
  const pets=document.querySelector('.hero-pets');
  pets.innerHTML='<img class="pet-composite" src="assets/hero-pets-transparent.png" alt="Gato com boné azul ao lado de cachorro com chapéu marrom">';
  const composite=pets.querySelector('.pet-composite');
  Object.assign(pets.style,{zIndex:'4',right:'0',width:'58%',height:'100%'});
  Object.assign(composite.style,{position:'absolute',right:'-2%',bottom:'0',width:'min(820px,128%)',height:'auto',maxHeight:'100%',objectFit:'contain',objectPosition:'bottom right',display:'block'});
  const nav=document.querySelector('.navbar-collapse');
  document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{if(nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide()}));
  const buttons=document.querySelectorAll('.filter-btn');
  buttons.forEach(button=>button.addEventListener('click',()=>{buttons.forEach(item=>item.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.post-item').forEach(item=>{item.classList.toggle('d-none',filter!=='all'&&item.dataset.category!==filter)})}));
  const form=document.querySelector('#newsletterForm');
  form.addEventListener('submit',event=>{event.preventDefault();const message=document.querySelector('#formMessage');message.textContent='Pronto! Seu carinho está a caminho 💛';form.reset()});
  const modalSearch=document.querySelector('#modalSearch');
  modalSearch.addEventListener('input',()=>{const q=modalSearch.value.toLowerCase();document.querySelector('.search-hint').textContent=q?`Buscando por “${q}” — confira nossos artigos abaixo.`:'Experimente buscar por “vacinas” ou “saúde”.'});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.vaccine-card,.clinic-panel,.post-card,.brush-note,.newsletter-box').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
});
