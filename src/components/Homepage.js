import {FaGithub, FaLinkedin} from "react-icons/fa"

export const Homepage = () => {
  return <>
    <section className="homepage">
      <div className="overlay">
        <h1> Mohamed Abdillahi</h1>
        <p>Software Developer</p>

        <ul>
          <li><a href="https://github.com/MohamedAbdillahi" target="_blank" rel="noopenner noreferrer"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/mohamed-abdillahi/" target="_blank" rel="noopenner noreferrer"><FaLinkedin/></a></li>
        </ul>
      </div>
    </section>
  </>;
};
