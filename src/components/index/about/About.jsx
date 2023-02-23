import StyledAbout from "./About.styled"

export const About = () => {
    return (
        <StyledAbout>
            <section className="hero-text-container">
                <h1>About Me</h1>
                <p>
                    Hi there!👋 My name is Victor Anyadioha. I am a Civil engineering undergraduate and a Frontend developer from Anambra state, Nigeria. I have a keen eye for detail and a love for creating beautiful, intuitive and user-friendly web experiences. What sets me apart is my ability to learn quickly and adapt to using new tools and technologies. I am constantly seeking out new challenges and opportunities to expand my knowledge and skills. Whether {"it's"} a new programming language, library, framework or a complex engineering problem, I have a proven track record of tackling new challenges with confidence and determination. When {"I'm"} not working or studying, {"you'd"} probably find me exploring the great outdoors, playing video games, listening to music or enjoying a football game. I am a creative and curious individual, always looking for ways to expand my horizons and grow as a person.
                    {/* Hi there!👋 My name is Victor Anyadioha. I am a Civil engineering undergraduate and a Frontend developer from Anambra state, Nigeria. I have a keen eye for detail and a love for creating beautiful, intuitive and user-friendly web experiences. What sets me apart is my ability to learn quickly and adapt to using new technologies. I am constantly seeking out new challenges and opportunities to expand my knowledge and skills. Whether {"it's"} a new programming language, library/framework or a complex engineering problem, I have a proven track record of tackling new challenges with confidence and determination. Listening to Music, watching and playing football and watching movies are my biggest escapes. I love virtually every genre of music and find inspiration in the rhythms, melodies and lyrics of songs. Movies, be it Live-action, animated movies or Anime, on the other hand, allows me to escape into new worlds, experience different cultures and perspectives, and gain a deeper understanding of human relationships. I love football so much. Matter-of-fact, Cristiano Ronaldo {'(The-Greatest-Of-All-Time)'} 🐐 is my biggest idol because to him, Talent without hardwork is not enough and I try to follow this ideology by giving my best everyday. I enjoy playing football too, albeit not to well but I try. When {"I'm"} not working, studying, hobbying or relaxing, you will probably find me exploring the great outdoors, trying new foods, or reading a good book. I am a creative and curious individual, always looking for ways to expand my horizons and grow as a person. */}
                </p>
                <div className="hero-btn-container">
                    <button>Download my Resume</button>
                    <button>Want to know more?</button>
                </div>
            </section>
            <section className="hero-img-container">
                <img
                    src="./assets/hero-image.jpg"
                    alt="'The developer' in question" />
            </section>
        </StyledAbout>
    )
}
