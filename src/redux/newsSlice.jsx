import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [
      {
        u_id: 1,
        author: "Benjamin Pirus",
        title: "Coinbase customers can now dodge a bank",
        description:
          "New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.",
        imageUrl:
          "https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg",
      },
      {
        u_id: 2,
        author: "Malwarebytes Labs",
        title: "VideoBytes: Ransomware gets wasted!",
        description:
          "On today's VideoBytes, we look at how ransomware is on the rise, attacking corporations with malware that not only encrypts files, but also steals it.",
        imageUrl:
          "https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg",
      },
      {
        u_id: 3,
        author: "Daniel Sparks",
        title: "Why Tesla Stock Fell Sharply Friday Morning - Motley Fool",
        description:
          "Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.",
        imageUrl:
          "https://g.foolcdn.com/editorial/images/593799/stock-down.jpg",
      },
      {
        u_id: 4,
        author: "Jessica Bursztynsky",
        title: "Twilio hits new 52-week high as stock",
        description:
          "Shares of Twilio extended its gains into Friday, reaching a 52-week high, after the company said in a filing that it expects better-than-expected third-quarter revenue.",
        imageUrl:
          "https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142",
      },
    ],
    links: [
      {
        id: 1,
        imageUrl:
          "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
      },
      {
        id: 2,
        imageUrl:
          "https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5",
      },
      {
        id: 3,
        imageUrl:
          "https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg",
      },
      {
        id: 4,
        imageUrl: "https://images.mktw.net/im-242755/social",
      },
    ],
  },
});

export default newsSlice.reducer;
