// @flow
import * as React from 'react';
import Link from 'next/link';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import type { GetInitialProps } from '../types';
import DesignDetailsGrid from '../components/DesignDetailsGrid';
import OpenSourceGrid from '../components/OpenSourceGrid';
import BooksGrid from '../components/BooksGrid';
import MusicGrid from '../components/MusicGrid';
import DesignDetailsPlayer from '../components/DesignDetailsPlayer';

class Index extends React.Component<{}> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return {};
  }

  render() {
    return (
      <Page>
        <SectionHeading>
          <Link href="/design-details">
            <a>
              <Heading>Design Details Blog</Heading>
            </a>
          </Link>
          <Subheading>A visual exploration of digital products</Subheading>
        </SectionHeading>

        <DesignDetailsGrid truncated />

        <SectionHeading>
          <a
            href="https://spec.fm/podcasts/design-details"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Heading>Design Details Podcast</Heading>
          </a>
          <Subheading>
            A weekly conversation about design process and culture
          </Subheading>
        </SectionHeading>

        <DesignDetailsPlayer />

        <SectionHeading>
          <Link href="/oss">
            <a>
              <Heading>Open Source</Heading>
            </a>
          </Link>
          <Subheading>What I’m working on</Subheading>
        </SectionHeading>

        <OpenSourceGrid />

        <SectionHeading>
          <Link href="/books">
            <a>
              <Heading>Books</Heading>
            </a>
          </Link>
          <Subheading>What I’m reading</Subheading>
        </SectionHeading>

        <BooksGrid />

        <SectionHeading>
          <Link href="/music">
            <a>
              <Heading>Music</Heading>
            </a>
          </Link>
          <Subheading>Albums on repeat</Subheading>
        </SectionHeading>

        <MusicGrid truncated />
      </Page>
    );
  }
}

export default Index;
