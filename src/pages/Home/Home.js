import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";

import styles from "./Home.module.scss"

import logo from "../../images/homeImg/logo_Racodi 1.svg"
import product from "../../images/homeImg/ad-product.svg"
import free from "../../images/homeImg/Group 1010.svg"
import info from "../../images/homeImg/info.svg"
import whatsapp from "../../images/homeImg/Group.svg"
import tg from "../../images/homeImg/Group (4).svg"
import stars from "../../images/homeImg/Ai.svg"
import chat from "../../images/homeImg/bx-chat (2).svg"
import search from "../../images/homeImg/search (2).svg"
import brain from "../../images/homeImg/Img_purple_1.png"
import glasses from "../../images/homeImg/Img_purple_2.png"
import drone from "../../images/homeImg/Img_purple_3.png"
import aray from "../../images/homeImg/Group 1015.svg"
import line from "../../images/homeImg/Line 21.svg"
import saturn from "../../images/homeImg/Vector (2).svg"
import tgPink from "../../images/homeImg/Group (2).svg"
import youTubePink from "../../images/homeImg/Frame 1032.svg"
import ttPink from "../../images/homeImg/Group (3).svg" 
import looper from "../../images/homeImg/Looper-3.svg" 
import img5 from "../../images/homeImg/image 5.png" 
import proj27 from "../../images/homeImg/archive.svg" 
import team240 from "../../images/homeImg/users-solid.svg" 
import time from "../../images/homeImg/time.svg" 
import proj from "../../images/homeImg/prodject_decor_abot us.svg" 
import team from "../../images/homeImg/team_decor_abot us.svg" 
import years from "../../images/homeImg/years_decor_abot us.svg" 
import lines from "../../images/homeImg/Group 1023.svg"
import one from "../../images/homeImg/Frame 3349.svg"
import two from "../../images/homeImg/2.svg"
import three from "../../images/homeImg/3.svg"
import planet from "../../images/homeImg/Frame 3437.svg"
import angle from "../../images/homeImg/Vector (4).svg"
import phone from "../../images/homeImg/phone.svg"
import mail from "../../images/homeImg/at-sign.svg"
import vkF from "../../images/homeImg/SVG.svg"
import tgF from "../../images/homeImg/SVG (1).svg"
import arrowF from "../../images/guildImg/arrow-down-right.svg"
import menu from "../../images/guildImg/menu.svg"
import linesMob from "../../images/homeImg/img_endblock_last.svg"


const Home = () => {

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
    

    return (
        <div className={styles.Global}>
            <header  className={styles.headerCont}>
                <div ref={headerRef} className={styles.headerHome}>
                    <img className={styles.logo} src={logo}/>
                    <div className={styles.navBar}>
                        <div className={styles.navElement}>
                            <Link to="/"><span className={styles.act}>Экосистема</span></Link>
                            <span className={styles.noAct}>/</span>
                        </div>
                        <div className={styles.navElement}>
                            <Link to="/guild"><span className={styles.noAct}>Гильдия</span></Link>
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
                        <Link to="token" className={`${styles.menBtn3} ${styles.linkBtn}`}>Криптотокен</Link>
                    </div>
                </div>
            </header>
            <main className={styles.mainHome}>

                <div className={styles.mainFirst} >
                    <div className={styles.mainContainer}>
                        <div className={styles.p1Cont}>
                            <span className={styles.p1}>Rakodi - тот кто <br/> ищет, тот всегда <br/> найдёт.</span>
                            <span className={styles.p1Mob}>Rakodi - тот <br/> кто ищет, тот <br/> всегда найдёт.</span>
                        </div>
                        <p id={styles.p2One} className={styles.p2}>Наш проект был создан для того что-бы <br/> показать людям всего мира какие на <br/> самом деле открывает для них <br/> возможности интернет. </p>
                        <div className={styles.icons}>
                            <div className={styles.icosContainer}>
                                <div className={styles.icon}><img src={stars}/></div>
                                <div className={styles.iconUp}>
                                    <div className={styles.icon}><img src={chat}/></div>
                                </div>
                                <div className={styles.icon}><img src={search}/></div>
                            </div>
                        </div>
                        <p id={styles.p2Two} className={styles.p2}>Социальные сети, поисковые сервисы и <br/> даже первый искусственный интеллект... <br/> путник, в твоих руках неограниченный <br/> потенциал.</p>
                    </div>
                </div>

                <div className={styles.mainSecond}>
                    <img className={styles.lineImg} src={line}/>
                    <div className={styles.mainSecondContainer}>
                        <div className={styles.lpart}>
                            <div className={styles.whatDoing}>
                                <p>Что мы делаем?</p>
                                <img src={brain}/>
                            </div>
                            <div className={styles.frame1}>
                                <p className={styles.pMar}>Мы <span>создаём</span> большую <span>экосистему</span>.</p>
                                <p>Которая будет подстроена под <span>современный</span> ритм жизни.</p>
                                <div className={styles.pFrame1Mob}>
                                    Мы <span>создаём</span> большую <span>экосистему</span>. <br/> Которая будет подстроена под <br/> <span>современный</span> ритм жизни.
                                </div>
                            </div>
                            <div className={styles.glasses}>
                                <img src={glasses}/>
                                <div id={styles.fr11} className={styles.frame1}>
                                    <p>Сейчас чтоб достойно <span>зарабатывать</span> каждому</p>
                                    <p>человеку надо пройти целый ряд трудностей</p>
                                    <div className={styles.pFrame1Mob}>
                                        Сейчас чтоб достойно <span>зарабатывать</span> <br/> каждому
                                        человеку надо пройти целый <br/>  ряд трудностей
                                    </div>
                                </div>
                            </div>
                            <div className={styles.drone}>
                                <ul>
                                    <li>Получения диплома </li>
                                    <li>Поиск работы</li>
                                    <li>Долгое обучение</li>
                                    <li>Прочие невзгоды</li>
                                </ul>
                                <img src={drone} />
                            </div>
                            <div className={styles.frame2}>
                                {/* <img className={styles.looper} src={looper} /> */}
                                <p className={styles.pFrame2}>И наш основатель посидел, подумал и понял, что хочет начать с решения этой проблемы.</p>
                                <div className={styles.pFrame2Mob}>
                                    И наш основатель посидел, подумал и <br/> понял, что хочет начать с решения этой <br/> проблемы.
                                </div>
                                <img src={aray}/>
                                <p className={styles.pFrame2}>Мы создадим свободную площадку, где у каждого желающего будет возможность обучиться, получить <br/> знания и начать зарабатывать.</p>
                                <div className={styles.pFrame2Mob}>
                                    Мы создадим свободную площадку, где <br/> у  каждого желающего будет <br/> возможность  обучиться, получить <br/> знания и начать зарабатывать.
                                </div>
                            </div>
                        </div>
                        <div className={styles.rpart}>
                            <div className={styles.rpartContainer}>
                            <div className={styles.saturnContainer}><img className={styles.saturn} src={saturn}/></div>
                                <p className={styles.s1}>Первым нашим публичным проектом с <br/> открытым доступом будет <span>Гильдия</span> - <br/> фриланс биржа и платформа для обучения</p>
                                <p className={styles.s2}>Гильдия будет первым проектом после <br/> долгих лет подготовки, получения <br/> колоссального опыта и поиска людей в нашу <br/> команду.</p>
                                <p className={styles.s3}>Параллельно мы готовим ещё целый ряд проектов которые мы будем <br/> анонсировать на наших ресурсах. Вот кстати актуальные ссылки на них.</p>
                                <div className={styles.arayContainer}><img src={aray}/></div>
                                <div className={styles.socNets}>
                                    <Link className={styles.socNet} onClick={() => window.location.href = 'https://t.me/RakodiToken'}>
                                        <span>Telegram</span>
                                        <img className={styles.tg} src={tgPink} />
                                    </Link>
                                    <Link  className={styles.socNet} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>
                                        <span>TikTok</span>
                                        <img className={styles.tt} src={ttPink} />
                                    </Link>
                                    <Link id={styles.socNetM} className={styles.socNet} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>
                                        <span>YouTube</span>
                                        <img className={styles.yt} src={youTubePink} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainThird}>
                    <div className={styles.m3P}>
                        <p>Проект Rakodi был задуман впервые много лет назад.</p> <p>Его главной идеей было объединение людей,</p>  <p> которые стремятся исполнить свою мечту. </p>
                    </div>
                    <div className={styles.m3PMob}>
                        <p>Проект Rakodi был задуман </p> <p>впервые много лет назад. </p> <p> Его главной идеей было </p> <p>объединение людей, которые</p> <p>стремятся исполнить свою</p> <p>мечту.</p> 
                    </div>
                    <div className={styles.infImg}>
                        <img src={img5} />
                        <div className={styles.inf}>
                            <div className={styles.infBlock}>
                                <p className={styles.title}>Эпоха информации</p>
                                <p className={styles.desc}>
                                    21-й век называется веком информации. Знания были тем <br/> самым ценным, чем всегда обладал человек. Благодаря <br/>  знаниям и их постоянным применениям мы <br/>  эволюционировали, мы сделали поиск знаний и их <br/>  использование своим инструментом. От освоения колеса <br/>  до современных полётов в космос.
                                </p>
                                <p className={styles.descMob}>
                                    21-й век называется веком информации.<br/> Знания были тем самым ценным, чем всегда <br/> обладал человек. Благодаря знаниям и их <br/> постоянным применениям мы <br/>  эволюционировали, мы сделали поиск <br/> знаний и их использование своим <br/>  инструментом. От освоения колеса до <br/> современных полётов в космос.
                                </p>
                            </div>
                            <div className={styles.infBlock}>
                                <p className={styles.title}>Появление интернета</p>
                                <p className={styles.desc}>
                                    В вечном стремлении к новым вершинам, человечество <br/> создало интернет. Способ для моментального обмена <br/> информацией... <br/> И теперь у каждого человека, кто это читает, есть доступ <br/> ко всем знаниям человечества. <br/> Лет 100 назад это называли безумием, а 200 и вовсе - <br/> магией.) <br/> Вы только представьте. Доступ ко всем знаниям <br/> человечества...
                                </p>
                                <p className={styles.descMob}>
                                    В вечном стремлении к новым вершинам, <br/> человечество создало интернет. Способ для <br/>  моментального обмена информацией... <br/> И теперь у каждого человека, кто это читает, <br/>  есть доступ ко всем знаниям человечества. <br/> Лет 100 назад это называли безумием, а 200 <br/>  и вовсе - магией.) <br/> Вы только представьте. Доступ ко всем <br/> знаниям человечества...
                                </p>
                            </div>
                            <div className={styles.infBlock}>
                                <p className={styles.title}>Попал в сеть</p>
                                <p className={styles.desc}>
                                    Паутина интернета разбросала свои сети по всему миру. <br/> Такое интересное обозначение, но слово паутина <br/> идеально подходит на мой взгляд. Ведь если ты не <br/> умеешь правильно по ней лазить... залипнешь.
                                </p>
                                <p className={styles.descMob}>
                                    Паутина интернета разбросала свои сети по <br/> всему миру. <br/> Такое интересное обозначение, но слово <br/> паутина идеально подходит на мой взгляд. <br/> Ведь если ты не умеешь правильно по ней <br/> лазить... залипнешь.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainFourth}>
                    <p className={styles.aboutUs}>О нас</p>
                    <div className={styles.aboutUsBlockCont}>
                        <div className={styles.aboutUsBlock}>
                            <img src={proj27}/>
                            <div className={styles.cyberFrame}>27 проектов</div>
                            <div className={styles.textBlock}>
                                <div className={styles.text}>
                                    Начиная от классических <br/> инвестиций в недвижимость, <br/> заканчивая разработкой <br/> приложений, игр и <br/> полноценных платформ с <br/> использованием самых <br/> современных технологий, в <br/> том числе AI.<br/>
                                    В будуще мы будем добавлять <br/> их в экосистему.
                                </div>
                                <div className={styles.textMob}>
                                    Начиная от классических инвестиций в <br/> недвижимость, заканчивая разработкой <br/> приложений, игр и полноценных <br/> платформ с использованием самых <br/> современных технологий, в  том числе AI.<br/>
                                    В будуще мы будем добавлять их в <br/> экосистему.
                                </div>
                                <img src={proj}/>
                            </div>
                        </div>
                        <div className={styles.aboutUsBlock}>
                            <img src={team240}/>
                            <div className={styles.cyberFrame}>>240 команд</div>
                            <div className={styles.textBlock}>
                                <div className={styles.text}>
                                    Каждый из них когда-то <br/> пришёл сюда, имея лишь свою <br/> мечту и желание идти к ней. <br/> И они решили что вместе, это <br/> будет легче. <br/> А кто-то ушёл искать свою <br/> дорогу. <br/> Всегда делай свой выбор, <br/> прислушиваясь к себе.
                                </div>
                                <div className={styles.textMob}>
                                    Каждый из них когда-то пришёл сюда, <br/> имея лишь свою мечту и желание идти к <br/> ней. И они решили что вместе, это будет <br/> легче. А кто-то ушёл искать свою дорогу. <br/> Всегда делай свой выбор, прислушиваясь <br/> к себе.
                                </div>
                                <img src={team}/>
                            </div>
                        </div>
                        <div className={styles.aboutUsBlock}>
                            <img src={time}/>
                            <div className={styles.cyberFrame}>>7 лет работы  </div>
                            <div className={styles.textBlock}>
                                <div className={styles.textM}>
                                    Эти семь лет на пути помогли <br/> обрести ясность цели. <br/> Помогли понять что мы хотим <br/> быть полезными обществу и <br/> нашим близким людям.
                                </div>
                                <div className={styles.textMob}>
                                    Эти семь лет на пути помогли обрести <br/> ясность цели. Помогли понять что мы <br/> хотим быть полезными обществу и <br/> нашим близким людям.
                                </div>
                                <img src={years}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.banner}>Наша сила в Единстве</div>
                </div>
                <div iv className={styles.mainFifth}>
                    <div className={styles.linesCont}><img className={styles.lines} src={lines}/></div>
                    <div className={styles.linesContMob}><img className={styles.linesMob} src={linesMob}/></div>
                    <div className={styles.textNum}>
                        <img className={styles.img1} src={one}/>
                        <p className={styles.number}>1</p>
                        <div className={styles.text}>
                            Мы научились пользоваться этой сетью. Вся паутина <br/> стала нашей территорией. Мы перестали быть <br/> просто потребителями, мы научились искать.
                        </div>
                        <div className={styles.textMob}>
                            Мы научились пользоваться <br/> этой сетью. Вся паутина <br/> стала нашей территорией. <br/> Мы перестали быть просто <br/> потребителями, мы <br/> научились искать.
                        </div>
                    </div>
                    <div className={styles.textNum}>
                        <div className={styles.textMob}>
                            Искать то что нам надо, <br/> находить это и использовать. <br/> Благодаря этому <br/> инструменту мы освоили <br/> множество  других и <br/> продолжаем <br/> совершенствоваться.
                        </div>
                        <p className={styles.number}>2</p>
                        <img className={styles.img2} src={two}/>
                        <img className={styles.planet} src={planet}/>
                        <div className={styles.text}>
                            Искать то что нам надо, находить это и использовать. <br/> Благодаря этому инструменту мы освоили множество <br/> других и продолжаем совершенствоваться.
                        </div>
                    </div>
                    <div className={styles.textNum}>
                        <img className={styles.img3} src={three}/>
                        <p className={styles.number}>3</p>
                        <div className={styles.text}>
                            Мы нашли многих наших единомышленников. И <br/> каждый из нас сделал свой выбор в пользу <br/> свободы. <br/> Начиная в абсолютно разных условиях, от жизни в <br/> глубинке до студентов Гарварда. Шаг за шагом, день <br/> за днём мы шли к своим целям.
                        </div>
                        <div className={styles.textMob}>
                            Мы нашли многих наших <br/> единомышленников. И каждый <br/> из нас сделал свой выбор в <br/> пользу свободы. Начиная в <br/> абсолютно разных условиях, <br/> от жизни в глубинке до <br/> студентов Гарварда. Шаг за <br/> шагом, день за днём мы шли к <br/> своим целям.
                        </div>
                    </div>
                    <div className={styles.text2Cont}>
                        <div className={styles.text2}>
                            <img className={styles.angle1} src={angle}/>
                            <img className={styles.angle2} src={angle}/>
                            <img className={styles.angle3} src={angle}/>
                            <img className={styles.angle4} src={angle}/>
                            Кому-то хватало просто найти себе подработку и немного подтянуть финансовую <br/> грамотность чтобы легче было учиться на основную профессию. Для некоторых же это <br/> стало кардинальными изменениями в жизни. У нас нет рамок, обязательных условий или <br/> скрытых умыслов. Просто решили сделать свой выбор, поделиться этой историей с миром.</div>
                    </div>
                    <div className={styles.text2ContMob}>
                        <div className={styles.text2Mob}>
                            <img className={styles.angle1Mob} src={angle}/>
                            <img className={styles.angle2Mob} src={angle}/>
                            <img className={styles.angle3Mob} src={angle}/>
                            <img className={styles.angle4Mob} src={angle}/>
                            Кому-то хватало просто <br/> найти себе подработку и <br/> немного подтянуть <br/> финансовую грамотность <br/> чтобы легче было учиться на <br/> основную профессию. Для <br/> некоторых же это стало <br/> кардинальными <br/> изменениями в жизни. У нас <br/> нет рамок, обязательных <br/> условий или скрытых <br/> умыслов. Просто решили <br/> сделать свой выбор, <br/> поделиться этой историей с <br/> миром.</div>
                    </div>
                    <div className={styles.youCanDo}>Cейчас, его можешь сделать ты</div>
                    <Link to="/guild"><div className={styles.btnStart}>Start</div></Link>
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

export default Home;