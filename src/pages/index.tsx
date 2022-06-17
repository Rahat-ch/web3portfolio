import React from 'react';

import Link from 'next/link';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Rahat.dev" description="rahat.eth" />}>
    <Content>
      <p>
        Rahat is a hip hop artist turned web developer, indie hacker, and web3 enthusiast.
        Rahat&#39;s passions include advocating for mental health in tech, music, gaming, and
        mentoring new developers. He currently works as a Developer Advocate for Polygon
      </p>
      <p>
        For the latest projects, talks, and workshops check out
        {' '}
        <Link href="/mywork/">
          <a>My Work</a>
        </Link>
        {' '}
        If you would like Rahat to speak at your event please contact via Twitter!
      </p>
    </Content>
  </Main>
);

export default About;
