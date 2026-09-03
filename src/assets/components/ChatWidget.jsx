import { useEffect, useRef, useState } from 'react'

const inquiries = [
  {
    id: 1,
    question: 'Are you available for work?',
    answer:
      'Yes, I am open to discussing suitable opportunities. You can contact me using the details provided below.',
  },
  {
    id: 2,
    question: 'What technologies do you use?',
    answer:
      'I primarily work with Java, Spring Boot, JavaScript, React, SQL, and REST APIs.',
  },
  {
    id: 3,
    question: 'Where can I view your projects?',
    answer:
      'Open the Projects folder on the left and select a project title to view its details.',
  },
  {
    id: 4,
    question: 'How can I contact you?',
    answer: 'You can contact me by email at your-email@example.com.',
  },
]

const initialMessages = [
  {
    id: 'welcome',
    sender: 'info',
    text: 'Select a question to view more information.',
  },
]

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const chatEndRef = useRef(null)

  function selectInquiry(inquiry) {
    const messageId = Date.now()

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `question-${inquiry.id}-${messageId}`,
        sender: 'user',
        text: inquiry.question,
      },
      {
        id: `answer-${inquiry.id}-${messageId}`,
        sender: 'info',
        text: inquiry.answer,
      },
    ])
  }

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

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
              {messages.map((message) => (
                <div
                  className={`chat-message ${
                    message.sender === 'user'
                      ? 'user-message'
                      : 'info-message'
                  }`}
                  key={message.id}
                >
                  {message.text}
                </div>
              ))}

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

              <div ref={chatEndRef} />
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
