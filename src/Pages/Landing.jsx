import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import Navbar from "../Components/Fragments/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className={`bg-blue-gray-50 px-4`}>
        <div className="mx-auto max-w-screen-xl py-20 lg:py-24">
          <section id="profile" className="mt-18 lg:mt-0">
            <div class="section__pic-container">
              <img
                src="https://cdn.discordapp.com/attachments/988000172531400755/1175299173701144716/IMG_20230421_052744_010.jpg?ex=656ab9a7&is=655844a7&hm=c3ded177b2fddb1443654dadbebeb8cdac8794ae2e9b5a24b1d13fab1a58b26a&"
                alt="Iqbal profile picture"
                className="rounded-full"
              />
            </div>
            <div class="section__text">
              <p class="section__text__p1">Hello, I'm</p>
              <h1 class="title">M Iqbal F R</h1>
              <p class="section__text__p2">Fullstack Developer</p>
              <div class="btn-container">
                <a class="btn btn-color-1" href="#contact">
                  Contact Info
                </a>
              </div>
              <div id="socials-container">
                <a href="https://github.com/miqbalfr12">
                  <img
                    src="https://cdn.discordapp.com/attachments/988000172531400755/1175297947295027222/github.png?ex=656ab882&is=65584382&hm=4dc2bb7b73b3ff4942e57fedcc44c144ebb839e9c56f4ba15a1f25006bb09232&"
                    alt="My Github profile"
                    class="icon"
                  />
                </a>
              </div>
            </div>
          </section>
          <section id="about">
            <p class="section__text__p1">Get To Know More</p>
            <h1 class="title">About Me</h1>
            <div class="section-container">
              <div class="about-details-container">
                <div class="about-containers">
                  <div class="details-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/988000172531400755/1175297950751129600/experience.png?ex=656ab883&is=65584383&hm=747c0ad16e2c1a08b9a6348095bf1d11ba258bf190e5ff254f6dc287eccfbd0a&"
                      alt="Experience icon"
                      class="icon"
                    />
                    <h3>Experience</h3>
                    <p>2+ years Backend Development</p>
                    <p>1+ years Frontend Development</p>
                  </div>
                  <div class="details-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/988000172531400755/1175297950163947530/education.png?ex=656ab883&is=65584383&hm=72ef3096b4eab4a0fb57a2b88c14c279aa2b2029bf4f297095e958c4dc1af6bc&"
                      alt="Education icon"
                      class="icon"
                    />
                    <h3>Education</h3>
                    <p>
                      SMA Negeri 18 Garut
                      <br />
                      Institut Teknologi Garut
                    </p>
                  </div>
                </div>
                <div class="text-container">
                  <p className="text-blue-gray-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    quis reprehenderit et laborum, rem, dolore eum quod
                    voluptate exercitationem nobis, nihil esse debitis maxime
                    facere minus sint delectus velit in eos quo officiis
                    explicabo deleniti dignissimos. Eligendi illum libero
                    dolorum cum laboriosam corrupti quidem, reiciendis ea
                    magnam? Nulla, impedit fuga!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="experience">
            <p class="section__text__p1">Explore My</p>
            <h1 class="title">Experience</h1>
            <div class="experience-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <h2 class="experience-sub-title">Frontend Development</h2>
                  <div class="article-container">
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>HTML</h3>
                        <p>Experienced</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>CSS</h3>
                        <p>Experienced</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>SASS</h3>
                        <p>Intermediate</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>JavaScript</h3>
                        <p>Experienced</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>TypeScript</h3>
                        <p>Basic</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>Material UI</h3>
                        <p>Intermediate</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="details-container">
                  <h2 class="experience-sub-title">Backend Development</h2>
                  <div class="article-container">
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>MongoDB</h3>
                        <p>Basic</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>Node JS</h3>
                        <p>Intermediate</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>Express JS</h3>
                        <p>Intermediate</p>
                      </div>
                    </article>
                    <article>
                      <img
                        src="https://cdn.discordapp.com/attachments/988000172531400755/1175297949937434644/checkmark.png?ex=656ab883&is=65584383&hm=fb564b3dda8bfe8f46f075ed9c0557f596244c983841d478d49e642958f043a0&"
                        alt="Experience icon"
                        class="icon"
                      />
                      <div>
                        <h3>Git</h3>
                        <p>Intermediate</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects">
            <p class="section__text__p1">Browse My Recent</p>
            <h1 class="title">Projects</h1>
            <div class="experience-details-container">
              <div class="about-containers">
                <div class="details-container color-container">
                  <div class="article-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/988000172531400755/1175322150807273502/image.png?ex=656acf0d&is=65585a0d&hm=bf9b67b96f4df3fdc8f84cc1a1c90b0cbfcbd8ebad3fc2a9480095a0779dbcfa&"
                      alt="Project 1"
                      class="project-img"
                    />
                  </div>
                  <h2 class="experience-sub-title project-title">
                    Project Janari
                  </h2>
                  <div class="btn-container">
                    <a
                      class="btn btn-color-2 project-btn"
                      href="https://github.com/miqbalfr12"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <div class="details-container color-container">
                  <div class="article-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/988000172531400755/1175322668094980137/image.png?ex=656acf88&is=65585a88&hm=5bbdb40d6dd957839178568e84c574fb4c333f0c6d7ade5a9ff003f2ec3ee7d9&"
                      alt="Project 2"
                      class="project-img"
                    />
                  </div>
                  <h2 class="experience-sub-title project-title">
                    Project LMS PPTIK
                  </h2>
                  <div class="btn-container">
                    <a
                      class="btn btn-color-2 project-btn"
                      href="https://github.com/"
                    >
                      Github
                    </a>
                  </div>
                </div>
                <div class="details-container color-container">
                  <div class="article-container">
                    <img
                      src="https://cdn.discordapp.com/attachments/988000172531400755/1175323011331665940/image.png?ex=656acfda&is=65585ada&hm=7df02a48efa3c95ecfe84a93e13a9ee4d2c0fbde06b05893b984ff3f26216cb4&"
                      alt="Project 3"
                      class="project-img"
                    />
                  </div>
                  <h2 class="experience-sub-title project-title">Lain-lain</h2>
                  <div class="btn-container">
                    <a
                      class="btn btn-color-2 project-btn"
                      href="https://github.com/miqbalfr12"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <p class="section__text__p1">Get in Touch</p>
            <h1 class="title">Contact Me</h1>
            <div class="contact-info-upper-container">
              <div class="contact-info-container">
                <img
                  src="https://icons.veryicon.com/png/o/sport/cb-2/logo-whatsapp-6.png"
                  alt="Email icon"
                  class="icon contact-icon email-icon"
                />
                <p>
                  <a href="https://wa.me/62895396161325">WhatsApp</a>
                </p>
              </div>
              <div class="contact-info-container">
                <img
                  src="https://cdn.discordapp.com/attachments/988000172531400755/1175297950444949544/email.png?ex=656ab883&is=65584383&hm=e901bdef67a33af9e35c5ea8e1813375fef7915e1ed71bb31fca04085f0f0d91&"
                  alt="Email icon"
                  class="icon contact-icon email-icon"
                />
                <p>
                  <a href="mailto:examplemail@gmail.com">
                    miqbalfr12@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
          <footer>
            <p>Copyright &#169; 2023 M Iqbal F R. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
