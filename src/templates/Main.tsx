import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-semibold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>About Me</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/mywork/">
                <a>My Work</a>
              </Link>
            </li>
            <li className="mr-6">
              <a target="_blank" rel="noreferrer" href="https://github.com/Rahat-ch">
                GitHub
              </a>
            </li>
            <li className="mr-6">
              <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/rahatcodes">
                Twitch
              </a>
            </li>
            <li className="mr-6">
              <a target="_blank" rel="noreferrer" href="https://mirror.xyz/rahat.eth">
                Blog
              </a>
            </li>
            <li className="mr-6">
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Rahatcodes">
                Twitter
              </a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        {Config.title}
        . Powered with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
