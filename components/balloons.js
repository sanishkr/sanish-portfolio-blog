import Head from 'next/head';
import {bdayBallons} from '../lib/balloons';

export default () => {
  return <div>
      <Head>
        <link rel="stylesheet" href="/css/balloons.css" />
        <script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
      </Head>
      {bdayBallons()}
    </div>
}