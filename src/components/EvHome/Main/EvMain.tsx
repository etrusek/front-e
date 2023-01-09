import React, {SyntheticEvent, useState} from "react";
import './EvMain.css';
import imgQuestion from '/q1.webp';

export const EvMain = () => {
  return (
    <div className="ev_main">
      <div className="main_logo">Ω</div>
      <h1>Witaj rekrucie</h1>
      <article className="ev_article">
        <div>
          <img src="q1.webp" alt="log"/>
        </div>
        <p>Jesteś tutaj nowy? Nie możesz odnaleźć się w grze? Stan konta jest coraz gorszy, a Ty nawet nie wiesz co skillować? Chętnie przyjmiemy Cię do naszej grupy i pomożemy wystartować!</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q2.webp" alt="log"/>
        </div>
        <p>Co możemy Ci zaoferować?</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q3.webp" alt="log"/>
        </div>
        <p> Pomoc w układaniu skill planu - po wstąpieniu do korporacji dostaniesz swojego opiekuna, wspólnie ustalicie
          czego szukasz w EVE. Pamiętaj: chcemy byś był efektywny w tym, co robisz! To obopólna korzyść, dla Ciebie i
          dla naszej grupy. - Wiedzę - z nami poznasz mechanikę gry. Zaczniemy od rzeczy prostych zwiększających Twoje
          bezpieczeństwo tak, abyś miał szanse poznać bardziej złożone tematy nie martwiąc się o utratę statku. Nauczysz
          się bezpiecznie latać i skutecznie walczyć. To wszystko zagwarantują szkolenia i pomoc Twojego opiekuna.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q4.webp" alt="log"/>
        </div>
        <p> Pieniądze - mieszkamy w WH (jeżeli nie wiesz co to jest, to dowiesz się tego bardzo szybko), dzięki temu
          będziesz zarabiał o wiele więcej i szybciej niż robiłeś to w Imperium. Główne źródło naszego dochodu to
          eksploracja i pozostałości z PVP. Dzięki dużym zarobkom nie będziesz bał się walki i ewentualnej utraty
          statku, pozwoli Ci to na szybki rozwój we wszelkich aspektach gry. Nikt z aktywnych graczy naszej korporacji
          nie kupuje PLEX’a za złotówki, Ty również możesz sfinansować swoją grę za pomocą ISKów. Możesz również liczyć
          na pomoc finansową na początku - korporacja udziela pożyczki na skompletowanie floty statków, która umożliwi
          Ci bezproblemowe funkcjonowanie w środowisku WH.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q5.webp" alt="log"/>
        </div>
        <p> Wzorowy poziom organizacji - obowiązkowo korzystamy z zestawu Discord + mikrofon, Gwarantuje to, że żadna
          duża, niezaplanowana akcja Cię nie ominie. Szanujemy Twój czas. Jeżeli to my przygotowujemy poważną operację,
          zostaniesz o tym powiadomiony kilka dni wcześniej. Będziesz miał czas żeby się przygotować i znaleźć wolny
          wieczór.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q6.webp" alt="log"/>
        </div>
        <p>Ścieżkę kariery - dołączając do naszej korporacji masz okazję stworzyć coś niemal od zera. Jeżeli tylko
          chcesz osiągnąć coś w ramach korporacji, to nic nie stoi na przeszkodzie, nie ma tu skostniałej struktury
          złożonej z graczy, którzy będą blokować Twój rozwój. W ciągu kilku miesięcy to Ty będziesz uczył nowych
          rekrutów podstaw gry i poprowadzisz ich do walki pod nieobecność bardziej doświadczonych kolegów.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q7.webp" alt="log"/>
        </div>
        <p> <b> Jest wiele innych, większych korporacji do których możesz dołączyć, ale czy ich członkowie poświęcą Ci tyle
          uwagi co my?</b></p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q2.webp" alt="log"/>
        </div>
        <p>Czego od Ciebie oczekujemy?</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q8.webp" alt="log"/>
        </div>
        <p>Aktywności Nie musisz grać codziennie, wszyscy pracujemy i uczymy się wiemy, że nie zawsze można być
          zalogowanym. Mimo to powinieneś kontrolować swój skill plan nawet, jeżeli Cie nie ma, przed dłuższą
          nieobecnością warto również to zgłosić.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q9.webp" alt="log"/>
        </div>
        <p>Zaufania Trafiając do nas dostajesz dostęp do wiedzy i zaplecza (amunicja, moduły) możesz z nich korzystać do
          woli, ufamy Ci i tego samego oczekujemy od Ciebie. Sprawy korporacji pozostają w naszej grupie</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q10.webp" alt="log"/>
        </div>
        <p>Zaangażowania Oprócz Twojego opiekuna każdy z graczy zawsze Ci pomoże, w zamian oczekujemy 100% skupienia na
          szkoleniach, uważnie słuchaj starszych kolegów. Jeżeli ktoś Ci nie pomógł bądź zachował się nieodpowiednio,
          nie wahaj się tego zgłosić, CEO załatwi to z delikwentem w stylu dzikiego zachodu.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q11.webp" alt="log"/>
        </div>
        <p>Dyscypliny Jak szybko zauważysz, na naszym kanale można pośmiać się z wszystkiego i wszystkich, cenimy luźną
          atmosferę; wychodzimy z założenia, że gra ma być przyjemnością, a nie stresem. Jedynym wyjątkiem jest PVP, w
          trakcie walki wprowadzamy wojskową dyscyplinę, jesteśmy dumni z tego aspektu, szybko sam go docenisz.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q12.webp" alt="log"/>
        </div>
        <p>Nasza oferta skierowana jest również dla bardziej doświadczonych graczy, myślę że tutaj wystarczy opis w
          kilku słowach.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q13.webp" alt="log"/>
        </div>
        <p>Mieszkamy w WH C4 ze statikiem do C2 i C3. PVP, jeżeli już do niego dojdzie, strzelamy do wszystkich bez
          względu na nacje czy korporacje. Latamy flotami armorowymi i shieldowymi na pełnym supporcie.</p>
      </article>
      <article className="ev_article">
        <div>
          <img src="q14.webp" alt="log"/>
        </div>
        <p>[Kontakt in-game] Za rekrutację odpowiedzialny jest Nythyx, zainteresowanych prosimy o kontakt z nim.
          Zapraszamy również na nasz kanał publiczny: UI PUBLIC lub skorzystaj z formularza poniżej!</p>
      </article>
    </div>
  )
}