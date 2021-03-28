/* Funções que abre e fecha o menu superior */
function abrirMenu(){
	document.getElementById('menujs').style.margin = '7px';
}

function fecharMenu(){
	document.getElementById('menujs').style.margin = '-100px';
}

/* Funções que abre e fecha a pagina */
function abrirPagina(){
	document.getElementById('abrirPagina').style.margin = '10px';
	document.getElementById('setaFechar').style.marginLeft= "60px";
	document.getElementById('seta').style.marginLeft = '-100px';
	document.getElementById('abrirPagina').style.display = 'block';
}
function fecharPagina(){
	document.getElementById('abrirPagina').style.marginTop = '-400%';
	document.getElementById('setaFechar').style.marginLeft = '-5%';
	document.getElementById('seta').style.marginLeft = '7%';
}