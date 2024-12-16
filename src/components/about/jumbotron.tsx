"use client"
import Image from "next/image";
import { ContributorsCard } from "./contributorscard";
import { SosmedCard } from "./sosmedcard";
import { useFetchBlogData } from "@/hooks/fetchblog.hooks";
import { IAuthor } from "@/interfaces/iauthor";
import ContributorsSklCard from "./contributor.skl";

export function AboutJumbo() {
  const { data, loading, error } = useFetchBlogData(
    "https://x8ki-letl-twmt.n7.xano.io/api:9DTYLZFj/blog_author"
  );
  const contributors = data || [];

  return (
    <div>
      <div className="aboutjumbo">
        <div className="aboutjumbo-brief">
          <div className="about-title">
            <h1>ABOUT US</h1>
            <div className="about-media">
              <Image
                src="/assets/images/article1.jpg"
                width={1280}
                height={600}
                alt="hero-pic"
              />
            </div>
          </div>
          <div className="about-brief">
            <div className="about-his">
              <h2>History</h2>
            </div>
            <div className="about-his-desc">
              <p>
              Tahutech was established as a platform for sharing knowledge about technology in 2024. The blog was born from a vision to help people understand the rapid advancements in technology, ranging from ERP systems to artificial intelligence. Starting as a small initiative, Tahutech has grown into a trusted source for readers seeking to deepen their digital literacy and stay updated on the latest tech trends.
              </p>
            </div>
            <div className="about-his">
              <h2>Vision & Mission</h2>
            </div>
            <div className="about-his-desc">
              <p>
               <b>Vission</b><br/>
                  Tahutech envisions becoming a premier platform for technology knowledge, offering insights that are not only relevant and informative but also applicable in everyday life. By bridging the gap between complex technological concepts and user-friendly understanding, Tahutech aims to empower individuals and organizations to adapt and thrive in the digital era.
              </p><br />
              <p>
               <b>Mission</b><br/>
                  Tahutech is committed to delivering high-quality content that educates and inspires its readers. Its mission is to enhance digital literacy by simplifying complex technology topics and presenting them in an engaging way. Through its articles, Tahutech strives to foster a community of tech-savvy individuals who are informed, innovative, and capable of making meaningful contributions in their respective fields.
              </p><br />
            </div>
          </div>
        </div>
        <div className="contributors">
          <div className="contributors-title">
            <h2>Contributors</h2>
            <p>The contributors at Tahutech are dedicated individuals passionate about technology and digital literacy. They come from diverse backgrounds, including IT professionals, social media enthusiasts, and academics with a deep interest in technological advancements. With their varied experiences and expertise, Tahutech’s contributors are committed to delivering accurate, relevant, and beneficial articles for readers.</p>
          </div>
          <div className="contributors-list">
            {loading ? (
              <>
               {Array.from({ length: 4 }, (_, i) => (
                  <ContributorsSklCard key={i}/>
                ))}
              </>
            ) : error ? (
              <div className="error">Error: {error.message}</div>
            ) : contributors.length > 0 ? (
              contributors.map((e: IAuthor) => (
                <ContributorsCard key={e.id} {...e} />
              ))
            ) : (
              <div className="no-data">No categories available.</div>
            )}
            {/* <ContributorsCard />
            <ContributorsCard />
            <ContributorsCard />
            <ContributorsCard /> */}
          </div>
        </div>
        <div className="contact-us">
          <div className="contactus-title">
            <h3>Get in Touch</h3>
            <p>
              Get closer to us by contacting our social media platform and get
              updated articles
            </p>
          </div>
          <div className="contactus-sosmed">
            <SosmedCard id={1} link="facebook.svg" sosmed_name="Tahutech." />
            <SosmedCard id={2} link="instagram.svg" sosmed_name="@Tahutech." />
            <SosmedCard id={3} link="x.svg" sosmed_name="_Tahutech." />
            <SosmedCard
              id={4}
              link="mail.svg"
              sosmed_name="tahutech@mail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
