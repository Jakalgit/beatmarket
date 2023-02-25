import style from "@/styles/pages/home.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Grid from "@/components/Grid";

export default function Home() {
  return (
      <div className="height" style={{display: 'flex', flexDirection: 'column'}}>
          <Grid>
              <Col xxl={5} xl={5} lg={5} md={5} sm={5}>
                  <motion.div className={style.land} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
                      <h1 className={style.head_text}>Популярные бит - мейкеры</h1>
                      <h2 className={style.text}>Создано на основании продаж за последний месяц.</h2>
                      <div className={style.logo_line}>
                          <div className={style.logo} />
                          <div className={style.logo} />
                          <div className={style.logo} />
                          <div className={style.logo} />
                      </div>
                  </motion.div>
              </Col>
              <Col xxl={7} xl={7} lg={7} md={7} sm={7} className={style.top_track}>
                  <motion.div className={style.top_track} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                              viewport={{ once: false }}>
                      <Image src={require("@/img/preview.png")} className={style.preview} />
                      <div>
                          <h1 className={style.head_text}>Самый популярный бит</h1>
                          <h2 className={style.text}>Больше всего 5-и звёздочных  реакций за последний месяц</h2>
                          <h2 className={style.author}>by <Link href="/" style={{color: "#fff"}}>GONE.Fludd</Link></h2>
                          <div className={style.name_play}>
                              <h1 className={style.track_name}>OVERHEAVEN</h1>
                              <svg className={style.play} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M366 824q-15 10-30.5 1T320 798V348q0-18 15.5-27t30.5 1l354 226q14 9 14 25t-14 25L366 824Z"/></svg>
                          </div>
                          <div className={style.stars}>
                              <Image className={style.star} src={require("@/img/star.png")}/>
                              <Image className={style.star} src={require("@/img/star.png")}/>
                              <Image className={style.star} src={require("@/img/star.png")}/>
                              <Image className={style.star} src={require("@/img/star.png")}/>
                              <Image className={style.star} src={require("@/img/star.png")}/>
                              <h2 className={style.count}>12 534 343</h2>
                              <Link className={style.text + ' ' + style.top} href="/">Посмотреть топ-10</Link>
                          </div>
                      </div>
                  </motion.div>
              </Col>
              <div className={style.flex + ' ' + style.land_margin}>
                  <Col xxl={6} xl={6} lg={6} md={6} sm={6} className={style.left_col_margin}>
                      <motion.div className={style.land}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: false }}>
                          <h1 className={style.head_text}>Как продавать свои биты?</h1>
                          <h2 className={style.text}>Рассказываем и показывем как выйти на нашу площадку, вам понадобится
                              лишь номер телефона и электронная почта. </h2>
                      </motion.div>
                  </Col>
                  <motion.div className={style.land} style={{flex: '1 auto'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                              viewport={{ once: false }}>
                      <h1 className={style.head_text}>Набирающие популяность</h1>
                      <h2 className={style.text}>Работы которые не попали в топы, но всё равно достойны внимания.</h2>
                  </motion.div>
              </div>
          </Grid>
          <div className={style.minute_block}>
              <div className={style.shadow_block}>
                  <h1 className={style.minute}>3 712 890 минут</h1>
                  <div className={style.blue_shadow} />
              </div>
              <h2 className={style.text + ' ' + style.margin_last_text}>Общее время битов на площадке.</h2>
          </div>
      </div>
  )
}
