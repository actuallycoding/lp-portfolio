import { useState } from 'react'

const inquiries = [
  {
    id: 1,
    question: 'Open to work?',
    answer:
      'Yes. I am open to suitable software development opportunities.',
  },
  {
    id: 2,
    question: 'Tech stack?',
    answer:
      'Java, Spring Boot, JavaScript, React, SQL, and REST APIs.',
  },
  {
    id: 3,
    question: 'Personal projects?',
    answer:
      'These are personal projects built to demonstrate my skills and technical interests.',
  },
  {
    id: 4,
    question: 'Contact details?',
    answer:
      'You can contact me through the Contact section using my email, LinkedIn, or phone number.',
  },
]

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState(null)

  function selectInquiry(inquiry) {
    setSelectedInquiry(inquiry)
  }

  return (
    <aside className="chat-widget">
      {isOpen && (
        <section className="chat-box" aria-label="Portfolio inquiries">
          <header className="chat-header">
            <div>
              <h2>INQUIRIES</h2>
              <p>Choose a question below.</p>
            </div>

            <button
              type="button"
              className="chat-close"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="chat-body" aria-live="polite">
            <div className="message-history">
              {selectedInquiry ? (
                <>
                  <div className="chat-message user-message">
                    {selectedInquiry.question}
                  </div>
                  <div className="chat-message info-message">
                    {selectedInquiry.answer}
                  </div>
                </>
              ) : (
                <div className="chat-message info-message">
                  Select a question to view more information.
                </div>
              )}

              <div className="quick-replies" aria-label="Suggested questions">
                {inquiries.map((inquiry) => (
                  <button
                    type="button"
                    className="quick-reply"
                    key={inquiry.id}
                    onClick={() => selectInquiry(inquiry)}
                  >
                    {inquiry.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        className="chat-toggle"
        aria-label={isOpen ? 'Close inquiries' : 'Open inquiries'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          '×'
        ) : (
          <svg
            className="chat-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-3.8-.8L3 21l1.7-4.4A8.2 8.2 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z" />
          </svg>
        )}
      </button>
    </aside>
  )
}

export default ChatWidget
