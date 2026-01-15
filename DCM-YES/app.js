
    // --- ChatService: Simulates interaction with a backend API ---
    class ChatService {
      constructor() {
        this.qaDatabase = {
          'start': {
            question: 'Initial prompt',
            answer: 'Welcome to <strong>DCM YES School</strong>, a legacy in education since 1946. We are committed to fostering an environment of academic excellence and holistic development. How can we assist you today?'
          },
          'admissions': {
            question: 'Admissions Info',
            answer: 'Our admission process for the new academic year typically begins in <strong>November</strong>. For detailed information on eligibility, required documents, and key dates, please visit the <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">admissions section on our official website</a>.',
            followUpAnswer: 'To confirm, admissions generally start in November. All details on eligibility and forms are on the <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">official website</a>. Please check there for the most current information.'
          },
          'curriculum': {
            question: 'Our Curriculum',
            answer: 'We proudly follow the <strong>CBSE curriculum</strong>, enriched with a bespoke curriculum for all age groups including <strong>Mother\'s Lap, CCLICK, SLITEE, and CLASSE</strong> programs. This ensures all-round development with a wide variety of co-curricular and extra-curricular activities.',
            followUpAnswer: 'Our curriculum is a blend of <strong>CBSE</strong> and unique programs like <strong>Mother\'s Lap, CCLICK, SLITEE, and CLASSE</strong>, designed for comprehensive development. It emphasizes both academics and co-curricular learning.'
          },
          'facilities': {
            question: 'Campus Facilities',
            answer: 'Our campus boasts world-class, state-of-the-art facilities including: <ul class="list-disc list-inside mt-2"><li>Digitally networked Smart Classrooms</li><li>Ultra Modern Labs (Physics, Chemistry, Biology, Social Studies, Maths, AI/Robotics, Special Language Lab)</li><li>A Hi-tech, well-stocked Library</li><li>Spacious Sports Grounds for indoor & outdoor games (with expert coaches)</li><li>Secure Transportation Services</li><li>Kids Amusement Park with rides & animated characters</li><li>Experiential Learning Studios</li><li>Finishing & Grooming classes for girls (Etiquette Villa)</li><li>Activity Block (Meditation, Music, Art & Craft, Dance room)</li><li>Separate Computer labs for Junior & Senior wings with 24-hour high-speed Internet</li><li>Smart Boards & Conference Room</li><li>STEM (Science, Technology, Engineering and Math) labs</li><li>e-Counseling Cell & Provision for day-boarding</li><li>Special classes for competitive exams (IIT, NEET/JEE, AFMC, AIIMS, NDA, NTSE, KVPY)</li><li>Safe and secure environment with round-the-clock security</li></ul>',
            followUpAnswer: 'In summary, our campus features modern facilities such as Smart Classrooms, a variety of advanced labs including AI and STEM, extensive sports grounds, a library, and unique offerings like our Etiquette Villa and Kids Amusement Park. We also provide secure transportation.'
          },
          'contact': {
            question: 'Contact Us',
            answer: 'You can reach us at: <br><br><strong>Landline:</strong> <a href="tel:+911613510099" class="text-theme-blue font-semibold" target="_blank"><strong>+91-161-3510099</strong></a><br><strong>Mobile:</strong> <a href="tel:+918728893030" class="text-theme-blue font-semibold" target="_blank"><strong>+91-8728893030</strong></a><br><strong>Email:</strong> <a href="mailto:contact@dcmyesschool.com" class="text-theme-blue font-semibold" target="_blank">contact@dcmyesschool.com</a><br><strong>Admissions:</strong> <a href="mailto:admissions@dcmyesschool.com" class="text-theme-blue font-semibold" target="_blank">admissions@dcmyesschool.com</a><br><strong>Address:</strong> Block-B, Rajguru Nagar, Ludhiana',
            followUpAnswer: 'To contact us, you can call our landline at +91-161-3510099, mobile at +91-8728893030, or email us at contact@dcmyesschool.com. Admissions-related queries can be sent to admissions@dcmyesschool.com.'
          },
          'sports': {
            question: 'Sports offered',
            answer: 'We offer structured training in various sports including football, cricket, basketball, and athletics. Our school has spacious sports grounds and expert coaches to ensure a healthy balance of academics and physical fitness.'
          },
          'international': {
            question: 'International programs',
            answer: 'Yes, we offer a unique Dual Diploma program in collaboration with Houghton Academy, New York. This allows our students to earn both a CBSE and a U.S. high school diploma.'
          },
          'entrepreneurship': {
            question: 'Entrepreneurship programs',
            answer: 'Our "Yespreneurship" initiative is a unique program where students can develop their own startups, receive mentorship, and get a chance to pitch their ideas to investors, giving them a head start in the world of business.'
          },
          'events': {
            question: 'School Events',
            answer: 'DCM YES School hosts a variety of annual events including the **Annual Day celebrations**, **Sports Fest**, **Science Exhibitions**, and **cultural programs**. We also organize workshops and seminars regularly. Check our school calendar for upcoming events!',
            followUpAnswer: 'Our key events are Annual Day, Sports Fest, Science Exhibitions, and cultural programs. We also have regular workshops. See the school calendar for details.'
          },
          'student_life': {
            question: 'Student Life',
            answer: 'Student life at DCM YES School is vibrant and enriching! We encourage participation in various clubs, societies, and extracurricular activities like debates, music, art, and community service. Our aim is to provide a balanced and holistic development experience.',
            followUpAnswer: 'Student life is rich with clubs, societies, and extracurriculars (debates, music, art, community service) for holistic development.'
          },
          'career_guidance': {
            question: 'Career Guidance',
            answer: 'We provide comprehensive **career guidance and counseling** to help students explore various career paths, prepare for competitive exams, and make informed decisions about their future. This includes personalized sessions, aptitude tests, and university guidance.',
            followUpAnswer: 'We offer career guidance, counseling, aptitude tests, and university guidance to help students choose their paths.'
          },
          'transportation': {
            question: 'Transportation Services',
            answer: 'Yes, we offer **secure and reliable transportation services** for students. Our fleet of buses covers various routes, ensuring safe and timely commute to and from school. All buses are equipped with GPS tracking and supervised by staff.',
            followUpAnswer: 'We provide secure transportation with GPS-tracked buses covering various routes for safe and timely commutes.'
          },
          'safety': {
            question: 'Student Safety',
            answer: 'Student safety is our top priority. Our campus is under **24/7 CCTV surveillance**, with trained security personnel, and strict entry/exit protocols. We also conduct regular safety drills and have a dedicated health clinic on campus.',
            followUpAnswer: 'Campus safety includes 24/7 CCTV, trained security, strict entry/exit, and regular safety drills with an on-site health clinic.'
          },
        };

        this.followUpOptions = {
          'start': ['admissions', 'curriculum', 'facilities', 'contact', 'events', 'student_life', 'career_guidance'],
          'admissions': ['curriculum', 'facilities', 'contact', 'transportation', 'safety'],
          'curriculum': ['admissions', 'facilities', 'contact', 'international', 'entrepreneurship'],
          'facilities': ['admissions', 'curriculum', 'contact', 'sports', 'transportation'],
          'contact': ['admissions', 'curriculum', 'facilities'],
          'sports': ['facilities', 'student_life'],
          'international': ['curriculum', 'career_guidance'],
          'entrepreneurship': ['curriculum', 'career_guidance'],
          'events': ['student_life', 'facilities'],
          'student_life': ['events', 'sports', 'career_guidance'],
          'career_guidance': ['international', 'entrepreneurship', 'student_life'],
          'transportation': ['safety', 'contact'],
          'safety': ['transportation', 'contact'],
        };
      }

      async getResponse(message, isFollowUp = false) {
        let normalizedMessage = message.toLowerCase().trim();
        let response = null;

        if (this.qaDatabase[normalizedMessage]) {
          response = {
            answer: isFollowUp && this.qaDatabase[normalizedMessage].followUpAnswer ? this.qaDatabase[normalizedMessage].followUpAnswer : this.qaDatabase[normalizedMessage].answer,
            options: this.getFollowUpOptions(normalizedMessage)
          };
        } else {
          // Fallback to a general search or a default message
          response = {
            answer: 'I\'m sorry, I couldn\'t find a specific answer for that. You can try asking about our admissions, curriculum, facilities, or contact details, school events, student life, or career guidance.',
            options: ['admissions', 'curriculum', 'facilities', 'contact', 'events', 'student_life', 'career_guidance']
          };
        }

        return new Promise(resolve => setTimeout(() => resolve(response), 800));
      }

      getFollowUpOptions(currentKey) {
        // Return follow-up options, excluding the current topic
        return this.followUpOptions[currentKey] || [];
      }
    }

    // --- DOM Elements and State Management ---
    const chatWindow = document.getElementById('chat-window');
    const messageContainer = document.getElementById('message-container');
    const optionsWrapper = document.getElementById('options-wrapper');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    const clearChatButton = document.getElementById('clear-chat-button');
    const stopReadingButton = document.getElementById('stop-reading-button');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsButton = document.getElementById('settings-button');
    const closeSettingsPanel = document.getElementById('close-settings-panel');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const fontSizeSelector = document.getElementById('font-size-selector');
    const ttsToggle = document.getElementById('tts-toggle');
    const voiceSelector = document.getElementById('voice-selector'); // New voice selector
    const dateDisplay = document.getElementById('date-display');
    const faqContainer = document.getElementById('faq-container');
    const aiChatContainer = document.getElementById('ai-chat-container');
    const tabAiChat = document.getElementById('tab-ai-chat');
    const tabFaqs = document.getElementById('tab-faqs');
    const faqReadAnswerButtons = document.querySelectorAll('.faq-read-btn'); 
    const faqReadQuestionButtons = document.querySelectorAll('.faq-read-question-btn'); 

    const chatService = new ChatService();
    let currentOptions = [];
    let isTyping = false;
    let synth = window.speechSynthesis;
    let currentUtterance = null;
    let isReadingFaq = false;
    let isTtsEnabled = localStorage.getItem('ttsEnabled') === 'true'; // Initialize from localStorage
    let selectedVoiceURI = localStorage.getItem('selectedVoiceURI') || ''; // Store selected voice URI

    // Helper functions
    function sanitizeMessage(message) {
      // Create a temporary div to parse HTML and get plain text
      const div = document.createElement('div');
      div.innerHTML = message;
      return div.textContent || div.innerText || '';
    }
    
    // Function to control visibility of FAQ read buttons based on TTS setting
    function updateFaqReadButtonsVisibility() {
      if (isTtsEnabled) {
        document.body.classList.remove('tts-disabled'); // Assuming 'tts-disabled' hides buttons via CSS
      } else {
        document.body.classList.add('tts-disabled');
      }
    }

    function saveSettings() {
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
      localStorage.setItem('fontSize', fontSizeSelector.value);
      localStorage.setItem('ttsEnabled', ttsToggle.checked);
      localStorage.setItem('selectedVoiceURI', voiceSelector.value); // Save selected voice
      updateFaqReadButtonsVisibility(); // Update visibility immediately after saving
    }

    function loadSettings() {
      const darkMode = localStorage.getItem('darkMode') === 'true';
      const fontSize = localStorage.getItem('fontSize') || 'normal';
      isTtsEnabled = localStorage.getItem('ttsEnabled') === 'true'; // Load TTS setting
      selectedVoiceURI = localStorage.getItem('selectedVoiceURI') || '';

      if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
      }
      if (fontSize) {
        document.body.style.fontSize = fontSize === 'normal' ? '1rem' : (fontSize === 'large' ? '1.15rem' : '1.3rem');
        fontSizeSelector.value = fontSize;
      }
      ttsToggle.checked = isTtsEnabled; // Set TTS toggle state
      updateFaqReadButtonsVisibility(); // Set initial visibility of FAQ read buttons
    }

    // Populate voice selector
    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }

        const voices = speechSynthesis.getVoices();
        voiceSelector.innerHTML = ''; // Clear existing options

        let defaultVoiceFound = false;
        let preferredVoice = null;

        // Try to find a natural-sounding default voice or the previously selected one
        voices.forEach(voice => {
            if (voice.lang.startsWith('en-US')) {
                // Prioritize Google US English or Microsoft Zira/David for a natural sound
                if (voice.name.includes('Google US English') || voice.name.includes('Microsoft Zira') || voice.name.includes('Microsoft David')) {
                    preferredVoice = voice;
                }
                // If a previously selected voice exists and matches, use it
                if (voice.voiceURI === selectedVoiceURI) {
                    preferredVoice = voice;
                    defaultVoiceFound = true;
                }
            }
        });

        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.voiceURI;
            if (preferredVoice && voice.voiceURI === preferredVoice.voiceURI) {
                option.selected = true;
            } else if (!preferredVoice && voice.default) { // Fallback to default if no preferred found
                option.selected = true;
                selectedVoiceURI = voice.voiceURI;
            }
            voiceSelector.appendChild(option);
        });

        // If no preferred voice was found and no default was selected, just take the first English voice
        if (!preferredVoice && !defaultVoiceFound && voices.length > 0) {
            const firstEnglishVoice = voices.find(voice => voice.lang.startsWith('en'));
            if (firstEnglishVoice) {
                voiceSelector.value = firstEnglishVoice.voiceURI;
                selectedVoiceURI = firstEnglishVoice.voiceURI;
            } else { // Fallback to first available voice if no English voice
                voiceSelector.value = voices[0].voiceURI;
                selectedVoiceURI = voices[0].voiceURI;
            }
        }
        
        // Ensure the selectedVoiceURI is updated after population
        selectedVoiceURI = voiceSelector.value;
    }

    // Attach voicechange event listener
    synth.onvoiceschanged = populateVoiceList;

    // Generic function to update a single FAQ read button's state
    function updateFaqButtonState(button, isReading) {
      button.textContent = isReading ? 'Stop Reading' : 'Read';
      button.classList.toggle('stop', isReading);
      
      // Disable all other FAQ read buttons (both question and answer) if one is reading
      const allFaqButtons = [...faqReadAnswerButtons, ...faqReadQuestionButtons];
      allFaqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.disabled = isReading;
          otherButton.style.opacity = isReading ? '0.5' : '1';
          otherButton.style.cursor = isReading ? 'not-allowed' : 'pointer';
        }
      });
    }

    function toggleSpeech(text, button, callback) { 
      if (!isTtsEnabled) return; // Only speak if TTS is enabled
      
      stopSpeech(); // Stop any ongoing speech before starting new one
      stopReadingButton.style.display = 'inline-block'; // Show stop reading button

      if (button) {
          updateFaqButtonState(button, true); // Update the specific FAQ button state
      }

      currentUtterance = new SpeechSynthesisUtterance(sanitizeMessage(text));
      currentUtterance.lang = 'en-US'; // Default language, voice will override if specified
      
      // Set the selected voice
      const voices = synth.getVoices();
      const selectedVoice = voices.find(voice => voice.voiceURI === selectedVoiceURI);
      if (selectedVoice) {
          currentUtterance.voice = selectedVoice;
      }

      currentUtterance.onend = () => {
        stopSpeech(); // Call stopSpeech when utterance ends
        if (callback) callback();
      };
      currentUtterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        stopSpeech(); // Call stopSpeech on error
      };
      synth.speak(currentUtterance);
    }

    function stopSpeech() {
      if (synth.speaking) {
        synth.cancel(); // Cancel current speech
      }
      currentUtterance = null;
      stopReadingButton.style.display = 'none'; // Hide stop reading button
      // Reset all FAQ read buttons to 'Read' state
      const allFaqButtons = [...faqReadAnswerButtons, ...faqReadQuestionButtons];
      allFaqButtons.forEach(button => {
        updateFaqButtonState(button, false);
      });
      isReadingFaq = false; // Reset FAQ reading state
    }

    function addMessage(sender, text, animate = true) {
      const bubble = document.createElement('div');
      bubble.classList.add('chat-bubble', sender === 'user' ? 'user-bubble' : 'bot-bubble', 'opacity-0');
      
      const content = document.createElement('div');
      content.classList.add('message-text-content');
      content.innerHTML = text; 

      const timestamp = document.createElement('div');
      timestamp.classList.add('timestamp');
      timestamp.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

      bubble.appendChild(content);

      // Only add speaker icon if TTS is enabled for bot messages
      if (sender === 'bot' && isTtsEnabled) {
          const speakerIcon = document.createElement('i');
          speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
          speakerIcon.setAttribute('aria-label', 'Read aloud');
          bubble.appendChild(speakerIcon);

          speakerIcon.addEventListener('click', () => {
              if (synth.speaking && currentUtterance && currentUtterance.text === sanitizeMessage(text)) {
                  stopSpeech();
              } else {
                  toggleSpeech(text, null); 
              }
          });
      }
      
      bubble.appendChild(timestamp);
      messageContainer.appendChild(bubble);

      if (animate) {
        void bubble.offsetWidth;
        bubble.classList.remove('opacity-0');
        bubble.style.transform = 'translateY(0)';
      }

      chatWindow.scrollTop = chatWindow.scrollHeight;
      return bubble;
    }

    function addTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.classList.add('typing-indicator', 'bot-bubble');
      indicator.innerHTML = '<span></span><span></span><span></span>';
      messageContainer.appendChild(indicator);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      return indicator;
    }

    async function handleOptionClick(optionKey) {
      if (isTyping) return;
      isTyping = true;
      stopSpeech(); // Stop speech when user clicks an option

      const { question } = chatService.qaDatabase[optionKey];
      addMessage('user', question);

      clearOptions();
      const typingIndicator = addTypingIndicator();

      const response = await chatService.getResponse(optionKey, true);
      
      isTyping = false;
      messageContainer.removeChild(typingIndicator);

      addMessage('bot', response.answer);
      // Automatically speak the response if the setting is enabled
      if (isTtsEnabled && response.answer) {
        toggleSpeech(response.answer, null);
      }
      createOptions(response.options);
    }
    
    function createOptions(options) {
      optionsWrapper.innerHTML = '';
      currentOptions = options;
      
      if (options.length === 0) {
        const homeButton = document.createElement('button');
        homeButton.classList.add('option-button');
        homeButton.textContent = 'Home';
        homeButton.addEventListener('click', () => {
          handleOptionClick('start');
        });
        optionsWrapper.appendChild(homeButton);
      } else {
        options.forEach((optionKey, index) => {
          const button = document.createElement('button');
          button.classList.add('option-button');
          const option = chatService.qaDatabase[optionKey];
          button.textContent = option.question;
          button.style.animationDelay = `${index * 0.1}s`;
          button.addEventListener('click', () => handleOptionClick(optionKey));
          optionsWrapper.appendChild(button);
        });
      }
      
      updateScrollButtons();
    }
    
    function clearOptions() {
      optionsWrapper.innerHTML = '';
      scrollLeftBtn.classList.add('disabled');
      scrollRightBtn.classList.add('disabled');
    }

    function clearChat() {
      messageContainer.innerHTML = '';
      const welcomeMessage = chatService.qaDatabase['start'].answer;
      addMessage('bot', welcomeMessage, false);
      // Automatically speak the welcome message if the setting is enabled
      if (isTtsEnabled) {
          toggleSpeech(welcomeMessage, null);
      }
      createOptions(chatService.getFollowUpOptions('start'));
      localStorage.removeItem('chatHistory');
      setDateDisplay();
    }
    
    function setDateDisplay() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateDisplay.textContent = today.toLocaleDateString('en-US', options);
    }

    function toggleChatAndFaqs(activeTabId) {
      if (activeTabId === 'ai-chat-container') {
        aiChatContainer.style.display = 'flex';
        faqContainer.style.display = 'none'; 
        tabAiChat.classList.add('active');
        tabFaqs.classList.remove('active');
        stopSpeech(); // Stop speech when switching tabs
        if (isReadingFaq) {
            const activeFaqButton = document.querySelector('.faq-read-btn.stop');
            if (activeFaqButton) {
                updateFaqButtonState(activeFaqButton, false);
            }
            isReadingFaq = false;
        }
      } else {
        aiChatContainer.style.display = 'none'; 
        faqContainer.style.display = 'flex';
        tabAiChat.classList.remove('active');
        tabFaqs.classList.add('active');
        stopSpeech(); // Stop speech when switching tabs
      }
    }

    // Event Listeners
    settingsButton.addEventListener('click', () => {
      settingsPanel.classList.remove('hidden');
      populateVoiceList(); // Populate voices when settings panel opens
    });

    closeSettingsPanel.addEventListener('click', () => {
      settingsPanel.classList.add('hidden');
    });

    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode', darkModeToggle.checked);
      if (darkModeToggle.checked) {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-dark)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-dark)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';

        document.querySelectorAll('.timestamp').forEach(el => el.style.color = 'var(--timestamp-color-dark)');
        document.querySelectorAll('.faq-content-container').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li strong').forEach(el => el.style.color = '#FFFFFF');
        document.querySelectorAll('.faq-summary').forEach(el => el.style.color = 'var(--text-color)'); 
      } else {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-light)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-light)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-light)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-light)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';

        document.querySelectorAll('.timestamp').forEach(el => el.style.color = 'var(--timestamp-color-light)');
        document.querySelectorAll('.faq-content-container').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li strong').forEach(el => el.style.color = '#333333');
        document.querySelectorAll('.faq-summary').forEach(el => el.style.color = 'var(--text-color)'); 
      }
      saveSettings();
    });

    fontSizeSelector.addEventListener('change', () => {
      document.body.style.fontSize = fontSizeSelector.value === 'normal' ? '1rem' : (fontSizeSelector.value === 'large' ? '1.15rem' : '1.3rem');
      saveSettings();
    });
    
    ttsToggle.addEventListener('change', () => {
      isTtsEnabled = ttsToggle.checked;
      saveSettings(); // Save the new TTS setting
      // Update speaker icons on existing messages
      document.querySelectorAll('.bot-bubble').forEach(bubble => {
        let speakerIcon = bubble.querySelector('.speaker-icon');
        if (isTtsEnabled) {
          if (!speakerIcon) { // If TTS is enabled and icon doesn't exist, create it
            speakerIcon = document.createElement('i');
            speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
            speakerIcon.setAttribute('aria-label', 'Read aloud');
            bubble.appendChild(speakerIcon);
            speakerIcon.addEventListener('click', () => toggleSpeech(bubble.querySelector('.message-text-content').innerHTML, null));
          }
        } else {
          if (speakerIcon) { // If TTS is disabled and icon exists, remove it
            speakerIcon.remove();
          }
        }
      });
      if (!isTtsEnabled) { // If TTS is turned off, stop any ongoing speech
        stopSpeech();
        if (isReadingFaq) { // Also reset FAQ reading state if it was active
            updateFaqButtonState(document.querySelector('.faq-read-btn.stop'), false);
            isReadingFaq = false;
        }
      }
    });

    voiceSelector.addEventListener('change', () => {
        selectedVoiceURI = voiceSelector.value;
        saveSettings();
    });

    // Option scrolling logic
    function updateScrollButtons() {
      scrollLeftBtn.classList.toggle('disabled', optionsWrapper.scrollLeft === 0);
      scrollRightBtn.classList.toggle('disabled', optionsWrapper.scrollLeft + optionsWrapper.clientWidth >= optionsWrapper.scrollWidth);
    }
    
    optionsWrapper.addEventListener('scroll', updateScrollButtons);
    
    scrollLeftBtn.addEventListener('click', () => {
      optionsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
      optionsWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
    
    window.addEventListener('resize', updateScrollButtons);
    
    // FAQ Read Answer buttons
    faqReadAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqSection = this.closest('.faq-item');
            const faqContent = faqSection.querySelector('.faq-content-container').innerHTML;
            
            if (isReadingFaq && this.classList.contains('stop')) {
                stopSpeech();
                isReadingFaq = false;
            } else if (isTtsEnabled) { // Only allow reading if TTS is enabled
                stopSpeech();
                isReadingFaq = true;
                toggleSpeech(faqContent, this, () => {
                    isReadingFaq = false;
                });
            }
        });
    });

    // FAQ Read Question buttons
    faqReadQuestionButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the details element from toggling
            const faqSummarySpan = this.previousElementSibling; 
            const questionText = faqSummarySpan ? faqSummarySpan.textContent : '';
            
            if (isReadingFaq && this.classList.contains('stop')) {
                stopSpeech();
                isReadingFaq = false;
            } else if (isTtsEnabled) { // Only allow reading if TTS is enabled
                stopSpeech();
                isReadingFaq = true;
                toggleSpeech(questionText, this, () => {
                    isReadingFaq = false;
                });
            }
        });
    });

    clearChatButton.addEventListener('click', clearChat);
    stopReadingButton.addEventListener('click', stopSpeech);
    tabAiChat.addEventListener('click', () => toggleChatAndFaqs('ai-chat-container'));
    tabFaqs.addEventListener('click', () => toggleChatAndFaqs('faq-container'));

    // Initialization
    loadSettings();
    setDateDisplay();
    clearChat();
    
    // Initial color application for greeting text based on loaded settings
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-dark)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-dark)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';
    } else {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-light)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-light)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-light)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-light)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';
    }
    // Initial color application for timestamps
    document.querySelectorAll('.timestamp').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--timestamp-color-dark)';
        } else {
            el.style.color = 'var(--timestamp-color-light)';
        }
    });
    // Initial color application for FAQ content
    document.querySelectorAll('.faq-content-container').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--faq-section-text)';
        } else {
            el.style.color = 'var(--faq-section-text)';
        }
    });
    document.querySelectorAll('.faq-content-container li').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--faq-section-text)';
        } else {
            el.style.color = 'var(--faq-section-text)';
        }
    });
    document.querySelectorAll('.faq-content-container li strong').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = '#FFFFFF';
        } else {
            el.style.color = '#333333';
        }
    });
    // Initial color application for FAQ questions
    document.querySelectorAll('.faq-summary').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--text-color)';
        } else {
            el.style.color = 'var(--text-color)';
        }
    });

    // Initial population of voice list
    populateVoiceList();
  