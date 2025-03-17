import React, { useState, useEffect, useRef }  from "react";
import {Link} from "react-router-dom";

import styles from "./CrypToken.module.scss"

import logo from "../../images/guildImg/logo_Racodi 1 (1).svg"
import tg from "../../images/homeImg/Group (4).svg"
import menu from "../../images/guildImg/menu.svg"
import persMain from "../../images/CrypToken/image 3.svg"
import borderMain from "../../images/CrypToken/Line 32.svg"
import arrowBtn from "../../images/CrypToken/arrow-down-right (1).svg"
import frame from "../../images/CrypToken/Group 1060 (2).svg"
import planet from "../../images/CrypToken/Group 3456 (4).svg"
import frame1 from "../../images/CrypToken/Group 3428 (1).svg"
import frame2 from "../../images/CrypToken/Group 1047.svg"
import frame3 from "../../images/CrypToken/Frame 3510.svg"
import heart from "../../images/CrypToken/Mask group.svg"
import vid from "../../images/CrypToken/video_2025-03-15_02-33-08.mp4"
import zapY from "../../images/CrypToken/Group 3437.svg"
import frameY from "../../images/CrypToken/Group 3436.svg"
import questionB from "../../images/CrypToken/Group 3438.svg"
import frameB from "../../images/CrypToken/Frame 3517.svg"
import linesVideo from "../../images/CrypToken/BG_cideo_3d.svg"
import linesElement from "../../images/CrypToken/Group 3457.svg"
import RImg from "../../images/CrypToken/Group 3458.svg"
import frameR from "../../images/CrypToken/Group 3445.svg"
import TT from "../../images/CrypToken/Group (6).svg"
import YT from "../../images/CrypToken/Group (7).svg"
import TG from "../../images/CrypToken/Group (8).svg"
import smile from "../../images/CrypToken/Group 3458 (1).svg"
import frameMob from "../../images/CrypToken/Group 6.svg"
import frame1Mob from "../../images/CrypToken/Frame 3428.svg"
import frame2Mob from "../../images/CrypToken/Group 1047 (1).svg"
import frame3Mob from "../../images/CrypToken/Frame 3510 (1).svg"
import linesVideoMob from "../../images/CrypToken/Group 3450.svg"
import frameYMob from "../../images/CrypToken/Group 3436 (1).svg"
import frameBMob from "../../images/CrypToken/Frame 3517 (1).svg"
import leftArrowMob from "../../images/CrypToken/left_ARR.svg"
import rightArrowMob from "../../images/CrypToken/right_ARR.svg"
import rImgMob from "../../images/CrypToken/Group 3457 (1).svg"
import frameRMob from "../../images/CrypToken/Group 3445 (1).svg"
import leftArrow from "../../images/CrypToken/left_arrows.svg"
import rightArrow from "../../images/CrypToken/Right_arrows.svg"


const CrypToken = () => {

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
        }, []);

    return (
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
                            <Link to="/guild"><span className={styles.noAct}>Гильдия</span></Link>
                            <span className={styles.noAct}>/</span>
                        </div>
                        <div className={styles.navElement}>
                            <Link to="/token"><span className={styles.act}>Криптотокен</span></Link>
                        </div>
                    </div>
                    <div className={styles.contacts}>
                        <Link className={styles.contactButon}>
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
            <main>
                <div className={styles.mainFirst}>
                    <div className={styles.lpartMF}>
                        <img className={styles.borderMain1} src={borderMain}/>
                        <img className={styles.borderMain2} src={borderMain}/>
                        <img className={styles.borderMain3} src={borderMain}/>
                        <img className={styles.borderMain4} src={borderMain}/>
                        <div className={styles.imgCont}>
                            <img src={persMain}/>
                        </div>
                    </div>
                    <div className={styles.rpartMF}>
                        <div className={styles.titleMCont}>
                            <p className={styles.titleMTop}><p>Криптотокен</p> <p>Rakodi</p></p>
                            <p className={styles.titleMBottom}><p>Криптотокен</p> <p>Rakodi</p></p>
                        </div>
                        <div className={styles.lpartMFMob}>
                            <img className={styles.borderMain1Mob} src={borderMain}/>
                            <img className={styles.borderMain2Mob} src={borderMain}/>
                            <img className={styles.borderMain3Mob} src={borderMain}/>
                            <img className={styles.borderMain4Mob} src={borderMain}/>
                            <div className={styles.imgContMob}>
                                <img src={persMain}/>
                            </div>
                        </div>
                        <button className={styles.tokenPageMob} onClick={() => window.location.href = 'https://pump.fun/coin/6o19vMH2Cu1v8s8mGRvYv5AUUD4WRxYnUZfx8WrWpump'}>
                            <p>Личная страница токена</p>
                        </button>
                        <div className={styles.texBlock}>
                            <p>Токен нашей компании работающий на сети Solana.</p>
                            <p>Он находится в свободном доступе, то есть купить его <br/> может КАЖДЫЙ желающий.<br/>
И что куда важнее каждый из Вас, моих дорогих <br/> гостей, может НЕ покупать. Этот анонс на этом сайте <br/> мы сделали для этого в первую очередь.</p>
                        </div>
                        <div className={styles.texBlockMob}>
                            <p>Токен нашей компании работающий на <br/> сети Solana.</p>
                            <p>Он находится в свободном доступе, то <br/> есть купить его может каждый <br/> желающий.<br/>
И что куда важнее каждый из Вас, моих <br/> дорогих гостей, может его НЕ покупать. <br/> Следите или участвуйте, принимайте <br/> своё решение.</p>
                        </div>
                        <button className={styles.tokenPage} onClick={() => window.location.href = 'https://pump.fun/coin/6o19vMH2Cu1v8s8mGRvYv5AUUD4WRxYnUZfx8WrWpump'}>
                            <p>Личная страница токена</p>
                        </button>
                    </div>
                </div>
                <div className={styles.mainSecond}>
                    <p className={styles.titleMS}>Управляйте своей судьбой сами</p>
                    <p className={styles.titleMSMob}>Управляйте своей <br/> судьбой сами</p>
                    <div className={styles.mpartMainS}>
                        <div className={styles.frameCont}>
                            <img className={styles.frame} src={frame} />
                            <img  className={styles.frameMob}src={frameMob}/>
                            <p className={styles.textFrameMob}>Этот сайт создан для того что бы Вы <br/> могли наблюдать за нами. На графиках <br/> за динамикой жизни нашего публичного <br/> проекта. Этот токен для нас станет <br/> первым публичным шагом. Это будет <br/> прямым способом взаимодействия для <br/> каждого желающего стать частью <br/> проекта. Не важно сколько их у вас <br/> будет... 100, 1000 или даже 10000! Даже 1 <br/> токен сделает Вас частью этой истории. <br/>  Разумеется, если вы захотите стать этой <br/> частью.</p>
                            <p className={styles.textFrame}>Этот сайт для того что бы Вы могли наблюдать за нами. На <br/> живом примере за динамикой жизни нашего публичного <br/>  проекта. Этот токен для нас станет первым публичным <br/>  шагом. Это будет прямым способом взаимодействия для <br/>  каждого желающего стать частью проекта. Не важно <br/>  сколько их у вас будет... 100, 1000 или даже 10000! Даже 1 <br/>  токен сделает Вас частью этой истории. Разумеется, если вы <br/> захотите стать этой частью.</p>
                        </div>
                        <div className={styles.planetCont}><img src={planet}/></div>
                    </div>
                    <p className={styles.bpartMainS}>Наблюдайте и получайте наслаждение! <br/> Ибо первый шаг к восхождению уже <br/> сделан.</p>
                    <p className={styles.bpartMainSMob}>Наблюдайте и получайте <br/> наслаждение!<br/> Ибо первый шаг к <br/> восхождению уже сделан.</p>
                </div>
                <div className={styles.mainThird}>
                    <div className={styles.mainT1}>
                        <div className={styles.frames12Cont}>
                            <div className={styles.frame1Cont}>
                                <p className={styles.pframe1}>Я правильно понимаю что это <br/> просто символ? Что за ним <br/>стоит?</p>
                                <p className={styles.pframe1Mob}>Я правильно понимаю что <br/> это просто символ? Что за <br/> ним стоит?</p>
                                <img className={styles.frame1Img} src={frame1} />
                                <img src={frame1Mob} className={styles.frame1ImgMob} />
                            </div>
                            <div className={styles.frame2Cont}>
                                <p className={styles.pframe2}>За этим токеном <br/> стоим мы.</p>
                                <img className={styles.frame2Img} src={frame2} />
                                <img src={frame2Mob} className={styles.frame2ImgMob} />
                            </div>
                        </div>
                        <div className={styles.frame3Cont}>
                            <p className={styles.pframe3}>Помимо своей самой главной задачи стать первым публичным символом сообщества Rakodi <br/> - этот проект даёт возможность заработать вместе с нами любому желающему.</p>
                            <p className={styles.pframe3Mob}>Помимо своей самой главной задачи стать <br/> первым публичным символом сообщества <br/> Rakodi - этот проект даёт возможность <br/> заработать вместе с нами любому <br/> желающему.</p>
                            <img className={styles.frame3Img} src={frame3}/>
                            <img className={styles.frame3ImgMob} src={frame3Mob}/>
                        </div>
                    </div>
                    <div className={styles.mainT2}>
                        <div className={styles.videoMob}>
                            <img className={styles.linesVideoMob} src={linesVideoMob} />
                            <video className={styles.vidMob} autoPlay loop muted>
                                <source src={vid} type="video/mp4"/>
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                        <div className={styles.lpMainT2}>
                            <p className={styles.textMob}>Дабы избежать обмана - вы можете <br/> смотреть за графиком. Ведь история <br/> и цена на бирже - результат <br/> честных торгов в реальном <br/> времени, где принимает участие <br/> каждый желающий.</p>
                            <p className={styles.text}>Дабы избежать обмана - вы можете смотреть <br/> за графиком. Ведь история и цена на бирже - <br/> результат честных торгов в реальном времени, <br/> где принимает участие каждый желающий.</p>
                            <div className={styles.heartCont}>
                                <p className={styles.textMob}>Мы не в состоянии контролировать <br/> динамику рынка. Ведь это значило <br/> бы что мы залезли в мысли наших <br/> гостей. А это не так, ведь мы всего <br/> лишь в самом сердце</p>
                                <p className={styles.text}>Мы не в состоянии контролировать динамику <br/> рынка. Ведь это значило бы что мы залезли в <br/> мысли наших гостей. А это не так, ведь мы <br/> всего лишь в самом сердце</p>
                                <div className={styles.imgCont}><img src={heart} /></div>
                            </div>
                            <p className={styles.textMob}>И всё это значит что на этих <br/> значениях графиков можно увидеть <br/> то как люди в нас верят, как они <br/> хотят и становятся частью общей <br/> истории. Нашей истории.</p>
                            <p className={styles.text}>И всё это значит что на этих значениях <br/> графиков можно увидеть то как люди в нас <br/> верят, как они хотят и становятся частью <br/> общей истории. Нашей истории.</p>
                        </div>
                        <div className={styles.video}>
                            <img className={styles.linesVideo} src={linesVideo} />
                            <video className={styles.vid} autoPlay loop muted>
                                <source src={vid} type="video/mp4"/>
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>
                    <div className={styles.mainT3}>
                        <div className={styles.zapY}>
                            <img className={styles.zapImg} src={zapY} />
                            <div className={styles.frameYCont}>
                                <p className={styles.textY}>В будущих проектах, в том числе в проекте Гильдия, этот токен <br/> будет внедрен в экосистемы. И в этот момент он получит свою <br/> фундаментальную ценность которую нельзя будет оспорить уже <br/> никому. Искра жизни что была дана ему здесь разгорится в <br/> бурлящий огонь. Свет от которого согреет всех желающих и <br/> осветит тех кто наблюдает.</p>
                                <p className={styles.textYMob}>В будущих проектах, в том числе в проекте <br/> Гильдия, этот токен будет внедрен <br/> в экосистемы. И в этот момент он получит <br/>  свою фундаментальную ценность которую <br/>  нельзя будет оспорить уже никому. Искра <br/> жизни что была дана ему здесь разгорится в <br/> бурлящий огонь. Свет от которого согреет <br/>  всех желающих и осветит тех кто <br/>  наблюдает.</p>
                                <img className={styles.frameY} src={frameY}/>
                                <img className={styles.frameYMob} src={frameYMob}/>
                            </div>
                        </div>
                        <div className={styles.questionB}>
                            <div className={styles.frameBCont}>
                                <p className={styles.textB}>Хотите узнать как именно токен может быть и <br/> будет внедрен в рабочую экосистему проекта?</p>
                                <p className={styles.textBMob}>Хотите узнать как именно токен <br/> может быть и будет внедрен в <br/> рабочую экосистему проекта?</p>
                                <img className={styles.frameBMob} src={frameBMob}/>
                                <img className={styles.frameB} src={frameB}/>
                            </div>
                            <img className={styles.questionImg} src={questionB}/>
                        </div>
                        <div className={styles.whoFind}>
                            <img className={styles.linesElement1} src={leftArrow}/>
                            <img className={styles.linesElement1Mob} src={leftArrowMob}/>
                            <p>Чтож... тот кто ищет...</p>
                            <img className={styles.linesElement2} src={rightArrow}/>
                            <img className={styles.linesElement2Mob} src={rightArrowMob}/>
                        </div>
                    </div>
                    <div className={styles.mainT4}>
                        <div className={styles.RContent}>
                            <img className={styles.RImg} src={RImg}/>
                            <img className={styles.RImgMog} src={rImgMob}/>
                            <div className={styles.frameRCont}>
                                <p className={styles.textR}>До тех пор вы сможете наблюдать за <br/> всей информацией по проекту, нашими <br/> мыслями, плюшками и возможностями <br/> на наших платформах.</p>
                                <p className={styles.textRMob}>До тех пор вы сможете наблюдать <br/> за всей информацией по проекту,<br/> нашими мыслями, плюшками и <br/> возможностями на наших <br/> платформах.</p>
                                <img className={styles.frameR} src={frameR}/>
                                <img className={styles.frameRMob} src={frameRMob}/>
                            </div>
                        </div>
                        <div className={styles.smileCont}>
                            <div className={styles.smileBlock}>
                                <p className={styles.titleSmile}>МЫ тут:</p>
                                <div className={styles.smileBtns}>
                                    <button className={styles.TT} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>
                                        <p>TikTok</p>
                                        <img src={TT}/>
                                    </button>
                                    <button className={styles.TT} onClick={() => window.location.href = 'https://www.tiktok.com/@fantasy_tavern_ru?_t=ZT-8uk3ZD3mW5b&_r=1'}>
                                        <p>YouTube</p>
                                        <img src={YT}/>
                                    </button>
                                    <button className={styles.TT} onClick={() => window.location.href = 'https://t.me/RakodiToken'}>
                                        <p>Telegram</p>
                                        <img src={TG}/>
                                    </button>
                                </div>
                                <img className={styles.smile} src={smile}/>
                            </div>
                            <div className={styles.textSmile}>
                                <img src={linesElement} />
                                <p className={styles.pTextSmile}>Разумеется мы не говорим Вам о том <br/> что надо покупать наш токен. Это ни в коем <br/> случае не является инвестиционной <br/> рекомендацией. <br/>
Мы на этом не зарабатываем. Это в первую <br/> очередь, до внедрения в систему - символ. <br/> <br/>

Это лишь очередная малая деталь большого <br/> пазла, нашего глобального проекта. <br/>
Та деталь, что мы УЖЕ можем Вам показать. И <br/> именно в этом заключается главная ценность <br/> монеты сейчас. <br/>
Если то что было сказано выше близко <br/> Вашему сердцу, идеалам и принципам - это <br/> возможность посмотреть и убедиться в <br/> серьёзности наших намерений. <br/>
Помните о наших целях. Ведь мы говорим о <br/> них открыто.</p>

                                <p className={styles.pTextSmileMob}>Разумеется мы не говорим Вам о том <br/> что надо покупать наш токен. Это ни в <br/> коем случае не является <br/> инвестиционной рекомендацией. <br/>
Мы на этом не зарабатываем. Это в <br/> первую очередь, до внедрения в <br/> систему - символ. <br/> <br/>

Это лишь очередная малая деталь <br/> большого пазла, нашего глобального <br/> проекта. <br/>
Та деталь, что мы УЖЕ можем Вам <br/> показать. И именно в этом заключается <br/> главная ценность монеты сейчас. <br/>
Если то что было сказано выше близко <br/> Вашему сердцу, идеалам и принципам <br/> - это возможность посмотреть и <br/> убедиться в серьёзности наших <br/> намерений. <br/>
Помните о наших целях. Ведь мы <br/> говорим о них открыто.</p>

                            </div>
                        </div>
                        <div className={styles.whoFindY}>
                            <p className={styles.textWHY}>Тот кто ищет - тот всегда найдёт.</p>
                            <p className={styles.textWHYMob}>Тот кто ищет - <br/>тот всегда найдёт.</p>
                        </div>
                    </div>
                    <div className={styles.mainTEnd}>
                        <div className={styles.mainTEndCont}>
                            <p className={styles.titlePartner}>Партнёрская программа</p>
                            <p className={styles.titlePartnerMob}>Партнёрская <br/> программа</p>
                            <div className={styles.textPartner}><p>Принять более активное участие в наших грядущих проектах?</p> <p>Принимайте участие в нашей партнёрской программе и меняйте мир с нами. </p> <p><br/></p>
<p>Если вы инвестор или специалист высокого уровня - у нас есть выгодные условия.</p>
                            </div>
                            <div className={styles.textPartnerMob}><p>Принять более активное </p> <p>участие в наших грядущих проектах?</p> <p>Принимайте участие в нашей</p> <p>партнёрской программе и меняйте</p> <p>мир с нами. </p> <p><br/></p>
<p>Если вы инвестор или специалист</p> <p>высокого уровня - у нас есть</p> <p>выгодные условия.</p>
                            </div>
                            <div className={styles.invSpecCont}>
                                <div className={styles.inv}>
                                    <p className={styles.titleInv}> Для инвесторов</p>
                                    <p className={styles.textInv}>Если Вы заинтересованы в перспективах <br/> проекта и хотите узнать наши условия или <br/> предложить свои для совместного участия в <br/> проектах - пишите нам</p>
                                    <p className={styles.textInvMob}>Если Вы заинтересованы в <br/> перспективах проекта и хотите <br/> узнать наши условия или предложить <br/> свои для совместного участия в <br/> проектах - пишите нам</p>
                                </div>
                                <div className={styles.spec}>
                                    <p className={styles.titleSpec}> Для специалистов</p>
                                    <p className={styles.textSpec}>Если Вы классный программист, супер <br/> дизайнер, гений анимации или просто <br/> великий заварщик кофе и считаете что <br/> можете чем-то быть полезны нам - мы будем <br/> рады обсудить эти возможности </p>
                                    <p className={styles.textSpecMob}>Если Вы классный программист, <br/> супер дизайнер, гений анимации или <br/> просто великий заварщик кофе и <br/> считаете что можете чем-то быть <br/> полезны нам - мы будем рады <br/> обсудить эти возможности </p>
                                </div>
                            </div>
                            <button className={styles.tgBtn} onClick={() => window.location.href = 'https://t.me/RakodiManager'}>
                                <p>Telegram</p>
                                <img src={TG}/>
                            </button>
                            <div className={styles.ppBlock}>
                                <p className={styles.textPP}>P. S. Все актуальные открытые вакансии и партнёрские <br/> предложения выложены в нашем официальном телеграм канале. </p>
                                <p className={styles.textPPMob}>P. S. Все актуальные открытые вакансии и <br/>  партнёрские <br/> предложения выложены в нашем <br/>  официальном телеграм канале. </p>
                            </div>
                        </div>
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

export default CrypToken;