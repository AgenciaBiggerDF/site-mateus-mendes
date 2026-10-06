const ebookDetails={
hipertrofia:{category:'NUTRIÇÃO · GANHO DE MASSA',title:'Hipertrofia Máxima',summary:'Ganhar massa exige mais do que simplesmente comer mais. Conheça como alimentação, treino e recuperação se conectam — e leve os fundamentos para a sua rotina com mais clareza.',audience:'Quem pratica musculação e quer entender melhor a alimentação para o ganho de massa muscular.',status:'Gratuito',action:'Receber ebook gratuito com a Bia',availability:'Envio pelo WhatsApp após solicitar o material.',heading:'O que você vai encontrar',points:['Como entender a quantidade de comida para o seu caso.','Carboidratos, proteínas e gorduras na estratégia de hipertrofia.','Organização das refeições, hidratação e desempenho no treino.','Como acompanhar a evolução e reconhecer erros comuns.','Treino, recuperação e o papel dos suplementos.']},
emagrecimento:{category:'NUTRIÇÃO · HÁBITOS',title:'Emagrecimento',summary:'Uma proposta para começar a olhar para a alimentação com mais clareza e construir escolhas que cabem na vida real. O ebook será gratuito e está em preparação.',audience:'Quem quer conhecer a abordagem do Mateus para alimentação, hábitos e emagrecimento.',status:'Gratuito · Em breve',action:'Consultar disponibilidade com a Bia',availability:'Material ainda em preparação.',heading:'Proposta de conteúdo',editorial:'Os temas abaixo são uma proposta editorial. O conteúdo será confirmado na finalização do ebook.',points:['Comida de verdade como ponto de partida.','Organização da alimentação na rotina.','Construção de hábitos e constância.','Como conectar seus objetivos às escolhas do dia a dia.']},
sono:{category:'DESCANSO · ROTINA',title:'Dormir Bem',summary:'O descanso também faz parte do cuidado com você. Este ebook reúne explicações sobre sono e hábitos do dia a dia, com uma abordagem prática para entender horários, ambiente e rotina.',audience:'Quem quer compreender melhor o sono e organizar hábitos para cuidar do descanso.',status:'Pago · Em breve',action:'Saber mais com a Bia',availability:'Preço e checkout serão disponibilizados em breve.',heading:'O que você vai encontrar',points:['Relógio biológico, cronotipo e regularidade dos horários.','Luz, telas e ambiente na rotina de sono.','Cafeína, álcool e alimentação: temas que merecem atenção.','Exercício, estresse e hábitos ao longo do dia.','Como organizar uma rotina de sono e quando buscar ajuda profissional.']},
mercado:{category:'COMIDA DE VERDADE · ESCOLHAS',title:'Mercado Saudável',summary:'Boas escolhas começam antes de chegar ao prato. A proposta é transformar a ida ao mercado em um passo mais simples para colocar comida de verdade na rotina. Material em preparação.',audience:'Quem quer mais clareza para organizar as compras e levar alimentos para o dia a dia.',status:'Pago · Em breve',action:'Saber mais com a Bia',availability:'Material em preparação. Preço e checkout em breve.',heading:'Proposta de conteúdo',editorial:'Os temas abaixo são uma proposta editorial. O conteúdo será confirmado na finalização do ebook.',points:['Frutas, verduras e legumes nas escolhas do mercado.','Organização de uma lista de compras para sua rotina.','Variedade de alimentos e praticidade no dia a dia.','Como conectar as compras ao que você quer colocar no prato.']}
};
const ebookDialog=document.querySelector('#ebook-detail');
document.querySelectorAll('[data-ebook]').forEach(button=>button.addEventListener('click',()=>{
 const detail=ebookDetails[button.dataset.ebook];
 const card=button.closest('article');
 document.querySelector('#ebook-title').textContent=detail.title;
 document.querySelector('#ebook-category').textContent=detail.category;
 document.querySelector('#ebook-summary').textContent=detail.summary;
 document.querySelector('#ebook-audience').textContent=detail.audience;
 document.querySelector('#ebook-status').textContent=detail.status;
 document.querySelector('#ebook-availability').textContent=detail.availability;
 document.querySelector('#ebook-points-heading').textContent=detail.heading;
 document.querySelector('#ebook-editorial').textContent=detail.editorial||'';
 const action=document.querySelector('#ebook-action');action.textContent=detail.action;action.href=button.dataset.contact;
 document.querySelector('#ebook-points').replaceChildren(...detail.points.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));
 const visual=card.querySelector('.cover').cloneNode(true);document.querySelector('#ebook-visual').replaceChildren(visual);
 document.body.style.overflow='hidden';ebookDialog.showModal();ebookDialog.scrollTop=0;
}));
ebookDialog.querySelector('.modal-close').addEventListener('click',()=>ebookDialog.close());
ebookDialog.addEventListener('close',()=>{document.body.style.overflow='';});
ebookDialog.addEventListener('click',event=>{if(event.target===ebookDialog){const r=ebookDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)ebookDialog.close()}});
