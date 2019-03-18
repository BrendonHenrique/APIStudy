class DateHelper{

    constructor(){

        throw new Error('DateHelper cannot be instancied');
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }



    static textoParaData(texto){

        if (/\d{4}-\d{2}-\d{4}/.test(texto)) 
            throw new Error('Data must be in format yyyy-mm-dd');
        
       
        return  new Date(...texto.split('-').map((item,indice) => item - indice % 2));  
                        
    }

}