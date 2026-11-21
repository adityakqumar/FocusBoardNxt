import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FOCUS_NOTES } from '../../data/constants';
import './FocusNotes.css';

function FocusNotes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % FOCUS_NOTES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + FOCUS_NOTES.length) % FOCUS_NOTES.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="focus-notes" aria-label="Focus Notes">
      <div className="focus-notes__container">
        <button
          className="focus-notes__arrow focus-notes__arrow--left"
          onClick={prevSlide}
          aria-label="Previous note"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="focus-notes__viewport">
          <div
            className="focus-notes__track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {FOCUS_NOTES.map((note) => (
              <div
                className="focus-notes__slide"
                key={note.id}
                style={{
                  borderLeft: `4px solid ${note.color}`,
                  backgroundColor: note.bgColor,
                }}
              >
                <h3 className="focus-notes__title">{note.title}</h3>
                <p className="focus-notes__text">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="focus-notes__arrow focus-notes__arrow--right"
          onClick={nextSlide}
          aria-label="Next note"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="focus-notes__indicators" role="tablist" aria-label="Slide indicators">
        {FOCUS_NOTES.map((note, index) => (
          <button
            key={note.id}
            className={`focus-notes__dot ${index === currentSlide ? 'focus-notes__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default FocusNotes;
