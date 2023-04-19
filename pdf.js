const doct = new jsPDF();

doct.setFillColor(28,41,51);

doct.rect(0,0,220,60, 'f');

doct.setFontSize(14);
doct.setFontType('bold');
doct.setTextColor(255,255,255);


doct.text('Registros fisico',12,50);

let partes= feccha.split('-');

var fechadoct = partes[2] + '-' + partes[1] + '-' + partes[0];


const doctpdf ='${nombre} ${nombre} ${nombre}.pdf';

doct.save(doctpdf);
