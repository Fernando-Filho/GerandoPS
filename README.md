Esse projeto nasceu da necessidade de uma cliente, no qual precisava a mesma recebia centenas de movimentações em EXCEL que precisavam ser lançadas manualmente no sistema Fortes AC Pessoal.

O Fortes aceita importação por meio do arquivo .PS, uma variação de um arquivo .TXT, pensando nessa necessidade dela, dei início a esse projeto, de gerar um código que fizesse a conversão de EXCEL para arquivo .PS. Como já tinha conhecimento em JS optei em adaptar de EXCEL para o SHEETS, pois ele aceita nativamente o JS.

O Sheets ou Planilhas do Google, tem um ambiente de script interno no qual todos códigos são reconhecidos entre si, no qual não precisam ser importados, por isso não existe importação entre eles.


No entanto, um ponto negativo é que como o Google tem o sistema de nuvem o DRIVE, ele não faz importação de projetos do github, precisando ser feito todo o projeto por lá. Dessa forma optei em criar o projeto no VsCode e subir no github, e apenas quando pronto copiava e colava para o ambiente do Google.

Apesar do projeto ter sido feito para a necessidade de uma cliente, foi pensado na distribuição para quantas pessoas forem necessária, dessa forma o código não está diretamente vinculado na pasta, foi gerada bibliotecas de código no DRIVE e a planilha aponta para elas, dessa forma qualquer planilha com o link tem acesso a utilizar o script.
