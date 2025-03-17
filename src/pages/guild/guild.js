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
import smileMob from "../../images/guildImg/Vector (14).svg"
import cardBlackIs from "../../images/guildImg/Cards (1).svg"



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

    for (let i = 0; i < 7; i++) {
        rectEnd.push(<img key={i} src={recEnd} alt={`Image ${i + 1}`} style={{width: "4.23vw", height: "4.51vw"}} />);
    }


    return(
        <div className={styles.Global}>
            <header  className={styles.headerCont}>
                <div ref={headerRef} className={styles.headerHome}>
                    <img className={styles.logo} src={logo}/>
                    <div className={styles.navBar}>
                        <div className={styles.navElement}>
                            <Link to="/Rakodi/"><span className={styles.noAct}>Экосистема</span></Link>
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
                        <Link to="/Rakodi/" className={styles.linkBtn}>Экосистема</Link>
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
                        <img src={cardBlackIs}/>
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
                                <p className={styles.problemText}>В обществе для получения хорошей профессии и <br/> карьерного роста необходимо потратить много <br/> времени и сил на обучение по специальности. <br/> Занять престижную должность хочет каждый, <br/> но далеко не у всех есть такая возможность. <br/> Совмещать работу с учебой крайне сложно, <br/> исходя из этого качество жизни резко ухудшается. <br/> Таким образом, большинство молодых людей <br/> начинают зарабатывать деньги только с 22 лет, <br/> часто на низкооплачиваемых должностях и не по <br/> своей профессии, так как недобросовестные <br/> работодатели требуют опыт, который студент <br/> ещё не успел получить. <br/> Подобных нюансов огромное количество, почти у <br/> любого человека есть желание развиваться, но <br/> обстоятельства не дают достичь нужных целей. <br/> Именно для таких жизненных ситуаций создаётся <br/> наш проект.</p>

                                <p className={styles.problemTextMob}>В обществе для получения хорошей <br/>профессии и карьерного роста необходимо <br/>потратить много времени и сил на обучение <br/>по специальности. Занять престижную <br/> должность хочет каждый, но далеко не у <br/> всех есть такая возможность. Совмещать <br/> работу с учебой крайне сложно, исходя из <br/> этого качество жизни резко ухудшается. <br/> Таким образом, большинство молодых <br/>людей начинают зарабатывать деньги <br/> только с 22 лет, часто на <br/> низкооплачиваемых должностях и не по <br/> своей профессии, так как недобросовестные <br/> работодатели требуют опыт, который <br/> студент ещё не успел получить. <br/>Подобных нюансов огромное количество,<br/> почти у любого человека есть желание <br/> развиваться, но обстоятельства не дают <br/> достичь нужных целей. Именно для таких <br/>жизненных ситуаций создаётся наш проект.</p>
                            </div>
                            <img className={styles.psImgMob} src={probSolMob}/>
                            <div className={styles.lpartPSBottom}>
                                <p className={styles.problem}>Решение</p>
                                <p className={styles.problemText}>Если вы оказались в подобных условиях, мы хотим и <br/>готовы помочь.<br/>Проект «Гильдия» будет представлять собой <br/>небольшую экосистему. Платформа соединяет площадку для обучения, <br/>фриланс биржу и биржу труда. Это место, где единомышленники смогут <br/>найти друг друга на различных форумах.<br/>Проект будет полезен людям, которым важно получить больше контроля <br/>над своей жизнью, выйти за рамки, выставленные обстоятельствами <br/>и проложить свой путь, улучшая качество жизни для себя и близких.</p>
                                
                                <p className={styles.problemTextMob}>Если вы оказались в подобных условиях, мы <br/> хотим и готовы помочь. <br/> 
Проект «Гильдия» будет представлять собой <br/>  небольшую экосистему. Платформа <br/>  соединяет площадку для обучения, фриланс <br/>  биржу и биржу труда. Это место, где <br/>  единомышленники смогут найти друг друга <br/>  на различных форумах. <br/> 
Проект будет полезен людям, которым <br/>  важно получить больше контроля над своей <br/>  жизнью, выйти за рамки, выставленные <br/>  обстоятельствами и проложить свой путь, <br/>  улучшая качество жизни для себя и близких.</p>
                            </div>
                        </div>
                        <div className={styles.probSolImg}>
                            <img className={styles.psImg} src={persPrbSol}/>
                        </div>
                    </div>
                    <div className={styles.bannerM3}>
                        <img className={styles.bannerImg} src={banner}/>
                        <p className={styles.bannerText}>Эта платформа подойдёт не только студентам, которым надо долго учиться на свою<br/>
специальность.<br/> <br/> 
Каждый, начиная от ребёнка что учится в школе, до взрослых людей, что уже давно <br/> получили свой диплом, имееют потребности и желания. Любой из нас задумывается о <br/> том как улучшить свою жизнь. <br/> <br/>
Как птицы летят к небу, так же люди стремятся покорить новые вершины. Попробовать <br/> себя в чем-то новом, обучиться тому, что изменит качество и образ жизни. <br/> <br/>
Наше решение поможет всем, ведь мы уже проверили этот способ на себе. И мы хотим<br/>
рассказать Вам о нём, так как современный мир даёт возможности, осталось только <br/> применить их в жизни.</p>
                    </div>

                    <div className={styles.banners}>
                        <div className={styles.bannerM3Mob1}>
                            <img className={styles.bannerImg1} src={banner}/>
                            <p className={styles.bannerText1}>Эта платформа подойдёт не только студентам, <br/> которым надо долго учиться на свою<br/> 
специальность.<br/> <br/> 
Каждый, начиная от ребёнка что учится в школе, до <br/> взрослых людей, что уже давно получили свой <br/>  диплом, имееют потребности и желания. Любой из <br/>  нас задумывается о том как улучшить свою жизнь.</p>
                        </div>
                        <div className={styles.bannerM3Mob2}>
                            <img className={styles.bannerImg2} src={banner}/>
                            <p className={styles.bannerText2}>Как птицы летят к небу, так же люди стремятся <br/> покорить новые вершины. Попробовать себя в чем-<br/> то новом, обучиться тому, что изменит качество и <br/>  образ жизни.<br/> <br/> 
Наше решение поможет всем, ведь мы уже <br/>  проверили этот способ на себе. И мы хотим<br/> 
рассказать Вам о нём, так как современный мир<br/>  даёт возможности, осталось только применить их в <br/>  жизни.</p>
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
                            <p className={styles.datesText}>На данный момент платформа находится в <br/> процессе разработки. Наша команда, не покладая <br/>  рук, с декабря 2024 года занимается работой над<br/>  проектом.<br/> <br/> 
Первую рабочую версию мы собираемся запустить <br/>  уже в 2025. Следите за нашими новостями и будьте <br/>  в числе первых.<br/> 
Тут возникает вопрос: для чего же мы <br/> анонсировали проект заранее?<br/> <br/>  
На самом деле, мы хотим получить Ваш отклик. Вы <br/>  - наши дорогие гости. И именно от тех, для кого<br/>  этот проект создаётся, мы хотим узнать мнение. <br/> <br/> 
Вы уже здесь и читаете эти слова, а значит эта<br/>  история уже привлекла внимание И за это<br/>  внимание мы безмерно благодарны. Нам будет<br/>  интересно узнавать Вас и делиться информацией о<br/>  себе. <br/> <br/> 
Перед запуском большого проекта будет много<br/>  возможностей взаимодействия с нами. Начиная от<br/>  вакансий и возможностей сотрудничества,<br/>  заканчивая исполнение заветных желаний тех, кто<br/>  будет принимать активное vчастие в наших делах.<br/> <br/> 
Обо всем Вы можете оперативно узнавать <br/>  на нашем ютуб канале.  </p>

                            <p className={styles.datesTextMob}>На данный момент платформа находится в<br/> процессе разработки. Наша команда, не<br/>  покладая рук, с декабря 2024 года<br/>  занимается работой над проектом.<br/> <br/> 
Первую рабочую версию мы собираемся<br/>  запустить уже в 2025. Следите за нашими<br/>  новостями и будьте в числе первых.<br/> 
Тут возникает вопрос: для чего же мы <br/>  анонсировали проект заранее?<br/> <br/>  
На самом деле, мы хотим получить Ваш<br/>  отклик. Вы - наши дорогие гости. И именно <br/>  от тех, для кого этот проект создаётся, мы <br/>  хотим узнать мнение. <br/> <br/> 
Вы уже здесь и читаете эти слова, а значит<br/>  эта история уже привлекла внимание И за <br/>  это внимание мы безмерно благодарны.<br/>  Нам будет интересно узнавать Вас и <br/> делиться информацией о себе. <br/> <br/> 
Перед запуском большого проекта будет<br/>  много возможностей взаимодействия с<br/>  нами. Начиная от вакансий и возможностей<br/>  сотрудничества, заканчивая исполнение<br/>  заветных желаний тех, кто будет<br/>  принимать активное vчастие в наших<br/>  делах.<br/> <br/> 
Обо всем Вы можете оперативно узнавать<br/>  на нашем ютуб канале.</p>
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
                            <div className={styles.smileCont}>
                                <img className={styles.smileImg} src={smileMob}/>
                                <img className={styles.smileImgMob} src={smileMob}/>
                            </div>
                        </div>
                </div>
                <div className={styles.end}>
                    <div className={styles.endTop}>
                        <p className={styles.endText}>Удачного пути</p>
                        <p className={styles.endTextMob}><p>Удачного</p> <p>пути</p></p>
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