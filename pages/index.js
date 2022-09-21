import Head from 'next/head'
import styles from '../styles/Home.module.css';

import { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { Grid } from '@mui/material';
import ContentCard from './contentCard';

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
    targets = gsap.utils.toArray(".content-card");
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
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>N予備校 動くWEBページコンテスト2022夏</title>
        <meta name="description" content="N予備校 動くWEBページコンテスト2022夏" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP" rel="stylesheet"></link>
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
          <div className="border" />
          <p className={styles.description}>
            N予備校 動くWebページコンテスト2022夏は、N予備校プログラミング入門コースで学んだN・S高校生、N中等部生ならびにN予備校受講者が、 プログラミングの成果物を競うコンテストです。
          </p>
        </div>
        <div className="border" />
        <h2 className={styles.result}>結果発表</h2>
        <div id="result" className={styles.marinebox}>
          <img src='./suica.png' />
          結果発表は、2022年10月6日(木曜日)を予定しています
        </div>
        <div className="border" />
        <div>
          <h2>応募作品</h2>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='Bucket List'
                author='Kosuke'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh01.png'
                website_url='https://kosuke-tanoue-kt.github.io/Bucket-List/'
                github_url='https://github.com/Kosuke-Tanoue-KT/Bucket-List'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='ポジティブモンスター'
                author='うどん'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh02.png'
                website_url='https://udon-japanese.github.io/positive-monster/positive.html'
                github_url='https://github.com/Udon-japanese/positive-monster'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='ブロック崩し'
                author='ねこむら'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh03.png'
                website_url='https://11201ozi.github.io/brick-break/index.html'
                github_url='https://github.com/11201ozi/brick-break'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='ナンプレ（数独）'
                author='グラタン'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh04.png'
                website_url='https://macaroni-guratan.github.io/nanpure/'
                github_url='https://github.com/macaroni-guratan/nanpure'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='迷路QUEST'
                author='kukki-'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh05.png'
                website_url='https://marotyuket.github.io/summer2022/home/home.html'
                github_url='https://github.com/marotyuket/summer2022'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='15puzzle'
                author='Nyanchl'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh06.png'
                website_url='https://nyanchl.github.io/Brain_tease/'
                github_url='https://github.com/Nyanchl/Brain_tease'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='パーソナルカラー診断'
                author='コッペパン'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh07.png'
                website_url='https://yoneyamarise.github.io/color/color.html'
                github_url='https://github.com/yoneyamarise/color'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='フラッシュカード'
                author='イワシュン'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh08.png'
                website_url='https://iwashun22.github.io/flash-card/'
                github_url='https://github.com/iwashun22/flash-card'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='My Book List'
                author='Haru'
                label_name='N・S高等学校'
                label_color='error'
                img_url='./entry/nh09.png'
                website_url='https://haru-036.github.io/book-list/book-list.html'
                github_url='https://github.com/haru-036/book-list.git'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='ストップウォッチ'
                author='エビリオ'
                label_name='N中等部'
                label_color='warning'
                img_url='./entry/nc01.png'
                website_url='https://ebirio.github.io/Stopwatch/Stopwatch.html'
                github_url='https://github.com/ebirio/Stopwatch'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='youtube-archive'
                author='marukun_'
                label_name='N中等部'
                label_color='warning'
                img_url='./entry/nc02.png'
                website_url='https://marukun712.github.io/youtube-archive/html/'
                github_url='https://github.com/marukun712/youtube-archive'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <ContentCard
                title='画像アップローダー'
                author='しゃけ'
                label_name='N中等部'
                label_color='warning'
                img_url='./entry/nc03.png'
                website_url='https://tokuzou0829.github.io/image-upload-page/'
                github_url='https://github.com/tokuzou0829/image-upload-page'
              />
            </Grid>
          </Grid><br /><br />
          <div id="comingsoon" className={styles.marinebox}>
            <img src='./kakigoori.png' />
            N予備校部門の応募作品は近日公開予定
          </div>
        </div>
        <div className="border" />
      </main>
    </div>
  )
}
