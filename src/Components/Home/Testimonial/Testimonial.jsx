import React, { useState, useRef, useCallback } from "react";
import styles from "./Testimonial.module.css";

// Card data
const TESTIMONIALS = [
  {
    id: 1,
    title: "commetment to time",
    description: "Ahmed was an excellent intern, reliable,hardworking, and always on time.",
    author: "Menna Ayman ",
    stars: 5,
    reviewSite: "Acount manager",
  },
  {
    id: 2,
    title: "Reliablelity & hardworking ",
    description: "Ahmed was an excellent intern, reliable, hardworking, and always on time.",
    author: "Mohamed Mahmoud",
    stars: 5,
    reviewSite: "Trainer"
  },
  {
    id: 3,
    title: "Technical Skilles &  dedication",
    description: "Ahmed demonstrated a very strong technical capability in his field. He was cooperative, dedicated, and consistently put in great effort to deliver the best possible results. During his internship, he performed exceptionally well and represented him self in an impressive way.",
    author: "Menna Ayman",
    stars: 5,
    reviewSite: "Acount manager"
  },  
  {
    id: 4,
    title: "Proactive and collaborative ",
    description: "He is committed, cooperative. He works hard to find solutions and improves fast.",
    author: "Mohamed Mahmoud",
    stars: 5,
    reviewSite: "Trainer"
  },  
  {
    id: 5,
    title: "skilled innovator",
    description: "He showed excellent technical skills, creativity in implementing improvements, strong problem-solving abilities, great teamwork, and a very polite and professional attitude.",
    author: "Menna Ayman",
    stars: 5,
    reviewSite: "Acount manager"
  },
    {
    id: 6,
    title: "functionality & Good_desigen",
    description: "The website was well-designed, functional,and showed great effort.",
    author: "Mohamed Mahmoud",
    stars: 5,
    reviewSite: "Trainer"
  },
];

const Testimonial = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const cardRef = useRef(null);

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      setSwipeDirection('left');
    } else if (isRightSwipe) {
      prevSlide();
      setSwipeDirection('right');
    }

    // Reset swipe direction after animation
    setTimeout(() => setSwipeDirection(null), 500);
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, TESTIMONIALS.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, TESTIMONIALS.length]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];
  const nextTestimonial = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (                      <div className={styles.testimonialSection}>

                      <h2 className={styles.experience}>EXPERIENCE</h2>
    <section className={styles.container} aria-label="Customer testimonials" id="testimonial">

      <div className={styles.leftText}>

        <span className={styles.reasons}>Pixagrama</span>
      </div>
      
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}>
            {/* Current Card - Full Visible with Touch Events */}
            <article 
              ref={cardRef}
              className={`${styles.cardFull} ${isAnimating ? styles.slideAnimation : ''} ${
                swipeDirection === 'left' ? styles.swipeLeft : swipeDirection === 'right' ? styles.swipeRight : ''
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ cursor: 'grab' }}
            >
              <h2 className={styles.title}>{currentTestimonial.title}</h2>
              <p className={styles.desc}>{currentTestimonial.description}</p>
              <div className={styles.author}>{currentTestimonial.author}</div>
              <div 
                className={styles.stars} 
                aria-label={`${currentTestimonial.stars} out of 5 stars`}
              >
                {Array.from({ length: currentTestimonial.stars }).map((_, index) => (
                  <span key={index} className={styles.star} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <span className={styles.trust}>{currentTestimonial.reviewSite}</span>
              
            </article>

            {/* Next Card - Half Visible */}
            <article className={styles.cardHalf}>
              <div className={styles.cardContent}>
                <h2 className={styles.title}>{nextTestimonial.title}</h2>
                <p className={styles.desc}>{nextTestimonial.description}</p>
                <div className={styles.author}>{nextTestimonial.author}</div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <button 
        className={styles.arrowLeft} 
        onClick={prevSlide}
        aria-label="Previous testimonial"
        disabled={isAnimating}
      >
        &larr;
      </button>
      
      <button 
        className={styles.arrowRight} 
        onClick={nextSlide}
        aria-label="Next testimonial"
        disabled={isAnimating}
      >
        &rarr;
      </button>

      <div className={styles.pagination} role="tablist">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
            disabled={isAnimating}
          />
        ))}
      </div>
    </section>     
     </div>

  );
};

export default Testimonial;