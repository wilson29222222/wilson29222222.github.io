function showPage(pageId) {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('pedidos').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('pedidoForm').addEventListener('submit', function(e)
{
e.preventDefault();
alert('Pedido enviado, gracias paaa');
this.reset();
});