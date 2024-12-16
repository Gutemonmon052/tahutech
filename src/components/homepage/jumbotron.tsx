import Image from "next/image";


export function Jumbotron() {
  return (
    <div>
      <div className="jumbotron">
        <div className="jumbotron-title">
          <div className="j-title">
            <h1>The World of <i>Technology</i>, Explained Simply</h1>
          </div>
          <div className="j-text">
            <p>
              <i>Technology</i> is more than just gadgets. <b>Tahutech.</b> invites you to take
              a closer look at how <i>Technology</i> is changing our lives. Find
              inspiration and new knowledge in each of our articles.
            </p>
          </div>
        </div>
        <div className="j-media">
          <Image src="/assets/images/heropic.jpg" width={1280} height={600} alt="hero-pic"/>
        </div>
      </div>
    </div>
  );
}
