import React, { Component } from "react";
import Card from "../components/Card";
import watch1 from '../img/watch-1.png';
import watch2 from '../img/watch-2.png';
import watch3 from '../img/watch-3.png';
import watch4 from '../img/watch-4.png';
import watch5 from '../img/watch-5.png';



class Theatre extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="theatre">
          <Card
            watch={watch1}
            title={"Zemsta"}
            des={
              "Komedia Aleksandra Fredry w czterech aktach, która powstała w początku lat 30. XIX wieku."
            }
            date={"26.02.2018r."}
            url={'/theatre/play/rev'}
          />
          <Card
            watch={watch2}
            title={"Wielki Gatsby"}
            des={
              "Historia toczy się na początku lat 20. XX wieku w Nowym Jorku i jego okolicach. Był to okres prosperity gospodarczej, prohibicji, rozwoju zorganizowanej przestępczości i upadku moralności."
            }
            date={"30.04.2018r."}
            url={'/theatre/play/tgg'}

          />
          <Card
            watch={watch3}
            title={"Tango"}
            des={
              "Bohaterem sztuki jest Artur, syn awangardowego artysty Stomila i Eleonory. Artur dorasta więc w świecie pozbawionym ładu, hierarchii i moralnego porządku."
            }
            date={"30.09.2018r."}
            url={'/theatre/play/tan'}
          />
          <Card
            watch={watch4}
            title={"Dziady"}
            des={
              "Trwa ludowy obrzęd Dziadów, któremu przewodniczy Guślarz. Zebrani wzywają kolejno dusze czyśćcowe, chcąc ulżyć im w cierpieniu."
            }
            date={"31.11.2018r."}
            url={'/theatre/play/dzi'}

          />
          <Card
            watch={watch5}
            title={"Sen o Kalifornii"}
            des={
              "Historia początkującej piosenkarki Julii, która stara się spełnić swoje marzenia."
            }
            date={"7.02.2019r."}
            url={'/theatre/play/sok'}

          />

        </div>
      </>
    );
  }
}

export default Theatre;
