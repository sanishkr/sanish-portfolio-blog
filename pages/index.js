import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container'
import Portfolio from '../components/portfolio'
import MoreStories from '../components/more-stories'
import Projects from '../components/projects'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPortfolioForHome, getAllPostsForHome, getAllProjectsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME, PORTFOLIO } from '../lib/constants'

const dynamicComponents = {
  ReactFloatingBalloons: dynamic(
    () =>
      import("react-floating-balloons").then(
        (mod) => mod.ReactFloatingBalloons
      ),
    { ssr: false }
  )
};

export default function Index({ allPosts, allProjects, portfolioData, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const [showRFB, setShowRFB] = useState(false);

  const RFB = dynamicComponents.ReactFloatingBalloons;
  useEffect(() => {
    CheckForRFB();
  }, []);
  const CheckForRFB = () => {
    const TDD = new Date().getDate();
    const TMM = new Date().getMonth() + 1;
    const {2: DD, 1: MM} = portfolioData.dob.split('-');
    // alert(`TDD:${TDD}, TMM: ${TMM}, DD: ${DD}, MM:${MM}`);
    setShowRFB(parseInt(TDD) === parseInt(DD) && parseInt(TMM) === parseInt(MM));
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{portfolioData.name} | Blog | Profile | Portfolio</title>
        </Head>
        <Portfolio {...portfolioData}/>
        <Container>
          {/* <Intro />
          {heroPost ? (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          ) : 
          <span 
            className='block text-center font-serif text-sm text-gray-700'
          >
            {PORTFOLIO.BLOGS.EMPTY_MSG}
          </span>
          }
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          {allProjects.length > 0 ?
            <Projects projects={allProjects} /> : 
            <span 
              className='block text-center font-serif text-sm text-gray-700'
            >
              {PORTFOLIO.PROJECTS.EMPTY_MSG}
            </span>
          }
        </Container>
        {showRFB ? <RFB/> : null}
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const allProjects = await getAllProjectsForHome(preview)
  const portfolioData = await getAllPortfolioForHome(preview)
  return {
    props: { allPosts, allProjects, portfolioData, preview },
    revalidate: 1
  }
}