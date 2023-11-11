import Albums from '../components/albums/Albums'
import Biography from '../components/Biography'
import Blog from '../components/blog/Blog'
import Event from '../components/Event'
import Events from '../components/events/Events'
import ImageGallery from '../components/Gallery'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Player from '../components/Player'
import VideoComponent from '../components/Video'

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <Biography />
      <Albums />
      <ImageGallery />
      <VideoComponent />
    </main>
  )
}
