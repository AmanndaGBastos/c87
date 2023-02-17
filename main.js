
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	//AQUI DENTRO: verificar o nome de todas as variáveis se estão iguais aos criados nas linhas 7, 8 e 10
	
	fabric.Image.fromURL(get_image, function(img){ // ajustar o "get_Image", deve ser igual ao da linha 12
	block_image_object = img, // aqui não é vírgula mas ponto e vírgula
		block_image_object.scaleToWidth(block_image_width),  // aqui não é vírgula mas ponto e vírgula
		block_image_object.scaleToHeight(block_image_height),  // aqui não é vírgula mas ponto e vírgula
		block_image_object.set({
			top=blockY, // aqui não é sinal de igual, é dois pontos (top:blockY)
			left=blockX //aqui também é dois pontos
        })
canvas.add(block_image_object);
	)} //inverter: primeiro fecha as chaves e depois parenteses
	}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	
	//NOS BLOCOS de if ABAIXO: VERIFICAR SE O NOME DA FUNÇÃO CRIADA NA linha 12 está correto! É a função que carrega a imagem.

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_image('rr1.png'); 
		console.log("r");
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		new_image('gr.png');
		console.log("g");
		blockX = 200;
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		new_image('yr.png');
	    console.log("y");
		blockX =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '72')
	{
		new_image('pr.png');
	console.log("p");
		blockX = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{new_image('br.png');
	console.log("b");
		blockX = 700;
	// enviar ranger índigo
	}
}              //ADICIONAR ARQUIVO fabric.js UTILIZADO NA AULA 86, SEM ELE NÃO VAI FUNCIONAR. ****

