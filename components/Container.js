import Navigation from "./navigation";
import Head from "next/head";
import 'remixicon/fonts/remixicon.css'

const Container = (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="shortcut icon" href="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/logo_nqvtbv.png" type="image/x-icon"/>
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
