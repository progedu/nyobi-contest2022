import Head from 'next/head'
import styles from '../styles/Home.module.css';

import { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

export default function Index() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const h1tl = gsap.timeline()
    h1tl.fromTo(
      'h1',
      { opacity: 0, y: 10 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: 'h1',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      }
    )
    .to("#ugoku", {color: 'rgba(255,90,0,0.8)', duration: 0})
    .fromTo("#summer", { opacity: 0 }, {opacity: 1, color: 'rgb(60 109 228)', duration: 0.1});
    let targets = gsap.utils.toArray(".border");
    targets.forEach(target => {
      gsap.fromTo(
        target,
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 2,
          scrollTrigger: {
            trigger: target,
            start: 'top bottom', //要素のトップが、画面の中央まできたら開始
            end: 'bottom bottom', //要素のボトムが、画面の中央まできたら終了
          },
        }
      )
    });
    targets = gsap.utils.toArray(".rule-card");
    targets.forEach(target => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 100 }, //fromの設定
        {  //toの設定
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%', //要素のトップが、画面の中央まできたら開始
            end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          },
        }
      )
    });
    gsap.fromTo(
      'h2',
      { opacity: 0, y: 50 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: 'h2',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      }
    )
    gsap.fromTo(
      '#comingsoon',
      { opacity: 0, y: 50 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#comingsoon',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      }
    )
    gsap.fromTo(
      '#result',
      { opacity: 0, y: 50 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#result',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
        },
      }
    )
    
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>N予備校 動くWEBページコンテスト2022夏</title>
        <meta name="description" content="N予備校 動くWEBページコンテスト2022夏" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title_area}>
          <div className={styles.title_header}>
              N予備校
          </div>
          <h1 className={styles.title}>
            <span id="ugoku">動く</span>WEBページコンテスト
          </h1>
          <div className={styles.title_footer}>
              2022 <span id="summer">夏</span>
          </div>
          <div class="border" />
          <p className={styles.description}>
            N予備校 動くWebページコンテスト2022夏は、N予備校プログラミング入門コースで学んだN・S高校生、N中等部生ならびにN予備校受講者が、 プログラミングの成果物を競うコンテストです。
          </p>
        </div>
        <div class="border" />
        <h2 className={styles.result}>結果発表</h2>
        <div id="result" className={styles.marinebox}>
          <img src='./suica.png' />
          結果発表は、2022年10月6日(木曜日)を予定しています
        </div>
        <div class="border" />
        <div>
          <h2>応募作品</h2>
          <div id="comingsoon" className={styles.marinebox}>
            <img src='./kakigoori.png' />
            近日公開予定
          </div>
        </div>
        <div class="border" />
      </main>
    </div>
  )
}
