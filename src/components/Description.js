import React from 'react';

const Description = (props) => {

    const fetchDes = () =>{
        let des;
        let title;
        switch(props.whichOne){
            case 'rev':
                des = 'Tę historię zna chyba każdy, kto uczęszczał do szkoły podstawowej: Cześnik Raptusiewcz, mieszkający po sąsiedzku ze znienawidzonym Rejentem Milczkiem, pragnie ożenić się z owdowiałą Podstoliną (głównie z uwagi na jej majątek). Świadom swoich braków, Cześnik wzywa na pomoc Papkina, podającego się za pożeracza serc niewieścich i wielkiego bohatera, a w rzeczywistości będącego tchórzem i pyszałkiem. To zresztą nie jedyny wątek dramatu - równie istotna dla intrygi jest również miłość Klary (bratanicy Cześnika) i Wacława (syna Milczka).'
                title = 'Zemsta (2018)';
                break;
            case 'tgg':
                des = "Szalone lata dwudzieste. Jay Gatsby jest tragicznie zakochany w pochodzącej z dobrego domu pięknej i rozpuszczonej Daisy Buchanan, która wiele lat wcześniej porzuciła go dla bogatszego. Gdy mężczyzna wreszcie dochodzi do majątku, robi wszystko, aby odzyskać kobietę swoich marzeń. Jednak jego proletariackie korzenie oraz tajemnicze pochodzenie ogromnego majątku stoją na przeszkodzie prawdziwego szczęścia."
                title = 'Wielki Gatsby (2018)';
                break;
            case 'tan':
                des = 'Bohaterem sztuki jest Artur, syn awangardowego artysty Stomila i Eleonory. Rodzice burzyli się przeciwko tradycji, szokowali i niszczyli stary porządek. Artur dorasta więc w świecie pozbawionym ładu, hierarchii i moralnego porządku. On sam nie ma więc możliwości buntowania się przeciwko konwencji i uzyskania w ten sposób dojrzałości.'
                title = 'Tango (2018)';
                break;
            case 'dzi':
                des = 'Akcja toczy się w Dzień Zaduszny (w nocy) w kaplicy, gdzie zebrała się grupa ludzi z pobliskiej wioski. Trwa ludowy obrzęd Dziadów, któremu przewodniczy Guślarz. Zebrani wzywają kolejno dusze czyśćcowe, chcąc ulżyć im w cierpieniu. Na ich wezwanie przybywają trzy rodzaje duchów: lekkie, ciężkie i pośrednie.';
                title = 'Dziady (2018)'

                break;
            case 'sok':
                des = 'Lata 60. XX wieku. Młoda początkująca piosenkarka Julia stara się spełnić swoje marzenia o karierze w odległej Kalifornii. Jednakże na jej drodze pojawia się młody kompozytor Walt, a młodych artystów zaczyna łączyć miłość.'
                title = 'Sen o Kalifornii (2019)';
                break;
            default: break;
        }
        let arr = [];
        arr.push(des);
        arr.push(title);
        return arr;

    }
    const des = fetchDes();
    return (  

            <div className="description">
                <div className="description__wrapper">
                    <h2 className="heading-2 description__title">{des[1]}</h2>
                    <p className="description__content">
                        {des[0]}
                    </p>
                </div>
            </div>
        );
}

 
export default Description;