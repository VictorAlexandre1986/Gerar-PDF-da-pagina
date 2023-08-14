const buttonElement = document.querySelector('.btnGerar');

buttonElement.addEventListener('click', () => {

    //Conteudo do PDF
    const container = document.querySelector('.container');
    

    //Configurações do arquivo final do PDF
    const options = {
        margin:[20,20,20,20],
        filename:'Relatorio.pdf',
        html2canvas: {scale:2},
        jsPDF: {unit:"mm", format:"a4", orientation:"portrait"},
        enableLinks:true,
        image:{type:"jpg", quality:0.95}
    };

   
    //Gerar e baixar o pdf
    html2pdf().set(options).from(container).save();
    html2pdf(container, options);
    

})