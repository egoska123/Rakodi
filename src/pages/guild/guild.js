import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";

import styles from "./guild.module.scss"

import tg from "../../images/homeImg/Group (4).svg"
import logo from "../../images/guildImg/logo_Racodi 1 (1).svg"
import video from "../../images/guildImg/video_2025-03-09_15-42-53.mp4"
import borderB from "../../images/guildImg/Vector (6).svg"
import borderT from "../../images/guildImg/Vector (7).svg"
import rectangleB from "../../images/guildImg/Rectangle 1040.svg" 
import cardBlue from "../../images/guildImg/Cards (2).svg" 
import cardBlueIS from "../../images/guildImg/Frame 3456.svg" 
import cardBlack from "../../images/guildImg/Cards-black.svg" 
import rectangleY from "../../images/guildImg/Rectangle 1048.svg" 
import baba from "../../images/guildImg/baba.svg" 
import baby from "../../images/guildImg/baby.svg" 
import arrow from "../../images/guildImg/Line 29.svg" 
import school from "../../images/guildImg/school.svg"
import cilSchool from "../../images/guildImg/cil-school.svg"
import person from "../../images/guildImg/person-workspace.svg"
import persPrbSol from "../../images/guildImg/Group 1053.svg"
import banner from "../../images/guildImg/Group 1045 (2).svg"
import yt from "../../images/guildImg/Group (5).svg"
import smile from "../../images/guildImg/smile.svg"
import recEnd from "../../images/guildImg/Rectangle 1045.svg"
import borderEnd from "../../images/homeImg/Vector (9).svg"
import arrowF from "../../images/guildImg/arrow-down-right.svg"
import menu from "../../images/guildImg/menu.svg"
import lineL from "../../images/homeImg/Line 28.svg"
import lineB from "../../images/guildImg/Line 29 (1).svg"
import probSolMob from "../../images/guildImg/Frame 3545 (4).svg"
import borderEndMob from "../../images/guildImg/Vector (11).svg"



const Guild = () => {

    const [menuVisible, setMenuVisible] = useState(false);
        const changeMenuVisible = () => {
            setMenuVisible(!menuVisible);
        }
    
        const [headerHeight, setHeaderHeight] = useState(0);
        const headerRef = useRef(null);
    
        useEffect(() => {
            const updateHeaderHeight = () => {
                if (headerRef.current) {
                    setHeaderHeight(headerRef.current.offsetHeight);
                }
            };
        
            // Поставим setTimeout, чтобы обновление высоты происходило после рендера
            setTimeout(updateHeaderHeight, 0);
        
            window.addEventListener('resize', updateHeaderHeight);
        
            return () => {
                window.removeEventListener('resize', updateHeaderHeight);
            };
        }, []); // Пустой массив зависимостей, т.е. эффект сработает только один раз после первого рендера
        

    const rectanglesB = [];
    const rectanglesY = [];
    const rectEnd = [];

    for (let i = 0; i < 13; i++) {
        rectanglesB.push(<img key={i} src={rectangleB} alt={`Image ${i + 1}`} style={{width: "4.23vw", height: "4.51vw"}} />);
    }

    for (let i = 0; i < 11; i++) {
        rectanglesY.push(<img key={i} src={rectangleY} alt={`Image ${i + 1}`} style={{width: "4.23vw", height: "4.51vw"}} />);
    }

    for (let i = 0; i < 12; i++) {
        rectEnd.push(<img key={i} src={recEnd} alt={`Image ${i + 1}`} style={{width: "4.23vw", height: "4.51vw"}} />);
    }


    return(
        <div className={styles.Global}>
            <header  className={styles.headerCont}>
                <div ref={headerRef} className={styles.headerHome}>
                    <img className={styles.logo} src={logo}/>
                    <div className={styles.navBar}>
                        <div className={styles.navElement}>
                            <Link to="/"><span className={styles.noAct}>Экосистема</span></Link>
                            <span className={styles.noAct}>/</span>
                        </div>
                        <div className={styles.navElement}>
                            <Link to="/guild"><span className={styles.act}>Гильдия</span></Link>
                            <span className={styles.noAct}>/</span>
                        </div>
                        <div className={styles.navElement}>
                            <Link to="/token"><span className={styles.noAct}>Криптотокен</span></Link>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <Link className={styles.contactButon} onClick={() => window.location.href = 'https://t.me/RakodiToken'}>
                            Telegram
                            <img src={tg}/>
                        </Link>
                    </div>
                    <button className={styles.menuBtn} onClick={changeMenuVisible}>
                        <img src={menu}/>
                    </button>
                </div>
                <div className={styles.hed} style={{ height: `${headerHeight}px` }}></div>
                <div className={`${styles.menuCont}`}>
                    <div className={menuVisible ? styles.menuVisible : styles.menu}>
                        <Link to="/" className={styles.linkBtn}>Экосистема</Link>
                        <Link to="/guild" className={styles.linkBtn}>Гильдия</Link>
                        <Link to="/token" className={`${styles.menBtn3} ${styles.linkBtn}`}>Криптотокен</Link>
                    </div>
                </div>
            </header>
            <main>
                <div className={styles.mainFirst}>
                    <div className={styles.lpartMainF}>
                        <p className={styles.guildText}>Гильдия</p>
                        <div className={styles.guildBlock}>
                            <img className={styles.borderB} src={borderB}/>
                            <img className={styles.borderT} src={borderT}/>
                            <p>Обсудим детально <br/> что это такое, <br/> что мы делаем и <br/> что можем вам дать</p>
                        </div>
                    </div>
                    <div className={styles.rpartMainF}>
                        <div className={styles.video}>
                            <video className={styles.vid} autoPlay loop muted style={{width: "45.83vw", height: "45.83vw"}} >
                                <source src={video} type="video/mp4"/>
                                Ваш браузер не поддерживает видео.
                            </video>
                            <video className={styles.vidMob} autoPlay loop muted >
                                <source src={video} type="video/mp4"/>
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                        <div className={styles.guildBlockMob}>
                            <img className={styles.borderB} src={borderB}/>
                            <img className={styles.borderT} src={borderT}/>
                            <p>Обсудим детально <br/> что это такое, <br/> что мы делаем и <br/> что можем вам дать</p>
                        </div>
                    </div>
                </div>
                <div className={styles.mainSecond}>
                    <div className={styles.mainSecondTop}>
                        <p className={styles.teamText}>Команда</p>
                        <div className={styles.rectanglesB}>
                            {rectanglesB}
                        </div>
                    </div>
                    <div className={styles.mainSecondBottom}>
                        <img src={cardBlueIS}/>
                        <img src={cardBlack}/>
                    </div>
                </div>
                <div className={styles.mainThird}>
                    <div className={styles.mainThirdConc}>
                        <div className={styles.rectanglesY}>
                            {rectanglesY}
                        </div>
                        <p className={styles.concText}>Концепция</p>
                    </div>
                    <div className={styles.babaBlock}>
                        <img className={styles.babaMob} src={baba}/>
                        <div className={styles.dialog}>
                            <p className={styles.dialogTop}>Сейчас предлагаю сделать акцент на концепции. <br/> Нынешние проблемы в социуме идут от <br/>непониманием большинством современных <br/> инструментов и как следствие - трудности у <br/> огромного числа людей с социальным лифтом. Это <br/> те задачи которые мы хотим решить.
                            </p>
                            <p className={styles.dialogBottom}>Если простым языком - мы хотим учить тех кто <br/> хочет сделать свою жизнь легче, проще и <br/> счастливее. Использовать современные  <br/> технологии для обучения и заработка. Помочь во <br/> всём разобраться. О том что интернет, как и <br/> прочие инструменты, был создан для того - что- <br/> бы улучшать жизнь.
                            </p>
                        </div>
                        <img className={styles.baba} src={baba}/>
                    </div>
                    <div className={styles.socialLift}>
                        <p className={styles.socialLiftText}>Современный социальный лифт должен выглядить <br/> так:</p>
                        <p className={styles.socialLiftTextMob}><p>Современный</p> <p>социальный лифт</p> <p>должен выглядить так:</p></p>
                        <div className={styles.socialLiftBlock}>
                            <div className={styles.babyBlock}>
                                <img className={styles.socialLiftImg} src={baby} />
                                <p className={styles.socialLiftT}><p>Родился/</p>  <p>детский сад</p></p>
                            </div>
                            <div className={styles.arrow}>
                                <img src={arrow}/>
                            </div>
                            <div className={styles.babyBlock}>
                                <img className={styles.socialLiftImg} src={school} />
                                <p className={styles.socialLiftT}>Школа</p>
                            </div>
                            <div className={styles.arrow}>
                                <img src={arrow}/>
                            </div>
                            <div className={styles.babyBlock}>
                                <img className={styles.socialLiftImg} src={cilSchool} />
                                <p className={styles.socialLiftT}><p>Обучение на </p> <p>специальность</p></p>
                            </div>
                            <div className={styles.arrow}>
                                <img src={arrow}/>
                            </div>
                            <div className={styles.babyBlock}>
                                <img className={styles.socialLiftImg} src={person} />
                                <p className={styles.socialLiftT}><p>Работа/ </p> <p>Карьера</p></p>
                            </div>
                        </div>
                        <div className={styles.socialLiftBlockMob}>
                            <div className={styles.socialLiftTopMob}>
                                <div className={styles.babyBlock}>
                                    <img className={styles.socialLiftImg} src={baby} />
                                    <p className={styles.socialLiftT}><p>Родился/</p>  <p>детский сад</p></p>
                                </div>
                                <div className={styles.arrow}>
                                    <img src={lineL}/>
                                </div>
                                <div className={styles.babyBlock}>
                                    <img className={styles.socialLiftImg} src={school} />
                                    <p className={styles.socialLiftT}>Школа</p>
                                </div>
                            </div>
                            <div className={styles.socialLiftMidMob}>
                                <img src={lineB}/>
                            </div>
                            <div className={styles.socialLiftBottomMob}>
                                <div className={styles.babyBlock}>
                                    <img className={styles.socialLiftImg} src={person} />
                                    <p className={styles.socialLiftT}><p>Работа/ </p> <p>Карьера</p></p>
                                </div>
                                <div className={styles.arrow}>
                                    <img src={lineL}/>
                                </div>
                                <div className={styles.babyBlock}>
                                    <img className={styles.socialLiftImg} src={cilSchool} />
                                    <p className={styles.socialLiftT}><p>Обучение на </p> <p>специальность</p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.probSol}>
                        <div className={styles.lpartPS}>
                            <div className={styles.lpartPSTop}>
                                <p className={styles.problem}>Проблема</p>
                                <p className={styles.problemText}>В наших реалиях человеку что бы начать работать и <br/> рассчитывать на хорошие профессии, должность и <br/> карьерный рост должен потратить много времени на <br/> обучение в высшем учебном заведении. После чего <br/> начать работать в среднем 25 лет, начиная на самых <br/> низших должностях. Во время одчного обучения и <br/> вовсе, почти полностью исключая возможность как- <br/>то зарабатывать себе на жизнь. В этом случае надо <br/> что бы жить во время учёбы помогали близкие. Но <br/> далеко не у всех есть такая возможность, а учиться <br/> на хорошей профессии чтоб работать на престижной <br/> должности - тоже хочется. И это абсолютно <br/> нормально. <br/>
Подобных ситуаций в жизни можно встретить очень <br/> много. Когда есть большое желание, но <br/> обстоятельства не дают возможности достичь <br/> целей.
 Именно для помощи людям в решении <br/> подобных ситуаций мы и создаём наш проект.</p>

                                <p className={styles.problemTextMob}>В наших реалиях человеку чтобы начать <br/> работать и рассчитывать на хорошие <br/> профессии, должность и карьерный рост <br/> должен потратить много времени на <br/> обучение в высшем учебном заведении. <br/> После чего начать работать в среднем 25 <br/> лет, начиная на самых низших должностях. <br/> Во время одчного обучения и вовсе, почти <br/> полностью исключая возможность как-то <br/> зарабатывать себе на жизнь. В этом случае <br/> надо что бы жить во время учёбы помогали <br/> близкие. Но далеко не у всех есть такая <br/> возможность, а учиться на хорошей <br/> профессии чтоб работать на престижной <br/> должности - тоже хочется. И это абсолютно <br/> нормально. <br/>
Подобных ситуаций в жизни можно <br/> встретить очень много. Когда есть большое <br/> желание, но обстоятельства не дают <br/> возможности достичь целей.
 Именно для <br/> помощи людям в решении подобных <br/> ситуаций мы и создаём наш проект.</p>
                            </div>
                            <img className={styles.psImgMob} src={probSolMob}/>
                            <div className={styles.lpartPSBottom}>
                                <p className={styles.problem}>Решение</p>
                                <p className={styles.problemText}>Всем людям что оказались в подобных условиях мы <br/> хотим помочь. <br/> 
Проект "Гильдия" будет представлять собой <br/>  маленькую экосистему. <br/> 
Это будет платформа соединяющая в себе площадку <br/>  для обучения, фриланс биржу и биржу труда, а также <br/>  местом где единомышленники смогут находить друг <br/>  друга на различных форумах.<br/> 
Этот проект для тех кто хочет получить больше <br/>  контроля над своей жизнью. Для тех кто хочет выйти <br/>  за рамки выставленные обстоятельствами и <br/>  проложить свой путь. Дать себе улучшить качество <br/>  своей жизни и жизни своих близких.</p>
                                
                                <p className={styles.problemTextMob}>Всем людям что оказались в подобных <br/> условиях мы хотим помочь. <br/> 
Проект "Гильдия" будет представлять собой <br/>  маленькую экосистему. <br/> 
Это будет платформа соединяющая в себе <br/> площадку для обучения, фриланс биржу и <br/> биржу труда, а также  местом где <br/> единомышленники смогут находить друг <br/>  друга на различных форумах.<br/> 
Этот проект для тех кто хочет получить <br/> больше контроля над своей жизнью. Для тех <br/> кто хочет выйти за рамки выставленные <br/> обстоятельствами и проложить свой путь. <br/> Дать себе улучшить качество своей жизни и <br/> жизни своих близких.</p>
                            </div>
                        </div>
                        <div className={styles.probSolImg}>
                            <img className={styles.psImg} src={persPrbSol}/>
                        </div>
                    </div>
                    <div className={styles.bannerM3}>
                        <img className={styles.bannerImg} src={banner}/>
                        <p className={styles.bannerText}>Эта платформа подойдёт не только студентам что учатся очно на какую-то трудную <br/> специальность.<br/>
<br/>Школьник что уже имеет потребности, от покупки скина в игре до желания <br/> путешествовать. Но не имеет финансовой возможности. Девушки в декрете что имеют <br/> очень сильную привязку к месту и хотели бы иметь чуть больше возможностей для <br/> заработка.  В конце концов самые обычные - работающие, взрослые, люди. Что хотят <br/> обучиться чему-то новому, попробовать себя в другой профессии, улучшить <br/> финансовую грамотность и просто больше зарабатывать.<br/>
<br/>Этот инструмент подойдёт всем. Ведь у нас в команде есть все люди из этого списка.<br/>
И современный мир даёт эти возможности, а мы научим их искать и применять в своей <br/> жизни.
</p>
                    </div>

                    <div className={styles.banners}>
                        <div className={styles.bannerM3Mob1}>
                            <img className={styles.bannerImg1} src={banner}/>
                            <p className={styles.bannerText1}>Эта платформа подойдёт не только студентам что <br/> учатся очно на какую-то трудну специальность.<br/> <br/>
    <br/>Школьник что уже имеет потребности, от покупки <br/> скина в игре до желания путешествовать. Но не <br/> имеет финансовой возможности. Девушки в декрете <br/> что имеют очень сильную привязку к месту и хотели <br/> бы иметь чуть больше возможностей для заработка.</p>
                        </div>
                        <div className={styles.bannerM3Mob2}>
                            <img className={styles.bannerImg2} src={banner}/>
                            <p className={styles.bannerText2}>В конце концов самые обычные - работающие, <br/> взрослые, люди. Что хотят обучиться чему-то <br/> новому, попробовать себя в другой профессии, <br/> улучшить финансовую грамотность и просто <br/> больше зарабатывать.<br/> <br/>
    Этот инструмент подойдёт всем. Ведь у нас в <br/> команде есть все люди из этого списка.<br/>
    И современный мир даёт эти возможности, а мы <br/> научим их искать и применять в своей жизни.
    </p>
                        </div>
                    </div>
                </div>
                <div className={styles.AboutGuild}>
                    <p className={styles.AboutGuildTitle}>О проекте “Гильдия”</p>
                    <p className={styles.AboutGuildTitleMob}>О проекте</p>
                </div>
                <div className={styles.AboutGuildCont}>
                        <div className={styles.laprtAboutGuild}>
                            <p className={styles.dates}>Сроки и даты</p>
                            <p className={styles.datesText}>На данный момент проект находится в разработке. <br/>
Вот на протяжении уже 2-х месяцев наша команда <br/> работает над ним.<br/> <br/>

Первую рабочую версию мы собираемся запустить <br/> в этом году. Ориентировочно на лето 2025 года. <br/> <br/>

Логично возникает вопрос, для чего мы <br/> анонсировали проект раньше срока?<br/> <br/> 

Наш ответ таков - мы хотим знать Ваше мнение. Вы <br/> наши дорогие путники, гости на нашем сайте и <br/> даже этой странице. <br/> <br/>

Увидели в социальных сетях или нашли в <br/> поисковике, а может и вовсе друг рассказал. Не <br/> важно. Вы уже здесь и если читаете эти слова, то <br/> как минимум заинтересованы идеей и <br/> возможностями что можно получить. И мы <br/> безмерно этому благодарны.<br/> <br/>

Перед запуском, мы обязательно хотим побольше <br/> Вас узнать и <span>даже</span> дать возможность некоторым <br/> опробовать на себе наш "социальный лифт". Об <br/> этом и других полезных фишках вы сможете узнать, <br/> на нашем ютуб канале.  

                            </p>

                            <p className={styles.datesTextMob}>На данный момент проект находится в <br/> разработке. <br/>
Вот на протяжении уже 2-х месяцев наша <br/> команда работает над ним.<br/> <br/>

Первую рабочую версию мы собираемся <br/> запустить в этом году. Ориентировочно на <br/> лето 2025 года. <br/> <br/>

Логично возникает вопрос, для чего мы <br/> анонсировали проект раньше срока?<br/> <br/> 

Наш ответ таков - мы хотим знать Ваше <br/> мнение. Вы наши дорогие путники, гости на <br/> нашем сайте и даже этой странице. <br/> <br/>

Увидели в социальных сетях или нашли в <br/> поисковике, а может и вовсе друг <br/> рассказал. Не важно. Вы уже здесь и если <br/> читаете эти слова, то как минимум <br/> заинтересованы идеей и возможностями <br/> что можно получить. И мы безмерно этому <br/> благодарны.<br/> <br/>

Перед запуском, мы обязательно хотим <br/> побольше Вас узнать и <span>даже</span> дать <br/> возможность некоторым опробовать на <br/> себе наш "социальный лифт". Об этом и <br/> других полезных фишках вы сможете <br/> узнать, на нашем ютуб канале.  

                            </p>
                            <button type="button" className={styles.ytButton} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>
                                <p>YouTube</p>
                                <img src={yt}/>
                            </button>
                        </div>
                        <div className={styles.rpartAboutGuild}>
                            <p className={styles.dates}>Миссия и Открытые <br/> Возможности</p>
                            <p className={styles.datesText}>Взаимодействие и знакомство с Вами наша самая <br/> главная миссия. <br/> <br/> 

Всё остальное, это лишь желание дать тем кто ищет <br/>  - больше возможностей. <br/> <br/>  

Возможностей обучиться, заработать, узнать <br/>  сакральные секреты этой Вселенной и... выиграть <br/>  пачку наших фирменных печенек.<br/> <br/> 

Мы дадим всё это. И расскажем как получить. Хотел <br/>  бы сказать что бесплатно, но это слово не совсем <br/>  верное. Мы не собираемся брать за что-то из <br/>  перечисленного выше деньги. У нас есть <br/>  выстроенная, понятная экосистема внутри которой <br/>  будет строиться наш заработок и которой мы будем <br/>  постепенно делиться с Вами. Так о чем же речь? <br/>  Почему не бесплатно? <br/>  <br/> 

Мы возьмём лишь время и внимание наших <br/>  дорогих путников. А это для нас - бесценно.
                            </p>
                            <p className={styles.datesTextMob}>Взаимодействие и знакомство с Вами наша <br/> самая главная миссия. <br/> <br/> 

Всё остальное, это лишь желание дать тем <br/> кто ищет - больше возможностей. <br/> <br/>  

Возможностей обучиться, заработать, узнать <br/>  сакральные секреты этой Вселенной и... <br/> выиграть  пачку наших фирменных печенек.<br/> <br/> 

Мы дадим всё это. И расскажем как получить. <br/> Хотел бы сказать что бесплатно, но это слово <br/> не совсем  верное. Мы не собираемся брать <br/> за что-то из перечисленного выше деньги. У <br/> нас есть  выстроенная, понятная экосистема <br/> внутри которой будет строиться наш <br/> заработок и которым мы будем постепенно <br/> делиться с Вами. Так о чем же речь? Почему <br/> не бесплатно? <br/>  <br/> 

Мы возьмём лишь время и внимание наших <br/>  дорогих путников. А это для нас - бесценно.
                            </p>
                            <div className={styles.smileCont}><img src={smile}/></div>
                        </div>
                </div>
                <div className={styles.end}>
                    <div className={styles.endTop}>
                        <p className={styles.endText}>Конец</p>
                        <div className={styles.recEnd}>
                            {rectEnd}
                        </div>
                    </div>
                    <div className={styles.bannerEnd}>
                        <img className={styles.borderEnd1} src={borderEnd}/>
                        <img className={styles.borderEnd2} src={borderEnd}/>
                        <img className={styles.borderEnd3} src={borderEnd}/>
                        <img className={styles.borderEnd4} src={borderEnd}/>
                        <div className={styles.bannerEndCont}> 
                            <p>Если тебе было интересно, можешь оставаться с нами... или нет. Прими это решение сам, <br/> дорогой путник. Найди свой путь, ищи его. <br/> <br/> 

Сквозь тернии и преграды, сквозь тьму и холод. И однажды ты найдёшь свою тропу. Быть <br/> может она приведёт тебя снова сюда, а может нет. <br/>
Но ты найдёшь свою дорогу.
</p>
                        </div>
                        <img className={styles.borderEnd1Mob} src={borderEndMob}/>
                        <img className={styles.borderEnd2Mob} src={borderEndMob}/>
                        <img className={styles.borderEnd3Mob} src={borderEndMob}/>
                        <img className={styles.borderEnd4Mob} src={borderEndMob}/>
                        <div className={styles.bannerEndContMob}>
                            <p>Если тебе было интересно, можешь <br/> оставаться с нами... или нет. Прими <br/> это решение сам, дорогой путник. <br/> Найди свой путь, ищи его. <br/> <br/> 
Сквозь тернии и преграды, сквозь <br/> тьму и холод. И однажды ты <br/> найдёшь свою тропу. Быть может <br/> она приведёт тебя снова сюда, а <br/> может нет. <br/>
Но ты найдёшь свою дорогу.</p>
                        </div>
                    </div>
                    <div className={styles.endFindText}>
                        <p>Ведь тот кто ищет - </p>
                        <p>тот всегда найдёт</p>
                    </div>
                </div>
            </main>
            <footer className={styles.footerHome}>
                <div className={styles.lfooter}>
                    <img className={styles.logoF} src={logo}/>
                    <div className={styles.links1}>
                        <button className={styles.email} onClick={() => window.location.href = 'mailto:Rakodi27@gmail.com'}>Rakodi27@gmail.com</button>
                        <button className={styles.btnFooter} onClick={() => window.location.href = 'https://pump.fun/coin/6o19vMH2Cu1v8s8mGRvYv5AUUD4WRxYnUZfx8WrWpump'}>Криптотокен </button>
                        <button className={styles.btnFooter} onClick={() => window.location.href = 'https://t.me/RakodiManager'}>Партнёрство </button>
                    </div>
                    <div className={styles.links2}>
                        <button className={styles.btnFooter} onClick={() => window.location.href = 'https://t.me/RakodiToken'}>Telegram </button>
                        <button className={styles.btnFooter} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>YouTube </button>
                        <button className={styles.btnFooter} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>TikTok </button>
                    </div>
                    <div className={styles.borderF}></div>
                    <div className={styles.linksMob}>
                        <div className={styles.links1Mob}>
                            <button className={styles.email} onClick={() => window.location.href = 'mailto:Rakodi27@gmail.com'}>Rakodi27@gmail.com</button>
                            <button className={styles.btnFooter} onClick={() => window.location.href = 'https://pump.fun/coin/6o19vMH2Cu1v8s8mGRvYv5AUUD4WRxYnUZfx8WrWpump'}>Криптотокен </button>
                            <button className={styles.btnFooter} onClick={() => window.location.href = 'https://t.me/RakodiManager'}>Партнёрство </button>
                        </div>
                        <div className={styles.links2Mob}>
                            <button className={styles.btnFooter} onClick={() => window.location.href = 'https://t.me/RakodiToken'}>Telegram </button>
                            <button className={styles.btnFooter} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>YouTube </button>
                            <button className={styles.btnFooter} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>TikTok </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Guild;