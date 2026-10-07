import './Home.css'
import { Nav } from '../../components/Nav/Nav'
import { Hero } from '../../components/Hero/Hero'
import { FeatureRow } from '../../components/FeatureRow/FeatureRow'
import { FeatureGrid } from '../../components/FeatureGrid/FeatureGrid'
import { Footer } from '../../components/Footer/Footer'
import bootMenu from '../../assets/img/slideshow1/1-1.webp'
import configTools from '../../assets/img/slideshow1/2-1.webp'
import { ProfileSelector } from '../../components/ProfileSelector/ProfileSelector'

export default function Home() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <FeatureRow
        headline="Upgrade fearlessly."
        body="Balsa is atomic, meaning that after every update, the previous version of Balsa is still on your machine. If an update causes any issues, you can roll back at any time, directly from the bootloader."
        visual={
          <figure className="feature-figure">
            <img
              className="feature-shot"
              src={bootMenu}
              width={1594}
              height={894}
              loading="lazy"
              alt="Limine boot menu listing Balsa generations 1 and 2, with Default, development, and gaming entries under generation 2"
            />
            <figcaption className="feature-caption">
              Image shows a pre-release and in-development build of Balsa. This is not indicative of the final product.
            </figcaption>
          </figure>
        }
      />
      <FeatureRow
        headline="Simplicity by default."
        body="Nix used to be complicated. We fixed this. Utilities are shipped to streamline the Nix experience; both GUI-based and TUI-based. Balsa stays out the way while you configure, declare, and clone with ease."
        visual={
          <figure className="feature-figure">
            <img
              className="feature-shot"
              src={configTools}
              width={1920}
              height={989}
              loading="lazy"
              alt="balsa-pkg searching nixpkgs for librewolf in a terminal, next to a graphical editor for the programs.firefox.enable option"
            />
              <figcaption className="feature-caption">
                  Image shows a pre-release and in-development build of Balsa. This is not indicative of the final product.
              </figcaption>
          </figure>
            }
        />

      <FeatureRow
        headline="Light, yet powerful."
        body="Balsa ships just the bare essentials to get going. The GUI installer ISO is just 2.6GiB; one of the smallest graphical installer ISOs of any distribution."
      />
      <FeatureRow
        headline="Built for you."
        body="We give you the tools to make it your own. Switch between performance profiles for gaming, development, and everyday use. Everything is up to you."
        visual={<ProfileSelector />}
      />
      <FeatureGrid />
      <Footer />
    </div>
  )
}
