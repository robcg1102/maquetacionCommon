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
      <link rel="shortcut icon" href="https://library.kissclipart.com/20180901/ele/kissclipart-rubber-duck-png-clipart-rubber-duck-clip-art-6e4079de63415213.png" type="image/x-icon"/>
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
