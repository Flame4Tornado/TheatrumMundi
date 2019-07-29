import React from 'react';

const Adaptation = (props) => {

    const fetchDes = () =>{
        let des;
        switch(props.whichOne){
            case 'rev':
                des = 'Sztuka od której wszystko się zaczęło. Swoisty początek naszego teatru. Nasza adaptacja może i nie wnosi zbyt wiele nowego do samej komedii Fredry, jest to swoiste odegranie pierwowzoru, jednakże przyniosła wiele radości naszej widowni.'
                break;
            case 'tgg':
                des = 'Ta sztuka to skok na głęboką wodę w naszym teatrze. Po sukcesie "Zemsty" postanowiliśmy wystawić coś ambitniejszego i bardziej oryginalnego. Nasza adaptacja powieści Fitzgeralda stara się jak najwierniej odtworzyć klimat epoki jazzu oraz dać dla widza wiele do myślenia'
                break;
            case 'tan':
                des = 'To najcieplej przyjęta sztuka naszego teatru. Ale co tu dużo mówić, Mrożek i jego rewelacyjny humor zobowiązuje! Przy obsadzaniu ról do tej sztuki staraliśmy się o jak najwierniejsze odtworzenie postaci oryginalnych tak, aby aktorzy grali samych siebie.'
                break;
            case 'dzi':
                des = 'To adaptacja pełnych "Dziadów" Adama Mickiewicza. Nie jest to tylko znana wszystkim część druga. To kompletna adaptacja wszystkich części począwszy na nieukończonej części pierwszej, a skończywszy na części trzeciej. Spektakl został zwycięzcą w kategorii szkół ponadgimnazjalnych w Internetowym Przeglądzie Teatru Telewizji.';
                break;
            case 'sok':
                des = 'Stworzony w ramach festiwalu charytatywnego musical to ostatnia szutka naszego teatru. Nie jest może długą sztuką(trwa zaledwie godzinę), ale jest bardzo intensywny - pełno tu muzyki, tańca, a co najważniejsze emocji!'
                break;
            default: break;
        }
        return des;

    }
    const des = fetchDes();
    return (  

            <div className="adaptation">
                <div className="description__wrapper">
                    <h2 className="heading-2 description__title">Nasza Adaptacja</h2>
                    <p className="description__content">
                        {des}
                    </p>
                </div>
            </div>
        );
}

 
export default Adaptation;