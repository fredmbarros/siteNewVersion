import { Link } from "react-router-dom";

const About = () => {
  const inTextLink = (page) => {
    // This will update the state variables so that the proper buttons are lit up when the user navigates away from the page using an in-text link
    // This function should be in a parent component - or perhaps it's time to go and implement the Store - so that it can be accessed everywhere
  };

  return (
    <div>
      <h1 className="page-header">About</h1>
      <p>
        I am a Music History professor at the Federal University of Rio de
        Janeiro since 2015. Though it is called &quot;Adjunct Professor&quot;,
        my position corresponds to that of a tenured Assistant Professor in
        North American terms. Before that, I taught Ethnomusicology as a
        sessional (which we call &quot;substitute professor&quot; in Brazil) at
        the same institution for one year.
      </p>
      <p>
        I graduated and got my Master&apos;s degree in History, at the Federal
        Fluminense University and the Pontifical Catholic University of Rio de
        Janeiro, respectively, and I received my PhD in Sociology from the
        University of São Paulo. During my doctorate I also spent one year in an
        international research exchange (called &quot;sandwich doctorate&quot;
        in Brazil) in France, at the Center for Sociology of Innovation of the{" "}
        <span className="italic">
          École Nationale Supérieure des Mines de Paris
        </span>
        .
      </p>
      <p>
        The way I see my{" "}
        <Link to="/research" onClick={() => inTextLink("research")}>
          research interests and musicological work
        </Link>
        , it makes sense that all my formal training has taken place in History
        and the Social Sciences and that I have started my teaching career in
        Ethnomusicology. The interest in how people think about
        &apos;their&apos; music (which can be the music they make, the music
        they enjoy as listeners etc.) runs across all my research work and, in a
        sense, is the underlying element that gives meaning to everything else.
      </p>
      <p>[teaching philosophy]</p>
      <p>
        This is not to say, however, that I am not interested in &apos;the notes
        themselves&apos;. I am keenly interested in them, both as a musician and
        as a musicologist — and here actually the latter feeds the former —,
        though I find it hard to think of them as actually being notes and only
        notes for the sake of notes.
      </p>
      <p>
        Among the multiple interests I have, music has probably been the deepest
        and most enduring of them. So much so that I made it my profession. That
        said, I am also interested in the visual arts, design and technology. I
        have done some freelance work as an illustrator and often draw as a past
        time or for my own projects. On the technology side, while on leave from
        my duties at the university and living in Canada, I have worked as a web
        developer and, after leaving my steady job in the field, decided to code
        this website from scratch to keep flexing my coding muscles.
      </p>
      <a href="https://www.credly.com/badges/7679cbf1-eb1e-4f55-9e0c-e42e72ba926e/public_url">
        <img
          src="./resources/badgeWES-96.png"
          className="badge-wes"
          alt="World Education Services badge"
        ></img>
      </a>
    </div>
  );
};

export default About;
