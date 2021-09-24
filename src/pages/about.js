import React from 'react'
import Page from '../components/PageLayout';
import Helmet from 'react-helmet'
import { SocialIcon } from 'react-social-icons'

function About() {
    return (
        <Page>
            <Helmet>
                <title>About | Naked Wetwear Side: Misc.</title>
            </Helmet>
            <div className="container about my-5">
                <h1 className="font-weight-bold">Naked Wetwear Side: Misc.</h1>
                <h3><i>The dots will somehow connect in your future.</i></h3>
                <h6 className="my-3">
                    テックブログとは別の、日常系ブログ。
                </h6>
                <h2>Author</h2>

                <div className="row my-5">
                    <div className="col-lg-6">
                        <img
                            width="250"
                            className="rounded-circle author-img mx-4 mb-4"
                            src="https://pbs.twimg.com/profile_images/909041893262073857/wA9x-YLq_400x400.jpg"
                            alt="author-img" />
                    </div>
                    <div className="col">
                        <h3>
                            mtsuchi
                        </h3>
                        <h5>Programmer | Developper <br /></h5>
                        <p>
                            <br />

                            関東圏内で働くプログラマ.
                            <br />
                            C#とPythonとSFが好き. あとメイドさんも.
                        </p>

                        <h5>Stay in touch <br /></h5>
                        <SocialIcon url="https://github.com/mtsuchihashi" className="mr-4" />
                        <SocialIcon url="https://twitter.com/mtsuchi_tech/" className="mr-4" />
                        <SocialIcon url="https://atcoder.jp/users/mtsuchihashi" className="mr-4" />
                    </div>
                </div>
            </div>

        </Page>
    )
}

export default About
