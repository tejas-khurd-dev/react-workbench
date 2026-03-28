import HeroButton from "./HeroButton"

const HeroLeftContent = () => {
  return (
    <div className="hero-left-content">

      <div className="hero-title-container">
        <h1 className="hero-title">Apple Watch</h1>
        <h2 className="hero-subtitle">Series 5</h2>
      </div>

      

      <p className="hero-description">
        Stay connected and in control with a smartwatch that fits your life. Track fitness, monitor health, and get notifications right from your wrist — all on a stunning, high-performance display built for every moment.
      </p>

      <HeroButton />

    </div>
  )
}

export default HeroLeftContent